import { FileText, Instagram, Video, Code, type LucideIcon } from 'lucide-react';

interface SolutionCard {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  subPrice?: string;
}

const cards: SolutionCard[] = [
  {
    icon: FileText,
    title: 'Branding',
    description: 'Criação/Remodelação de Marca',
    price: 'R$ 3.000',
  },
  {
    icon: Instagram,
    title: 'Gestão de Redes Sociais',
    description: 'Gestão + Criação de Conteúdo',
    price: 'R$ 1.000/mês',
    subPrice: '+ R$ 80/post',
  },
  {
    icon: Video,
    title: 'Vídeos Curtos',
    description: 'Reels/Shorts profissionais',
    price: 'R$ 169',
    subPrice: '/vídeo',
  },
  {
    icon: Code,
    title: 'Desenvolvimento Sob Medida',
    description: 'Software/Sistemas personalizado para suas necessidades',
    price: 'Sob cotação',
  },
];

const players = ['Coca-Cola', 'Netflix', 'Mercado Libre', 'KSI'];

export default function AdditionalSolutionsSection() {
  return (
    <section className="py-20 bg-white" aria-label="Soluções Adicionais">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Soluções Adicionais (Sob Demanda)</h2>
        <p className="text-lg text-slate-600 mb-12">
          Caso precise, também oferecemos soluções complementares para sua estratégia:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-400 transition-all"
              >
                <Icon className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{card.description}</p>
                <div className="font-bold text-lg text-slate-900">{card.price}</div>
                {card.subPrice && <div className="text-sm text-slate-500">{card.subPrice}</div>}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Desenvolvemos Software/Sistemas Sob Medida
          </h3>
          <p className="text-lg text-slate-300 mb-8 text-center max-w-3xl mx-auto">
            Nossa expertise técnica já foi utilizada pelos principais players do mercado. Desenvolvemos soluções
            personalizadas para empresas de todos os portes.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {players.map((player) => (
              <div key={player} className="text-center">
                <div className="text-xl font-bold text-blue-400">{player}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 mt-8 text-sm">
            *Sistemas desenvolvidos por nossa equipe já foram usados por essas organizações
          </p>
        </div>
      </div>
    </section>
  );
}
