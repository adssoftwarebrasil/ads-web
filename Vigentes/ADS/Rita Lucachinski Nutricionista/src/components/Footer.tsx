import { Instagram, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { scrollToId } from '../lib/actions';

const navItems = [
  { label: 'Sobre a Dra. Rita', id: 'sobre' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Agendar Consulta', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-2 border-[rgb(157,111,88)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Flogo.png"
              alt="Dra. Rita Lucachinski"
              className="h-14 w-auto brightness-0 invert opacity-90"
              loading="lazy"
            />
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Transformando vidas através da nutrição personalizada e cuidado humanizado. Sua saúde é sua maior
              riqueza.
            </p>
            <a
              href="https://www.instagram.com/ritalucachinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-[rgb(157,111,88)]/10 border border-[rgb(157,111,88)]/30 hover:bg-[rgb(157,111,88)] px-4 py-2 rounded-lg transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-normal text-sm">Siga no Instagram</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="group flex items-center gap-2 text-gray-400 font-light hover:text-[rgb(157,111,88)] transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Fale Comigo
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/559281102050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <div className="p-2 bg-[#1c1c1c] border border-gray-800 rounded-lg group-hover:bg-[rgb(157,111,88)] group-hover:border-[rgb(157,111,88)] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-light uppercase tracking-wide">
                      WhatsApp
                    </span>
                    <span className="text-sm font-light">(92) 8110-2050</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 group">
                  <div className="p-2 bg-[#1c1c1c] border border-gray-800 rounded-lg group-hover:bg-[rgb(157,111,88)] group-hover:border-[rgb(157,111,88)] transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-light uppercase tracking-wide">
                      Endereço
                    </span>
                    <span className="text-sm font-light block">Av. Timbiras, 2265 - Sala 17</span>
                    <span className="text-sm font-light block">Cidade Nova, Manaus - AM</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Atendimento
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="p-2 bg-[#1c1c1c] border border-gray-800 rounded-lg group-hover:bg-[rgb(157,111,88)] group-hover:border-[rgb(157,111,88)] transition-colors">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-light uppercase tracking-wide">
                    Segunda a Sexta
                  </span>
                  <span className="text-sm font-light text-gray-300">09:00 - 17:00</span>
                </div>
              </li>
              <li className="text-gray-500 text-xs bg-[#1c1c1c] p-3 rounded-lg border border-gray-800 font-light">
                Sábados, domingos e feriados: Fechado para descanso e estudos.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-light text-center md:text-left">
            © 2026 Dra. Rita Lucachinski.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-light">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
