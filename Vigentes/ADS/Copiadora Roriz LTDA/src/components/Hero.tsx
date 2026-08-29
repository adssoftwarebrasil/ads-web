import { openWhatsApp, scrollToSection } from '../lib/whatsapp';

const heroImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fcanecas-personalizadas-coloridas.webp',
    alt: 'Canecas personalizadas coloridas',
    loading: 'eager' as const,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fbone-vermelho-caneca-vidro.webp',
    alt: 'Boné vermelho e caneca de vidro',
    loading: 'eager' as const,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fgarrafas-termicas-coloridas.webp',
    alt: 'Garrafas térmicas coloridas',
    loading: 'lazy' as const,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/so-copias%2Fimg-so-copias%2Fcamisetas-dia-maes.webp',
    alt: 'Camisetas personalizadas Dia das Mães',
    loading: 'lazy' as const,
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-green-50 px-4 py-2 rounded-full text-sm text-green-800 font-medium">
              <span>✓ Entrega Rápida</span>
              <span className="text-green-400">|</span>
              <span>✓ Qualidade Garantida</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforme Suas Ideias em{' '}
              <span className="text-blue-800">Produtos Personalizados</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Brindes, impressos e crachás de alta qualidade em Porto Velho. Mais de 15 anos
              personalizando o sucesso de empresas e eventos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openWhatsApp()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all hover:scale-105 shadow-lg"
              >
                Falar no WhatsApp
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all hover:scale-105"
              >
                Ver Produtos
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {heroImages.map((img) => (
              <div
                key={img.src}
                className="aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading={img.loading}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
