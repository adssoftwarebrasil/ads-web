import { Award, ChefHat, Heart, Users } from 'lucide-react';

const IMG = 'https://storage.lucasmendes.dev/site-sp/restaurante%20e%20pousada%20ovomaltine/img/';

const features = [
  {
    icon: <Award size={22} className="text-brand-orange" />,
    title: 'Mais de 50 Anos de Tradição',
    desc: 'Uma história que começou como lanchonete e evoluiu para um restaurante e pousada completo.',
  },
  {
    icon: <ChefHat size={22} className="text-brand-orange" />,
    title: 'Culinária de Interior',
    desc: 'Pratos diferenciados como rabada e língua de boi, feitos como nas cozinhas de antigamente.',
  },
  {
    icon: <Heart size={22} className="text-brand-orange" />,
    title: 'Atendimento Familiar',
    desc: 'Um ambiente acolhedor, administrado pela família, onde cada cliente é tratado como em casa.',
  },
  {
    icon: <Users size={22} className="text-brand-orange" />,
    title: 'Preço que Cabe no Bolso',
    desc: 'Comida boa, farta e barata. Porque qualidade não precisa custar caro.',
  },
];

const gallery = [
  { src: IMG + 'predio-laranja-ovomaltine-restaurante-e-hospedaria_831x493.webp', alt: 'Foto do restaurante 1' },
  { src: IMG + 'lanchonete-porta-adesivos-homem-balcao-vitrine_474x646.webp', alt: 'Foto do restaurante 2' },
  { src: IMG + 'fachada-laranja-ovomaltine-restaurante-pousada_854x574.webp', alt: 'Foto do restaurante 3' },
  { src: IMG + 'predio-laranja-restaurante-ovomaltine-rua-inclinada_483x374.webp', alt: 'Foto do restaurante 4' },
];

export default function Historia() {
  return (
    <section id="historia" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Nossa História
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark">
            Uma Tradição que Atravessa Gerações
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={IMG + 'fachada-laranja-ovomaltine-restaurante-e-pousada_860x557.webp'}
                alt="Fachada do Restaurante e Pousada Ovomaltine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <img
                src={IMG + 'pessoas-almo-ando-lanchonete-balc-o-ilumina-o-laranja_3000x4000.webp'}
                alt="Interior do restaurante"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-brand-orange text-white rounded-2xl px-5 py-3 shadow-lg hidden md:block">
              <div className="text-3xl font-bold font-display">50+</div>
              <div className="text-xs font-medium opacity-90">Anos de história</div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              O <strong className="text-brand-dark">Restaurante e Pousada Ovomaltine</strong> surgiu
              há mais de 50 anos como uma pequena lanchonete dedicada aos produtos da marca
              Ovomaltine. Mesmo após a saída da fábrica da região, decidimos manter o nome como forma
              de <strong className="text-brand-orange">preservar essa história e identidade</strong>.
              Com o passar do tempo, o espaço cresceu, tornando-se primeiro um restaurante e, mais
              tarde, também uma pousada.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Hoje continuamos oferecendo o tradicional achocolatado Ovomaltine, além de diversas
              opções como milk-shakes, sobremesas e sorvetes especiais.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Nossa culinária é inspirada na <strong className="text-brand-dark">comida caseira</strong>,
              com aquele sabor que lembra as receitas das avós e o tempero típico do interior. No
              cardápio você encontra pratos tradicionais e marcantes, como{' '}
              <strong className="text-brand-dark">rabada, língua de boi</strong> e outras
              especialidades preparadas com cuidado e qualidade.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Tudo isso em um ambiente acolhedor, com comida farta e preços acessíveis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-3 p-4 rounded-xl bg-brand-cream hover:bg-brand-warm-gray transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <div key={g.alt} className="rounded-2xl overflow-hidden shadow-md card-hover aspect-[4/3]">
              <img src={g.src} alt={g.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
