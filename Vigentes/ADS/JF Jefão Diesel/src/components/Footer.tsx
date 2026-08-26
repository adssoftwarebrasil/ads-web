import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { scrollToSection } from '../lib/scroll';

const WHATSAPP_URL = 'https://wa.me/556696045793?text=Vim%20pelo%20site';

const SERVICES = [
  'Bombas Injetoras',
  'Bicos Injetores',
  'Turbinas',
  'Reprogramação (Remap)',
  'Troca de Óleo',
  'Diagnóstico Eletrônico',
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/logo-sem-fundo.webp"
              alt="JF Diesel"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Especialistas em mecânica diesel com mais de 21 anos de experiência. Qualidade, confiança e transparência em cada serviço.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[rgb(255,198,45)] hover:border-[rgb(255,198,45)]/30 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon width={18} height={18} />
              </a>
              <a
                href="http://instagram.com/jefaodiesel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[rgb(255,198,45)] hover:border-[rgb(255,198,45)]/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    onClick={(e) => { e.preventDefault(); scrollToSection('servicos'); }}
                    className="text-white/40 hover:text-[rgb(255,198,45)] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[rgb(255,198,45)]/50"></span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone width={16} height={16} className="text-[rgb(255,198,45)] mt-0.5 flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[rgb(255,198,45)] text-sm transition-colors">
                  +55 (66) 9 9604-5793
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail width={16} height={16} className="text-[rgb(255,198,45)] mt-0.5 flex-shrink-0" />
                <a href="mailto:administrativo@jfdiesel.com" className="text-white/40 hover:text-[rgb(255,198,45)] text-sm transition-colors break-all">
                  administrativo@jfdiesel.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin width={16} height={16} className="text-[rgb(255,198,45)] mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">
                  Av. Perimetral Novo Horizonte, 2277<br />
                  Sorriso - MT, 78890-000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock width={16} height={16} className="text-[rgb(255,198,45)] mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">
                  Seg–Sex: 07:00–11:30<br />
                  13:00–17:30
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Atendimento</h4>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Atendemos carros, caminhões, tratores, máquinas agrícolas e toda frota a diesel no Mato Grosso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(255,198,45)] text-black font-bold px-5 py-2.5 rounded-full text-sm hover:bg-yellow-300 transition-all duration-200"
            >
              <WhatsAppIcon width={16} height={16} />
              Orçamento Grátis
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © 2026 JF Diesel — Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
          <p className="text-white/20 text-xs text-center">Sorriso - MT | Mecânica Diesel Especializada</p>
        </div>
      </div>
    </footer>
  );
}
