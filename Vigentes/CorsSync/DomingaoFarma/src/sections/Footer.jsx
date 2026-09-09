import { AtSign, Mail, MessageCircle } from 'lucide-react'
import { Brand } from '../components/Brand'
import { contact, navigation } from '../data/siteData'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Saúde, cuidado e economia todos os dias.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <strong>Navegue</strong>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-contact">
          <strong>Fale com a gente</strong>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> {contact.whatsappDisplay}</a>
          <a href={'mailto:' + contact.email}><Mail size={17} aria-hidden="true" /> E-mail</a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer"><AtSign size={17} aria-hidden="true" /> Instagram</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Domingão Farma.</span>
        <span>Medicamentos podem oferecer riscos. Procure orientação profissional.</span>
      </div>
    </footer>
  )
}
