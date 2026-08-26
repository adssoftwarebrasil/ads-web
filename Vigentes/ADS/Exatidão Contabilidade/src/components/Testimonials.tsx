import { useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonial = {
  text: '"Os serviços da Exatidão realmente fazem a diferença! A equipe não apenas resolve questões contábeis, mas oferece insights valiosos que nos ajudaram a economizar e crescer. Sempre que precisei, eles estavam prontos com soluções eficientes e práticas."',
  name: 'João Silva',
  role: 'Empresário',
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const dots = [0, 1, 2, 3];

  return (
    <section id="depoimentos" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-widest text-[rgb(204,162,74)] font-semibold mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>
        <div className="relative">
          <div className="bg-[rgb(54,55,58)] p-8 md:p-12 rounded-2xl shadow-2xl min-h-[300px] flex flex-col justify-center">
            <Quote className="text-6xl text-[rgb(202,162,106)] opacity-50 mb-6" width={60} height={60} />
            <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">{testimonial.text}</p>
            <div className="flex items-center gap-2 mb-4">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="w-5 h-5 fill-[rgb(202,162,106)] text-[rgb(202,162,106)]" />
              ))}
            </div>
            <div>
              <div className="text-xl font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-[rgb(204,162,74)]">{testimonial.role}</div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {dots.map((d) => (
              <button
                key={d}
                onClick={() => setActive(d)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === d ? 'bg-[rgb(202,162,106)] w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Depoimento ${d + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
