import { useEffect, useRef, useState } from 'react';
import { Target, ShieldCheck, Award, Rocket, Heart } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    { icon: ShieldCheck, label: 'Ética e Integridade' },
    { icon: Target, label: 'Foco no Cliente' },
    { icon: Award, label: 'Excelência e Transparência' },
    { icon: Rocket, label: 'Sonhamos Grande' },
    { icon: Heart, label: 'Orgulho da Empresa' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Alterado para items-start pois a coluna da direita ficará mais alta */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div
              className={`${
                isVisible ? 'animate-in fade-in slide-in-from-left-8' : 'opacity-0'
              }`}
            >
              <div className="relative">
                <div className="text-[#c9a962] text-8xl md:text-9xl font-bold opacity-20 absolute -top-8 -left-4">
                  2010
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c5b] mb-8 relative z-10 pt-16">
                  Construindo o Futuro Desde 2010
                </h2>
              </div>

              <div className="space-y-6 text-[#a7b4bd] leading-relaxed text-lg">
                <p>
                  Fundada em 2010, a <span className="text-[#2c2c5b] font-semibold">Prótons Consultoria</span> nasceu da certeza de que o trabalho contábil pode transformar negócios e impactar positivamente a sociedade.
                </p>

                <p>
                  Ao longo de mais de <span className="text-[#2c2c5b] font-semibold">14 anos</span>, nos tornamos especialistas em contabilidade de alta performance, ajudando empresas a crescerem de forma sustentável e competitiva.
                </p>

                <p>
                  Acreditamos que fazer o negócio do nosso cliente crescer vai além do financeiro - é contribuir para uma engrenagem econômica e social que fortalece nosso Brasil.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-[#2c2c5b] font-bold text-xl mb-6">Nossos Pilares</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-[#f8f9fa] rounded-lg p-4 hover:bg-[#e5e8e6] transition-colors"
                      >
                        <div className="w-10 h-10 bg-[#2c2c5b] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[#2c2c5b] font-semibold text-sm">{value.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className={`relative ${
                isVisible ? 'animate-in fade-in slide-in-from-right-8' : 'opacity-0'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c2c5b] to-[#4a90a4] rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 border-4 border-[#2c2c5b] shadow-2xl">
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#c9a962] pl-6">
                      <div className="text-[#2c2c5b] font-bold text-2xl mb-2">Missão</div>
                      <p className="text-[#a7b4bd]">
                        Gerar alto valor para nossos clientes, através de informações qualificadas que afetem positivamente suas estratégias, alavancando as margens de forma economicamente viável.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#4a90a4] pl-6">
                      <div className="text-[#2c2c5b] font-bold text-2xl mb-2">Visão</div>
                      <p className="text-[#a7b4bd]">
                        Ser referência na prestação de serviços de contabilidade e consultoria levando resultados e auxiliando nossos clientes a tomarem decisões bem fundamentadas e operar eficazmente.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#c9a962] pl-6">
                      <div className="text-[#2c2c5b] font-bold text-2xl mb-4">Valores</div>
                      <ul className="text-[#a7b4bd] space-y-4 text-sm">
                        <li>
                          <strong className="text-[#2c2c5b]">Ética e Integridade determinam nossas ações:</strong> Desvios de conduta não são tolerados, pois destroem a empresa e qualquer relacionamento.
                        </li>
                        <li>
                          <strong className="text-[#2c2c5b]">Foco no Cliente:</strong> Gera resultados e melhora a sua performance.
                        </li>
                        <li>
                          <strong className="text-[#2c2c5b]">Excelência e Transparência:</strong> Investimentos nas melhores ferramentas, plataformas, tecnologias e principalmente em pessoas para entregarmos o melhor serviço de consultoria e contabilidade do Brasil.
                        </li>
                        <li>
                          <strong className="text-[#2c2c5b]">Somos do tamanho dos nossos sonhos e por isso sonhamos grande:</strong> Acreditamos em nossos objetivos e trabalhamos para alcançá-lo.
                        </li>
                        <li>
                          <strong className="text-[#2c2c5b]">Temos orgulho de nossa empresa:</strong> Formamos uma equipe, um verdadeiro time, temos atitude de dono, assumimos desafios, tomamos decisões e nos responsabilizamos pelos resultados. Sabemos que essas atitudes nos levarão a resultados excelentes, incríveis e sustentáveis.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a962] rounded-full opacity-20 blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#4a90a4] rounded-full opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}