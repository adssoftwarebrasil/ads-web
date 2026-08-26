import { ShoppingCart, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=daviesportes%2Fimage%2079.png&version_id=null")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-[#FDF341] mb-6 drop-shadow-2xl">45 ANOS DE TRADIÇÃO!</h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Toda linha de materiais esportivos, troféus e medalhas, fogos de artifício, armas e munições, linha fitness
            além marcas renomadas como: Adidas, Puma, Mormaii, Penalty e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://daviesportes.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FDF341] text-[#363435] px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(253,243,65,0.4)]"
            >
              <ShoppingCart size={24} />
              Acessar Loja Virtual
            </a>
            <a
              href="https://wa.me/5549999188763"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#363435] px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <MessageCircle size={24} />
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
