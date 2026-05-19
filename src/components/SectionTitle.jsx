import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-slate-400">{subtitle}</p> : null}
    </motion.div>
  )
}
