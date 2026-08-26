import { Package, Hammer, Droplets, Zap, Paintbrush2, TreePine, Waves, Fish, Wrench, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

const BASE = 'https://storage.lucasmendes.dev/site-sp/carmem%20materiais%20para%20construcao/catalogo%20de%20produtos/';

const PRODUCTS: { title: string; desc: string; img: string; Icon: LucideIcon }[] = [
  { title: 'Construção Civil', desc: 'Cimento, Tijolo, Areia, Pedra, Telhas', img: BASE + 'telhas-de-amianto-empilhadas-em-terreno-de-pedrinhas_1280x720.webp', Icon: Package },
  { title: 'Ferragens e Ferramentas', desc: 'Martelos, Alicates, Parafusos, Chaves', img: BASE + 'kit-ferramentas-famastil-martelo-alicate-chave-fenda_720x1280.webp', Icon: Hammer },
  { title: 'Hidráulica', desc: 'Tubos, Conexões, Duchas, Pias', img: BASE + 'estande-produtos-hidraulicos-higiban-loja_720x1280.webp', Icon: Droplets },
  { title: 'Elétrica', desc: 'Cabos, Fios, Tomadas, Extensões', img: BASE + 'embalagens-de-extensao-eletrica-legrand-sort_720x1280.webp', Icon: Zap },
  { title: 'Tintas e Pintura', desc: 'Tintas, Pincéis, Rolos, Esmaltes', img: BASE + 'prateleira-de-tintas-atlas-com-pinceis-coloridos_1280x720.webp', Icon: Paintbrush2 },
  { title: 'Agropecuária', desc: 'Inseticidas, EPIs, Câmaras de Ar', img: BASE + 'prateleira-luvas-mascaras-epi-loja-ferramentas_960x1280.webp', Icon: TreePine },
  { title: 'Piscinas', desc: 'Cloro, Produtos HTH, Pace, Neoclor', img: BASE + 'prateleiras-produtos-piscina-loja-hth-pace-neoclor_720x1280.webp', Icon: Waves },
  { title: 'Caça, Pesca e Camping', desc: 'Chapéus, Artigos de Lazer ao Ar Livre', img: BASE + 'estande-de-chapeus-de-palha-em-loja_720x1280.webp', Icon: Fish },
  { title: 'Acabamentos', desc: 'Cerâmicas, Fechaduras, Pias, Vasos', img: BASE + 'mostruario-ceramicas-cinza-idealle-carmelo-fior_720x1280.webp', Icon: Wrench },
  { title: 'Locação de Equipamentos', desc: 'Andaimes, Escadas, Máquinas', img: BASE + 'escadas-aluminio-loja-ferramentas-prateleira-produtos_720x1280.webp', Icon: Truck },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2F44C8] font-bold text-sm uppercase tracking-widest mb-3">Portfólio Completo</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-4">Do básico ao acabamento</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">Encontre tudo que você precisa para sua obra, manutenção ou projeto em um único lugar.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-700 opacity-100 translate-y-0">
          {PRODUCTS.map(({ title, desc, img, Icon }) => (
            <a key={title} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="w-8 h-8 bg-[#2F44C8] rounded-lg flex items-center justify-center mb-2">
                  <Icon size={16} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-sm leading-tight mb-0.5">{title}</h3>
                <p className="text-white/60 text-xs leading-tight hidden sm:block">{desc}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-[#2F44C8] text-[#2F44C8] font-bold px-8 py-3.5 rounded-xl hover:bg-[#2F44C8] hover:text-white transition-all duration-300">
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
