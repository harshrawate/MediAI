import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import UploadZone from '../components/analyzer/UploadZone';
import ResultCard from '../components/analyzer/ResultCard';
import ChatPanel from '../components/analyzer/ChatPanel';

export default function Analyzer() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to analyze image');
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again with a clearer image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-sky-gradient overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb / Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Upload & Results */}
          <div className="lg:col-span-7 space-y-8">
            <section className="p-8 rounded-[40px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl shadow-sky-200/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold text-sky-950" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Product Analyzer
                  </h1>
                  <p className="text-sm text-sky-700/60 font-medium">Scan labels for health insights</p>
                </div>
              </div>

              <UploadZone onFileSelect={setFile} disabled={loading} />

              <div className="mt-8">
                <button
                  onClick={handleAnalyze}
                  disabled={!file || loading}
                  className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2
                    ${!file || loading 
                      ? 'bg-sky-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-[1.02] active:scale-[0.98] hover:shadow-sky-400/40'}
                  `}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing Ingredients...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Start AI Analysis
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-center gap-3 text-rose-600 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Results Display */}
            <AnimatePresence>
              {result && <ResultCard data={result} />}
            </AnimatePresence>
          </div>

          {/* Right Column: Chatbot */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
            <ChatPanel product={result} disabled={!result || loading} />
            <p className="mt-4 px-4 text-[10px] text-center text-sky-800/40 uppercase tracking-widest font-bold">
              AI recommendations are not medical advice
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
