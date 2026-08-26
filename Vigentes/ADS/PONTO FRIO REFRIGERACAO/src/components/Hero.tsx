import { Phone, MapPin, Star, Award, Package, ThumbsUp } from 'lucide-react';

const Hero = () => {
  const imageUrl = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=kipontofrio%2Fnovas%2FLoja_de_refrigeracao_Ponto_Frio.png&version_id=null";

  return (
    <section id="inicio" className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-[#082432]">
      
      {/* 1. Background Image (Fundo Escuro) */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover opacity-50" // Reduzi levemente a opacidade base para destacar a da frente
        />
        {/* Overlay Escuro para garantir leitura do texto */}
        <div className="absolute inset-0 bg-[#082432]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#082432] via-[#082432]/50 to-[#082432]/30"></div>
      </div>

      {/* 2. Imagem de Destaque em Quadrado (Lado Direito) */}
      <div className="hidden lg:block absolute right-12 top-1/2 transform -translate-y-1/2 z-20">
        <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
            <img
                src={imageUrl}
                alt="Fachada Ki Ponto Frio"
                className="w-full h-full object-cover"
            />
            {/* Gradiente para melhor visualização */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#082432]/40 to-transparent"></div>
            {/* Efeito de destaque/brilho ao hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 hover:to-white/15 transition-all duration-300"></div>
        </div>
      </div>

      {/* 3. Conteúdo (Texto) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            Especialistas em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ed2e1] to-[#4fb8c7]">
              Refrigeração
            </span>
            {' '}em Palmas
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Peças multimarcas, ferramentas profissionais e acessórios para climatização. 
            Atendimento especializado com estoque completo para suas necessidades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/556332152711?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20peças"
              className="group bg-gradient-to-r from-[#6ed2e1] to-[#4fb8c7] text-[#082432] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#6ed2e1]/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone size={22} className="group-hover:rotate-12 transition-transform" />
              Fale com Especialista
            </a>
            <a
              href="#contato"
              className="group backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MapPin size={22} className="group-hover:bounce transition-transform" />
              Nossa Localização
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 max-w-2xl">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6ed2e1]/20 mb-3 group-hover:bg-[#6ed2e1]/30 transition-colors">
                <Award className="text-[#6ed2e1]" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6ed2e1]/20 mb-3 group-hover:bg-[#6ed2e1]/30 transition-colors">
                <Package className="text-[#6ed2e1]" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">1000+</div>
              <div className="text-sm text-gray-300">Produtos em Estoque</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6ed2e1]/20 mb-3 group-hover:bg-[#6ed2e1]/30 transition-colors">
                <ThumbsUp className="text-[#6ed2e1]" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements (Fade bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;