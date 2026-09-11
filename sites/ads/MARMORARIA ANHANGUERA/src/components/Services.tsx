import { Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

const services = [
  {
    title: 'Mármores',
    img: 'escada-marmore-branco.webp',
    desc: 'Elegância atemporal em mármores nacionais e importados com acabamento refinado e durabilidade excepcional.',
  },
  {
    title: 'Granitos',
    img: 'bancada-pedra-instalacao.webp',
    desc: 'Resistência e beleza natural. Ideal para áreas de alto tráfego, com variedade de cores e texturas exclusivas.',
  },
  {
    title: 'Quartzos',
    img: 'cozinha-moderna-minimalista.webp',
    desc: 'Tecnologia e sofisticação. Superfícies não porosas, alta resistência e design contemporâneo para ambientes modernos.',
  },
  {
    title: 'Bancadas',
    img: 'ilha-cozinha-marmore.webp',
    desc: 'Projetos sob medida para cozinhas e banheiros com precisão milimétrica e acabamento impecável.',
  },
  {
    title: 'Pias e Lavabos',
    img: 'pia-pedra-bege.webp',
    desc: 'Soluções elegantes em pedras nobres que transformam banheiros e lavabos em espaços de luxo.',
  },
  {
    title: 'Escadas e Revestimentos',
    img: 'escada-marmore-construcao.webp',
    desc: 'Revestimentos completos em pedras naturais para escadas, paredes e pisos com instalação profissional.',
  },
  {
    title: 'Banheiros Completos',
    img: 'banheiro-contemporaneo-elegante.webp',
    desc: 'Projetos personalizados que unem funcionalidade e estética premium com atenção a cada detalhe.',
  },
  {
    title: 'Cozinhas de Alto Padrão',
    img: 'cozinha-bancada-preta.webp',
    desc: 'Transformação completa de cozinhas com pedras nobres, criando ambientes modernos e valorizados.',
  },
];

const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/marmoraria%20anhanguera/img/';

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas em <span className="text-amber-700">Pedras Nobres</span>
          </h2>
          <p className="text-lg text-gray-600">
            Da escolha do material à instalação final, oferecemos serviços completos com qualidade incomparável e acabamento perfeito para valorizar seu investimento.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={IMG_BASE + s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform">
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de saber mais sobre os serviços de marmoraria.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento Personalizado
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
