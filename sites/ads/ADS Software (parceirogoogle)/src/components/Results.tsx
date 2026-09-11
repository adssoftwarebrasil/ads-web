import { Award, TrendingUp, Users, MapPin } from 'lucide-react';

const stats = [
  { Icon: Award, value: '8+', label: 'Anos de Mercado', sub: 'Experiência comprovada' },
  { Icon: TrendingUp, value: '#1', label: 'América Latina', sub: 'Maior em impulsionamento' },
  { Icon: Users, value: '100%', label: 'Satisfação', sub: 'Clientes satisfeitos' },
  { Icon: MapPin, value: 'Brasil', label: 'Todo País', sub: 'Atendimento nacional' },
];

const metrics = [
  {
    title: 'Cliques',
    text: 'Mais de 5,99 milhões de cliques gerados para nossos clientes, conectando empresas com milhões de potenciais consumidores interessados.',
    img: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FCliques.png',
    alt: '5,99 milhões de cliques em nossos anúncios',
  },
  {
    title: 'Conversões',
    text: '550 mil conversões que representam resultados reais: vendas, leads qualificados e ações concretas que impulsionaram o crescimento dos negócios.',
    img: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FConvers%C3%B5es.png',
    alt: '550 mil conversões geradas',
  },
  {
    title: 'Interações',
    text: '12,5 milhões de interações significativas que demonstram o engajamento real do público com as campanhas dos nossos clientes.',
    img: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FIntera%C3%A7%C3%B5es.png',
    alt: '12,5 milhões de interações',
  },
  {
    title: 'Investimento Gerenciado',
    text: 'R$ 6,16 milhões em investimentos publicitários otimizados com estratégias data-driven para maximizar o retorno de cada real investido.',
    img: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FCusto.png',
    alt: 'R$ 6,16 milhões gerenciados',
  },
];

export default function Results() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1264C6] to-[#19355E] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Resultados Comprovados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19355E] mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Dados reais de performance que demonstram nossa expertise em marketing digital
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map(({ Icon, value, label, sub }) => (
            <div
              key={label}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1264C6] to-[#19355E] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#19355E] mb-2">{value}</div>
              <div className="text-sm sm:text-base font-semibold text-[#1264C6] mb-1">{label}</div>
              <div className="text-xs sm:text-sm text-gray-600">{sub}</div>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#19355E] mb-4">
              Performance Real dos Nossos Anúncios
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Métricas extraídas diretamente da plataforma Google Ads
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {metrics.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 pb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#19355E] mb-3">{m.title}</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{m.text}</p>
                </div>
                <div className="px-6 pb-6">
                  <img
                    src={m.img}
                    alt={m.alt}
                    loading="lazy"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#19355E] to-[#1264C6] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Experiência Comprovada
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              8 Anos Transformando Negócios
            </h3>
            <p className="text-lg text-gray-100 mb-8 max-w-3xl mx-auto">
              Resultados reais em Google Ads e Meta Business para empresas de todos os segmentos
            </p>
            <div className="mt-10">
              <a
                href="https://wa.me/558007800040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#19355E] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Quero Esses Resultados
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
