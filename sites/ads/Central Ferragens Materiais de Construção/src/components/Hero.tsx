import { ArrowRight, Phone, CheckCircle2, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[rgb(1,0,104)]">
      <div className="absolute inset-0 z-0">
        <img src="https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/estrutura-metalica-construcao.webp" alt="Background Texture" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(1,0,104)] via-[rgb(1,0,104)]/95 to-[rgb(1,0,104)]/80"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">Ferro e Aço com<span className="block text-yellow-400">Qualidade</span></h1>
            <p className="text-lg text-gray-300 leading-relaxed">Há mais de 30 anos fornecendo materiais de alta resistência. Do vergalhão ao acabamento, garantimos a segurança e durabilidade do seu projeto.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/553899492159" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-[rgb(1,0,104)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-1">Solicitar Orçamento<ArrowRight width={20} height={20} /></a>
              <a href="tel:3836762159" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition-all bg-[rgb(1,0,104)]/50 backdrop-blur-sm"><Phone width={20} height={20} />(38) 3676-2159</a>
            </div>
            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-8 text-white">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-yellow-400">30+</div>
                <div className="text-sm text-gray-400 leading-tight">Anos de<br />Experiência</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-yellow-400">1k+</div>
                <div className="text-sm text-gray-400 leading-tight">Clientes<br />Atendidos</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <CheckCircle2 width={24} height={24} className="text-yellow-400 w-8 h-8" />
                <div className="text-sm text-gray-400 leading-tight">Entrega<br />Garantida</div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-2xl blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img src="https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/trabalho-construcao-aco.webp" alt="Central Ferragens Estoque" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-lg text-[rgb(1,0,104)]">
                    <Building2 width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Central Ferragens</p>
                    <p className="text-blue-100 text-sm">Referência em ferro e aço desde 1991.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
