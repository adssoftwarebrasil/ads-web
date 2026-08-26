import { Instagram, Facebook, Bell, Tag, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';

export default function SocialMedia() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0b77aa] to-[#095f88] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b13437] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bell size={16} className="animate-pulse" />
            Não perca nenhuma novidade
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Siga Nossas <span className="text-yellow-300">Redes Sociais</span>
          </h2>
          <p className="text-lg sm:text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            Fique por dentro das melhores promoções, lançamentos de produtos e dicas exclusivas
            sobre ferramentas e materiais de fixação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Promoções Exclusivas</h3>
            <p className="text-white text-opacity-80 text-sm">
              Descontos especiais e ofertas imperdíveis direto no seu feed
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lançamentos</h3>
            <p className="text-white text-opacity-80 text-sm">
              Seja o primeiro a conhecer os novos produtos e tecnologias
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Dicas Profissionais</h3>
            <p className="text-white text-opacity-80 text-sm">
              Conteúdo exclusivo sobre uso correto de ferramentas e técnicas
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DTayjmQjv8Q/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
            />
          </div>

          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DBZQIW2x0Q1/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
            />
          </div>

          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DTVL7s0Dq_b/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="https://www.instagram.com/supersfixmatogrosso/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white hover:bg-gray-50 px-8 py-5 rounded-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto"
          >
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-3 rounded-lg">
              <Instagram className="text-white" size={28} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-600 font-medium">Siga no Instagram</p>
              <p className="text-lg font-bold text-gray-900">@supersfixmatogrosso</p>
            </div>
          </a>

          <a
            href="https://www.facebook.com/superfixmt/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white hover:bg-gray-50 px-8 py-5 rounded-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto"
          >
            <div className="bg-[#1877f2] p-3 rounded-lg">
              <Facebook className="text-white" size={28} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-600 font-medium">Curta no Facebook</p>
              <p className="text-lg font-bold text-gray-900">SUPERFIX MT</p>
            </div>
          </a>
        </div>

        <div className="text-center">
          <p className="text-white text-opacity-90 text-lg font-medium">
            Junte-se a milhares de profissionais que confiam na SUPERFIX
          </p>
        </div>
      </div>
    </section>
  );
}
