import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import TimelineSection from './sections/TimelineSection'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('theme-light', theme === 'light')
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const isLight = theme === 'light'

  return (
    <div
      className={`theme-shell relative isolate min-h-screen overflow-x-hidden transition-colors duration-500 ${
        isLight ? 'theme-light bg-slate-50 text-slate-900' : 'theme-dark bg-brand-bg text-slate-200'
      }`}
    >
      <ParticleBackground theme={theme} />

      <div className="pointer-events-none fixed inset-0 z-10">
        <div className={`absolute left-[8%] top-20 h-40 w-40 rounded-full blur-3xl ${isLight ? 'bg-cyan-300/25' : 'bg-cyan-400/15'}`} />
        <div className={`absolute right-[10%] top-1/3 h-52 w-52 rounded-full blur-3xl ${isLight ? 'bg-blue-300/25' : 'bg-blue-500/15'}`} />
        <div className={`absolute bottom-16 left-1/3 h-44 w-44 rounded-full blur-3xl ${isLight ? 'bg-violet-300/20' : 'bg-purple-500/15'}`} />
      </div>

      <div className="relative z-20">
        <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection theme={theme} />
        </main>
      </div>
    </div>
  )
}

export default App
