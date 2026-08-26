import { Package, Stethoscope, Apple, Shirt, MessageCircle, type LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/551235122848';

interface Product {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
}

const products: Product[] = [
  {
    title: 'Rações Premium',
    description:
      'Rações de alta qualidade para cães, gatos, bovinos, equinos, suínos, ovinos, roedores, peixes e pássaros',
    image:
      'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Package,
    features: ['Todas as raças e idades', 'Marcas confiáveis', 'Melhor custo-benefício'],
  },
  {
    title: 'Acessórios Completos',
    description:
      'Tudo para o conforto e diversão do seu pet: casinhas, caminhas, coleiras, brinquedos, comedouros e bebedouros',
    image: 'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/acessorios.webp',
    icon: Package,
    features: ['Produtos de qualidade', 'Variedade para todos os portes', 'Roupinhas e acessórios'],
  },
  {
    title: 'Medicamentos & Saúde',
    description:
      'Medicamentos veterinários para pequeno e grande porte, antipulgas, vitaminas e suplementos',
    image: 'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/med.webp',
    icon: Stethoscope,
    features: ['Medicamentos certificados', 'Antipulgas eficazes', 'Vitaminas e suplementos'],
  },
  {
    title: 'Petiscos & Alimentação',
    description:
      'Petiscos, bolachas, sachês, churrus e produtos naturais para recompensar e nutrir seu pet',
    image:
      'https://images.pexels.com/photos/8434725/pexels-photo-8434725.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Apple,
    features: ['Snacks saudáveis', 'Sachês premium', 'Opções naturais'],
  },
  {
    title: 'Moda Country',
    description: 'Botas, botinas, roupas e acessórios country: bonés, cintos, fivelas, capas e muito mais',
    image: 'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/moda.webp',
    icon: Shirt,
    features: ['Botas e botinas', 'Estilo autêntico', 'Adulto e infantil'],
  },
  {
    title: 'Insumos Agropecuários',
    description: 'Milho, fubá, farelo, soja, polpa cítrica, silagem, cevada, feno e produtos para produção',
    image:
      'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Package,
    features: ['Insumos de qualidade', 'Preços competitivos', 'Para produção'],
  },
  {
    title: 'Equipamentos para Equinos',
    description:
      'Selas, freios, arreios, rédeas, baixeiros e todos os equipamentos necessários para seu cavalo',
    image: 'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/equinos.webp',
    icon: Package,
    features: ['Equipamentos profissionais', 'Durabilidade garantida', 'Conforto animal'],
  },
  {
    title: 'Aves & Pássaros',
    description: 'Galos, galinhas, angolas, perus, codornas, pintinhos e todos os acessórios necessários',
    image: 'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/aves.webp',
    icon: Package,
    features: ['Aves saudáveis', 'Comedouros e ninhos', 'Rações específicas'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(54,59,27)] mb-4">
            Nossos <span className="text-[rgb(186,213,51)]">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para cuidar dos seus animais em um só lugar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(54,59,27)]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-[rgb(186,213,51)] p-3 rounded-lg">
                    <Icon width={24} height={24} className="text-[rgb(54,59,27)]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(54,59,27)] mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start space-x-2 text-sm text-gray-700">
                        <span className="text-[rgb(186,213,51)] mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[rgb(54,59,27)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(186,213,51)]/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Não encontrou o que procura?</h3>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco! Temos uma ampla variedade de produtos e podemos ajudar você a
              encontrar exatamente o que precisa.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[rgb(186,213,51)] text-[rgb(54,59,27)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(166,193,31)] transition-all hover:shadow-2xl hover:scale-105"
            >
              <MessageCircle width={24} height={24} />
              <span>Fale com Nossa Equipe</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
