import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function Beneficios() {
  const beneficios = [
    {
      titulo: 'Substituição de Custos Fixos por Variáveis',
      numero: '01',
    },
    {
      titulo: 'Redução de Riscos Legais, Fiscais e Trabalhistas',
      numero: '02',
    },
    {
      titulo: 'Padronização de Processos com Ganho de Produtividade',
      numero: '03',
    },
    {
      titulo: 'Foco Total no Core Business da Sua Empresa',
      numero: '04',
    },
    {
      titulo: 'Relatórios que Facilitam Decisões Estratégicas',
      numero: '05',
    },
    {
      titulo: 'Visitas Periódicas e Suporte Técnico Contínuo',
      numero: '06',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Minimal background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C9A44C]/[0.07] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#C9A44C]/[0.07] rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#C9A44C]/10 text-[#8E6F2C] px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            VANTAGENS COMPETITIVAS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-4 animate-fade-in-up">
            Por Que Escolher a<br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              Fonseca Contabilidade
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A44C] to-[#8E6F2C] transform origin-left animate-scale-x"></div>
            </span>
          </h2>
        </div>

        {/* Benefits List - Clean & Minimal */}
        <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
          {beneficios.map((beneficio, index) => (
            <div
              key={beneficio.numero}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative bg-white hover:bg-[#F7F5F0] border-2 border-[#ECE8DE] hover:border-[#111111] rounded-2xl p-5 md:p-8 transition-all duration-300 hover:shadow-xl">
                {/* Number Badge */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 md:relative md:left-0 md:top-0 md:translate-y-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#111111] to-[#0A0A0A] flex items-center justify-center font-bold text-lg md:text-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {beneficio.numero}
                  </div>
                </div>

                <div className="md:flex md:items-center md:justify-between md:gap-6 pl-12 md:pl-6">
                  {/* Title */}
                  <div className="flex-1 flex items-center gap-4">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#111111] group-hover:text-[#111111] transition-colors duration-300">
                      {beneficio.titulo}
                    </h3>
                  </div>

                  {/* Check Icon */}
                  <div className="hidden md:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-8 h-0.5 bg-[#C9A44C]"></div>
                    <CheckCircle2 className="w-6 h-6 text-[#8E6F2C]" />
                  </div>
                </div>

                {/* Mobile Check */}
                <div className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#8E6F2C]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards 0.3s;
          transform: scaleX(0);
        }

        @media (max-width: 768px) {
          .animate-fade-in-up {
            animation-duration: 0.5s;
          }
        }
      `}</style>
    </section>
  );
}