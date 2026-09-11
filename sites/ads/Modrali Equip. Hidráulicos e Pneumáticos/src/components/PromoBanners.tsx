const STORE_URL = 'https://www.lojamodrali.com.br';

const banners = [
  'https://storage.lucasmendes.dev/site-sp/lojamodrali/1743195759_minibanner-modrali-01.webp',
  'https://storage.lucasmendes.dev/site-sp/lojamodrali/1743195759_minibanner-modrali-02.webp',
  'https://storage.lucasmendes.dev/site-sp/lojamodrali/1743195759_minibanner-modrali-03.webp',
  'https://storage.lucasmendes.dev/site-sp/lojamodrali/1744396628_minibanner-modrali-04-new.webp'
];

export function PromoBanners() {
  return (
    <section id="promocoes" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {banners.map((banner, index) => (
            <a
              key={index}
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={banner}
                alt={`Promoção ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
