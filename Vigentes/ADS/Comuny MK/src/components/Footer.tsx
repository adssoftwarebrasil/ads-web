import { Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

const socials = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-comuny-dark border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-comuny-purple to-transparent"></div>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gradient mb-2 animate-pulse-slow">COMUNY</h3>
              <p className="text-comuny-green font-bold text-sm mb-2">SUA ÚLTIMA AGÊNCIA!</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Muito mais que uma agência de marketing, somos parceiros estratégicos do crescimento do seu negócio!
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-white/70 hover:text-comuny-green transition-colors duration-300 hover:translate-x-1 inline-block transform"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@comunymk.com.br"
                  className="text-white/70 hover:text-comuny-green transition-colors duration-300 flex items-center group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  contato@comunymk.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5500000000000"
                  className="text-white/70 hover:text-comuny-green transition-colors duration-300 flex items-center group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Entre em contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-comuny-green flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-360 group"
                  style={{ transition: '0.5s' }}
                >
                  <s.Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <button className="mt-6 px-6 py-2.5 bg-comuny-purple hover:bg-comuny-green text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-comuny-green/50 w-full">
              COMEÇAR AGORA
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">© 2026 COMUNY. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
