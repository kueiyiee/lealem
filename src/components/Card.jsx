export default function Card({ children, className = '' }) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/40 ${className}`}
    >
      {children}
    </article>
  )
}
