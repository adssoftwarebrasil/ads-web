import { Heart, Store, TrendingUp, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Paixão',
    text: 'Amor genuíno pelos animais e compromisso com o bem-estar deles',
    variant: 'light' as const,
  },
  {
    icon: Store,
    title: 'Qualidade',
    text: 'Ambiente limpo, organizado e produtos cuidadosamente selecionados',
    variant: 'dark' as const,
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    text: '5 anos de expansão constante e confiança conquistada',
    variant: 'light' as const,
  },
  {
    icon: Users,
    title: 'Comunidade',
    text: 'Atendemos clientes em toda região com dedicação e carinho',
    variant: 'dark' as const,
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(54,59,27)] mb-4">
            Conheça Nossa <span className="text-[rgb(186,213,51)]">História</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5 anos de dedicação ao bem-estar animal com atendimento excepcional
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-[rgb(186,213,51)]/10 rounded-3xl"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/agrorust-02.webp"
              alt="Loja Agro Rusticano"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-[rgb(186,213,51)]/10 inline-block px-4 py-2 rounded-full">
              <span className="text-[rgb(54,59,27)] font-semibold">Nossa Paixão pelos Animais</span>
            </div>
            <h3 className="text-3xl font-bold text-[rgb(54,59,27)]">Bem-vindo à Agro Rusticano!</h3>
            <p className="text-gray-700 leading-relaxed">
              Somos uma loja de rações localizada na cidade de Jacareí, com uma história recente, mas
              marcante. Em apenas <strong>5 anos de atuação</strong>, conquistamos a confiança e a
              preferência de nossos clientes, oferecendo um serviço diferenciado que une{' '}
              <strong>atendimento de excelência</strong>, organização impecável e um ambiente limpo e
              acolhedor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Na Agro Rusticano, acreditamos que os animais são membros da família, e nosso compromisso
              é oferecer os melhores produtos e serviços para garantir o bem-estar deles. Trabalhamos
              para criar uma experiência de compra única, onde você encontra tudo o que precisa em um só
              lugar, com <strong>praticidade e confiança</strong>.
            </p>
            <div className="bg-[rgb(54,59,27)] text-white p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-[rgb(186,213,51)]">Uma Rede de Confiança</h4>
              <p className="text-sm leading-relaxed">
                Além de atender ao público local em nossa loja física, também somos distribuidores de
                produtos para diversos municípios da região: Mogi das Cruzes, Biritiba Mirim, Salinópolis,
                Igaratá, Santa Isabel, Joanópolis, Piracaia, Nazaré Paulista e até algumas áreas da
                capital paulista.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            const isLight = v.variant === 'light';
            return (
              <div
                key={v.title}
                className={`bg-gradient-to-br ${
                  isLight
                    ? 'from-[rgb(186,213,51)] to-[rgb(166,193,31)] text-[rgb(54,59,27)]'
                    : 'from-[rgb(54,59,27)] to-[rgb(34,39,17)] text-white'
                } p-8 rounded-2xl hover:shadow-2xl transition-all hover:scale-105`}
              >
                <Icon
                  width={40}
                  height={40}
                  className={`mb-4 ${isLight ? '' : 'text-[rgb(186,213,51)]'}`}
                />
                <h4 className="text-2xl font-bold mb-2">{v.title}</h4>
                <p className="text-sm">{v.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(186,213,51)]/20 to-[rgb(186,213,51)]/5 p-8 md:p-12 rounded-3xl border-2 border-[rgb(186,213,51)]/30">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[rgb(54,59,27)] mb-4">O Que Nos Move</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Nossa missão é atender com qualidade e dedicação tanto os tutores de animais de estimação
              quanto os lojistas que buscam produtos de confiança para seus negócios. Queremos estar
              presentes nos momentos mais importantes da vida do seu pet, oferecendo soluções que façam a
              diferença no dia a dia.
            </p>
            <p className="text-[rgb(54,59,27)] font-bold text-xl mt-6">
              Na Agro Rusticano, não vendemos apenas produtos; oferecemos soluções para o bem-estar
              animal!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
