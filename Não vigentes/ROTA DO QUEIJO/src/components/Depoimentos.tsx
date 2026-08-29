import { Quote, Star } from 'lucide-react';

interface Depoimento {
  texto: string;
  nome: string;
}

const depoimentos: Depoimento[] = [
  {
    texto:
      '"A Rota do Queijo é um estabelecimento completo e muito diversificado!!! Todos os produtos são de excelente qualidade, o atendimento impecável… Sem contar as mesas gastronômicas que são um show a parte!!! Eles são incríveis… vale cada centavo investido!!! Parabéns a toda a equipe da Rota do Queijo!!!"',
    nome: 'Ilana Macedo',
  },
  {
    texto:
      '"Maravilhosa! Atendimento muito bom e produtos de ótima qualidade! O almoço e as sobremesas deliciosos."',
    nome: 'Denise Paredi',
  },
  {
    texto:
      '"Serviço de excelência!! Equipe qualificada e tudo muito gostoso e de bom gosto!!!"',
    nome: 'Érika Rocha',
  },
];

export default function Depoimentos() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[rgb(254,254,254)] to-[rgb(247,247,247)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(197,162,3)] font-bold text-sm tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(32,29,30)] mt-3 mb-6 leading-tight">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-[rgb(32,29,30)]/70 text-lg max-w-2xl mx-auto">
            A satisfação de nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre
            nossos serviços.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {depoimentos.map((d) => (
            <div
              key={d.nome}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[rgb(197,162,3)] rounded-full flex items-center justify-center shadow-lg">
                <Quote width={28} height={28} className="text-[rgb(32,29,30)]" />
              </div>
              <div className="flex mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    width={20}
                    height={20}
                    className="text-[rgb(197,162,3)] fill-current"
                  />
                ))}
              </div>
              <p className="text-[rgb(32,29,30)]/80 leading-relaxed mb-6 italic">{d.texto}</p>
              <div className="border-t border-[rgb(197,162,3)]/20 pt-6">
                <h4 className="font-bold text-[rgb(32,29,30)] text-lg">{d.nome}</h4>
                <p className="text-[rgb(197,162,3)] text-sm font-semibold">Cliente</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-[rgb(32,29,30)]/70 text-sm">
            Avaliação média: <span className="font-bold text-[rgb(197,162,3)] text-lg">5.0</span>{' '}
            <span className="text-[rgb(197,162,3)]">★★★★★</span>
          </p>
        </div>
      </div>
    </section>
  );
}
