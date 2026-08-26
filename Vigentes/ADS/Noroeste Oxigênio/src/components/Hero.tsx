import { Phone, MapPin, Clock } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5538999719665';

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative pt-20 lg:pt-24 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                Atendimento de Excelência em Unaí
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fornecimento de <span className="text-blue-600">Oxigênio</span> e{' '}
              <span className="text-yellow-500">Equipamentos</span> de Qualidade
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Distribuidora líder em Unaí especializada em oxigênio medicinal, equipamentos de
              soldagem e soluções completas para sua necessidade. Qualidade, segurança e atendimento
              que você pode confiar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
              >
                <Phone size={22} />
                Solicitar Orçamento
              </a>
              <button
                onClick={scrollToServices}
                className="flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all shadow-lg border-2 border-blue-600 font-semibold text-lg"
              >
                Ver Serviços
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md">
                <MapPin size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Localização</p>
                  <p className="text-sm text-gray-600">Bairro Barroca, Unaí - MG</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md">
                <Clock size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Atendimento</p>
                  <p className="text-sm text-gray-600">Entrega rápida em Unaí</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:px-6 xl:px-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fatualizadas%2Fcapa-seite.webp"
                alt="Fachada da Noroeste Oxigênio em Unaí"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
