import { useRef, useState } from 'react';
import { Upload, ImagePlus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UploadZone({ onFileSelect, disabled }) {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    onFileSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const clearImage = (e) => {
    e.stopPropagation();
    setPreview(null);
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div
      onClick={() => !disabled && inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={`relative cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300 overflow-hidden
        ${dragOver ? 'border-sky-500 bg-sky-50/80 scale-[1.01]' : 'border-sky-300/60 bg-white/50'}
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-sky-400 hover:bg-sky-50/60'}
      `}
      style={{ minHeight: '280px' }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        disabled={disabled}
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <AnimatePresence mode="wait">
        {preview ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full"
            style={{ minHeight: '280px' }}
          >
            <img
              src={preview}
              alt="Product preview"
              className="w-full h-full object-contain rounded-3xl"
              style={{ maxHeight: '340px' }}
            />
            {!disabled && (
              <button
                onClick={clearImage}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-sky-700 hover:text-rose-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium text-sky-700 shadow">
              Click to change image
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-4 p-10"
            style={{ minHeight: '280px' }}
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300 ${dragOver ? 'bg-sky-200 scale-110' : 'bg-sky-100'}`}>
              {dragOver ? (
                <Upload className="w-9 h-9 text-sky-500" />
              ) : (
                <ImagePlus className="w-9 h-9 text-sky-400" />
              )}
            </div>
            <div className="text-center">
              <p className="font-semibold text-sky-900 text-lg mb-1">
                {dragOver ? 'Drop to analyze!' : 'Upload a product image'}
              </p>
              <p className="text-sm text-sky-700/60">
                Drag & drop or <span className="text-sky-500 font-medium">browse files</span>
              </p>
              <p className="text-xs text-sky-600/40 mt-2">PNG, JPG, WEBP up to 10MB</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
