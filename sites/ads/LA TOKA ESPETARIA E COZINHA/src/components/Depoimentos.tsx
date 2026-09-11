import { Star, Calendar, Trophy, Truck, LucideIcon } from 'lucide-react';

interface Depoimento {
  texto: string;
  inicial: string;
  nome: string;
  desde: string;
  delay: string;
}

const depoimentos: Depoimento[] = [
  {
    texto:
      '"Os melhores espetinhos da região! Sempre frescos e bem temperados. O atendimento é excelente e a entrega é rápida."',
    inicial: 'M',
    nome: 'Marcos Silva',
    desde: 'Cliente desde 2024',
    delay: '150ms',
  },
  {
    texto:
      '"Lugar perfeito para uma jantinha. Ambiente acolhedor, comida deliciosa e preço justo. Virei cliente fiel!"',
    inicial: 'J',
    nome: 'Juliana Costa',
    desde: 'Cliente desde 2024',
    delay: '300ms',
  },
  {
    texto:
      '"Cerveja sempre gelada e os espetinhos são incríveis. Recomendo muito! A qualidade é incomparável."',
    inicial: 'C',
    nome: 'Carlos Santos',
    desde: 'Cliente desde 2024',
    delay: '450ms',
  },
];

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  valor: string;
  label: string;
  delay: string;
}

const stats: Stat[] = [
  { Icon: Calendar, iconClass: 'lucide lucide-calendar', valor: 'Desde 2024', label: 'Servindo Goiânia', delay: '450ms' },
  { Icon: Trophy, iconClass: 'lucide lucide-trophy', valor: '100%', label: 'Qualidade Garantida', delay: '600ms' },
  { Icon: Truck, iconClass: 'lucide lucide-truck', valor: 'Ifood', label: 'Entrega Rapida', delay: '750ms' },
];

export default function Depoimentos() {
  return (
    <section className="py-20 bg-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O Que Dizem Sobre Nós</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {depoimentos.map(({ texto, inicial, nome, desde, delay }) => (
            <div
              key={nome}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FFD700] transform transition-all duration-700 hover:scale-105 translate-y-0 opacity-100"
              style={{ transitionDelay: delay }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="lucide lucide-star w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-[#2D2D2D] mb-4 italic">{texto}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F93131] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {inicial}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{nome}</p>
                  <p className="text-sm text-[#2D2D2D]">{desde}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-16">
          <a
            href="https://www.instagram.com/latokabueno"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#F93131] to-[#C41E3A] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 translate-y-0 opacity-100"
            style={{ transitionDelay: '600ms' }}
          >
            Veja Mais no Instagram
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map(({ Icon, iconClass, valor, label, delay }) => (
            <div
              key={label}
              className="text-center transform transition-all duration-700 translate-y-0 opacity-100"
              style={{ transitionDelay: delay }}
            >
              <div className="bg-[#F93131] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className={`${iconClass} w-8 h-8 text-white`} />
              </div>
              <p className="text-4xl font-bold text-[#F93131] mb-2">{valor}</p>
              <p className="text-white text-lg">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
