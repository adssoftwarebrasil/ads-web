import { TrendingUp, Headphones, Shield, Award } from 'lucide-react';

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#FFA500] font-semibold text-sm uppercase tracking-wider">Vantagens</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Por Que Escolher a <span className="text-[#B87333]">PEMAQ</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Entenda porque somos a escolha ideal para suas necessidades em locação e manutenção
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-[#FFA500]/10">
                <TrendingUp size={32} className="text-[#FFA500]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Frota Atualizada</h3>
                <p className="text-gray-700 leading-relaxed">
                  Máquinas modernas para diferentes aplicações, mantidas em excelente estado.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-[#FFA500]/10">
                <Headphones size={32} className="text-[#FFA500]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Suporte Proativo</h3>
                <p className="text-gray-700 leading-relaxed">
                  Equipe pronta para lidar com as demandas e oferecendo soluções rápidas.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FVantagens.webp"
              alt="Vantagens PEMAQ"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FPor%20que%20contratar.jpg"
              alt="Por que contratar PEMAQ"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-[#FFA500]/10">
                <Shield size={32} className="text-[#FFA500]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Compromisso com a Qualidade
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Qualidade e confiança acima de tudo são as principais razões da PEMAQ.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-[#FFA500]/10">
                <Award size={32} className="text-[#FFA500]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Experiência Reconhecida</h3>
                <p className="text-gray-700 leading-relaxed">
                  Qualidade e confiança acima de tudo são as principais razões da PEMAQ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
