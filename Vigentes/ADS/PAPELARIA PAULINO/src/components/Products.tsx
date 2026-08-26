import { ArrowRight, BookOpen, Briefcase, Palette, Package, Scissors, FileText, Car, Truck, CreditCard } from 'lucide-react';
import type { ComponentType } from 'react';

interface Category {
  img: string;
  alt: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

const categories: Category[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Fmateriais-escolares.webp',
    alt: 'Material Escolar',
    Icon: BookOpen,
    title: 'Material Escolar',
    desc: 'Cadernos, lápis, canetas, mochilas e tudo para o ano letivo completo',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Fmateriais-de-escritorio.webp',
    alt: 'Material de Escritório',
    Icon: Briefcase,
    title: 'Material de Escritório',
    desc: 'Suprimentos para empresas, pastas, arquivos, etiquetas e organizadores',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Fartigos-para-arte.webp',
    alt: 'Artigos para Arte',
    Icon: Palette,
    title: 'Artigos para Arte',
    desc: 'Tintas, pincéis, telas, papéis especiais e materiais para artistas',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Fembalagens.webp',
    alt: 'Embalagens',
    Icon: Package,
    title: 'Embalagens',
    desc: 'Caixas, envelopes, papel de presente e materiais para embalar',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Futilidades.webp',
    alt: 'Utilidades',
    Icon: Scissors,
    title: 'Utilidades',
    desc: 'Tesouras, estiletes, perfuradores, grampeadores, fitas adesivas, ferramentas, toners e cartuchos, materiais pedagógicos e materiais de limpeza',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Fimpressos.webp',
    alt: 'Impressos',
    Icon: FileText,
    title: 'Impressos',
    desc: 'Formulários, blocos, recibos e papéis para impressão',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20 transition-all hover:shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Fvolta-as-aulas.webp"
                alt="Volta às Aulas"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 w-fit rounded-full bg-[rgb(237,48,54)]/10 text-[rgb(237,48,54)] font-bold text-sm mb-4 tracking-wide uppercase">
                Temporada 2026
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Volta às Aulas é Aqui!
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Prepare-se para um ano brilhante! Temos a lista completa de materiais escolares com
                as melhores marcas e preços da região. Mochilas, cadernos, estojos e tudo o que você
                precisa para começar as aulas com o pé direito.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5519982880081?text=Olá! Gostaria de cotar minha lista de material escolar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[rgb(61,61,147)] font-bold hover:text-[rgb(81,81,187)] transition-colors group"
                >
                  Enviar Lista Escolar
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Produtos e Categorias</h2>
          <div className="w-24 h-1 bg-[rgb(237,48,54)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa em papelaria, material escolar e suprimentos de escritório
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map(({ img, alt, Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                  <Icon size={28} className="text-[rgb(61,61,147)]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[rgb(61,61,147)] to-[rgb(81,81,187)] rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Precisa de Algo Específico?</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Entre em contato com nossa equipe! Temos um amplo catálogo de produtos e podemos
                ajudar você a encontrar exatamente o que precisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5519982880081?text=Olá! Preciso de um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgb(237,48,54)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(217,28,34)] transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Fpoarte-interna-loja.webp"
                alt="Atendimento"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[rgb(237,48,54)] hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-50 rounded-lg text-[rgb(237,48,54)]">
                <Car size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Estacionamento</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[rgb(237,48,54)] rounded-full mt-1.5"></span>
                <span>Vagas rotativas na rua da loja (Zona Azul).</span>
              </li>
              <li className="flex items-start gap-2 font-medium text-gray-800">
                <span className="w-1.5 h-1.5 bg-[rgb(237,48,54)] rounded-full mt-1.5"></span>
                <span>Compras acima de R$ 100: Estacionamento por conta da loja!</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[rgb(61,61,147)] hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-[rgb(61,61,147)]">
                <Truck size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Política de Frete Grátis</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[rgb(61,61,147)] rounded-full mt-1.5"></span>
                <span>
                  <strong className="text-gray-800">Campinas:</strong> Acima de R$ 200.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[rgb(61,61,147)] rounded-full mt-1.5"></span>
                <span>
                  <strong className="text-gray-800">
                    Valinhos, Vinhedo, Sumaré, Hortolândia e Paulínia:
                  </strong>{' '}
                  Acima de R$ 500.
                </span>
              </li>
              <li className="text-xs text-gray-400 mt-2 italic">
                Outras localizações: consulte-nos.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[rgb(237,48,54)] hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-50 rounded-lg text-[rgb(237,48,54)]">
                <CreditCard size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Pagamento &amp; Empresas</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[rgb(237,48,54)] rounded-full mt-1.5"></span>
                <span>Faturamento 28 dias (sujeito a análise).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[rgb(237,48,54)] rounded-full mt-1.5"></span>
                <span>Débito, PIX ou Crédito em até 3x sem juros.</span>
              </li>
              <li className="mt-3 pt-3 border-t border-gray-100 font-semibold text-[rgb(61,61,147)] text-center">
                Valores especiais para Empresas! Consulte-nos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
