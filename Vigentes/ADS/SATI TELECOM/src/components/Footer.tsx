import { Instagram, Facebook, Phone, Mail, MapPin, Clock, ExternalLink, ArrowUp } from 'lucide-react';
import { navItems, scrollToSection } from '../lib/nav';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="h-1 bg-gradient-to-r from-[#3d009e] via-[#bc0000] to-[#3d009e]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sati%2Fsati-logo-roxa-1024px.png"
                alt="Sati Telecom"
                className="h-12 mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              40 anos conectando empresas com tecnologia de ponta e atendimento humanizado de excelência
            </p>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400 font-medium">Siga-nos:</span>
              <a
                href="https://www.instagram.com/satitelecom/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/satitelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white/5 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-[#3d009e] to-[#bc0000] rounded-full mr-3"></div>
              Contato
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="tel:4933613600" className="flex items-start hover:text-white transition-colors group">
                  <Phone className="lucide lucide-phone w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#3d009e] group-hover:text-[#bc0000] transition-colors" />
                  <div>
                    <div className="font-medium text-white mb-0.5">Telefone</div>
                    <div>(49) 3361-3600</div>
                    <div>0800 363-6036</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sati@satitelecom.com.br"
                  className="flex items-start hover:text-white transition-colors group"
                >
                  <Mail className="lucide lucide-mail w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#3d009e] group-hover:text-[#bc0000] transition-colors" />
                  <div>
                    <div className="font-medium text-white mb-0.5">E-mail</div>
                    <div>sati@satitelecom.com.br</div>
                    <div className="text-xs text-gray-500 mt-1">alex@satitelecom.com.br</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start group">
                <MapPin className="lucide lucide-map-pin w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#3d009e]" />
                <div>
                  <div className="font-medium text-white mb-0.5">Endereço</div>
                  <div className="leading-relaxed">
                    R. Cuba, 190-D - Líder
                    <br />
                    Chapecó - SC, 89805-226
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-[#3d009e] to-[#bc0000] rounded-full mr-3"></div>
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#3d009e] rounded-full mr-2 group-hover:bg-[#bc0000] transition-colors"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-[#3d009e] to-[#bc0000] rounded-full mr-3"></div>
              Horário de Atendimento
            </h4>
            <div className="space-y-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-start mb-3">
                  <Clock className="lucide lucide-clock w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#3d009e]" />
                  <div>
                    <div className="font-semibold text-white mb-1">Segunda a Sexta</div>
                    <div className="text-gray-400">8h - 12h</div>
                    <div className="text-gray-400">13h30 - 18h</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 opacity-60">
                <div className="flex items-start">
                  <Clock className="lucide lucide-clock w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-500" />
                  <div>
                    <div className="font-semibold text-white mb-1">Sábado e Domingo</div>
                    <div className="text-gray-500">Fechado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="bg-white/5 rounded-lg px-6 py-3 border border-white/10">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">40+ Anos</div>
                  <div className="text-gray-400 text-xs">de Excelência</div>
                </div>
              </div>
            </div>
            <a
              href="https://www.3cx.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 rounded-lg px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mr3">
                  <img
                    src="https://www.3cx.com.br/wp-content/uploads/sites/18/logo-3.png"
                    alt="3CX"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Credenciada 3CX</div>
                  <div className="text-gray-400 text-xs">Operadora Oficial</div>
                </div>
              </div>
            </a>
            <div className="bg-white/5 rounded-lg px-6 py-3 border border-white/10">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-[#bc0000] to-red-600 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="lucide lucide-map-pin w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Cobertura Nacional</div>
                  <div className="text-gray-400 text-xs">Todo o Brasil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Sati Telecom. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <button className="hover:text-white transition-colors">Política de Privacidade</button>
              <span className="text-gray-600">•</span>
              <a
                href="https://voxbrazil.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center group"
              >
                Desenvolvido por Vox Brazil
                <ExternalLink className="lucide lucide-external-link w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#3d009e]/50 hover:scale-110 transition-all duration-300 z-40 group"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="lucide lucide-arrow-up w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
