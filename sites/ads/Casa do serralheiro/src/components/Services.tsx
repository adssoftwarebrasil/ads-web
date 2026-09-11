import { Zap, Grid3x3, Home, Box, Scissors, Building, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  Icon: LucideIcon;
  image: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    Icon: Zap,
    image:
      'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FCorte%20Plasma.jpg',
    title: 'Corte Plasma',
    desc: 'Processo industrial que utiliza um jato de gás ionizado, chamado plasma, para cortar materiais condutores de eletricidade',
  },
  {
    Icon: Grid3x3,
    image:
      'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FAlambrados.webp',
    title: 'Alambrados',
    desc: 'Telinhas de alambrado em diversas dimensões e espessuras',
  },
  {
    Icon: Home,
    image:
      'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FTelhas%20Te%CC%81rmicas.jpg',
    title: 'Telhas Térmicas',
    desc: 'Ideal para manutenção de temperatura em ambientes',
  },
  {
    Icon: Box,
    image:
      'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FVenda%20de%20Metalon.jpg',
    title: 'Venda de Metalon',
    desc: 'Disponibilizamos metalon de alta qualidade',
  },
  {
    Icon: Scissors,
    image:
      'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FCorte%20e%20Dobra%20de%20Chapas.jpg',
    title: 'Corte e Dobra de Chapas',
    desc: 'Serviço de alta precisão para suas chapas metálicas',
  },
  {
    Icon: Building,
    image:
      'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FEstruturas%20Meta%CC%81licas.jpg',
    title: 'Estruturas Metálicas',
    desc: 'Fabricação de estruturas metálicas para diversos projetos',
  },
  {
    Icon: Layers,
    image:
      'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FTelhas%20Galvalume.jpg',
    title: 'Telhas Galvalume',
    desc: 'Telhas leves e resistentes, ideais para qualquer construção',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore nossos serviços especializados em metalurgia. Na Casa do Serralheiro, oferecemos
            uma gama completa de produtos e serviços de serralheria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <service.Icon className="w-10 h-10 text-[rgb(122,21,25)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(122,21,25)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(90,15,18)] transition-all duration-300 font-bold"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
