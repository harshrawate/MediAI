import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-sm font-medium text-sky-100">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Start your health journey today
          </div>

          <h2
            className="text-4xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Your health deserves{' '}
            <br />
            the best care
          </h2>

          <p className="text-sky-200/80 text-lg max-w-xl mx-auto leading-relaxed">
            Join 50,000+ patients who've taken control of their health with MediAI. 
            Get started free — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 px-8 py-4 font-semibold text-sky-900 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white border border-white/30 rounded-2xl hover:bg-white/10 transition-all"
            >
              Sign In to Dashboard
            </Link>
          </div>

          <p className="text-sky-300/60 text-sm">
            ✓ Free plan available &nbsp;·&nbsp; ✓ HIPAA compliant &nbsp;·&nbsp; ✓ Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
