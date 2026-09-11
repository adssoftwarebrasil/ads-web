import { MapPin, Clock, Phone, Mail, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToId } from '../hooks/useReveal';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Mecânica Geral',
  'Auto Elétrica',
  'Alinhamento',
  'Balanceamento',
  'Câmbio Automático',
  'Troca de Óleo',
  'Revisões em Geral',
  'Diagnóstico Veicular',
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/logo-atualizada-sem-fundo.webp"
              alt="Saga Sorriso Centro Automotivo"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Referência em manutenção automotiva em Sorriso/MT. Qualidade, transparência e compromisso com seu
              veículo.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Saga-Sorriso-Centro-Automotivo-100072191543523"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#EF1C1A] border border-white/10 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} className="lucide lucide-facebook text-white" />
              </a>
              <a
                href="http://wa.me/5566996116371"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#EF1C1A] border border-white/10 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={16} fill="white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-white/50 hover:text-[#EF1C1A] text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#EF1C1A] rounded-full flex-shrink-0"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="lucide lucide-map-pin text-[#EF1C1A] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Perimetral Sudoeste, 3791
                  <br />
                  Jardim Primavera
                  <br />
                  Sorriso - MT, 78890-000
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={16} className="lucide lucide-clock text-[#EF1C1A] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Seg–Sex: 07:00–11:30 | 13:00–18:00
                  <br />
                  Sábado: 07:00–11:30
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="lucide lucide-phone text-[#EF1C1A] flex-shrink-0" />
                <a
                  href="tel:+5566996116371"
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  (66) 9 9611-6371
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="lucide lucide-mail text-[#EF1C1A] flex-shrink-0" />
                <a
                  href="mailto:sagasorriso@gmail.com"
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  sagasorriso@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Saga Sorriso Centro Automotivo. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Sorriso / MT — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
