import { MapPin, ExternalLink, Clock } from 'lucide-react';
import { scrollToId } from '../lib/actions';

export default function Location() {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Localização e <span className="text-[rgb(157,111,88)] font-normal">Horários</span>
          </h2>
          <p className="text-lg text-gray-400 font-light">Venha nos visitar ou entre em contato</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[#1c1c1c] rounded-2xl shadow-lg overflow-hidden h-96 lg:h-auto border border-gray-800 relative">
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2297325370005!2d-59.98925412502927!3d-3.032932996942925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1a29eb57a1b1%3A0xfb872f9b56e09fd7!2sNutricionista%20em%20Manaus%20%7C%20Rita%20Lucachinski!5e0!3m2!1spt-BR!2sbr!4v1772145237335!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica em Manaus"
              className="filter contrast-[1.1] saturate-[.8]"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-6">
            <div className="bg-[#1c1c1c] rounded-2xl shadow-lg p-8 border border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(157,111,88)]/10 rounded-full flex items-center justify-center border border-[rgb(157,111,88)]/20">
                  <MapPin className="w-6 h-6 text-[rgb(157,111,88)]" />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-white mb-2">Endereço</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Av. Timbiras, 2265 - sala 17 - Cidade Nova, Manaus - AM, 69094-000
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=$Av.%20Timbiras%2C%202265%20-%20sala%2017%20-%20Cidade%20Nova%2C%20Manaus%20-%20AM%2C%2069094-000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[rgb(157,111,88)] hover:text-white font-normal transition-colors duration-300"
                  >
                    Como Chegar
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#1c1c1c] rounded-2xl shadow-lg p-8 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(157,111,88)]/10 rounded-full flex items-center justify-center border border-[rgb(157,111,88)]/20">
                  <Clock className="w-6 h-6 text-[rgb(157,111,88)]" />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-white mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300 font-normal">Segunda a Sexta: 09:00 - 17:00</p>
                    <p className="text-gray-500 font-light">Sábado: Fechado</p>
                    <p className="text-gray-500 font-light">Domingos e feriados: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(157,111,88)] rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-normal mb-4">Pronta para começar?</h3>
              <p className="mb-6 text-white/90 font-light">
                Agende sua consulta e dê o primeiro passo rumo à sua transformação!
              </p>
              <button
                onClick={() => scrollToId('contato')}
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 font-normal w-full"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
