import { Star } from 'lucide-react';

export default function Depoimentos() {
  const depoimentos = [
    {
      name: 'Maria Silva',
      text: 'Experiência incrível desde o primeiro contato. A equipe é extremamente profissional e atenciosa. Meu sorriso está completamente transformado!',
    },
    {
      name: 'João Santos',
      text: 'Depois de anos evitando sorrir, finalmente encontrei a clínica certa. O Dr. Marcus e sua equipe fizeram um trabalho excepcional nos meus implantes.',
    },
    {
      name: 'Ana Paula',
      text: 'Ambiente acolhedor, tecnologia de ponta e profissionais altamente qualificados. Recomendo de olhos fechados para quem busca excelência em odontologia.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f7f7f7]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#003870] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos pacientes dizem
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{depoimento.text}</p>
              <p className="text-[#003870] font-semibold">{depoimento.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
