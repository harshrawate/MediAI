import { Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Integrations'],
  Company: ['About Us', 'Blog', 'Careers', 'Press'],
  Support: ['Help Center', 'Contact', 'Status', 'Privacy Policy'],
  Legal: ['Terms of Service', 'Cookie Policy', 'HIPAA', 'Accessibility'],
};

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-sky-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                MediAI
              </span>
            </div>
            <p className="text-sky-400/70 text-sm leading-relaxed max-w-xs">
              AI-powered healthcare that puts you first. Smarter diagnostics, faster care, better outcomes.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-sky-300/60 hover:text-sky-100 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-sky-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sky-500/60 text-sm">
            © 2025 MediAI. All rights reserved.
          </p>
          <p className="text-sky-500/50 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for better health
          </p>
        </div>
      </div>
    </footer>
  );
}
