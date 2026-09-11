import { Award, TrendingUp, Heart, Check } from 'lucide-react';

const features = [
  { Icon: Award, text: 'Quase 30 anos vestindo o Brasil' },
  { Icon: TrendingUp, text: 'Produção 100% própria do início ao fim' },
  { Icon: Heart, text: 'Atendimento humanizado e personalizado' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-5"
        style={{ backgroundColor: 'rgb(255, 241, 20)' }}
      ></div>
      <div
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: 'rgb(6, 138, 80)' }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 animate-fade-in-up">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 font-semibold text-sm shadow-sm"
            style={{
              backgroundColor: 'rgba(255, 241, 20, 0.15)',
              color: 'rgb(0, 45, 100)',
              border: '2px solid rgb(255, 241, 20)',
            }}
          >
            <Award size={16} />
            Nossa História
          </div>
          <h2
            className="text-3xl lg:text-5xl font-bold mb-4 leading-tight max-w-3xl mx-auto"
            style={{ color: 'rgb(0, 45, 100)' }}
          >
            Da Brasil Bandeiras à Brasil Camisetas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma evolução natural que carrega décadas de tradição e qualidade
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="animate-on-scroll opacity-0 order-2 lg:order-1 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative group">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: 'rgb(6, 138, 80)' }}
              ></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2FApresentamos%20a%20Brasil%20Camisetas.jpg"
                  alt="Identidade Visual Brasil Camisetas"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  style={{ aspectRatio: '4 / 3' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold" style={{ color: 'rgb(255, 241, 20)' }}>
                        30
                      </div>
                      <div className="text-xs text-white/80">Anos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: 'rgb(255, 241, 20)' }}>
                        100%
                      </div>
                      <div className="text-xs text-white/80">Nacional</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: 'rgb(255, 241, 20)' }}>
                        1000+
                      </div>
                      <div className="text-xs text-white/80">Clientes</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full shadow-xl font-bold text-sm"
                style={{ backgroundColor: 'rgb(255, 241, 20)', color: 'rgb(0, 45, 100)' }}
              >
                🇧🇷 Orgulhosamente Brasileiro
              </div>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0 order-1 lg:order-2 animate-fade-in-up">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A{' '}
                <span className="font-bold" style={{ color: 'rgb(0, 45, 100)' }}>
                  Brasil Camisetas
                </span>{' '}
                surgiu de uma necessidade clara: ampliar nossa marca para alcançar o
                mercado de camisetas personalizadas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Já produzíamos um volume considerável através da Brasil Bandeiras, mas
                sentimos que era hora de dar esse novo passo. Nasceu assim nossa família
                de produtos, fortalecendo nossa presença no segmento com a mesma qualidade
                que nos tornou referência.
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {features.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    backgroundColor: 'rgb(249, 250, 251)',
                    border: '1px solid rgb(229, 231, 235)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'rgb(6, 138, 80)' }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-base flex-1">{text}</p>
                  <Check
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'rgb(6, 138, 80)' }}
                  />
                </div>
              ))}
            </div>
            <div
              className="relative p-6 rounded-xl border-l-4"
              style={{
                backgroundColor: 'rgba(6, 138, 80, 0.05)',
                borderLeftColor: 'rgb(6, 138, 80)',
              }}
            >
              <svg
                className="absolute top-4 right-4 w-8 h-8 opacity-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
              </svg>
              <p className="text-gray-700 italic text-lg relative z-10">
                "Decidimos expandir a família e nasceu a Brasil Camisetas, fortalecendo
                nossa presença no segmento têxtil brasileiro."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
