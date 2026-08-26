import { useEffect, useRef } from 'react';
import { Award, Truck, Palette, Users, Wrench, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Mais de 1.000 Cores',
    description: 'Misturamos na hora a cor exata que você precisa, com tecnologia de colorimetria precisa.',
    color: 'rgb(17,157,219)',
  },
  {
    icon: Truck,
    title: 'Entrega na Obra',
    description: 'Levamos os produtos diretamente até o local da sua pintura, sem complicação.',
    color: 'rgb(108,189,81)',
  },
  {
    icon: Award,
    title: 'Marcas Premium',
    description: 'Trabalhamos com Sherwin-Williams, Profissional Tintas, Dacar Tintas, Maxvinil Tintas, Hidronorth Tintas e as melhores marcas do mercado.',
    color: 'rgb(240,214,44)',
  },
  {
    icon: Wrench,
    title: 'Linha Automotiva Completa',
    description: 'Tintas, bases, vernizes, solventes e tudo para repintura automotiva profissional.',
    color: 'rgb(235,49,60)',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Nossa equipe especializada orienta você na escolha certa para cada projeto.',
    color: 'rgb(111,196,233)',
  },
  {
    icon: ShieldCheck,
    title: 'Amostras Gratuitas',
    description: 'Oferecemos amostras para você ter certeza da cor antes de comprar.',
    color: 'rgb(108,189,81)',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.observe-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="observe-item opacity-0 translate-y-8 transition-all duration-700">
            <span
              className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(17,157,219,0.12)', color: 'rgb(17,157,219)' }}
            >
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
              A loja de tintas{' '}
              <span style={{ color: 'rgb(17,157,219)' }}>mais completa</span>{' '}
              de Sorriso
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                A <strong className="text-black">Casa das Tintas</strong> nasceu da paixão por qualidade e do desejo de oferecer aos moradores de Sorriso o que há de melhor em tintas e acabamentos. Ao longo dos anos, nos tornamos referência na cidade, atendendo desde reformas residenciais simples até projetos industriais e automotivos de grande porte.
              </p>
              <p>
                Contamos com <strong className="text-black">duas unidades estrategicamente localizadas</strong> em Sorriso - MT, garantindo fácil acesso para toda a cidade. Em cada loja, você encontra um time de especialistas prontos para auxiliar na escolha certa.
              </p>
              <p>
                Somos distribuidores autorizados das marcas mais renomadas do setor: <strong className="text-black">Sherwin-Williams, Profissional Tintas, Dacar Tintas, Maxvinil Tintas e Hidronorth Tintas</strong>, com estoque completo e pronta entrega.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="http://wa.me/556697173455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'rgb(17,157,219)' }}
              >
                Falar com Especialista
              </a>
              <a
                href="#produtos"
                onClick={(e) => { e.preventDefault(); document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center gap-2 border-2 border-black/15 hover:border-[rgb(17,157,219)] text-black hover:text-[rgb(17,157,219)] font-bold px-6 py-3 rounded-full text-sm transition-all duration-200"
              >
                Ver Produtos
              </a>
            </div>
          </div>

          <div className="observe-item opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgb(17,157,219), rgb(108,189,81))' }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/balde-tinta-acrilico-neo-vermelho-e-verde_576x1280.webp"
                  alt="Produtos Casa das Tintas"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-4">
                    {[
                      { value: '4.7', label: 'Avaliação Google', color: 'rgb(240,214,44)' },
                      { value: '2', label: 'Unidades', color: 'rgb(17,157,219)' },
                      { value: '100%', label: 'Qualidade', color: 'rgb(108,189,81)' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-black text-white" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-white/70 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="observe-item opacity-0 translate-y-8 transition-all duration-700 group p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon size={24} style={{ color: feature.color }} />
              </div>
              <h3 className="font-bold text-black text-base mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
