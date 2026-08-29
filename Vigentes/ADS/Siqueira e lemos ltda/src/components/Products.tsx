import { ArrowRight } from 'lucide-react';

interface Product {
  img: string;
  alt: string;
  badge: string;
  brand: string;
  title: string;
  desc: string;
  href: string;
}

const products: Product[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/fechadura-digital-intelbras-prata-porta-madeira_509x686.webp',
    alt: 'Fechadura Digital',
    badge: 'Alta Demanda',
    brand: 'Intelbras',
    title: 'Fechadura Digital',
    desc: 'Fechadura eletrônica inteligente com acesso por senha, elimina chaves físicas e aumenta o controle de quem entra e sai.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20equipamentos%20de%20segurança.&text=Olá!%20Tenho%20interesse%20em%20Fechadura%20Digital.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/central-portaria-intelbras-branca-fixada-na-parede_499x584.webp',
    alt: 'Central de Portaria',
    badge: 'Bestseller',
    brand: 'Intelbras',
    title: 'Central de Portaria',
    desc: 'Central de interfone e controle de acesso para condomínios e residências. Visão clara de quem chega antes de abrir.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20equipamentos%20de%20segurança.&text=Olá!%20Tenho%20interesse%20em%20Central%20de%20Portaria.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/interfone-metalico-parede-branca-portao-gradeado_451x653.webp',
    alt: 'Interfone Externo',
    badge: 'Durabilidade',
    brand: 'Linha Premium',
    title: 'Interfone Externo',
    desc: 'Interfone metálico resistente para ambientes externos, ideal para muros, grades e portões de residências e comércios.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20equipamentos%20de%20segurança.&text=Olá!%20Tenho%20interesse%20em%20Interfone%20Externo.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/caixa-manutencao-portoes-eletronicos-assistec_471x643.webp',
    alt: 'Manutenção de Portões',
    badge: 'Serviço',
    brand: 'Assistec',
    title: 'Manutenção de Portões',
    desc: 'Serviço técnico especializado para portões eletrônicos. Revisão completa, ajuste de sensores e substituição de peças.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20equipamentos%20de%20segurança.&text=Olá!%20Tenho%20interesse%20em%20Manuten%C3%A7%C3%A3o%20de%20Port%C3%B5es.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge bg-brand-50 text-brand mb-4">Nossos Produtos</div>
          <h2 className="section-title mb-4">
            Equipamentos de <span className="text-gradient">Alta Qualidade</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir a máxima confiabilidade e durabilidade dos
            sistemas instalados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-neutral-50 h-56">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge bg-brand text-white text-xs py-1">{p.badge}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">{p.brand}</div>
                <h3 className="text-base font-bold text-brand-dark mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-light transition-colors group/link"
                >
                  Consultar preço
                  <ArrowRight className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20equipamentos%20de%20segurança."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
