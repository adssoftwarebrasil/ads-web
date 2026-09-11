import { Settings, ArrowRight } from 'lucide-react';

const STORAGE = 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=conexao%20hidrau%20turbo%2F';

interface Service {
  img: string;
  imgClass: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    img: `${STORAGE}alteracoes%2F1.jpeg&version_id=null`,
    imgClass: 'object-center',
    title: 'Veículos pesados',
    text: 'Especialistas em recuperação e venda de turbinas para caminhões, ônibus e vans de linha pesada.',
  },
  {
    img: `${STORAGE}alteracoes%2F2.jpeg&version_id=null`,
    imgClass: 'object-top',
    title: 'Veículos linha leve e Diesel leve',
    text: 'Somos especialistas em manutenção de turbinas para veículos da linha leve e diesel leve.',
  },
  {
    img: `${STORAGE}alteracoes%2F3.jpeg&version_id=null`,
    imgClass: 'object-top',
    title: 'Linha Agro em Movimento',
    text: 'O Agro também é nosso negócio. Com desempenho, confiança e produtividade no campo.',
  },
  {
    img: `${STORAGE}alteracoes%2F8.jpeg&version_id=null`,
    imgClass: 'object-top',
    title: 'Linha de construção',
    text: 'Soluções completas para construção, com qualidade, eficiência e confiança em cada projeto.',
  },
  {
    img: `${STORAGE}alteracoes%2F4.jpeg&version_id=null`,
    imgClass: 'object-center',
    title: 'Vendas de turbos Novos e Reman',
    text: 'Catálogo completo de turbocompressores novos e remanufaturados com garantia total.',
  },
  {
    img: `${STORAGE}10.jpeg&version_id=null`,
    imgClass: 'object-top',
    title: 'Diagnóstico Completo',
    text: 'Análise técnica precisa para identificar falhas e propor soluções econômicas e eficientes.',
  },
  {
    img: `${STORAGE}alteracoes%2F7.jpeg&version_id=null`,
    imgClass: 'object-center',
    title: 'Mão de Obra Qualificada',
    text: 'Equipe técnica certificada para manutenções preventivas e corretivas de alto padrão.',
  },
  {
    img: `${STORAGE}alteracoes%2F6.jpeg&version_id=null`,
    imgClass: 'object-center',
    title: 'Recuperação de Turbinas',
    text: 'Restauração completa utilizando peças originais para garantir performance de nova.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-blue-100 text-primary-blue text-sm font-bold uppercase tracking-wider mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-4">
            Soluções Completas em Turbinas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Combinamos tecnologia e produtos originais para entregar o melhor serviço em turbos e sistema hidráulico.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className={`w-full h-full object-cover ${s.imgClass} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <div className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary-blue border border-white transition-transform duration-300 group-hover:-translate-y-1">
                  <Settings size={22} strokeWidth={2} />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors line-clamp-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">{s.text}</p>
                <div className="mt-auto">
                  <button className="w-full group/btn bg-gray-50 hover:bg-accent-red text-gray-900 hover:text-white border border-gray-200 hover:border-accent-red text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300">
                    SAIBA MAIS
                    <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
