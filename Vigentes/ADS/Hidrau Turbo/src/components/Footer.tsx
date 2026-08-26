import { Phone, Mail, MapPin, Briefcase, Instagram, Youtube } from 'lucide-react';

const mapsUrl =
  'https://www.google.com/maps/place/Hidrau+Turbo+Centro+de+Dire%C3%A7%C3%B5es+Bosch/@-16.8115959,-49.2428523,981m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935efb17af51478b:0x6e823a739a372efc!8m2!3d-16.8115959!4d-49.2402774!16s%2Fg%2F11gp330418?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D';

const navItems = ['Início', 'Sobre', 'Catálogo de Peças', 'Depoimentos', 'Fale Conosco'];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <button className="group flex flex-col items-start focus:outline-none">
              <img
                src="https://storage.lucasmendes.dev/site-sp/hidrau%20turbo%2Fimg%2Flogo.webp"
                alt="Hidrau Turbo"
                className="h-16 w-auto mb-6 transition-opacity hover:opacity-80"
              />
            </button>
            <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
              Referência em Aparecida de Goiânia e região. Especialistas em recuperação e venda de
              peças originais Bosch para direções hidráulicas e turbinas. Qualidade e confiança que
              seu veículo merece.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 text-sm font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Atendimento
            </h4>
            <address className="not-italic space-y-4 mb-8">
              <a
                href="tel:6299649129"
                className="group flex gap-3 items-start text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="mt-0.5 p-1.5 bg-gray-800 rounded text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  <Phone size={14} className="lucide lucide-phone " />
                </div>
                <span className="leading-relaxed">(62) 9 9964-9129</span>
              </a>
              <a
                href="mailto:hidrauturbocomercioservico@gmail.com"
                className="group flex gap-3 items-start text-gray-400 hover:text-white transition-colors"
              >
                <div className="mt-0.5 p-1.5 bg-gray-800 rounded text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={14} className="lucide lucide-mail " />
                </div>
                <span className="leading-relaxed break-all text-xs sm:text-sm">
                  hidrauturbocomercioservico@gmail.com
                </span>
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 items-start text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="mt-0.5 p-1.5 bg-gray-800 rounded text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin size={14} className="lucide lucide-map-pin " />
                </div>
                <span className="leading-relaxed">
                  R. 6, 574 - St. Araguaia,
                  <br />
                  Aparecida de Goiânia - GO
                </span>
              </a>
            </address>
            <h4 className="text-lg font-bold mb-4 text-white border-b border-gray-800 pb-2 inline-block">
              Trabalhe Conosco
            </h4>
            <div className="mb-8">
              <a
                href="mailto:rhgrupoaea@gmail.com"
                className="group flex gap-3 items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="p-1.5 bg-gray-800 rounded text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors flex-shrink-0">
                  <Briefcase size={14} className="lucide lucide-briefcase " />
                </div>
                <span className="leading-relaxed font-medium">rhgrupoaea@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="http://instagram.com/hidrauturboht"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={20} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.youtube.com/@HidrauTurboDire%C3%A7%C3%B5esBosch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                aria-label="YouTube"
              >
                <Youtube size={20} className="lucide lucide-youtube " />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
          <div className="text-center md:text-left">
            <p>© 2026 Hidrau Turbo Centro de Direções Bosch. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-6 cursor-default">
            <span>Políticas de Privacidade</span>
            <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
