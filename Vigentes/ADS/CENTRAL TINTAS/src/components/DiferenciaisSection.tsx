import { useEffect, useRef } from 'react';
import { 
  Users, 
  Wallet, 
  Palette, 
  Award, 
  Car, 
  Clock, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const diferenciais = [
  {
    icon: Users,
    title: 'Atendimento de Qualidade',
    description: 'Equipe consultiva pronta para encontrar a solução técnica ideal.',
  },
  {
    icon: Wallet,
    title: 'Preços Competitivos',
    description: 'As melhores condições do mercado sem abrir mão da qualidade.',
  },
  {
    icon: Palette,
    title: '10 Mil Cores',
    description: 'Sistema tintométrico de ponta para criar qualquer tom desejado.',
  },
  {
    icon: Award,
    title: 'Marcas Premium',
    description: 'Parceiros oficiais: Sherwin-Williams, Lazzuril, Vonixx e Roma.',
  },
  {
    icon: Car,
    title: 'Especialista Automotivo',
    description: 'Laboratório de colorimetria para acerto exato da cor do seu veículo.',
  },
  {
    icon: Clock,
    title: 'Experiência Comprovada',
    description: 'Desde 2021 colorindo Barreiras e região com excelência.',
  },
];

export default function DiferenciaisSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Coluna da Imagem */}
          <div className="w-full lg:w-1/2 animate-on-scroll opacity-0 relative">
            <div className="absolute top-4 left-4 w-full h-full bg-[#ec3237] rounded-2xl -z-10 transform translate-x-2 translate-y-2 hidden sm:block"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#fef011] rounded-full blur-2xl opacity-40 -z-10"></div>
            
            <img
              src="https://storage.lucasmendes.dev/site-sp/central-tintas%2Floja-tintas-fachada-de-lado-bom.webp"
              alt="Fachada da Loja Central Tintas"
              className="w-full h-auto rounded-2xl shadow-xl border border-gray-100 object-cover"
              loading="lazy"
            />
            
            <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#3f4196] hidden sm:block animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-8 h-8" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Avaliação</p>
                  <p className="text-[#3f4196] font-bold text-lg">5 Estrelas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="animate-on-scroll opacity-0 mb-10">
              <span className="text-[#ec3237] font-semibold text-sm uppercase tracking-wider mb-2 block">
                Nossos Diferenciais
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f4196] leading-tight">
                Por que escolher a <span className="relative inline-block">Central Tintas?</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Não vendemos apenas tintas, entregamos soluções completas para transformar o seu ambiente ou veículo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              {diferenciais.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="animate-on-scroll opacity-0 flex gap-4 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#3f4196] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#fef011]" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#3f4196] transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CALL TO ACTION ADICIONADO AQUI */}
            <div className="animate-on-scroll opacity-0 pt-2" style={{ animationDelay: '600ms' }}>
              <a 
                href="https://wa.me/5577999571092?text=Olá! Vi os diferenciais no site e gostaria de um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#ec3237] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d02025] transition-all hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto group"
              >
                Fale com um Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}