import { Wind, Boxes, Gauge, Wrench, Cable, Shield, Hexagon, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_ENCODED } from '../constants';

interface Product {
  Icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
}

const products: Product[] = [
  {
    Icon: Wind,
    title: 'Conexões Pneumáticas',
    desc: 'Conexões de engate rápido e precisão para sistemas de ar comprimido.',
    img: 'https://storage.lucasmendes.dev/site-sp/lojadasconexoes/Loja das conexões (1)/Conexões pneumáticas.jpg',
  },
  {
    Icon: Boxes,
    title: 'Acessórios Industriais',
    desc: 'Flanges, reduções, niples e uma vasta gama de acessórios essenciais.',
    img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lojadasconexoes%2Fflange.jpeg&version_id=null',
  },
  {
    Icon: Gauge,
    title: 'Válvulas Industriais',
    desc: 'Válvulas de esfera, borboleta e reguladores para controle preciso de fluxo.',
    img: 'https://storage.lucasmendes.dev/site-sp/lojadasconexoes/Loja das conexões (1)/Válvulas industriais.jpg',
  },
  {
    Icon: Wrench,
    title: 'Soluções e Ferramentas',
    desc: 'Itens complementares para manutenção e montagem de sistemas hidráulicos.',
    img: 'https://storage.lucasmendes.dev/site-sp/lojadasconexoes/Loja das conexões (1)/Soluções e ferramentas.jpg',
  },
  {
    Icon: Cable,
    title: 'Mangueiras Industriais',
    desc: 'Mangueiras de alta performance para diversas pressões e fluidos.',
    img: 'https://storage.lucasmendes.dev/site-sp/lojadasconexoes/mangueiras-coloridas-industriais.webp',
  },
  {
    Icon: Shield,
    title: 'Conexões em Inox',
    desc: 'Máxima resistência à corrosão e higiene para ambientes exigentes.',
    img: 'https://storage.lucasmendes.dev/site-sp/lojadasconexoes/Loja das conexões (1)/Conexões Inox.jpg',
  },
  {
    Icon: Hexagon,
    title: 'Conexões em Latão',
    desc: 'Robustez e durabilidade comprovada para conexões seguras.',
    img: 'https://storage.lucasmendes.dev/site-sp/lojadasconexoes/Loja das conexões (1)/Conexões latão.jpg',
  },
];

export default function Products() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-5">
        <Boxes size={400} className="text-[rgb(45,48,145)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(45,48,145)] mb-4">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-[rgb(248,232,48)] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na RA Loja das Conexões, oferecemos uma ampla variedade de itens com a qualidade que sua operação industrial exige.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ Icon, title, desc, img }) => (
            <div
              key={title}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col border-t-4 border-[rgb(45,48,145)]"
            >
              <div className="p-8 pb-4 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[rgb(45,48,145)]/10 rounded-xl">
                    <Icon size={32} className="text-[rgb(45,48,145)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(45,48,145)] leading-tight">{title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-1">{desc}</p>
              </div>
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 mt-2">
                <img
                  src={img}
                  alt={`Imagem de ${title}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(45,48,145)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50 group-hover:bg-white transition-colors">
                <a
                  href={WHATSAPP_ENCODED}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[rgb(45,48,145)] font-bold hover:text-[rgb(248,232,48)] transition-colors duration-300"
                >
                  Consultar Disponibilidade <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 bg-[rgb(45,48,145)] p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(248,232,48)] to-transparent"></div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">
            Não encontrou o que procura?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            Temos um estoque completo e podemos ajudar com demandas específicas.
          </p>
          <a
            href={WHATSAPP_ENCODED}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block bg-[rgb(248,232,48)] text-[rgb(45,48,145)] px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
