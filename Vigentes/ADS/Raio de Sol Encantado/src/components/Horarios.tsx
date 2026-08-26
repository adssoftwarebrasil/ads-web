import { useReveal } from '../hooks/useReveal';
import WhatsAppIcon from './WhatsAppIcon';

export default function Horarios() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const showCard = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';

  return (
    <section id="horarios" className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgb(73,172,213)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[rgb(252,198,47)] rounded-full blur-3xl"></div>
      </div>
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className={`inline-block transition-all duration-1000 ${show}`}>
            <span className="inline-block px-4 py-2 bg-[rgb(73,172,213)]/10 text-[rgb(73,172,213)] rounded-full text-sm font-semibold mb-4">
              Horários
            </span>
          </div>
          <h2 className={`text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-100 ${show}`}>
            Horário de Funcionamento
          </h2>
          <p className={`text-gray-600 text-base lg:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${show}`}>
            Flexibilidade para atender as necessidades da sua família
          </p>
        </div>
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${showCard}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 mb-8 border border-gray-200">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 bg-[rgb(73,172,213)] text-white p-3 rounded-xl">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 text-xl lg:text-2xl font-bold mb-3">Funcionamento Geral</h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  A escola funciona das <span className="font-bold text-[rgb(224,68,72)]">7h às 19h</span> de segunda a sexta, com flexibilidade no número de horas, atendendo aos horários de preferência dos pais.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[rgb(73,172,213)] to-[rgb(90,185,225)] rounded-2xl shadow-xl p-8 lg:p-10 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-semibold">Turmas a partir de 3 anos</span>
              </div>
              <p className="text-white text-lg lg:text-xl font-semibold">Horário de aulas ministradas por professores especializados</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[rgb(252,198,47)] text-white p-4 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[rgb(252,198,47)] text-xl lg:text-2xl font-bold mb-3 text-center">Período da Manhã</h3>
                <div className="text-center">
                  <p className="text-gray-900 text-3xl lg:text-4xl font-bold">8h - 12h</p>
                  <p className="text-gray-600 text-sm mt-2">4 horas de atividades</p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[rgb(224,68,72)] text-white p-4 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[rgb(224,68,72)] text-xl lg:text-2xl font-bold mb-3 text-center">Período da Tarde</h3>
                <div className="text-center">
                  <p className="text-gray-900 text-3xl lg:text-4xl font-bold">14h - 18h</p>
                  <p className="text-gray-600 text-sm mt-2">4 horas de atividades</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-gray-100 text-[rgb(73,172,213)] p-3 rounded-xl">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 text-xl lg:text-2xl font-bold mb-3">Atendimento nos Demais Horários</h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Nos demais horários, as crianças ficam sob a responsabilidade de experientes atendentes de sala, com supervisão direta da direção da escola.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de saber mais sobre os horários e matrículas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[rgb(224,68,72)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[rgb(204,48,52)] hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <span>Fale Conosco Sobre Horários</span>
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
