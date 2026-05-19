import { motion } from 'framer-motion'

const profileImage = 'https://i.postimg.cc/9f76PK2x/5960607213585895064.jpg'

export default function HeroImage({ src = profileImage, alt = 'Professional profile portrait' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[180px] md:max-w-[240px] lg:max-w-[288px]"
    >
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="relative flex items-center justify-center"
      >
        <div
          className="absolute h-[160px] w-[160px] rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-[90px] md:h-[220px] md:w-[220px] lg:h-[260px] lg:w-[260px]"
          aria-hidden="true"
        />

        <div className="rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[2px] shadow-[0_25px_60px_-35px_rgba(0,0,0,0.9)]">
          <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full border border-white/10 bg-[#07111f]/85 backdrop-blur-xl md:h-[240px] md:w-[240px] lg:h-[288px] lg:w-[288px]">
            <motion.img
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-[center_12%]"
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#07111f]/30 opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-violet-500/8" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}