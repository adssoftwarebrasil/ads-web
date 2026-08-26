import { Instagram, Facebook, Mail, Phone, Clock, MapPin } from 'lucide-react';
import { navLinks } from '../data';
import { scrollToSection } from '../utils';

const socialStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div
        className="h-1 w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgb(245, 223, 108), rgb(218, 158, 12), rgb(245, 223, 108), transparent)',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/golden-car/img/logo-sem-fundo.webp"
              alt="Golden Car Veículos"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Referência em Rondonópolis há mais de 10 anos. Qualidade, transparência e as melhores condições para você
              realizar seu sonho.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/goldencar.roo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-golden transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
                style={socialStyle}
              >
                <Instagram size={16} className="lucide lucide-instagram" />
              </a>
              <a
                href="https://www.facebook.com/GoldencarVeiculos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-golden transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
                style={socialStyle}
              >
                <Facebook size={16} className="lucide lucide-facebook" />
              </a>
              <a
                href="mailto:ronan.machado@hotmail.com"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-golden transition-all duration-300 hover:scale-110"
                aria-label="Email"
                style={socialStyle}
              >
                <Mail size={16} className="lucide lucide-mail" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.target}>
                  <button
                    onClick={() => scrollToSection(l.target)}
                    className="text-white/50 hover:text-golden text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-golden transition-colors duration-200 flex-shrink-0"></span>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="lucide lucide-phone flex-shrink-0 mt-0.5" style={{ color: 'rgb(245, 223, 108)' }} />
                <div>
                  <a href="tel:+556697218384" className="text-white/60 hover:text-golden text-sm transition-colors duration-200">
                    (66) 9 9721-8384
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="lucide lucide-mail flex-shrink-0 mt-0.5" style={{ color: 'rgb(245, 223, 108)' }} />
                <a
                  href="mailto:ronan.machado@hotmail.com"
                  className="text-white/60 hover:text-golden text-sm transition-colors duration-200 break-all"
                >
                  ronan.machado@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="lucide lucide-clock flex-shrink-0 mt-0.5" style={{ color: 'rgb(245, 223, 108)' }} />
                <div>
                  <p className="text-white/60 text-sm">Seg a Sab: 07:30 – 18:00</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Localização</h4>
            <div className="flex items-start gap-3">
              <MapPin size={15} className="lucide lucide-map-pin flex-shrink-0 mt-0.5" style={{ color: 'rgb(245, 223, 108)' }} />
              <div>
                <p className="text-white/60 text-sm leading-relaxed">
                  R. Fernando Corrêa da Costa, 3111
                  <br />
                  Jardim Belo Horizonte
                  <br />
                  Rondonópolis - MT
                  <br />
                  CEP: 78705-600
                </p>
                <a
                  href="https://maps.google.com/?q=Golden+Car+Rondon%C3%B3polis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-medium hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(245, 223, 108)' }}
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Golden Car Veículos. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Rondonópolis – MT · CNPJ disponível na loja</p>
        </div>
      </div>
    </footer>
  );
}
