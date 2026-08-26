import type { ComponentType } from 'react';
import { Shield, Wrench, Settings, Home, Disc, Paintbrush, HardHat, ArrowRight } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number | string;
}

interface Thumb {
  src: string;
  alt: string;
}

interface Product {
  image: string;
  imageAlt: string;
  Icon: ComponentType<IconProps>;
  iconClass: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  waHref: string;
  thumbnails?: Thumb[];
}

const products: Product[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Fbarra%20redonda.jpg',
    imageAlt: 'Barra Redonda',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    badge: 'FERRO E AÇO',
    title: 'FERRO E AÇO',
    subtitle: 'Estruturas que Sustentam Sonhos',
    description:
      'Da fundação ao acabamento, oferecemos a mais completa linha de produtos siderúrgicos. Barras, perfis, chapas e tubos com certificação de qualidade e resistência garantida para projetos de qualquer porte.',
    tags: ['Barras Redondas', 'Barras Chatas', 'Cantoneiras'],
    waHref: 'https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20FERRO%20E%20A%C3%87O.',
    thumbnails: [
      { src: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Fbarra%20redonda.jpg', alt: 'Barra Redonda' },
      { src: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Fbarrachatade6m.jpg', alt: 'Barra Chata 6m' },
      { src: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Fcantoneira.jpg', alt: 'Cantoneira' },
      { src: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Fchapa.jpg', alt: 'Chapa de Aço' },
      { src: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Ftuboredondo.jpg', alt: 'Tubo Redondo' },
      { src: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Ftuboretangular.jpg', alt: 'Tubo Retangular' },
    ],
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=guerreiro%2FWhatsApp%20Image%202025-10-31%20at%2009.50.40.jpeg&version_id=null',
    imageAlt: 'Fixadores Profissionais',
    Icon: Settings,
    iconClass: 'lucide lucide-settings',
    badge: 'FIXADORES',
    title: 'FIXADORES',
    subtitle: 'Conexões que Garantem Segurança',
    description:
      'Sistema completo de fixação industrial e construção civil. Parafusos, porcas, arruelas, buchas e rebites em diversos materiais e acabamentos. Da pequena reforma ao grande projeto, temos a solução perfeita.',
    tags: ['Parafusos Diversos', 'Porcas e Arruelas', 'Buchas e Âncoras'],
    waHref: 'https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20FIXADORES.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Ftelhagalvalume.jpg',
    imageAlt: 'Telha Galvalume',
    Icon: Home,
    iconClass: 'lucide lucide-home',
    badge: 'TELHAS',
    title: 'TELHAS',
    subtitle: 'Cobertura com Conforto e Durabilidade',
    description:
      'Telhas metálicas que combinam proteção superior, eficiência térmica e excelente custo-benefício. Galvanizadas, galvalume e termoacústicas para projetos residenciais, comerciais e industriais de qualquer dimensão.',
    tags: ['Telhas Galvanizadas', 'Telhas Galvalume', 'Telhas Termoacústicas'],
    waHref: 'https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20TELHAS.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Fabrasivos.jpg',
    imageAlt: 'Discos e Abrasivos',
    Icon: Disc,
    iconClass: 'lucide lucide-disc',
    badge: 'ABRASIVOS',
    title: 'ABRASIVOS',
    subtitle: 'Precisão em Cada Corte',
    description:
      'Linha profissional de abrasivos para todas as necessidades de corte, desbaste e acabamento. Discos, lixas e rebolos de alta performance que garantem produtividade, precisão e economia no seu trabalho.',
    tags: ['Discos de Corte', 'Discos de Desbaste', 'Lixas Diversas'],
    waHref: 'https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20ABRASIVOS.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Ftintaseprimes.jpg',
    imageAlt: 'Tintas e Primers',
    Icon: Paintbrush,
    iconClass: 'lucide lucide-paintbrush',
    badge: 'TINTAS E PRIMERS',
    title: 'TINTAS E PRIMERS',
    subtitle: 'Proteção e Acabamento Profissional',
    description:
      'Tintas industriais de alta cobertura e durabilidade. Primers anticorrosivos, esmaltes sintéticos e vernizes especiais para proteção de estruturas metálicas. Resistência extrema contra oxidação e intempéries.',
    tags: ['Tintas Industriais', 'Primers Anticorrosivos', 'Esmaltes Sintéticos'],
    waHref: 'https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20TINTAS%20E%20PRIMERS.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/guerreiro%2Fprodutos%2Fferramentas.jpg',
    imageAlt: 'Ferramentas Profissionais',
    Icon: HardHat,
    iconClass: 'lucide lucide-hard-hat',
    badge: 'FERRAMENTAS',
    title: 'FERRAMENTAS',
    subtitle: 'Equipamentos para Profissionais Exigentes',
    description:
      'Ferramentas e equipamentos profissionais para construção civil, metalurgia e manutenção industrial. Qualidade, durabilidade e ergonomia para você trabalhar com máxima segurança e produtividade.',
    tags: ['Ferramentas Manuais', 'Ferramentas Elétricas', 'EPIs Certificados'],
    waHref: 'https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20FERRAMENTAS.',
  },
];

const GRID_BG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDQsMTMwLDMzLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==";

export default function Products() {
  return (
    <section id="produtos" className="bg-gradient-to-b from-[#F5F5F5] via-white to-[#F5F5F5] py-16 md:py-24 lg:py-32 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3 bg-[#FFF0E6] px-6 py-3 rounded-full">
              <Shield className="lucide lucide-shield w-5 h-5 text-[#F48221]" size={24} />
              <p className="text-xs md:text-sm font-bold text-[#F48221] tracking-[3px] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                NOSSOS PRODUTOS
              </p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Soluções Completas para <br />
            <span className="bg-gradient-to-r from-[#F48221] to-[#E67318] bg-clip-text text-transparent">Sua Obra ou Projeto</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Do início ao acabamento, temos tudo o que você precisa para construir com <strong className="text-[#F48221]">qualidade certificada</strong> e <strong className="text-[#F48221]">segurança garantida</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {products.map((product) => {
            const { Icon } = product;
            return (
              <div
                key={product.title}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(244,130,33,0.15)] transition-all duration-500 group border border-gray-100 hover:border-[#F48221]/30"
              >
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img src={product.image} alt={product.imageAlt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-[#F48221] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <Icon className={`${product.iconClass} w-4 h-4`} size={24} />
                    {product.badge}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-[#F48221] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                      <Shield className="lucide lucide-shield w-4 h-4" size={24} />
                      {product.badge === 'FERRO E AÇO'
                        ? 'Mais de 100 opções em estoque'
                        : product.badge === 'FIXADORES'
                        ? 'Resistência certificada'
                        : product.badge === 'TELHAS'
                        ? 'Garantia de 10 anos'
                        : product.badge === 'ABRASIVOS'
                        ? 'Marcas líderes do mercado'
                        : product.badge === 'TINTAS E PRIMERS'
                        ? 'Proteção de longa duração'
                        : 'Garantia de fábrica'}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#F48221] transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#F48221] font-semibold italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {product.subtitle}
                    </p>
                  </div>
                  <p className="text-sm md:text-base text-[#666666] leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {product.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-[#FFF0E6] text-[#F48221] px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                        +3 produtos
                      </span>
                    </div>
                  </div>
                  {product.thumbnails && (
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Ver mais produtos:
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {product.thumbnails.map((thumb, i) => (
                          <button
                            key={thumb.src}
                            className={
                              i === 0
                                ? 'flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 border-[#F48221] shadow-lg scale-105'
                                : 'flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 border-gray-200 hover:border-[#F48221] opacity-70 hover:opacity-100'
                            }
                          >
                            <img src={thumb.src} alt={thumb.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                  <a
                    href={product.waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F48221] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 text-sm md:text-base hover:text-[#E67318] group/link"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    SOLICITAR ORÇAMENTO
                    <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover/link:translate-x-1 transition-transform" size={24} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F48221]/5 via-[#F48221]/10 to-[#F48221]/5 rounded-3xl"></div>
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url('${GRID_BG}')` }}></div>
          <div className="relative z-10 p-8 md:p-12 border border-[#F48221]/20 rounded-3xl backdrop-blur-sm bg-white/50">
            <div className="max-w-2xl mx-auto">
              <div className="inline-block mb-4">
                <div className="bg-[#F48221] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Atendimento Personalizado</div>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Não encontrou o que procura?
              </h3>
              <p className="text-base md:text-lg text-[#666666] mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução perfeita. <strong className="text-[#F48221]">Orçamento rápido e sem compromisso!</strong>
              </p>
              <a
                href="https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20personalizado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F48221] to-[#E67318] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:from-[#E67318] hover:to-[#D56410] hover:scale-105 hover:shadow-[0_15px_50px_rgba(244,130,33,0.4)] transition-all duration-300 group"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <HardHat className="lucide lucide-hard-hat w-6 h-6" size={24} />
                FALAR COM ESPECIALISTA
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" size={24} />
              </a>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-[#666666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Online agora</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <span>Resposta em minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
