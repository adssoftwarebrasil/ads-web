import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Package, ShoppingBag, Check, Truck, Shield } from 'lucide-react';
import { basicBaskets, DEFAULT_BASKET_IMAGE } from '../data/baskets';
import { WHATSAPP_NUMBER, LOGO_URL } from '../lib/constants';
import BasketCard from '../components/BasketCard';
import Footer from '../components/Footer';

export default function ProductDetailPage() {
  const { id } = useParams();
  const basketIndex = parseInt(id || '0', 10);
  const basket = basicBaskets[basketIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!basket) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Package className="w-20 h-20 text-gray-300 mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Produto nao encontrado</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar ao Inicio
        </Link>
      </div>
    );
  }

  const image = basket.image || DEFAULT_BASKET_IMAGE;
  const whatsappMessage = `Olá! Gostaria de pedir a ${basket.name} (R$ ${basket.price.toFixed(2)}) - ${basket.totalItems} itens.`;

  const relatedBaskets = basicBaskets
    .map((b, i) => ({ ...b, originalIndex: i }))
    .filter((_, i) => i !== basketIndex)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Fort das Cestas" className="h-10 sm:h-12" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Voltar ao Inicio</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-xl group">
                  <img
                    src={image}
                    alt={basket.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {basket.highlighted && (
                    <div className="absolute top-4 left-4 bg-accent text-primary-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Mais Vendida
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    {basket.totalItems} produtos
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-delay">
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
                  <span>/</span>
                  <Link to="/#cestas-basicas" className="hover:text-primary transition-colors">Cestas Basicas</Link>
                  <span>/</span>
                  <span className="text-gray-800 font-medium">{basket.name}</span>
                </nav>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {basket.name}
                </h1>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-primary">
                    R$ {basket.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-primary-50 text-primary-dark px-4 py-2 rounded-full text-sm font-medium">
                    <Package size={16} />
                    {basket.totalItems} itens
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    <Truck size={16} />
                    Pronta Entrega
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    <Shield size={16} />
                    Qualidade Garantida
                  </div>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#20BD5A] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#25D366]/30 mb-4"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Pedir pelo WhatsApp
                </a>

                <p className="text-xs text-gray-500 italic">
                  *Podem haver alteracoes de itens e/ou marcas conforme disponibilidade
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <ShoppingBag className="text-primary" size={28} />
                Itens da Cesta
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {basket.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {relatedBaskets.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
                Outras Cestas
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBaskets.map((relBasket) => (
                  <BasketCard
                    key={relBasket.originalIndex}
                    basket={relBasket}
                    index={relBasket.originalIndex}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
