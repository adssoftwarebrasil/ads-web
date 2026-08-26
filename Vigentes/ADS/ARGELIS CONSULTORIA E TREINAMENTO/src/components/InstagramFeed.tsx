import { Instagram, ExternalLink } from 'lucide-react';

const posts = ['DQ7CoTolAbH', 'DSDipwnjjes', 'DR2rr7rjXwp'];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-purple-200/20 to-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[rgb(62,215,252)]/10 to-[rgb(64,102,215)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
            <Instagram width={18} height={18} className="text-[#E1306C]" />
            <span className="text-gray-600 font-semibold text-sm">@argelisconsultoria</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Conteúdo que Gera Valor</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Acompanhe nossas dicas diárias sobre gestão, finanças e operações. Junte-se à nossa comunidade de
            empreendedores.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-xl shadow-purple-900/5 border border-purple-50 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#C13584]">
              <div className="p-1 bg-white rounded-full">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/argelis%20consultoria%2Fimg%2Flogo-fundo-branco.webp"
                  alt="Argelis Logo"
                  className="w-16 h-16 rounded-full object-contain"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg text-gray-900">Argelis Consultoria</h3>
              <p className="text-gray-500 text-sm">Consultoria Empresarial</p>
              <div className="flex items-center gap-4 mt-2 text-xs font-semibold text-gray-600 justify-center sm:justify-start">
                <span>2.5K+ Seguidores</span>
                <span>•</span>
                <span>Conteúdo Diário</span>
              </div>
            </div>
          </div>
          <a
            href="https://www.instagram.com/argelisconsultoria/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#0095f6] hover:bg-[#0085db] text-white font-semibold rounded-lg transition-colors flex items-center gap-2 text-sm"
          >
            Seguir Agora
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
          {posts.map((id, i) => (
            <div key={id} className="flex justify-center w-full">
              <iframe
                className="instagram-media w-full"
                id={`instagram-embed-${i}`}
                title={`Instagram post ${i + 1}`}
                src={`https://www.instagram.com/p/${id}/embed`}
                allowTransparency
                allowFullScreen
                frameBorder={0}
                height={689}
                scrolling="no"
                style={{
                  background: 'white',
                  maxWidth: '540px',
                  width: '99.375%',
                  borderRadius: '3px',
                  border: '1px solid rgb(219, 219, 219)',
                  boxShadow: 'none',
                  display: 'block',
                  margin: '0px 0px 12px',
                  minWidth: '326px',
                  padding: '0px',
                }}
              ></iframe>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/argelisconsultoria/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <Instagram width={24} height={24} />
            Ver Feed Completo
            <ExternalLink width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
