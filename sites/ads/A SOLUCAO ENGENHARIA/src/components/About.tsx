import { Award, CheckCircle, Clock, Users } from 'lucide-react';

const highlights = [
  { icon: Award, text: 'Empresa certificada e regularizada junto ao CBMSE' },
  { icon: Users, text: 'Equipe técnica altamente capacitada e treinada' },
  {
    icon: CheckCircle,
    text: 'Atendemos normas ABNT e exigências do Corpo de Bombeiros',
  },
  { icon: Clock, text: 'Mais de 15 anos de atuação no mercado sergipano' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img/fachada.webp"
                alt="Fachada A Solução Engenharia"
                className="w-full h-72 sm:h-96 lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090B4A]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#92AA40] rounded-full flex items-center justify-center shrink-0">
                      <Award size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#090B4A] text-sm">
                        Empresa Registrada
                      </div>
                      <div className="text-gray-500 text-xs">
                        Aracaju, Sergipe — Desde 2010
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#92AA40]/15 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#090B4A]/10 rounded-2xl -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-[#92AA40]/10 text-[#92AA40] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Quem Somos
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#090B4A] leading-tight mb-6">
              Solução Completa em{' '}
              <span className="text-[#92AA40]">Prevenção Contra Incêndio</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Fundada em 2010, a{' '}
              <strong className="text-[#090B4A]">A Solução Engenharia</strong> é
              especializada em soluções completas de prevenção contra incêndio e
              pânico. Nosso compromisso é proteger o que há de mais valioso:{' '}
              <strong className="text-[#92AA40]">a vida.</strong>
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Atuamos no fornecimento de equipamentos, elaboração de projetos
              técnicos, consultoria, laudos e implantação completa de sistemas
              preventivos para ambientes residenciais, comerciais e industriais
              em todo o estado de Sergipe.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon
                    size={18}
                    className="text-[#92AA40] mt-0.5 shrink-0"
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="http://wa.me/5579998705409?text=Olá! Gostaria de saber mais sobre os serviços da A Solução Engenharia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#090B4A] hover:bg-[#0d1260] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
