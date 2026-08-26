import { Heart, Star, Users, ShoppingBag, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: 'Qualidade Premium',
    description:
      'Selecionamos cuidadosamente cada peça para garantir o máximo conforto e durabilidade. Tecidos nobres e acabamentos perfeitos.',
  },
  {
    icon: Star,
    title: 'Atendimento Diferenciado',
    description:
      'Nossa equipe está pronta para oferecer uma experiência personalizada e acolhedora. Cada cliente é único e especial.',
  },
  {
    icon: Users,
    title: 'Tamanhos Para Todos (Mulheres e Homens)',
    description:
      'Adulto do PP ao Plus Size e Infantil de 02 a 14 anos, masculino e feminino. Conforto e estilo sem limitações.',
  },
  {
    icon: ShoppingBag,
    title: 'Ambiente Aconchegante',
    description:
      'Loja localizada no coração de Florianópolis com um espaço pensado para proporcionar a melhor experiência de compra.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gradient-to-b from-[rgb(254,254,252)] to-[rgb(223,202,178)]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(102,78,56)] mb-4">
            Por Que Escolher a Moonlight?
          </h2>
          <p className="text-lg md:text-xl text-[rgb(102,78,56)]/70 max-w-3xl mx-auto">
            Há mais de 5 anos realizando sonhos e proporcionando noites de conforto absoluto. Nascemos de um sonho e
            crescemos com dedicação, qualidade e muito amor.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-[rgb(254,254,252)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[rgb(223,202,178)]/30"
              >
                <div className="bg-gradient-to-br from-[rgb(223,202,178)] to-[rgb(111,86,60)]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon width={28} height={28} className="text-[rgb(102,78,56)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(102,78,56)] mb-3">{feature.title}</h3>
                <p className="text-[rgb(102,78,56)]/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-[rgb(254,254,252)] rounded-3xl shadow-xl p-8 md:p-12 border border-[rgb(223,202,178)]/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[rgb(102,78,56)] mb-6">Nossa História</h3>
              <div className="space-y-4 text-[rgb(102,78,56)]/80 leading-relaxed">
                <p>
                  A Moonlight Pijamas nasceu de um sonho: criar um negócio próprio em um segmento onde sempre sentimos
                  falta de produtos verdadeiramente especiais.
                </p>
                <p>
                  Há mais de 5 anos, estamos no coração de Florianópolis oferecendo muito mais do que pijamas.
                  Oferecemos experiências, momentos de autocuidado e a certeza de que cada noite merece ser especial.
                </p>
                <p className="font-semibold text-[rgb(102,78,56)]">
                  Mantemos avaliação 5 estrelas no Google porque cada detalhe importa: desde a escolha do tecido até o
                  sorriso no atendimento.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[rgb(223,202,178)] to-[rgb(111,86,60)] rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fprodutos%2Ffamilia-pijamas-combinando.webp"
                alt="Família usando pijamas Moonlight"
                className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
