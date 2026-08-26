import { Instagram, Facebook, MapPin, Clock, Heart } from 'lucide-react';
import { scrollToId } from '../useReveal';

const WHATSAPP = 'http://wa.me/556696205384';
const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

const navLinks = [
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Seja Consultora', id: 'consultora' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-black border-t border-white/10">
        <div className="container-max px-4 md:px-8 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-1">
              <img
                src="https://storage.lucasmendes.dev/site-sp/duquesa%20joias/img/logo-letra-branca.webp"
                alt="Duquesa Joias"
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Semijoias e Joias em Prata 925 de alta qualidade. Varejo, atacado e consignação em
                todo o Mato Grosso desde 2019.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/duquesajoias.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-rose/20 flex items-center justify-center text-white/60 hover:text-rose transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram width={16} height={16} className="lucide lucide-instagram " />
                </a>
                <a
                  href="https://www.facebook.com/safiradistribuidorsinop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-500/20 flex items-center justify-center text-white/60 hover:text-blue-400 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook width={16} height={16} className="lucide lucide-facebook " />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-500/20 flex items-center justify-center text-white/60 hover:text-green-400 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d={WA_PATH}></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
                Navegação
              </h4>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => scrollToId(l.id)}
                      className="text-white/50 hover:text-gold text-sm transition-colors"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
                Localização
              </h4>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin
                  width={14}
                  height={14}
                  className="lucide lucide-map-pin text-gold mt-0.5 flex-shrink-0"
                />
                <span className="leading-relaxed">
                  Ed. Tozi – Av. das Figueiras, 1646
                  <br />
                  Sala 07, 1º Piso
                  <br />
                  Sinop – MT, 78550-190
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
                Horários
              </h4>
              <div className="flex items-start gap-2.5 text-white/50 text-sm mb-5">
                <Clock
                  width={14}
                  height={14}
                  className="lucide lucide-clock text-gold mt-0.5 flex-shrink-0"
                />
                <div className="leading-relaxed">
                  <div className="text-white/70 font-medium">Segunda – Sexta</div>
                  <div>07:30 – 11:30</div>
                  <div>13:30 – 18:00</div>
                </div>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold/15 hover:bg-gold/25 text-gold text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d={WA_PATH}></path>
                </svg>
                (66) 9 9620-5384
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs text-center sm:text-left">
              © 2026 Duquesa Joias. Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-xs flex items-center gap-1">
              Feito com{' '}
              <Heart width={11} height={11} className="lucide lucide-heart text-rose fill-rose" />{' '}
              para todas as mulheres do MT
            </p>
          </div>
        </div>
      </footer>
      <a
        href="http://wa.me/556696205384?text=Ol%C3%A1%21+Vim+pelo+site+da+Duquesa+Joias+e+gostaria+de+mais+informa%C3%A7%C3%B5es!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 opacity-100 translate-y-0"
        style={{ backgroundColor: 'rgb(37, 211, 102)' }}
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ backgroundColor: 'rgb(37, 211, 102)' }}
        ></span>
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d={WA_PATH}></path>
        </svg>
      </a>
    </>
  );
}
