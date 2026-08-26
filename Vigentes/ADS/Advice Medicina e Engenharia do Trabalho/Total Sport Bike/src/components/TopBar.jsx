import { Phone, Clock } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-primary-dark text-white/80 text-xs h-[var(--topbar-h)]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Phone size={12} /> {siteConfig.contato.telefone}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> {siteConfig.contato.horario}
          </span>
        </div>
        <div className="flex items-center gap-4">
          {siteConfig.social.instagram && (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener"
              className="hover:text-accent-light transition"
            >
              Instagram
            </a>
          )}
          {siteConfig.social.facebook && (
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener"
              className="hover:text-accent-light transition"
            >
              Facebook
            </a>
          )}
          {siteConfig.social.youtube && (
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener"
              className="hover:text-accent-light transition"
            >
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
