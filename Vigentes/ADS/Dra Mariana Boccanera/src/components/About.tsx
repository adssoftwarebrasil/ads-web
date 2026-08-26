import { CheckCircle2 } from 'lucide-react';
import { WHATSAPP_PLAIN, IMG } from '../constants';

const features = [
  'Atendimento Humanizado',
  'Especialista em Doenças Raras',
  'Gestão em Saúde',
  'Foco no Desenvolvimento',
];

function Underline() {
  return (
    <svg
      className="absolute w-full h-3 -bottom-1 left-0 text-[rgb(251,203,185)] opacity-40"
      viewBox="0 0 200 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00025 6.99992C18.5002 9.74992 48.5002 9.74992 48.5002 9.74992C65.4002 9.74992 82.5002 9.74992 99.5002 9.74992C116.5002 9.74992 133.5002 9.74992 150.5002 9.74992C167.5002 9.74992 184.5002 9.74992 201.5002 6.99992C201.5002 6.99992 165.5002 0.749924 99.5002 0.749924C33.5002 0.749924 2.00025 6.99992 2.00025 6.99992Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgb(251,203,185)]/5 skew-x-12 transform origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgb(235,208,217)]/10 rounded-full blur-3xl z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:hidden w-full animate-fade-in-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(251,203,185)]/20 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(251,203,185)]/30">
              <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
              Sobre a Dra. Mariana
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Dra. Mariana <br />
              <span className="text-[rgb(198,165,145)] relative inline-block">
                Boccanera
                <Underline />
              </span>
            </h2>
          </div>
          <div className="relative w-full animate-fade-in-left">
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(218,185,165)] to-[rgb(235,208,217)] rounded-[2.5rem] transform rotate-3 scale-105 opacity-40 blur-sm"></div>
            <img
              src={IMG.quemSomos}
              alt="Dra. Mariana Boccanera - Pediatra"
              className="relative w-full max-w-md mx-auto lg:max-w-full rounded-[2rem] shadow-2xl object-cover aspect-[4/5] border-4 border-white transform transition-transform duration-500 hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-[rgb(235,208,217)]/50 flex items-center gap-4 min-w-[200px] animate-float">
              <div className="bg-[rgb(218,185,165)]/10 p-3 rounded-xl">
                <svg
                  className="w-6 h-6 text-[rgb(218,185,165)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">CRM-GO</p>
                <p className="text-xl font-bold text-gray-800">26808</p>
              </div>
            </div>
          </div>
          <div className="w-full animate-fade-in-right">
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(251,203,185)]/20 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(251,203,185)]/30">
                <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
                Sobre a Dra. Mariana
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Dra. Mariana <br />
                <span className="text-[rgb(198,165,145)] relative inline-block">
                  Boccanera
                  <Underline />
                </span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Meu nome é Mariana Boccanera, sou pediatra e apaixonada por crianças. Acredito que{' '}
                <strong className="text-gray-800 font-medium">cada criança é única</strong>, e minha
                missão é nutrir esperança, promover o bem-estar e acompanhar seu desenvolvimento.
              </p>
              <p>
                Atuando como gestora em saúde e estudando doenças raras, busco sempre oferecer
                cuidados especializados. Com anos de experiência em diversos ambientes, meu
                compromisso é assegurar que todas as crianças tenham acesso a um atendimento
                atencioso e eficiente.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 text-[rgb(218,185,165)]">
                    <CheckCircle2
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="lucide lucide-check-circle2 "
                    />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href={WHATSAPP_PLAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[rgb(218,185,165)] text-white rounded-xl font-medium shadow-lg hover:bg-[rgb(198,165,145)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Fale Comigo no WhatsApp</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
