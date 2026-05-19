import { motion } from 'framer-motion'
import Button from '../components/Button'
import HeroImage from '../components/HeroImage'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-4 py-16 md:flex-row md:justify-between md:px-10 lg:px-20"
    >
      <div className="w-full text-center md:w-1/2 md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.35em] text-cyan-300/90"
        >
          Software Engineering Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-100 md:text-6xl"
        >
          Lealem Sisay Belete
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-4 text-base text-slate-300 md:text-lg"
        >
          Computer Science Student | Problem Solver
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-5 max-w-3xl text-slate-400"
        >
          I design and build robust digital products with a strong focus on scalable architecture, clean code,
          and thoughtful user experiences. My goal is to bridge technical depth with interface clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </motion.div>
      </div>

      <motion.div className="w-full max-w-md md:w-1/2">
        <HeroImage />
      </motion.div>
    </section>
  )
}
