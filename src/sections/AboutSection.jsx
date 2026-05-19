import { motion } from 'framer-motion'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="About"
        title="Engineering Mindset, Product Focus"
        subtitle="I approach software problems with system-level thinking and practical execution."
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <p className="leading-relaxed text-slate-300">
            I enjoy turning complex ideas into maintainable systems. My work balances backend reliability,
            frontend usability, and development workflows that scale. From architecture decisions to small UI
            details, I prioritize clarity, performance, and long-term maintainability.
          </p>
        </Card>
      </motion.div>
    </section>
  )
}
