import { WhatsAppIcon, WHATSAPP_URL } from './icons';

interface Service {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    title: 'Portões de Alumínio',
    description:
      'Portões deslizantes, basculantes e de abrir em alumínio de alta durabilidade. Modelos exclusivos para cada necessidade com acabamento impecável.',
    image:
      'https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/portao-aluminio-deslizante-grade-horizontal-cinza_1200x1600.webp',
    tags: ['Deslizante', 'Basculante', 'De Abrir'],
  },
  {
    title: 'Portas de Vidro Temperado',
    description:
      'Portas de vidro temperado para residências e comércios. Elegância e segurança em um só produto, com instalação profissional garantida.',
    image:
      'https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/porta-de-vidro-corredica-fachada-verde_225x225.webp',
    tags: ['Temperado', 'Residencial', 'Comercial'],
  },
  {
    title: 'Box de Vidro para Banheiro',
    description:
      'Box de vidro temperado que transforma seu banheiro em um ambiente moderno e sofisticado. Instalação precisa com vedação perfeita.',
    image:
      'https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/box-de-vidro-cinza-com-nichos-no-banheiro_225x225.webp',
    tags: ['Temperado', 'Cantoneira', 'Frontal'],
  },
  {
    title: 'Janelas de Vidro',
    description:
      'Janelas de alumínio e vidro temperado com máximo isolamento acústico e térmico. Projetos sob medida para qualquer ambiente.',
    image:
      'https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/janela-deslizante-cortina-bege-vidro-esverdeado_404x404.webp',
    tags: ['Deslizante', 'De Abrir', 'Basculante'],
  },
  {
    title: 'Portas de Alumínio',
    description:
      'Portas de alumínio em diversos modelos e acabamentos. Resistência, beleza e proteção para a entrada da sua casa ou empresa.',
    image:
      'https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/porta-aluminio-branca-faixas-douradas-casa_473x1024.webp',
    tags: ['Branca', 'Marrom', 'Personalizada'],
  },
  {
    title: 'Espelhos e Vidros em Geral',
    description:
      'Espelhos, prateleiras de vidro, balcões, guarda-corpos e cortinas de vidro. Soluções completas em vidraçaria para todos os ambientes.',
    image:
      'https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/banheiro-pequeno-com-box-e-revestimento-tijolinho_183x275.webp',
    tags: ['Espelhos', 'Prateleiras', 'Guarda-corpo'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-blue text-sm font-bold tracking-widest uppercase mb-3">
            O Que Fazemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-5">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Do projeto à instalação, oferecemos soluções completas em vidros e alumínio com qualidade
            certificada e garantia em tudo que fazemos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 border border-gray-100 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full"
                  >
                    Pedir Orçamento
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-brand-dark font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-brand-blue bg-brand-blue/8 px-3 py-1 rounded-full border border-brand-blue/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a
            href="http://wa.me/559888677636?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Center%20Vidros%20e%20Alumínio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-brand-blue/30"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
