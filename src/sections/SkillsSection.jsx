import { motion } from 'framer-motion'
import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiCplusplus, SiDjango, SiMysql, SiPostgresql } from 'react-icons/si'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'

const categories = [
  {
    title: 'Programming',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
      { name: 'C++', icon: SiCplusplus },
    ],
  },
  {
    title: 'Web',
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Django', icon: SiDjango },
      { name: 'Node.js', icon: FaNodeJs },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-10 lg:px-20">
      <SectionTitle
        eyebrow="Skills"
        title="Core Technical Stack"
        subtitle="A practical toolkit for building full-stack products with strong engineering fundamentals."
      />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="h-full">
              <h3 className="mb-4 text-lg font-semibold text-slate-100">{category.title}</h3>
              <ul className="grid grid-cols-2 gap-3">
                {category.items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-300 transition-all hover:border-cyan-300/40 hover:bg-cyan-400/10"
                  >
                    <Icon className="text-base text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
                    <span>{name}</span>
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
