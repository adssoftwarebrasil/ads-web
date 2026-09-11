import { Instagram, Facebook, MapPin, Phone, Clock, Heart } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const servicos = [
  'Prótese Capilar',
  'Corte de Cabelo',
  'Barba Completa',
  'Barba Pigmentada',
  'Progressiva & Selagem',
  'Curso de Prótese',
];

const navegacao = [
  { href: '#hero', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(20,18,18)] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="inline-block mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/img/logo-sem-fundo.webp"
                alt="Mago das Tesouras"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              O espaço do homem moderno. Especialistas em prótese capilar, cortes e barba em
              Uberlândia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/magodastesourasbarbeariaepub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center text-white/50 hover:bg-[rgb(254,197,52)] hover:text-[rgb(32,29,30)] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={16} height={16} />
              </a>
              <a
                href="https://www.facebook.com/magodastesourabarbeariaepub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center text-white/50 hover:bg-[rgb(254,197,52)] hover:text-[rgb(32,29,30)] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook" width={16} height={16} />
              </a>
              <a
                href="http://wa.me/553488238723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center text-white/50 hover:bg-[rgb(254,197,52)] hover:text-[rgb(32,29,30)] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[rgb(247,246,247)] font-semibold text-sm uppercase tracking-wider mb-5">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2.5">
              {servicos.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-white/45 text-sm hover:text-[rgb(254,197,52)] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[rgb(247,246,247)] font-semibold text-sm uppercase tracking-wider mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-white/45 text-sm hover:text-[rgb(254,197,52)] transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[rgb(247,246,247)] font-semibold text-sm uppercase tracking-wider mb-5">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-[rgb(254,197,52)] flex-shrink-0 mt-0.5"
                  width={15}
                  height={15}
                />
                <span className="text-white/45 text-sm">
                  Av. Benjamin Magalhães, 1014
                  <br />
                  Tibery, Uberlândia - MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="lucide lucide-phone text-[rgb(254,197,52)] flex-shrink-0"
                  width={15}
                  height={15}
                />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+553432226749"
                    className="text-white/45 text-sm hover:text-[rgb(254,197,52)] transition-colors"
                  >
                    (34) 3222-6749
                  </a>
                  <a
                    href="http://wa.me/553488238723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/45 text-sm hover:text-[rgb(254,197,52)] transition-colors"
                  >
                    (34) 9 8823-8723
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="lucide lucide-clock text-[rgb(254,197,52)] flex-shrink-0 mt-0.5"
                  width={15}
                  height={15}
                />
                <span className="text-white/45 text-sm">Seg–Sáb: 09h às 20h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/25 text-xs">
            © 2026 Mago das Tesouras Barbearia. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1">
            Feito com{' '}
            <Heart
              className="lucide lucide-heart text-[rgb(245,133,79)]"
              width={11}
              height={11}
              fill="rgb(245,133,79)"
            />{' '}
            para Uberlândia
          </p>
        </div>
      </div>
    </footer>
  );
}
