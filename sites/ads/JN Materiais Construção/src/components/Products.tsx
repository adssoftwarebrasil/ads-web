import { Layers, Droplets, Zap, Wrench, Paintbrush, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  image: string;
  title: string;
  text: string;
  items: string[];
}

const products: Product[] = [
  {
    icon: Layers,
    image:
      'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ceramica-cordova-promocao.webp',
    title: 'Cerâmicas e Revestimentos',
    text: 'Ampla variedade de cerâmicas para pisos e paredes com os melhores acabamentos.',
    items: ['Pisos Cerâmicos', 'Revestimentos', 'Porcelanatos', 'Pastilhas'],
  },
  {
    icon: Droplets,
    image:
      'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/torneiras-embaladas-loja.webp',
    title: 'Louças e Metais',
    text: 'Torneiras, chuveiros, cubas e vasos sanitários das melhores marcas.',
    items: ['Torneiras', 'Chuveiros', 'Cubas', 'Vasos Sanitários'],
  },
  {
    icon: Zap,
    image:
      'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/prateleira-tomadas-organizacao.webp',
    title: 'Material Elétrico',
    text: 'Tudo em elétrica: tomadas, interruptores, lâmpadas e mais.',
    items: ['Tomadas', 'Interruptores', 'Lâmpadas', 'Fios e Cabos'],
  },
  {
    icon: Wrench,
    image:
      'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ferramentas-penduradas-loja.webp',
    title: 'Ferramentas',
    text: 'Ferramentas profissionais e acessórios para construção.',
    items: [
      'Ferramentas Manuais',
      'Discos Abrasivos',
      'Acessórios',
      'Equipamentos',
    ],
  },
  {
    icon: Paintbrush,
    image:
      'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ferramentas-pintura-prateleira.webp',
    title: 'Tintas e Acabamentos',
    text: 'Grande variedade de tintas e produtos para acabamento perfeito.',
    items: ['Tintas', 'Vernizes', 'Pincéis', 'Rolos'],
  },
  {
    icon: Lock,
    image:
      'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/caixas-chuveiros-loja.webp',
    title: 'Fechaduras e Acabamentos',
    text: 'Fechaduras, dobradiças e acabamentos para portas e janelas.',
    items: ['Fechaduras', 'Dobradiças', 'Puxadores', 'Acessórios'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[rgb(216,27,27)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Nossos Produtos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(34,39,69)] mb-6">
            Tudo Que Você Precisa Para Sua Obra
          </h2>
          <p className="text-lg text-gray-600">
            Trabalhamos com uma linha completa de produtos de qualidade para
            atender todas as necessidades da sua construção ou reforma.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(34,39,69)] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                  <p.icon className="text-[rgb(216,27,27)]" width={28} height={28} />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[rgb(34,39,69)] group-hover:text-[rgb(216,27,27)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{p.text}</p>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-[rgb(216,27,27)] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5584994982060?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(216,27,27)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(44,58,128)] transition-all duration-300 font-bold text-lg shadow-xl transform hover:-translate-y-1"
          >
            Solicite um Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
