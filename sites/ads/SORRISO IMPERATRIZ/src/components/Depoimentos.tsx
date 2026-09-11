import { useState } from 'react';
import { Quote, Star } from 'lucide-react';

interface Depoimento {
  texto: string;
  inicial: string;
  nome: string;
  papel: string;
}

const depoimentos: Depoimento[] = [
  {
    texto:
      '"Estava com medo de fazer implante, mas a equipe me deixou super tranquila. O resultado ficou perfeito e não senti dor nenhuma. A clínica é muito moderna e limpa."',
    inicial: 'A',
    nome: 'Ana Lima',
    papel: 'Paciente',
  },
  {
    texto:
      '"Fiz meu tratamento ortodôntico com Invisalign e foi incrível! Ninguém percebia que eu estava usando aparelho. O Dr. Maykon é realmente um especialista. Valeu cada centavo!"',
    inicial: 'L',
    nome: 'Lucas Ferreira',
    papel: 'Paciente',
  },
  {
    texto:
      '"Ambiente muito acolhedor e profissionais extremamente qualificados. Fiz clareamento e restaurações, ficou maravilhoso. Já indiquei para toda minha família!"',
    inicial: 'C',
    nome: 'Carla Souza',
    papel: 'Paciente',
  },
];

export default function Depoimentos() {
  const [active, setActive] = useState(1);

  return (
    <section
      id="depoimentos"
      className="py-16 sm:py-24 bg-gradient-to-b from-[rgb(100,149,237)]/10 to-white"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-6">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {depoimentos.map((d) => (
              <div
                key={d.nome}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="lucide lucide-quote w-10 h-10 text-[rgb(212,175,55)] opacity-30 absolute top-6 right-6" />
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="lucide lucide-star w-5 h-5 text-[rgb(212,175,55)] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    {d.texto}
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[rgb(100,149,237)] to-[rgb(13,51,98)] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {d.inicial}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-[rgb(13,51,98)]">
                        {d.nome}
                      </div>
                      <div className="text-sm text-gray-500">{d.papel}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === i
                    ? 'bg-[rgb(212,175,55)] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Faça parte da nossa história de sucesso!
          </p>
          <a
            href="#contato"
            className="inline-block bg-[rgb(13,51,98)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Quero Transformar Meu Sorriso
          </a>
        </div>
      </div>
    </section>
  );
}
