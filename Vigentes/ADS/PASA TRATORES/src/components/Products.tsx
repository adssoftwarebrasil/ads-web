import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageCircle } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/pasa-tratores/produtos/';

const products = [
  {
    img: BASE + 'bomba-injetora-diesel-cinza-nova-em-fundo-branco_960x1280.webp',
    name: 'Bomba Injetora Diesel',
    desc: 'Cummins / Komatsu — nova, testada e com procedência garantida.',
    tag: 'Alta Demanda',
  },
  {
    img: BASE + 'bomba-direcao-hidraulica-aluminio-eixo-estriado_960x1280.webp',
    name: 'Bomba de Direção Hidráulica',
    desc: 'Alumínio com eixo estriado para escavadeiras e tratores pesados.',
    tag: '',
  },
  {
    img: BASE + 'adaptador-filtro-oleo-aluminio-cumins-3304773_960x1280.webp',
    name: 'Adaptador Filtro de Óleo',
    desc: 'Alumínio — Cummins ref. 3304773. Encaixe preciso, durabilidade comprovada.',
    tag: '',
  },
  {
    img: BASE + 'pistao-aneis-motor-peca-prata-novo_960x1280.webp',
    name: 'Pistão com Anéis de Motor',
    desc: 'Peças novas para motores Komatsu, Cummins QSB, NT855 e NTA855.',
    tag: 'Mais Vendido',
  },
  {
    img: BASE + 'engrenagem-metalica-prata-com-furos-e-dentes_960x1280.webp',
    name: 'Engrenagem Metálica',
    desc: 'Usinada com precisão para linha amarela e equipamentos industriais.',
    tag: '',
  },
  {
    img: BASE + 'kit-de-vedacoes-hidraulicas-varias-cores_960x1280.webp',
    name: 'Kit de Vedações Hidráulicas',
    desc: 'Conjunto completo para cilindros e sistemas hidráulicos de máquinas pesadas.',
    tag: '',
  },
  {
    img: BASE + 'eixo-carda-metalico-industrial-fundo-branco_960x1280.webp',
    name: 'Eixo Cardã Metálico',
    desc: 'Transmissão de força com acabamento industrial de alta qualidade.',
    tag: '',
  },
  {
    img: BASE + 'mancal-bronze-com-estrias-em-fundo-branco_960x1280.webp',
    name: 'Mancal de Bronze',
    desc: 'Com estrias para suporte de eixos em ambientes de alta carga.',
    tag: '',
  },
  {
    img: BASE + 'flange-metalica-amarela-com-furos-circulares_960x1280.webp',
    name: 'Flange Metálica',
    desc: 'Conexão estrutural com furos precisos para montagem em máquinas pesadas.',
    tag: '',
  },
  {
    img: BASE + 'caixa-amarela-mecanismo-alavanca-industrial_960x1280.webp',
    name: 'Mecanismo de Alavanca Industrial',
    desc: 'Conjunto de acionamento para equipamentos de linha amarela.',
    tag: '',
  },
  {
    img: BASE + 'haste-metalica-prateada-com-entalhe-e-fenda_960x1280.webp',
    name: 'Haste Metálica de Precisão',
    desc: 'Com entalhe e fenda para fixação e transmissão de movimento.',
    tag: '',
  },
  {
    img: BASE + 'pe-a-maquina-amarela-furo-azul-retangular_960x1280.webp',
    name: 'Peça de Máquina Pesada',
    desc: 'Componentes estruturais para equipamentos da linha amarela e construção.',
    tag: '',
  },
];

function ProductCard({ img, name, desc, tag, index }: typeof products[0] & { index: number }) {
  const { ref, visible } = useScrollReveal(0.1);
  const waMsg = encodeURIComponent(`Olá! Tenho interesse na peça: *${name}*. Podem me ajudar?`);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-brand-dark text-base leading-snug">{name}</h3>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed flex-1">{desc}</p>
        <a
          href={`http://wa.me/556699586377?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 bg-brand-dark text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-brand-red transition-colors duration-200"
        >
          <MessageCircle size={15} />
          Consultar Disponibilidade
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="produtos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Portfólio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            Peças que Movem o Agro e a Construção
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Estoque amplo e importação direta. Se não temos, buscamos — com agilidade e procedência comprovada.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="http://wa.me/556699586377?text=Olá!%20Estou%20buscando%20uma%20peça%20específica%20e%20gostaria%20de%20consultar%20disponibilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-200 active:scale-95"
          >
            <MessageCircle size={18} />
            Não encontrou? Consulte pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
