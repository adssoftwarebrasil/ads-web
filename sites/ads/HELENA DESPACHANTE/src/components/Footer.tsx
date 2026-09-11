import { Instagram, MapPin, Phone, Clock, Heart } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const footerServices = [
  'Quitação de Débitos',
  'Transferência de Veículo',
  'Licenciamento',
  'Primeiro Emplacamento',
  'Mudança de Característica',
  'Licenças e ANTT',
];

const cities = [
  'Primavera do Leste',
  'Campo Verde',
  'Rondonópolis',
  'Poxoréu',
  'Paranatinga',
  'Novo São Joaquim',
  'Santo Antônio do Leste',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark-card border-t border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/helena%20despachante/img/logo.webp"
              alt="Helena Despachante"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-brand-gray text-sm leading-relaxed mb-5">
              Despachante experiente em Primavera do Leste - MT. Regularize seu veículo com agilidade, honestidade e atendimento humanizado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/helenadespachante2021/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-dark border border-brand-dark-border flex items-center justify-center text-brand-gray hover:text-brand-yellow hover:border-brand-yellow/40 transition-all duration-200"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram" />
              </a>
              <a
                href="http://wa.me/556696535401"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-dark border border-brand-dark-border flex items-center justify-center text-brand-gray hover:text-brand-yellow hover:border-brand-yellow/40 transition-all duration-200"
              >
                <WhatsAppIcon width={16} height={16} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Serviços</h3>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-brand-gray text-sm hover:text-brand-yellow transition-colors duration-200 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-yellow flex-shrink-0"></span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Cidades Atendidas</h3>
            <ul className="space-y-2.5">
              {cities.map((c) => (
                <li key={c} className="flex items-center gap-2 text-brand-gray text-sm">
                  <span className="w-1 h-1 rounded-full bg-brand-gray flex-shrink-0"></span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Informações</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin width={15} height={15} className="lucide lucide-map-pin text-brand-yellow flex-shrink-0 mt-0.5" />
                <p className="text-brand-gray text-sm">Av. Cascavel, 278 - Primavera II<br />Primavera do Leste - MT</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone width={15} height={15} className="lucide lucide-phone text-brand-yellow flex-shrink-0 mt-0.5" />
                <a href="http://wa.me/556696535401" className="text-brand-gray text-sm hover:text-brand-yellow transition-colors">(66) 9 9653-5401</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock width={15} height={15} className="lucide lucide-clock text-brand-yellow flex-shrink-0 mt-0.5" />
                <p className="text-brand-gray text-sm">Seg - Sex<br />7:00 - 11:00 | 13:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-gray text-xs">© 2026 Helena Despachante. Todos os direitos reservados.</p>
          <p className="text-brand-gray text-xs flex items-center gap-1">
            Feito com <Heart width={12} height={12} fill="#FED600" className="lucide lucide-heart text-brand-yellow" /> em Primavera do Leste - MT
          </p>
        </div>
      </div>
    </footer>
  );
}
