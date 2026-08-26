import { ArrowRight } from 'lucide-react'

const WHATSAPP_INTEREST = 'https://wa.me/5562984256606?text=Olá!%20Tenho%20interesse%20em%20'

const categories = [
  {
    title: 'Material Escolar',
    description:
      'Cadernos, lápis, canetas, borrachas, apontadores, mochilas e kits completos para volta às aulas.',
    image: '/img/material-escolar.webp',
    waQuery: 'material%20escolar',
  },
  {
    title: 'Brinquedos',
    description:
      'Carrinhos, bonecas, conjuntos temáticos, brinquedos educativos e colecionáveis para todas as idades.',
    image: '/img/brinquedos.webp',
    waQuery: 'brinquedos',
  },
  {
    title: 'Maquiagem Infantil',
    description:
      'Kits de maquiagem e beleza infantil com embalagens encantadoras, perfeitos para presentes.',
    image: '/img/maquiagem.webp',
    waQuery: 'maquiagem%20infantil',
  },
  {
    title: 'Bolsas e Acessórios',
    description:
      'Bolsas femininas de todos os estilos — de dia a dia a ocasiões especiais, com preços acessíveis.',
    image: '/img/bolsas.webp',
    waQuery: 'bolsas%20e%20acessórios',
  },
  {
    title: 'Aviamentos e Bazar',
    description:
      'Linhas, zíperes, elásticos, barbantes, botões, fitas e tudo para costura, bordado e artesanato.',
    image: '/img/aviamentos.jpeg',
    waQuery: 'aviamentos%20e%20bazar',
  },
  {
    title: 'Material de Escritório',
    description:
      'Grampeadores, perfuradores, pastas, suprimentos e tudo para equipar seu escritório ou empresa.',
    image: '/img/escritorio.jpeg',
    waQuery: 'material%20de%20escritório',
  },
]

export default function Categories() {
  return (
    <section id="categorias" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Nossas Categorias
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black leading-tight">
            Tudo em um só lugar
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Do material escolar às bolsas de grife, dos brinquedos aos aviamentos — o Bazar do Dario
            tem o que você precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <a
              key={category.title}
              href={`${WHATSAPP_INTEREST}${category.waQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:shadow-brand-blue/15 transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-brand-black">{category.title}</h3>
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{category.description}</p>
                <p className="mt-4 text-brand-blue text-xs font-semibold">
                  Perguntar disponibilidade →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
