import { motion } from 'framer-motion'

const profileImage = 'https://i.postimg.cc/9f76PK2x/5960607213585895064.jpg'

export default function AdvancedProfileImage({ src = profileImage, alt = 'Professional profile portrait' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[340px]"
    >
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="relative flex justify-center"
      >
        <div
          className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-[90px] md:h-[360px] md:w-[360px]"
          aria-hidden="true"
        />

        <div className="absolute h-[360px] w-[360px] rounded-full border border-cyan-400/20 md:h-[400px] md:w-[400px]">
          <div className="absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0" />
        </div>

        <div className="rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[2px] shadow-[0_25px_60px_-35px_rgba(0,0,0,0.9)]">
          <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border border-white/10 bg-[#07111f]/85 backdrop-blur-xl md:h-[360px] md:w-[360px]">
            <motion.img
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-[center_10%]"
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              whileHover={{ scale: 1.035 }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#07111f]/35 opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-violet-500/8" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-18px_40px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
