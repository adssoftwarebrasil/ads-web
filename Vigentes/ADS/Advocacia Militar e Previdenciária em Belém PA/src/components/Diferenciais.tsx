import { Sparkles, CheckCircle } from 'lucide-react';

const BRAND = 'rgb(172, 0, 0)';

const items = [
  'Atendimento personalizado e humanizado',
  'Análise minuciosa de cada caso',
  'Pronto atendimento aos clientes',
  'Experiência desde 2016',
  'Titular com décadas no serviço público federal',
  'Atuação administrativa e judicial',
];

export default function Diferenciais() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: BRAND }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles
              width={20}
              height={20}
              className="lucide lucide-sparkles "
              style={{ color: BRAND }}
            />
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: BRAND }}
            >
              Por Que Nos Escolher
            </span>
            <Sparkles
              width={20}
              height={20}
              className="lucide lucide-sparkles "
              style={{ color: BRAND }}
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: BRAND }}
          ></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compromisso com excelência e dedicação total aos nossos clientes
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((text, i) => (
            <div
              key={i}
              className="group relative flex items-start space-x-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgb(172, 0, 0) 0%, transparent 100%)' }}
              ></div>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  border: '2px solid rgb(172, 0, 0)',
                  animation: '2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse',
                }}
              ></div>
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
                >
                  <CheckCircle
                    width={24}
                    height={24}
                    className="lucide lucide-check-circle transition-transform duration-300 group-hover:rotate-12"
                    style={{ color: BRAND }}
                  />
                </div>
              </div>
              <div className="flex-1 relative">
                <p className="text-gray-900 text-lg font-semibold leading-relaxed group-hover:text-gray-800 transition-colors">
                  {text}
                </p>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: BRAND }}
                >
                  {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND }}></div>
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: BRAND }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
