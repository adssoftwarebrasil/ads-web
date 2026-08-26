import { Globe, TrendingUp, Recycle, Truck, Wrench, Lightbulb, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Globe,
    slug: 'globe',
    title: 'Compromisso com o Meio Ambiente',
    text: 'Contribuímos para a redução de resíduos e proteção da natureza.',
  },
  {
    icon: TrendingUp,
    slug: 'trending-up',
    title: 'Melhoria Contínua',
    text: 'Estamos sempre buscando aprimorar nossos serviços.',
  },
  {
    icon: Recycle,
    slug: 'recycle',
    title: 'Compromisso com a Sustentabilidade',
    text: 'Trabalhamos para um futuro mais verde e sustentável.',
  },
  {
    icon: Truck,
    slug: 'truck',
    title: 'Serviços de Coleta e Destinação',
    text: 'Coleta segura e destinação adequada de resíduos Eletroeletrônicos.',
  },
  {
    icon: Wrench,
    slug: 'wrench',
    title: 'Manutenção em Informática',
    text: 'Serviços de reparo e manutenção em equipamentos Eletroeletrônicos.',
  },
  {
    icon: Lightbulb,
    slug: 'lightbulb',
    title: 'Soluções Inovadoras',
    text: 'Implementamos a inovação em processos de reciclagem.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[rgb(248,249,250)] to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(53,64,66)] mb-4">
            Por Que Escolher a Reciclatech?
          </h2>
          <p className="text-base lg:text-xl text-[rgb(64,77,79)] max-w-3xl mx-auto">
            Entenda os motivos pelos quais nossa empresa se destaca na gestão de resíduos
            eletroeletrônicos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white border border-[rgb(26,157,39)] border-opacity-20 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-opacity-60 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <Icon
                  className={`lucide lucide-${r.slug} w-12 h-12 text-[rgb(26,157,39)] mb-4`}
                />
                <h3 className="text-xl font-bold text-[rgb(53,64,66)] mb-3">{r.title}</h3>
                <p className="text-[rgb(64,77,79)] leading-relaxed">{r.text}</p>
              </div>
            );
          })}
        </div>
        <div
          className="relative rounded-2xl overflow-hidden mt-16"
          style={{
            backgroundImage:
              'url("https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2FSolicite%20um%20Orc%CC%A7amento.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center py-16 lg:py-20 px-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Solicite um Orçamento</h3>
            <a
              href="https://wa.me/5541999600458"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[rgb(26,157,39)] text-white px-8 lg:px-10 py-4 rounded-lg text-base lg:text-lg font-semibold hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="lucide lucide-message-circle w-5 h-5 mr-2" />
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
