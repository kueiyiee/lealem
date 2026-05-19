import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const timeline = [
  {
    date: '2022',
    title: 'Started Computer Science Journey',
    description: 'Built foundational understanding in algorithms, data structures, and software development principles.',
  },
  {
    date: '2024',
    title: 'Dormitory Management System',
    description: 'Led implementation of a system for housing operations with role-based access and process automation.',
  },
  {
    date: '2025',
    title: 'Dictionary Application',
    description: 'Created a clean, responsive dictionary app focused on speed, clarity, and user-friendly interaction.',
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Experience"
        title="Education & Project Timeline"
        subtitle="A concise view of major milestones and practical software engineering work."
      />

      <div className="relative ml-2 border-l border-white/15 pl-8 md:ml-4">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative mb-10"
          >
            <span className="absolute -left-[2.25rem] top-2 h-3.5 w-3.5 rounded-full border border-cyan-200/50 bg-cyan-300/80" />
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.date}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-2 text-slate-400">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
