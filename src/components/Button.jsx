export default function Button({ children, href = '#', variant = 'primary' }) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

  const variants = {
    primary:
      'bg-cyan-400/90 text-slate-950 hover:bg-cyan-300 shadow-[0_10px_35px_-10px_rgba(0,212,255,0.65)] focus-visible:ring-cyan-300',
    secondary:
      'border border-white/20 bg-white/5 text-slate-100 hover:bg-white/10 backdrop-blur-md focus-visible:ring-blue-300',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  )
}
