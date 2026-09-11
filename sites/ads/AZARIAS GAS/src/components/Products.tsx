import { MessageCircle, Settings, Cable, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  name: string;
  img: string;
  description: string;
  specs: { label: string; value: string }[];
  href: string;
  delay: string;
}

const products: Product[] = [
  {
    name: 'Botijão P13',
    img: 'https://storage.lucasmendes.dev/site-sp/azaria%20gas%2Fimg%2Fbotijao-gas-p13.webp',
    description:
      'Ideal para residências pequenas e médias. O tradicional gás de cozinha.',
    specs: [
      { label: 'Capacidade', value: '13kg' },
      { label: 'Duração média', value: '30-45 dias' },
      { label: 'Uso', value: 'Residencial' },
    ],
    href: 'https://wa.me/5516992821647?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20botij%C3%A3o%20P13',
    delay: '0ms',
  },
  {
    name: 'Botijão P20',
    img: 'https://storage.lucasmendes.dev/site-sp/azaria%20gas%2Fimg%2Fbotijao-gas-p20.webp',
    description:
      'Perfeito para empilhadeiras e usos industriais específicos.',
    specs: [
      { label: 'Capacidade', value: '20kg' },
      { label: 'Duração média', value: 'Conforme uso' },
      { label: 'Uso', value: 'Industrial/Móvel' },
    ],
    href: 'https://wa.me/5516992821647?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20botij%C3%A3o%20P20',
    delay: '100ms',
  },
  {
    name: 'Botijão P45',
    img: 'https://storage.lucasmendes.dev/site-sp/azaria%20gas%2Fimg%2Fbotijao-gas-p45.webp',
    description:
      'Alta capacidade para condomínios, comércios e restaurantes.',
    specs: [
      { label: 'Capacidade', value: '45kg' },
      { label: 'Duração média', value: '90+ dias' },
      { label: 'Uso', value: 'Comercial' },
    ],
    href: 'https://wa.me/5516992821647?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20botij%C3%A3o%20P45',
    delay: '200ms',
  },
];

interface Accessory {
  Icon: LucideIcon;
  iconClass: string;
  name: string;
  description: string;
  href: string;
  delay: string;
}

const accessories: Accessory[] = [
  {
    Icon: Settings,
    iconClass: 'lucide-settings',
    name: 'Reguladores',
    description: 'Reguladores de pressão certificados pelo INMETRO',
    href: 'https://wa.me/5516992821647?text=Olá! Gostaria de consultar sobre reguladores',
    delay: '300ms',
  },
  {
    Icon: Cable,
    iconClass: 'lucide-cable',
    name: 'Mangueiras',
    description: 'Mangueiras de alta resistência e validade longa',
    href: 'https://wa.me/5516992821647?text=Olá! Gostaria de consultar sobre mangueiras',
    delay: '400ms',
  },
  {
    Icon: Circle,
    iconClass: 'lucide-circle',
    name: 'Abraçadeiras',
    description: 'Kits de fixação para instalação segura',
    href: 'https://wa.me/5516992821647?text=Olá! Gostaria de consultar sobre abraçadeiras',
    delay: '500ms',
  },
];

function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-[rgb(219,138,69)] font-semibold tracking-wider uppercase text-sm">
            Catálogo Completo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com os melhores botijões do mercado, garantindo peso
            certo e segurança para sua família ou negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-3xl border border-gray-100 p-6 hover:border-[rgb(219,138,69)] hover:shadow-2xl hover:shadow-[rgb(219,138,69)]/10 transform hover:-translate-y-2 transition-all duration-300 flex flex-col opacity-100 translate-y-0"
              style={{ transitionDelay: p.delay }}
            >
              <div className="relative mb-6 bg-[rgb(250,245,240)] rounded-2xl p-8 flex items-center justify-center group-hover:bg-[rgb(219,138,69)]/5 transition-colors duration-300">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {p.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {p.description}
                </p>
                <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl">
                  {p.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between items-center border-b last:border-0 border-gray-100 pb-2 last:pb-0"
                    >
                      <span className="text-gray-500 text-sm">{s.label}</span>
                      <span className="text-gray-900 font-bold text-sm">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[rgb(219,138,69)] text-white py-4 rounded-xl font-bold hover:bg-[rgb(199,118,49)] transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-[rgb(219,138,69)]/20 hover:shadow-[rgb(219,138,69)]/40"
              >
                <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                <span>Pedir Agora</span>
              </a>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Instalação e Acessórios
            </h3>
            <p className="text-gray-600">
              Tudo o que você precisa para uma instalação segura
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accessories.map((a) => (
              <div
                key={a.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[rgb(219,138,69)] hover:shadow-lg transition-all duration-300 group opacity-100 translate-y-0"
                style={{ transitionDelay: a.delay }}
              >
                <div className="w-16 h-16 bg-[rgb(219,138,69)]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[rgb(219,138,69)] transition-colors duration-300">
                  <a.Icon
                    className={`lucide ${a.iconClass} w-8 h-8 text-[rgb(219,138,69)] group-hover:text-white transition-colors duration-300`}
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {a.name}
                </h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {a.description}
                </p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(219,138,69)] font-bold text-sm hover:underline flex items-center gap-1"
                >
                  Consultar Preço
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
