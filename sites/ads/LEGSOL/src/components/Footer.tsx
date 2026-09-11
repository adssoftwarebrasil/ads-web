import { Instagram, Facebook, ArrowRight, MapPin, Phone } from 'lucide-react';
import { scrollToId } from '../lib/utils';

const navLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre Nós', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Projetos', id: 'gallery' },
  { label: 'Depoimentos', id: 'social' },
];

const solutions = [
  'Energia Solar Residencial',
  'Energia Solar Comercial',
  'Energia Solar Industrial',
  'Energia Solar Agronegócio',
  'Manutenção e Limpeza',
  'Consultoria Técnica',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(27,45,114)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Flogo-redonda-com-fundo.webp"
                alt="LEGSOL Energia Solar"
                className="w-16 h-16 rounded-full shadow-lg border-2 border-white/10"
              />
              <span className="text-xl font-bold tracking-wide">LEGSOL</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando a luz do sol em economia real e sustentabilidade para sua vida. Especialistas em projetos
              fotovoltaicos em Franca e região.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/legsol.energiasolar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-[rgb(235,156,51)] p-2.5 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram className="lucide lucide-instagram" width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/legsolenergiasolar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-[rgb(235,156,51)] p-2.5 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook className="lucide lucide-facebook" width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-[rgb(235,156,51)] pl-3">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollToId(l.id)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight
                      className="lucide lucide-arrow-right text-[rgb(235,156,51)] opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"
                      width={14}
                      height={14}
                    />
                    <span className="transform group-hover:translate-x-1 transition-transform">{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-[rgb(235,156,51)] pl-3">Soluções</h3>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(26,110,76)] mt-1.5 flex-shrink-0"></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-[rgb(235,156,51)] pl-3">Fale Conosco</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://goo.gl/maps/FrancaSP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 group"
                >
                  <MapPin
                    className="lucide lucide-map-pin text-[rgb(235,156,51)] flex-shrink-0 mt-0.5"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    R. Padre Anchieta, n° 2053
                    <br />
                    Centro, Franca - SP
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:1639394142" className="flex gap-3 group">
                  <Phone
                    className="lucide lucide-phone text-[rgb(235,156,51)] flex-shrink-0"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    (16) 3939-4142
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5516997631055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 group"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    (16) 99763-1055
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-xs">© 2026 LEGSOL Energia Solar. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-xs text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
              <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 text-center">
            <p className="text-white/20 text-[10px] leading-relaxed">
              Energia solar em Franca | Instalação de painéis solares SP | Economia de energia | Projetos fotovoltaicos
              residenciais e comerciais | Financiamento solar | Limpeza de placas solares | Legsol Franca
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
