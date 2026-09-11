import { Award, CheckCircle2 } from 'lucide-react';

const features: string[] = [
  'Mais de 1000m² de área construída',
  'Churrasqueira automática de 20 metros',
  'Churrasqueira vitrine de costela de chão',
  'Estacionamento amplo e seguro',
  'Espaço kids com monitoramento',
  'Mesas externas para aproveitar o clima',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7BC33]/10 rounded-full mb-6">
              <Award size={18} className="text-[#F7BC33]" />
              <span className="text-[#25262A] font-bold text-xs uppercase tracking-wider">
                Tradição em Sinop desde 2014
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#25262A] leading-[1.1] mb-6">
              A paixão de assar carne levada à{' '}
              <span className="text-[#F7BC33]">excelência</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              O Costelaço nasceu da paixão de assar carne unido à busca de
              empreender. Desde 2014 estamos em Sinop levando o que há de melhor
              em churrasco e acompanhamentos. Somando a nossa experiência e a
              qualidade das carnes que temos o privilégio de encontrar em nossa
              região, o resultado é a entrega de um churrasco de excelência.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200"></div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Por que nos escolher?
                </h3>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7BC33]/20 flex items-center justify-center group-hover:bg-[#F7BC33] transition-colors duration-300">
                      <CheckCircle2
                        size={14}
                        className="text-[#F7BC33] group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F7BC33]/5 rounded-full blur-3xl"></div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-1 transition-transform duration-500">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/costelaco%2Fchurrasco-fogo-lenha.webp"
                  alt="Churrasco no fogo a lenha"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-xl transform hover:-translate-y-1 transition-transform duration-500">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/costelaco%2Fmesa-posta-restaurante.webp"
                  alt="Mesa posta"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="overflow-hidden rounded-3xl shadow-xl transform hover:-translate-y-1 transition-transform duration-500">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/costelaco%2Fcarne-grelhada.webp"
                  alt="Carne grelhada"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-1 transition-transform duration-500">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/costelaco%2Fespaco-infantil-colorido.webp"
                  alt="Espaço infantil"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-2xl hidden sm:block border border-gray-100">
              <div className="text-center">
                <p className="text-[#F7BC33] font-bold text-2xl">10+</p>
                <p className="text-[#25262A] text-[10px] font-bold uppercase tracking-tighter">
                  Anos de História
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
