import { Monitor, PenTool, Armchair, CheckCircle, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  products: string[];
  ctaColor: string;
  ctaBorderColor: string;
  ctaHoverBg: string;
  hoverShadowColor: string;
  whatsappText: string;
}

function CategoryCard({
  image,
  imageAlt,
  icon,
  iconColor,
  iconBgColor,
  title,
  description,
  products,
  ctaColor,
  ctaBorderColor,
  ctaHoverBg,
  hoverShadowColor,
  whatsappText,
}: CategoryCardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${hoverShadowColor}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className={`absolute top-2 left-2 lg:top-4 lg:left-4 ${iconBgColor} p-2 lg:p-4 rounded-lg lg:rounded-xl`}>
          {icon}
        </div>
      </div>

      <div className="p-4 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">{title}</h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 lg:mb-6">{description}</p>

        <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
          {products.map((product, index) => (
            <li key={index} className="flex items-center gap-2 lg:gap-3 text-gray-700">
              <CheckCircle size={16} className={`lg:w-[18px] lg:h-[18px] flex-shrink-0 ${iconColor}`} />
              <span className="text-xs lg:text-[15px]">{product}</span>
            </li>
          ))}
        </ul>

        
          <a href={`https://wa.me/5577999948600?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 border-2 ${ctaBorderColor} ${ctaColor} px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-medium text-sm lg:text-base transition-all ${ctaHoverBg} hover:text-white`}
        >
          Ver Produtos
          <ArrowRight size={16} className="lg:w-[18px] lg:h-[18px]" />
        </a>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section id="produtos" className="bg-white py-12 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-16">
          <div className="text-[#69bfd6] text-xs lg:text-sm font-semibold uppercase tracking-wider mb-2 lg:mb-4">
            CATÁLOGO DE PRODUTOS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-6">
            Venda de Equipamentos e Suprimentos
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comercializamos produtos de informática, papelaria e móveis para empresas, escritórios e consumidores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <CategoryCard
            image="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fnotebook-mesa.webp"
            imageAlt="Notebook e equipamentos de informática"
            icon={<Monitor size={32} className="lg:w-12 lg:h-12 text-[#145bcc]" />}
            iconColor="text-[#145bcc]"
            iconBgColor="bg-[#145bcc]/10"
            title="Informática"
            description="Venda de notebooks, computadores, nobreaks, estabilizadores, tintas, periféricos e componentes de hardware para escritório e home office."
            products={[
              'Notebooks e Computadores Novos',
              'Nobreaks e Estabilizadores',
              'Tintas e Cartuchos Originais',
              'Periféricos (Mouse, Teclado, Webcam)',
            ]}
            ctaColor="text-[#145bcc]"
            ctaBorderColor="border-[#145bcc]"
            ctaHoverBg="hover:bg-[#145bcc]"
            hoverShadowColor="hover:shadow-[0_20px_40px_rgba(20,91,204,0.15)]"
            whatsappText="Olá! Gostaria de ver os produtos de Informática"
          />

          <CategoryCard
            image="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fkit-materiais-escola.webp"
            imageAlt="Kit completo de materiais escolares"
            icon={<PenTool size={32} className="lg:w-12 lg:h-12 text-[#f8cd21]" />}
            iconColor="text-[#f8cd21]"
            iconBgColor="bg-[#f8cd21]/15"
            title="Papelaria"
            description="Comercialização de material escolar, cadernos, mochilas, estojos, canetas e suprimentos para escritório. Linha completa para volta às aulas."
            products={[
              'Cadernos e Planners',
              'Mochilas e Lancheiras',
              'Estojos e Canetas',
              'Suprimentos para Escritório',
            ]}
            ctaColor="text-[#f8cd21]"
            ctaBorderColor="border-[#f8cd21]"
            ctaHoverBg="hover:bg-[#f8cd21]"
            hoverShadowColor="hover:shadow-[0_20px_40px_rgba(248,205,33,0.15)]"
            whatsappText="Olá! Gostaria de ver os produtos de Papelaria"
          />

          <CategoryCard
            image="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fcadeira-gamer-azul.webp"
            imageAlt="Cadeira gamer ergonômica azul"
            icon={<Armchair size={32} className="lg:w-12 lg:h-12 text-[#e3130c]" />}
            iconColor="text-[#e3130c]"
            iconBgColor="bg-[#e3130c]/10"
            title="Móveis de Escritório"
            description="Venda de cadeiras ergonômicas, cadeiras gamer, mesas, escrivaninhas, estantes e mobiliário completo para equipar escritórios."
            products={[
              'Cadeiras Ergonômicas e Gamer',
              'Mesas e Escrivaninhas',
              'Estantes e Arquivos',
              'Mobiliário Corporativo',
            ]}
            ctaColor="text-[#e3130c]"
            ctaBorderColor="border-[#e3130c]"
            ctaHoverBg="hover:bg-[#e3130c]"
            hoverShadowColor="hover:shadow-[0_20px_40px_rgba(227,19,12,0.15)]"
            whatsappText="Olá! Gostaria de ver os Móveis de Escritório"
          />
        </div>
      </div>
    </section>
  );
}