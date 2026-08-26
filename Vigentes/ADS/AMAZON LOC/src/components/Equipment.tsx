import { MessageCircle, Sparkles } from 'lucide-react';
import { waLink } from '../lib/site';

const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fimg%2Fprodutos%2F';
const VID_BASE = 'https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fnovidades%2F';

interface Product {
  name: string;
  file: string;
}

const products: Product[] = [
  { name: 'Alisadora de Concreto', file: 'alisadora-de-concreto.webp' },
  { name: 'Andaimes', file: 'andaimes.webp' },
  { name: 'Betoneira (Elétrica/Gasolina)', file: 'betoneira-(eletrico-gasolina).webp' },
  { name: 'Bomba de Mangote', file: 'bomba-de-mangote.webp' },
  { name: 'Compactador (Elétrico/Gasolina)', file: 'compactador-(eletrico-gasolina).webp' },
  { name: 'Cortador de Piso', file: 'cortador-de-piso.webp' },
  { name: 'Cortadora de Piso e Asfalto', file: 'cortadora-de-piso-e-asfalto.webp' },
  { name: 'Escoras Metálicas', file: 'escoras-metalicas.webp' },
  { name: 'Furadeira de Impacto', file: 'rompedor-5kg.webp' },
  { name: 'Guincho de Coluna Elétrico', file: 'guincho-de-coluna-eletrico.webp' },
  { name: 'Lixadeira de Parede', file: 'lixadeira-de-parede.webp' },
  { name: 'Martelo Rompedor 13kg', file: 'martelo-rompedor-13kg.webp' },
  { name: 'Martelo Rompedor 30kg', file: 'martelo-rompedor-30-kg.webp' },
  { name: 'Motobomba', file: 'motobomba.webp' },
  { name: 'Perfuratriz', file: 'perfuratriz.webp' },
  { name: 'Placa Vibratória', file: 'placa-vibratoria.webp' },
  { name: 'Politriz de Piso', file: 'politriz-de-piso.webp' },
  { name: 'Rompedor 5kg', file: 'rompedor-5kg.webp' },
  { name: 'Serra Circular', file: 'serra-circular.webp' },
  { name: 'Serra de Corte', file: 'serra-de-corte.webp' },
  { name: 'Serra Esquadria', file: 'serra-esquadria.webp' },
  { name: 'Soprador Costal', file: 'soprador-costal.webp' },
  { name: 'Vibrador de Imersão Manual', file: 'vibrador-de-imersao-manual.webp' },
];

interface Novidade {
  video: string;
  title: string;
  desc: string;
}

const novidades: Novidade[] = [
  {
    video: 'novidade-escada.mp4',
    title: 'Nova Escada Extensiva',
    desc: 'Chegaram novos modelos para garantir segurança e alcance em sua obra.',
  },
  {
    video: 'novidade-moto-serra.mp4',
    title: 'Motoserra 61 Husqvarna',
    desc: 'Alta potência para cortes precisos. Equipamentos revisados e seguros.',
  },
];

const cardClass =
  'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]';

export default function Equipment() {
  return (
    <section id="equipamentos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(63,59,116)] mb-4">
            Equipamentos Disponíveis para Locação
          </h2>
          <p className="text-lg text-gray-600">
            Equipamentos de alta qualidade, revisados e prontos para sua obra
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {products.map((p) => (
            <div key={p.name} className={cardClass}>
              <div className="aspect-[4/3]">
                <img
                  src={`${IMG_BASE}${p.file}`}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-4 min-h-[56px] flex items-center justify-center">
                  {p.name}
                </h3>
                <a
                  href={waLink(`Gostaria de orçamento para: ${encodeURIComponent(p.name)}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[rgb(13,133,77)] text-white px-4 py-3 rounded-lg hover:bg-[rgb(11,110,64)] hover:scale-105 transition-all duration-300 shadow-md w-full"
                >
                  <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                  <span className="font-semibold">Solicitar Orçamento</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[rgb(13,133,77)]/10 text-[rgb(13,133,77)] text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="lucide lucide-sparkles w-4 h-4" />
              Lançamentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(63,59,116)]">
              Novidades na AmazonLoc
            </h2>
            <p className="text-gray-600 mt-2">Confira os novos equipamentos em ação</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {novidades.map((n) => (
              <div
                key={n.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[340px] border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-[9/16] bg-black">
                  <video controls className="w-full h-full object-cover" playsInline preload="metadata">
                    <source src={`${VID_BASE}${n.video}`} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(63,59,116)] mb-2">{n.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{n.desc}</p>
                  <a
                    href={waLink(`Vi o vídeo sobre ${encodeURIComponent(n.title)} e gostaria de saber mais.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-[rgb(63,59,116)] text-white px-6 py-3 rounded-xl hover:bg-[rgb(50,47,93)] transition-all duration-300 shadow-md w-full text-sm font-semibold"
                  >
                    <MessageCircle className="lucide lucide-message-circle w-4 h-4" />
                    <span>Tenho interesse</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
