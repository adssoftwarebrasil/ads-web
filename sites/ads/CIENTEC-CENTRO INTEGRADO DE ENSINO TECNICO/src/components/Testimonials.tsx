import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Esmeralda Rodrigues',
    text: 'Passar pelo CIENTEC para mim foi uma experiência única. Era meu sonho fazer um curso de enfermagem, e eu consegui através do CIENTEC. Os professores foram ótimos profissionais, pacientes e atenciosos comigo e com os outros alunos.',
    stars: 5,
    initials: 'ER',
    color: 'from-brand-red to-brand-red-dark',
  },
  {
    name: 'Sabrina Melo',
    text: 'Ótima escola com os melhores cursos técnicos de Sinop e região. Recomendo para todos que querem uma formação de qualidade e reconhecida no mercado.',
    stars: 5,
    initials: 'SM',
    color: 'from-brand-blue to-brand-blue-dark',
  },
  {
    name: 'Matheus Appel',
    text: 'Essa escola técnica é incrível, com ótimos professores e cursos práticos para você se profissionalizar. Tudo que aprendi aqui faz diferença na minha vida profissional.',
    stars: 5,
    initials: 'MA',
    color: 'from-brand-blue-light to-brand-blue',
  },
];

export default function Testimonials() {
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
    <section id="depoimentos" ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white"
            style={{ backgroundColor: 'rgb(188, 51, 54)' }}
          >
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'rgb(62,64,150)' }}>
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Histórias reais de quem transformou a vida com o Cientec.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-gray-50 rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} style={{ color: 'rgb(62,64,150)' }} />
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={12} fill="rgb(251,191,36)" className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-8 bg-gray-50 rounded-2xl px-8 py-5 border border-gray-100 flex-wrap justify-center gap-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="rgb(251,191,36)" className="text-yellow-400" />
                ))}
              </div>
              <span className="font-black text-2xl text-gray-900">5.0</span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="text-sm text-gray-500 font-medium">
              Avaliação média no Google
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="text-sm text-gray-500 font-medium">
              +500 alunos satisfeitos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
