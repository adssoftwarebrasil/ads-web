import { ClipboardList, PenTool, Wrench, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  Icon: LucideIcon;
  iconClass: string;
  number: string;
  title: string;
  text: string;
  delay: string;
}

const steps: Step[] = [
  { Icon: ClipboardList, iconClass: 'lucide lucide-clipboard-list text-white sm:w-10 sm:h-10 lg:w-8 lg:h-8', number: '1', title: 'Análise Personalizada', text: 'Avaliamos seu consumo energético e necessidades específicas para dimensionar o sistema ideal.', delay: '0s' },
  { Icon: PenTool, iconClass: 'lucide lucide-pen-tool text-white sm:w-10 sm:h-10 lg:w-8 lg:h-8', number: '2', title: 'Projeto Customizado', text: 'Desenvolvemos um projeto técnico detalhado com simulação de economia e retorno de investimento.', delay: '0.15s' },
  { Icon: Wrench, iconClass: 'lucide lucide-wrench text-white sm:w-10 sm:h-10 lg:w-8 lg:h-8', number: '3', title: 'Instalação Profissional', text: 'Nossa equipe certificada realiza a instalação com máxima qualidade e segurança.', delay: '0.3s' },
  { Icon: Activity, iconClass: 'lucide lucide-activity text-white sm:w-10 sm:h-10 lg:w-8 lg:h-8', number: '4', title: 'Monitoramento Contínuo', text: 'Acompanhamento remoto da performance e suporte técnico para garantir máxima eficiência.', delay: '0.45s' },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4" style={{ color: 'rgb(15, 30, 60)' }}>
            Como Funciona o Processo
          </h2>
          <div className="w-16 sm:w-20 h-1 mx-auto mb-4 sm:mb-6" style={{ backgroundColor: 'rgb(255, 69, 0)' }}></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Do primeiro contato à geração de energia, um processo transparente e eficiente.
          </p>
        </div>
        <div className="relative">
          <div
            className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-1 mx-[4.5rem]"
            style={{ background: 'linear-gradient(to right, rgb(255, 69, 0), rgb(255, 100, 50), rgb(255, 69, 0))' }}
          ></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className="relative text-center group"
                style={{ animation: `0.6s ease-out ${s.delay} 1 normal both running fadeInUp` }}
              >
                <div className="relative z-10 mb-6 flex justify-center">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{ background: 'linear-gradient(to right bottom, rgb(15, 30, 60), rgb(20, 40, 80))' }}
                  >
                    <s.Icon width={32} height={32} className={s.iconClass} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-lg shadow-lg transition-all duration-300"
                    style={{ backgroundColor: 'rgb(255, 69, 0)' }}
                  >
                    {s.number}
                  </div>
                </div>
                <h3
                  className="text-lg sm:text-xl lg:text-xl font-bold mb-3 px-2 transition-colors duration-300"
                  style={{ color: 'rgb(15, 30, 60)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-4 lg:px-2">{s.text}</p>
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-1/2 -bottom-8 w-0.5 h-8 transform -translate-x-1/2"
                    style={{ background: 'linear-gradient(rgb(255, 69, 0), rgb(255, 100, 50))' }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 sm:mt-20 text-center">
          <a
            href="https://wa.me/5579991174811?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20processo%20de%20instalação!"
            className="inline-block text-white font-semibold px-8 sm:px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base sm:text-lg hover:brightness-110"
            style={{ backgroundColor: 'rgb(255, 69, 0)' }}
          >
            Iniciar Meu Projeto Agora
          </a>
        </div>
      </div>
    </section>
  );
}
