import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground({ theme = 'dark' }) {
  const [isReady, setIsReady] = useState(false)
  const isLight = theme === 'light'

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setIsReady(true))
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      pauseOnBlur: true,
      particles: {
        color: { value: isLight ? ['#64748b', '#60a5fa'] : ['#ffffff', '#dbeafe'] },
        links: {
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: true,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1200 },
          value: 55,
        },
        opacity: { value: isLight ? 0.5 : 0.6 },
        shape: { type: 'circle' },
        size: { value: { min: 2, max: 4 } },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: false, mode: 'repulse' },
          resize: { enable: true },
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 1,
            factor: 2,
            speed: 0.45,
            maxSpeed: 0.8,
          },
        },
      },
      background: {
        color: 'transparent',
      },
    }),
    [isLight],
  )

  if (!isReady) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles id="tsparticles" options={options} className="h-full w-full" />
    </div>
  )
}
