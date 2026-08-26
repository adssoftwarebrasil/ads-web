import { Award, Users, Clock, Shield, type LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5538999719665';
const INSTAGRAM = 'https://www.instagram.com/noroesteoxigenio/';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'Qualidade Certificada',
    description: 'Produtos com certificação e garantia de procedência',
  },
  {
    icon: Users,
    title: 'Atendimento Excelente',
    description: 'Equipe treinada e pronta para atender você',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Agilidade no atendimento e entrega em Unaí',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Produtos testados e seguros para seu uso',
  },
];

const aboutImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fatualizadas%2Fcaminhoes-carregados.webp',
    alt: 'Caminhões da nossa frota de entrega prontos para atendimento em Unaí.',
    className: 'rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fatualizadas%2Finterno-loja.webp',
    alt: 'Interior da nossa loja em Unaí com amplo estoque e showroom de equipamentos.',
    className: 'rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover mt-12 lg:mt-16',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Fcilindros-oxigenio-empilhados.webp',
    alt: 'Grande estoque de cilindros de oxigênio medicinal e industrial.',
    className: 'rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Floja-cilindros-equipamentos-frente.webp',
    alt: 'Frente da nossa loja em Unaí com equipamentos e produtos para solda.',
    className: 'rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover mt-12 lg:mt-16',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-6">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Sua Referência em Unaí para Oxigênio e Equipamentos
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A <strong>Noroeste Oxigênio</strong> é a distribuidora líder em Unaí para fornecimento
              de oxigênio medicinal, industrial e equipamentos relacionados. Nossa missão é garantir
              que você tenha acesso rápido e confiável aos produtos essenciais para sua saúde e
              trabalho.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos especializados em produtos para soldagem, oferecendo eletrodos, arames MIG e
              máquinas de solda de alta qualidade. Nosso compromisso é com a segurança, qualidade e
              satisfação total dos nossos clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
              >
                Fale com Nossa Equipe
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all shadow-lg border-2 border-blue-600 font-semibold"
              >
                Siga no Instagram
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {aboutImages.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} className={img.className} />
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
