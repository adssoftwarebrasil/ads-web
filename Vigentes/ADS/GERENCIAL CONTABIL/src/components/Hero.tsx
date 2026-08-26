import { Award, ArrowRight, Shield, Users, Clock } from 'lucide-react';

const gold = 'rgb(192, 160, 98)';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Award size={16} className="lucide lucide-award mr-2" style={{ color: gold }} />
            <span className="text-sm font-medium">25 anos de excelência contábil</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Contabilidade Estratégica para o{' '}
            <span className="relative inline-block">
              <span style={{ color: gold }}>Sucesso</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 3 150 3 198 10"
                  stroke="#C0A062"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>{' '}
            do seu Negócio
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transformamos números em resultados concretos. Mais de duas décadas ajudando empresas a
            prosperarem com estratégia e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://api.whatsapp.com/send?phone=5561983132002&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Gerencial%20Cont%C3%A1bil."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: gold, color: 'white' }}
            >
              Fale com um Especialista
              <ArrowRight
                size={20}
                className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+5561983132002"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
            >
              <svg
                className="mr-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              (61) 98313-2002
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield size={16} className="lucide lucide-shield mr-2" style={{ color: gold }} />
              <span>100% Seguro e Confiável</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="lucide lucide-users mr-2" style={{ color: gold }} />
              <span>Atendimento Personalizado</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="lucide lucide-clock mr-2" style={{ color: gold }} />
              <span>Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
