import { Sun, ArrowRight, CheckCircle, Zap } from 'lucide-react'

export default function Hero() {
  const bgFarm = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=gerasolenergia%2Fpaineis-solares-campo.webp&version_id=null"
  const heroImage = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=gerasolenergia%2Fhero.png"

  return (
    <section
      id="hero"
      // pt-28 no mobile garante que o conteúdo comece abaixo do Header (considerando header de ~80px)
      className="relative w-full min-h-screen flex items-center justify-center px-4 pt-28 pb-12 md:pt-32 lg:py-24 overflow-hidden bg-[rgb(30,40,100)]"
    >
      {/* Background com Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${bgFarm}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(30,40,100)] via-[rgb(30,40,100)]/80 lg:via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* --- Coluna de Texto --- */}
        <div className="text-white space-y-6 md:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          
          {/* Tag de Destaque Reajustada */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Sun className="text-[rgb(254,232,0)]" size={20} />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em]">
              Energia Solar Inteligente
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Gerarsol Soluções <br />
            <span className="text-[rgb(187,212,46)]">Elétricas</span>
          </h1>

          <p className="text-base md:text-xl text-gray-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
            Transforme a luz do sol em economia real. Mais de 8 anos oferecendo soluções completas em engenharia para <span className="text-white font-bold">Luís Eduardo Magalhães</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5577999719638&text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[rgb(187,212,46)] text-[rgb(44,56,152)] font-black text-lg rounded-2xl hover:bg-white transition-all duration-300 shadow-xl"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Nossos Serviços
            </a>
          </div>

          {/* Stats Otimizado para Mobile */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-xl md:text-3xl font-black text-[rgb(187,212,46)]">10+</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase font-bold tracking-widest leading-tight">Anos de <br/> Mercado</div>
            </div>
            <div className="text-center lg:text-left border-x border-white/10 px-2">
              <div className="text-xl md:text-3xl font-black text-[rgb(187,212,46)]">70%</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase font-bold tracking-widest leading-tight">Economia <br/> Média</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl md:text-3xl font-black text-[rgb(187,212,46)]">100%</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase font-bold tracking-widest leading-tight">Suporte <br/> Ativo</div>
            </div>
          </div>
        </div>

        {/* --- Coluna da Imagem --- */}
        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative group w-full max-w-[320px] sm:max-w-md lg:max-w-[480px]">
            {/* Glow effect dinâmico */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(187,212,46)] to-[rgb(44,56,152)] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[rgb(30,40,100)] rounded-[2.2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:h-[550px] xl:h-[600px]">
              <img 
                src={heroImage} 
                alt="Instalação Gerarsol" 
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
              
              {/* Overlay na imagem para mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(30,40,100)]/60 to-transparent lg:hidden"></div>

              {/* Tag Flutuante Refinada */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-[rgb(187,212,46)] p-2 rounded-xl shrink-0">
                    <Zap size={18} className="text-[rgb(44,56,152)] fill-current" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-black text-[rgb(187,212,46)] tracking-widest">Selo de Qualidade</p>
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight">Engenharia e Segurança em 1º lugar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}