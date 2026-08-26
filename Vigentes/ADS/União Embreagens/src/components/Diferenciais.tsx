import { Award, Leaf, Clock, Shield, Zap, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  badge: string;
  title: string;
  text: string;
  Icon: LucideIcon;
}

const diferenciais: Diferencial[] = [
  {
    badge: 'Premium',
    title: 'Qualidade Garantida',
    text: 'Compromisso com produtos duráveis e de alto desempenho. Componentes novos substituem peças desgastadas em todas as remanufaturas.',
    Icon: Award,
  },
  {
    badge: 'Eco-Friendly',
    title: 'Sustentabilidade',
    text: 'Reutilizar e recuperar componentes, reduzindo o impacto ambiental e promovendo economia circular no setor automotivo.',
    Icon: Leaf,
  },
  {
    badge: '20+ Anos',
    title: 'Confiabilidade',
    text: 'Desde 2003 cumprindo prazos e garantindo a satisfação dos clientes em Ribeirão Preto e região num raio de 300km.',
    Icon: Clock,
  },
  {
    badge: 'Testado',
    title: 'Segurança',
    text: 'Todos os produtos passam por rigorosos testes de qualidade e controle, garantindo máxima segurança e desempenho.',
    Icon: Shield,
  },
  {
    badge: 'Performance',
    title: 'Alto Desempenho',
    text: 'Embreagens remanufaturadas com desempenho equivalente ou superior às originais, para linhas leve, pesada e agrícola.',
    Icon: Zap,
  },
  {
    badge: '5 Estrelas',
    title: 'Satisfação Cliente',
    text: 'Atendimento personalizado e suporte completo antes, durante e após a compra. Sua satisfação é nossa prioridade.',
    Icon: ThumbsUp,
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(240,178,121)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(60,88,144)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[rgb(240,178,121)]/10 border border-[rgb(240,178,121)]/30 px-5 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-[rgb(240,178,121)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-sm font-semibold text-[rgb(60,88,144)] tracking-wide">
              NOSSOS DIFERENCIAIS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(60,88,144)] mb-4 md:mb-6">
            Por que escolher a
            <span className="block text-[rgb(240,178,121)] mt-2">União Embreagens?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Excelência, compromisso e inovação em cada embreagem remanufaturada
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {diferenciais.map(({ badge, title, text, Icon }) => (
            <div
              key={title}
              className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-[rgb(240,178,121)]"
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[rgb(240,178,121)] to-[rgb(255,190,135)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {badge}
              </div>
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(240,178,121)]/20 to-[rgb(60,88,144)]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[rgb(240,178,121)]/10 to-[rgb(60,88,144)]/10 p-4 md:p-5 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-[rgb(240,178,121)]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[rgb(60,88,144)] mb-3 md:mb-4 text-center group-hover:text-[rgb(240,178,121)] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">{text}</p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[rgb(240,178,121)] to-transparent rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(240,178,121)]/0 to-[rgb(60,88,144)]/0 group-hover:from-[rgb(240,178,121)]/5 group-hover:to-[rgb(60,88,144)]/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[rgb(60,88,144)]/5 to-[rgb(240,178,121)]/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[rgb(60,88,144)] mb-4">
              Pronto para experimentar a diferença?
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas embreagens remanufaturadas podem
              atender suas necessidades com qualidade e sustentabilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5516936265853?text=Olá!%20Gostaria%20de%20conhecer%20os%20diferenciais%20da%20União%20Embreagens"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[rgb(240,178,121)] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-[rgb(255,190,135)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                Fale Conosco
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </a>
              <a
                href="tel:+5516936265853"
                className="inline-flex items-center gap-3 border-2 border-[rgb(60,88,144)] text-[rgb(60,88,144)] px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-[rgb(60,88,144)] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                (16) 3626-5853
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
