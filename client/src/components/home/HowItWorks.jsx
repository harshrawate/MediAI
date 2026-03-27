import { motion } from 'framer-motion';
import { Camera, Cpu, BarChart3, MessageSquareText } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    step: '01',
    title: 'Snap or Search',
    description: 'Upload a photo of any product label or simply type in the name of the item you want to analyze.',
    color: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-300/40',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI Extraction',
    description: 'Our vision model extracts every ingredient and nutritional fact, even from complex or blurry labels.',
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-300/40',
  },
  {
    icon: BarChart3,
    step: '03',
    title: 'Health Evaluation',
    description: 'The AI evaluates health impacts, flags harmful additives, and calculates an objective health score.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-300/40',
  },
  {
    icon: MessageSquareText,
    step: '04',
    title: 'Chat & Refine',
    description: 'Ask follow-up questions to our AI or get personalized recommendations for better alternatives.',
    color: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-300/40',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 to-white/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-sky-600 bg-sky-100/80 rounded-full border border-sky-200/70">
            Simple Process
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-sky-950 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Analyze in{' '}
            <span className="text-gradient">4 easy steps</span>
          </h2>
          <p className="text-sky-800/60 text-lg leading-relaxed">
            From scanning to personalized advice — we've streamlined the way you learn about your products.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-sky-200 via-blue-300 to-sky-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${step.glow} mb-6 z-10`}>
                    <Icon className="w-7 h-7 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-sky-900 text-[11px] font-bold flex items-center justify-center shadow border border-sky-100">
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-sky-950 mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-sky-800/55 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
