import { useState, useEffect } from 'react';
import { Heart, Menu, X, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Analyzer', href: '/analyze' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-sky-100/40 py-3'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md shadow-sky-300/40 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            MediAI
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-sky-900/70 hover:text-sky-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-sky-900/70 hover:text-sky-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            )
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-sky-700 hover:text-sky-900 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl shadow-md shadow-sky-300/40 hover:shadow-sky-400/50 hover:scale-105 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-sky-700 hover:bg-sky-100/60 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-t border-sky-200/40"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-sky-900/70 hover:text-sky-600 py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-sky-900/70 hover:text-sky-600 py-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-sky-200/40">
                <Link to="/login" className="text-sm font-medium text-sky-700 py-2 text-center">Sign In</Link>
                <Link to="/register" className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
