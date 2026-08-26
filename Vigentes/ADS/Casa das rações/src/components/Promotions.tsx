import { Tag, MessageCircle } from 'lucide-react';
import { whatsappLink } from '../lib/tracking';

const promos = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/atualizacao/semanal.webp',
    title: 'Promoção de Sábado',
    description: 'Ofertas especiais toda semana para você e seu pet. Não perca!',
    tag: 'Semanal',
    tagColor: 'bg-orange-500',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/promocao-areia-higienica-biodegradavel-gatos-bionature_1131x1600.webp',
    title: 'Areia Higiênica Biodegradável',
    description: 'Areia ecológica para gatos — sustentável, absorvente e sem odor.',
    tag: 'Destaque',
    tagColor: 'bg-teal-500',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/atualizacao/preco-baixo.webp',
    title: 'Farmácia Veterinária',
    description: 'Antipulgas, vermífugos e remédios com os melhores preços da cidade.',
    tag: 'Preço baixo',
    tagColor: 'bg-green-600',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/atualizacao/premium.webp',
    title: 'Nutrição Completa',
    description: 'Alimentos formulados com ingredientes selecionados para máxima saúde.',
    tag: 'Premium',
    tagColor: 'bg-amber-500',
  },
];

export default function Promotions() {
  return (
    <section id="promocoes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Ofertas Especiais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Promoções imperdíveis
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            O patrão mandou avisar: o melhor preço de Primavera do Leste será sempre aqui.
            Venha comprovar!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 ${promo.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1`}>
                  <Tag size={10} />
                  {promo.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{promo.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{promo.description}</p>
                <a
                  {...whatsappLink(
                    'promocao_card',
                    `Olá! Vi a promoção *${promo.title}* no site. Quero saber mais!`
                  )}
                  className="w-full flex items-center justify-center gap-2 bg-green-50 hover:bg-green-600 text-green-700 hover:text-white border border-green-200 hover:border-green-600 text-sm font-semibold py-2.5 rounded-lg transition-all"
                >
                  <MessageCircle size={14} />
                  Quero essa oferta
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-green-700 via-green-600 to-teal-600 p-8 sm:p-10 text-white text-center shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Tag size={20} className="text-green-300" />
            <span className="text-green-200 font-semibold text-sm uppercase tracking-wide">Oferta Exclusiva</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Delivery grátis para toda Primavera do Leste
          </h3>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">
            Peça pelo WhatsApp e receba seus produtos na porta de casa com agilidade e sem sair do
            conforto do lar.
          </p>
          <a
            {...whatsappLink(
              'promocao_delivery',
              'Olá! Gostaria de fazer um pedido com delivery. Quais produtos estão disponíveis hoje?'
            )}
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-7 py-3 rounded-xl hover:bg-green-50 transition-colors shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
