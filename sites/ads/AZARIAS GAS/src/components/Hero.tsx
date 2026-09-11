import { Check, Shield, Clock } from 'lucide-react';

const HERO_IMG =
  'https://storage.lucasmendes.dev/site-sp/azaria%20gas%2Fimg%2Fhero.webp';

const WHATSAPP_ORDER =
  'https://wa.me/5516992821647?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido';

const features = [
  { Icon: Check, iconClass: 'lucide-check', text: 'Entrega em até 30 minutos' },
  {
    Icon: Shield,
    iconClass: 'lucide-shield',
    text: 'Segurança e qualidade garantida',
  },
  {
    Icon: Clock,
    iconClass: 'lucide-clock',
    text: 'Atendimento até 21h30 (domingos até 15h)',
  },
];

const stats = [
  { value: '12+', label: 'Anos de Experiência' },
  { value: '1000+', label: 'Clientes Satisfeitos' },
  { value: '30min', label: 'Entrega Rápida' },
];

function Hero() {
  const scrollToProdutos = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-[rgb(250,245,240)] overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url("${HERO_IMG}")` }}
      ></div>
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 opacity-100 translate-y-0">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-[rgb(219,138,69)]/10 text-[rgb(219,138,69)] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              12 anos de tradição
            </div>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Gás de qualidade{' '}
              <span className="text-[rgb(219,138,69)]">na sua porta</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Entrega rápida e segura de botijões P13, P20 e P45. Ligou, Chegou!
            </p>
            <div className="space-y-4 mb-8">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center justify-center lg:justify-start space-x-3"
                >
                  <f.Icon
                    className={`lucide ${f.iconClass} text-[rgb(219,138,69)] w-6 h-6 flex-shrink-0`}
                  />
                  <span className="text-gray-700 font-medium">{f.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_ORDER}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(219,138,69)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(199,118,49)] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[rgb(219,138,69)]/20"
              >
                Peça Seu Gás Agora
              </a>
              <button
                onClick={scrollToProdutos}
                className="border-2 border-[rgb(219,138,69)] text-[rgb(219,138,69)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(219,138,69)] hover:text-white transition-all duration-300"
              >
                Ver Produtos
              </button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="animate-float">
              <img
                src={HERO_IMG}
                alt="Botijão de gás Azarias"
                className="w-full h-auto rounded-3xl shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 lg:mt-32">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
            >
              <div className="text-4xl font-bold text-[rgb(219,138,69)] mb-2">
                {s.value}
              </div>
              <div className="text-gray-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
