import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceList = [
  'Manutenção Preventiva',
  'Manutenção Corretiva',
  'Diagnóstico Eletrônico',
  'Troca de Óleo',
  'Suspensão e Freios',
  'Peças Automotivas',
];

export default function Footer() {
  return (
    <footer className="bg-speedcar-black pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/speedcar%2Fimg%2Flogo-sem-fundo.webp"
              alt="SpeedCar"
              className="h-10 mb-5"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Centro automotivo de confiança em Sinop - MT. Manutenção completa para veículos leves e
              camionetas.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/speedcarsinop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-speedcar-red flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="lucide lucide-instagram w-4 h-4 text-white/60 hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/SpeedCarCentroAutomotivo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-speedcar-red flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="lucide lucide-facebook w-4 h-4 text-white/60 hover:text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-3">
              {serviceList.map((service) => (
                <li key={service}>
                  <span className="text-white/40 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=SpeedCar+Centro+Automotivo+Sinop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-white/40 hover:text-white/70 transition-colors"
                >
                  <MapPin className="lucide lucide-map-pin w-4 h-4 text-speedcar-red flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    R. Colonizador Ênio Pipino, 5485<br />St. Industrial Norte, Sinop - MT
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="http://wa.me/5566984369336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors"
                >
                  <Phone className="lucide lucide-phone w-4 h-4 text-speedcar-red flex-shrink-0" />
                  <span className="text-sm">(66) 98436-9336</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:speedcarsinop@gmail.com"
                  className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors"
                >
                  <Mail className="lucide lucide-mail w-4 h-4 text-speedcar-red flex-shrink-0" />
                  <span className="text-sm">speedcarsinop@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/40">
                  <Clock className="lucide lucide-clock w-4 h-4 text-speedcar-red flex-shrink-0" />
                  <span className="text-sm">Seg-Sex: 7:15 - 18:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 SpeedCar Centro Automotivo. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Sinop - MT | CNPJ na empresa</p>
        </div>
      </div>
    </footer>
  );
}
