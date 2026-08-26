import { Award, Heart, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Award,
    iconBg: 'bg-[rgb(253,133,17)]',
    title: 'Excelência Comprovada',
    text: 'Mais de duas décadas de experiência garantindo segurança e pontualidade em cada viagem.',
    extraClass: '',
  },
  {
    icon: Heart,
    iconBg: 'bg-[rgb(6,172,50)]',
    title: 'Compromisso Social',
    text: 'Conectando comunidades ribeirinhas e promovendo desenvolvimento sustentável na região.',
    extraClass: '',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-[rgb(41,41,41)]',
    title: 'Crescimento Contínuo',
    text: 'Frota moderna e em expansão para atender com qualidade crescente demanda amazônica.',
    extraClass: 'sm:col-span-2 lg:col-span-1',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(41,41,41)] mb-4">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-[rgb(253,133,17)] mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[rgb(41,41,41)] leading-relaxed">
              Nas águas profundas do <strong>Rio Madeira</strong> nasceu a{' '}
              <strong>Coimbra Navegações</strong>, uma empresa moldada pela força
              de quem vive e acredita no poder transformador dos rios. Desde
              2004, quando iniciou suas atividades em Manaus/AM, dedicamo-nos a
              reduzir distâncias, aproximar comunidades e sustentar o fluxo de
              oportunidades que faz a Amazônia pulsar.
            </p>
            <p className="text-lg text-[rgb(41,41,41)] leading-relaxed">
              De um simples barco regional de madeira — o emblemático{' '}
              <strong>"Cmte David Coimbra"</strong> — surgiu um sonho que cresceu,
              evoluiu e tomou forma. Hoje, mais de vinte anos depois, esse sonho
              se materializa em uma operação sólida e moderna, composta por{' '}
              <strong>dois navios</strong> e <strong>dois ferry boats</strong>.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbarco-branco-verde.webp"
              alt="Embarcação Coimbra Navegações"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-[rgb(6,172,50)] text-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-3xl font-bold mb-1">+20 anos</p>
              <p className="text-sm">de tradição na Amazônia</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[rgb(6,172,50)]/10 to-[rgb(253,133,17)]/10 rounded-2xl p-8 sm:p-12 mb-16">
          <p className="text-lg text-[rgb(41,41,41)] leading-relaxed text-center max-w-4xl mx-auto">
            Mais do que transportar passageiros, encomendas e cargas, a{' '}
            <strong>Coimbra Navegações</strong> transporta esperança,
            desenvolvimento e dignidade. A cada embarque, reafirmamos nosso
            propósito de impulsionar a mobilidade da Amazônia, fortalecer o
            escoamento produtivo e promover o crescimento econômico das
            comunidades que dependem do rio para viver, trabalhar e prosperar.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`bg-white border-2 border-[rgb(160,180,187)]/30 rounded-xl p-8 hover:border-[rgb(6,172,50)] transition-all hover:shadow-xl ${value.extraClass}`}
              >
                <div
                  className={`${value.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(41,41,41)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[rgb(160,180,187)] leading-relaxed">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
