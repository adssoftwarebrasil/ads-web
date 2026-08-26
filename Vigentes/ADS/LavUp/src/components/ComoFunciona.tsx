import { Coffee, CreditCard, Shirt, Smile, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5516992979707';

interface Step {
  Icon: LucideIcon;
  grad1: string;
  color: string;
  step: string;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    Icon: Shirt,
    grad1: 'rgb(84, 46, 145)',
    color: 'rgb(84, 46, 145)',
    step: 'PASSO 01',
    title: 'Chegue com suas roupas',
    text: 'Separe as roupas para lavar e venha até a Lavup Araraquara. Sem agendamento, sem filas de espera.',
  },
  {
    Icon: CreditCard,
    grad1: 'rgb(190, 83, 160)',
    color: 'rgb(190, 83, 160)',
    step: 'PASSO 02',
    title: 'Escolha a máquina',
    text: 'Selecione a máquina de lavar ou secar disponível de acordo com o volume de roupas que você trouxe.',
  },
  {
    Icon: Sparkles,
    grad1: 'rgb(38, 182, 230)',
    color: 'rgb(38, 182, 230)',
    step: 'PASSO 03',
    title: 'Produtos inclusos',
    text: 'Sabão OMO e amaciante Comfort já estão inclusos no valor do seu ciclo. Você não precisa se preocupar com nada.',
  },
  {
    Icon: Coffee,
    grad1: 'rgb(118, 203, 199)',
    color: 'rgb(118, 203, 199)',
    step: 'PASSO 04',
    title: 'Relaxe e aguarde',
    text: 'Aproveite nossa sala de espera confortável. O ciclo completo de lavar e secar dura apenas 75 minutos.',
  },
  {
    Icon: Smile,
    grad1: 'rgb(84, 46, 145)',
    color: 'rgb(84, 46, 145)',
    step: 'PASSO 05',
    title: 'Roupa limpa, seca e cheirosa!',
    text: 'Retire suas roupas limpas, secas e perfumadas. Simples assim. Sem complicações, sem surpresas.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 section-fade">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(118, 203, 199, 0.15)', color: 'rgb(38, 182, 230)' }}
          >
            Processo simplificado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Como{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, rgb(190, 83, 160), rgb(38, 182, 230)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              funciona
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Em apenas 5 passos simples suas roupas saem limpas, secas e prontas
            para usar.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative">
          <div
            className="absolute top-8 left-0 right-0 h-0.5 mx-[10%]"
            style={{
              background:
                'linear-gradient(90deg, rgb(84, 46, 145), rgb(190, 83, 160), rgb(38, 182, 230), rgb(118, 203, 199), rgb(84, 46, 145))',
            }}
          ></div>
          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map(({ Icon, grad1, color, step, title, text }, i) => (
              <div
                key={step}
                className="section-fade"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center pt-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg mb-4 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${grad1}, rgba(38, 182, 230, 0.8))`,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-bold mb-2" style={{ color }}>
                    {step}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map(({ Icon, grad1, color, step, title, text }, i) => (
            <div
              key={step}
              className="section-fade flex gap-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${grad1}, rgb(38, 182, 230))`,
                  }}
                >
                  <Icon size={22} />
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 min-h-[40px] mt-2"
                    style={{
                      background: 'linear-gradient(rgb(118, 203, 199), transparent)',
                    }}
                  ></div>
                )}
              </div>
              <div className="pb-8 pt-1">
                <span className="text-xs font-bold" style={{ color }}>
                  {step}
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-1 mt-0.5">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 p-8 rounded-3xl text-center section-fade"
          style={{
            background:
              'linear-gradient(135deg, rgba(84, 46, 145, 0.06), rgba(38, 182, 230, 0.06))',
            border: '1px solid rgba(118, 203, 199, 0.3)',
          }}
        >
          <h3 className="text-2xl font-black text-gray-900 mb-3">
            Pronto para experimentar?
          </h3>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Venha conhecer a Lavup Araraquara e descubra como lavar roupas pode
            ser simples, rápido e econômico.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background:
                'linear-gradient(135deg, rgb(84, 46, 145), rgb(38, 182, 230))',
            }}
          >
            Fale com a Lavup
          </a>
        </div>
      </div>
    </section>
  );
}
