import { useEffect, useRef, useState } from 'react';
import { AlertCircle, TrendingDown, FileQuestion, Scale } from 'lucide-react';

export default function Problems() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const problems = [
    {
      icon: FileQuestion,
      question: 'Será que o Simples Nacional ainda é a melhor opção para minha empresa?',
      color: '#4a90a4',
    },
    {
      icon: Scale,
      question: 'Como me preparar para a Reforma Tributária?',
      color: '#c9a962',
    },
    {
      icon: TrendingDown,
      question: 'Estou pagando mais impostos do que deveria?',
      color: '#4a90a4',
    },
    {
      icon: AlertCircle,
      question: 'Minha contabilidade entende as complexidades do Lucro Real?',
      color: '#c9a962',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c5b] mb-6">
            Sua empresa está preparada para os desafios tributários?
          </h2>
          <p className="text-lg text-[#a7b4bd]">
            Estas são perguntas que todo empresário deveria fazer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`group bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-[#4a90a4] hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 150}ms` : '0ms',
                  animationFillMode: 'backwards',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${problem.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: problem.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#2c2c5b] text-lg font-semibold leading-relaxed">
                      {problem.question}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#a7b4bd] text-lg mb-6">
            Se alguma dessas questões ressoa com você, está na hora de conversar com especialistas.
          </p>
          <a
            href="https://wa.me/5562998005803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2c2c5b] hover:bg-[#3d3d7a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Agende uma Conversa
          </a>
        </div>
      </div>
    </section>
  );
}
