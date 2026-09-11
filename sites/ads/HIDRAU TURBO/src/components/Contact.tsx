import {
  Phone,
  Clock,
  Smartphone,
  MessageCircle,
  MapPin,
  ExternalLink,
  Mail,
  Instagram,
  Youtube,
} from 'lucide-react';

const mapsUrl =
  'https://www.google.com/maps/place/Hidrau+Turbo+Centro+de+Dire%C3%A7%C3%B5es+Bosch/@-16.8115959,-49.2428523,981m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935efb17af51478b:0x6e823a739a372efc!8m2!3d-16.8115959!4d-49.2402774!16s%2Fg%2F11gp330418?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D';

export default function Contact() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-28 px-4 sm:px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-blue-50 text-primary-blue text-sm font-bold uppercase tracking-wider mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha o canal de sua preferência abaixo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Central de Atendimento */}
          <div className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary-blue border border-gray-100">
              <Phone size={28} className="lucide lucide-phone " />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Central de Atendimento</h3>
            <div className="flex flex-col gap-5 mb-8 flex-grow">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="mt-1 text-red-500 bg-red-50 p-1.5 rounded-md">
                  <Clock size={16} className="lucide lucide-clock " />
                </div>
                <div>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-0.5">
                    Socorro 24h
                  </p>
                  <p className="text-sm text-gray-500 mb-0.5">Falar com Jaderson</p>
                  <a
                    href="tel:62999637706"
                    className="text-base font-bold text-gray-900 hover:text-primary-blue transition-colors"
                  >
                    (62) 9 9963-7706
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-400 bg-gray-200 p-1.5 rounded-md">
                  <Smartphone size={16} className="lucide lucide-smartphone " />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-blue uppercase tracking-wide mb-0.5">
                    Serviços
                  </p>
                  <p className="text-sm text-gray-500 mb-0.5">Falar com Aline</p>
                  <a
                    href="tel:62996078849"
                    className="text-base font-bold text-gray-900 hover:text-primary-blue transition-colors"
                  >
                    (62) 9 9607-8849
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-400 bg-gray-200 p-1.5 rounded-md">
                  <Smartphone size={16} className="lucide lucide-smartphone " />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-blue uppercase tracking-wide mb-0.5">
                    Venda de Peças
                  </p>
                  <p className="text-sm text-gray-500 mb-0.5">Falar com Allexia</p>
                  <a
                    href="tel:62999649129"
                    className="text-base font-bold text-gray-900 hover:text-primary-blue transition-colors"
                  >
                    (62) 9 9964-9129
                  </a>
                </div>
              </div>
            </div>
            <button className="w-full bg-green-600 text-white text-sm font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <MessageCircle size={20} className="lucide lucide-message-circle " />
              Chamar no WhatsApp
            </button>
          </div>

          {/* Nossa Localização */}
          <div className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary-blue border border-gray-100">
              <MapPin size={28} className="lucide lucide-map-pin " />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Localização</h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              Venha tomar um café conosco e conhecer nossa estrutura completa.
            </p>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-8">
              <p className="text-sm font-medium text-gray-500 uppercase mb-2">Endereço:</p>
              <address className="not-italic text-gray-900 font-medium leading-snug">
                R. 6, 574 - St. Araguaia,
                <br />
                Aparecida de Goiânia - GO
                <br />
                CEP: 74981-060
              </address>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-blue text-white text-sm font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Abrir no Google Maps
              <ExternalLink size={18} className="lucide lucide-external-link " />
            </a>
          </div>

          {/* Canais Digitais */}
          <div className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary-blue border border-gray-100">
              <Mail size={28} className="lucide lucide-mail " />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Canais Digitais</h3>
            <div className="flex flex-col flex-grow">
              <p className="text-gray-600 leading-relaxed mb-6">
                Envie um e-mail para cotações formais ou siga nossas redes sociais para acompanhar
                novidades.
              </p>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
                <p className="text-xs font-medium text-gray-500 uppercase mb-1">E-mail Corporativo:</p>
                <a
                  href="mailto:hidrauturbocomercioservico@gmail.com"
                  className="block text-primary-blue font-semibold hover:underline truncate text-sm sm:text-base"
                  title="hidrauturbocomercioservico@gmail.com"
                >
                  hidrauturbocomercioservico@gmail.com
                </a>
              </div>
              <div className="mt-auto">
                <p className="text-sm font-bold text-gray-900 mb-4 text-center">Siga-nos nas redes:</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="http://instagram.com/hidrauturboht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Instagram size={24} className="lucide lucide-instagram relative z-10" />
                  </a>
                  <a
                    href="https://www.youtube.com/@HidrauTurboDire%C3%A7%C3%B5esBosch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#FF0000] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Youtube size={24} className="lucide lucide-youtube " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
