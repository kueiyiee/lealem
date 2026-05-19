import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMoon, FiMoreVertical, FiSun } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme = 'dark', onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const isLight = theme === 'light'

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleItemClick = () => {
    setOpen(false)
  }

  const toggleButtonClass = `inline-flex h-9 items-center gap-2 rounded-full border px-1.5 pr-3 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
    isLight
      ? 'border-slate-300 bg-white/90 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.45)]'
      : 'border-white/15 bg-white/5'
  }`

  const sliderClass = `flex h-7 w-7 items-center justify-center rounded-full text-xs shadow-sm transition-transform duration-300 ${
    isLight ? 'translate-x-[33px] bg-slate-900 text-amber-300' : 'translate-x-0 bg-slate-100 text-slate-800'
  }`

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-300 ${
        isLight ? 'border-slate-300/80 bg-white/80' : 'border-white/10 bg-[#0a0f1c]/75'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8 lg:px-10">
        <a href="#home" className={`text-sm font-semibold tracking-[0.22em] ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
          LEALEM
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <ul className={`items-center gap-6 text-sm lg:gap-8 ${isLight ? 'text-slate-700' : 'text-slate-300'} md:flex`}>
            {links.slice(1).map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={`transition-colors duration-300 ${isLight ? 'hover:text-blue-600' : 'hover:text-cyan-300'}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            className={toggleButtonClass}
          >
            <span className={sliderClass}>{isLight ? <FiMoon size={14} /> : <FiSun size={14} />}</span>
            <span className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
              {isLight ? 'Dark' : 'Light'}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            className={toggleButtonClass}
          >
            <span className={sliderClass}>{isLight ? <FiMoon size={14} /> : <FiSun size={14} />}</span>
            <span className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
              {isLight ? 'Dark' : 'Light'}
            </span>
          </button>

          <div ref={menuRef} className="relative">
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((current) => !current)}
              className={`inline-flex items-center justify-center rounded-full border p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                isLight
                  ? 'border-slate-300 bg-white/90 text-slate-900 hover:bg-slate-100'
                  : 'border-white/10 bg-white/5 text-slate-100 hover:bg-white/10'
              }`}
            >
              <FiMoreVertical size={22} />
            </button>

            <AnimatePresence>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border backdrop-blur-md ${
                    isLight
                      ? 'border-slate-300 bg-white shadow-[0_20px_50px_-25px_rgba(15,23,42,0.35)]'
                      : 'border-white/10 bg-black/40 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.85)]'
                  }`}
                >
                  <ul className="flex flex-col py-2">
                    {links.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          onClick={handleItemClick}
                          className={`block px-4 py-3 text-sm transition-colors duration-300 ${
                            isLight
                              ? 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                              : 'text-slate-200 hover:bg-white/10 hover:text-cyan-300'
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  )
}
