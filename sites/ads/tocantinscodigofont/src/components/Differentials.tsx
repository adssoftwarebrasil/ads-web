import { MapPin, Truck, DollarSign, Factory, Shield, Clock } from 'lucide-react';

const differentials = [
  {
    icon: MapPin,
    title: 'Localização Estratégica',
    description: 'Às margens da BR-153, facilitando o acesso e a logística de entrega para toda a região.',
  },
  {
    icon: Truck,
    title: 'Frota Própria',
    description: 'Transporte com veículos próprios garantindo agilidade, segurança e pontualidade nas entregas.',
  },
  {
    icon: DollarSign,
    title: 'Preços Competitivos',
    description: 'Revendedores diretos de fábrica, oferecendo os melhores preços sem intermediários.',
  },
  {
    icon: Factory,
    title: 'Direto da Fábrica',
    description: 'Produtos de primeira linha, adquiridos diretamente dos fabricantes com garantia de qualidade.',
  },
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description: '20 anos de experiência no mercado, oferecendo produtos testados e aprovados pelos clientes.',
  },
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    description: 'Respostas rápidas via WhatsApp, com envio de fotos e descrições detalhadas dos produtos.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-[rgb(51,71,144)] to-[rgb(45,62,84)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fimg%2Fbarris-azuis-empilhados.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <p className="text-[rgb(78,128,196)] font-semibold">Por Que Escolher</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Mais de duas décadas oferecendo soluções completas e confiáveis
            para o agronegócio regional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:transform hover:-translate-y-2"
              >
                <div className="bg-[rgb(78,128,196)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Atendemos Todo o Centro-Norte do Brasil
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Nossa área de cobertura inclui dezenas de cidades estratégicas no Tocantins,
                Pará e Mato Grosso, levando produtos de qualidade para produtores rurais,
                transportadores e pequenas indústrias.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tocantins', 'Pará', 'Mato Grosso'].map((state, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold border border-white/30"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fimg%2Ftoneis-azuis-caminhao.webp"
                alt="Entrega Tamboraria Tocantins"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
