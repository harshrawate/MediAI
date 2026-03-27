import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Diabetes Patient',
    avatar: 'SM',
    avatarGradient: 'from-sky-400 to-blue-500',
    stars: 5,
    text: 'MediAI transformed how I manage my diabetes. The real-time glucose monitoring and personalized diet suggestions have helped me keep my levels stable for the first time in years.',
    delay: 0,
  },
  {
    name: 'Dr. James Okafor',
    role: 'Cardiologist',
    avatar: 'JO',
    avatarGradient: 'from-violet-400 to-purple-500',
    stars: 5,
    text: 'As a physician, I was skeptical. But MediAI\'s AI diagnosis tool has become an invaluable second opinion for complex cases. The accuracy is remarkable.',
    delay: 0.1,
  },
  {
    name: 'Priya Sharma',
    role: 'Mother of 2',
    avatar: 'PS',
    avatarGradient: 'from-rose-400 to-pink-500',
    stars: 5,
    text: 'With two young kids, I need healthcare that\'s fast and reliable. The 5-minute consultation wait time is a game-changer. We\'ve already avoided two unnecessary ER trips.',
    delay: 0.2,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #cce8f8 40%, #d4f0ff 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-indigo-200/25 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-sky-600 bg-sky-100/80 rounded-full border border-sky-200/70">
            Patient Stories
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-sky-950 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Loved by{' '}
            <span className="text-gradient">thousands</span>
          </h2>
          <p className="text-sky-800/60 text-lg leading-relaxed">
            Real stories from real patients and healthcare professionals who use MediAI every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: t.delay, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-3xl bg-white/75 backdrop-blur-md border border-sky-200/55 shadow-md shadow-sky-100/50 hover:shadow-xl hover:shadow-sky-200/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sky-900/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sky-950 text-sm">{t.name}</div>
                  <div className="text-sky-700/55 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
