import { motion } from 'framer-motion'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'

const projects = [
  {
    title: 'Dormitory Management System',
    description:
      'A centralized platform to handle student room allocation, occupancy records, and housing administration workflows.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    features: ['Room assignment engine', 'Role-based dashboard', 'Automated status tracking'],
  },
  {
    title: 'Dictionary Application',
    description:
      'A lightweight word search app with definitions, examples, and pronunciation support for quick language lookup.',
    tech: ['React', 'REST API', 'CSS'],
    features: ['Real-time search', 'Phonetic guidance', 'Responsive mobile UI'],
  },
  {
    title: 'Portfolio Analytics Module',
    description:
      'A dashboard concept for measuring user behavior and project engagement metrics across portfolio sections.',
    tech: ['React', 'Charting', 'Tailwind CSS'],
    features: ['Section heat insights', 'Engagement trend cards', 'Filterable timeline view'],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-10 lg:px-20">
      <SectionTitle
        eyebrow="Projects"
        title="Selected Work"
        subtitle="Solutions designed around usability, maintainability, and production constraints."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="group h-full hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

              <div className="mt-5">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-blue-300/80">Tech Stack</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1 text-xs text-blue-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
