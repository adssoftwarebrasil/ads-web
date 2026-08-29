import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const highlights = [
  '24 anos de tradição e experiência educacional',
  'Pioneiro em Sinop e Lucas do Rio Verde',
  'Forte atuação na área da saúde',
  'Ensino prático focado no mercado de trabalho',
  'Alto índice de empregabilidade',
  'Professores qualificados e experientes',
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div
            className={`flex-1 order-2 lg:order-1 transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white"
              style={{ backgroundColor: 'rgb(188, 51, 54)' }}
            >
              Quem Somos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'rgb(62,64,150)' }}>
              Referência em Educação Profissional no Mato Grosso
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-5">
              O <strong className="text-gray-800">Cientec — Centro Integrado de Ensino Técnico</strong> foi fundado com um propósito claro: levar formação técnica e superior acessível e eficiente para a região. Ao longo de <strong className="text-gray-800">mais de 24 anos</strong>, o Cientec construiu uma trajetória sólida, baseada em compromisso, credibilidade e resultados reais.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Hoje, o Cientec é reconhecido como um dos melhores centros de ensino técnico do Mato Grosso, pioneiro em Sinop e Lucas do Rio Verde, com forte destaque na área da saúde. Aqui você não aprende apenas teoria — <strong className="text-gray-800">você aprende de verdade</strong>, com método prático orientado para o mercado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'rgb(188,51,54)' }} />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="http://wa.me/556699893074"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: 'rgb(188, 51, 54)' }}
            >
              Fale com um Consultor
            </a>
          </div>

          <div
            className={`flex-shrink-0 w-full max-w-sm lg:max-w-lg order-1 lg:order-2 transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: 'rgb(5,145,211)', opacity: 0.15 }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: 'rgb(188,51,54)', opacity: 0.1 }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/cientec/img/propaganda-curso-tecnico-saude-cientec_1080x1350.webp"
                  alt="Cursos Técnicos na Área da Saúde - Cientec"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="rgb(251,191,36)" className="text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-gray-800">+500 Avaliações</div>
                <div className="text-xs text-gray-500">Alunos Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
