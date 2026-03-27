import { motion } from 'framer-motion';

const stats = [
  { value: '10,000+', label: 'Products Analyzed', emoji: '🔍' },
  { value: '98.4%', label: 'Analysis Accuracy', emoji: '🧬' },
  { value: '500+', label: 'Additives Identified', emoji: '⚠️' },
  { value: '24/7', label: 'AI Support', emoji: '💬' },
];

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div
                className="text-4xl font-extrabold text-white mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-sky-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
