import {
  Award,
  MessageCircle,
  Package,
  ChevronDown,
  Droplet,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background com gradiente azul escuro clareando */}
      <div className="absolute inset-0 bg-gradient-to-b from-imperio-dark/95 via-imperio-blue/90 to-imperio-mid-blue/85">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(21,35,103,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(11,139,201,0.3),transparent_50%)]" />
      </div>

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Floja-bombas-piscinas.webp)',
        }}
      />

      {/* Padrão de grade decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-imperio-light-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-imperio-mid-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 md:py-28 lg:py-20">
        {/* Badge superior - compacto no mobile */}
        <div className="animate-fade-in mb-4 md:mb-8 inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white shadow-2xl hover:bg-white/15 transition-all duration-300 group">
          <div className="bg-yellow-400 p-1 md:p-1.5 rounded-full">
            <Award size={14} className="md:w-4 md:h-4 text-imperio-dark" />
          </div>
          <span className="text-xs md:text-sm font-semibold">Referência em Belém desde 2024</span>
          <Zap size={14} className="md:w-4 md:h-4 text-yellow-400 animate-pulse" />
        </div>

        {/* Título principal - tamanhos otimizados */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-4 md:mb-8 leading-[1.15] md:leading-[1.1] animate-fade-in-up">
          <span className="block text-white">Seu Destino para</span>
          <span className="block bg-gradient-to-r from-imperio-ice via-white to-imperio-light-blue bg-clip-text text-transparent">
            Ferramentas Industriais
          </span>
          <span className="block text-white">e Bombas d'Água</span>
        </h1>

        {/* Subtítulo compactado */}
        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-4xl mx-auto mb-6 md:mb-12 leading-relaxed animate-fade-in-up animation-delay-200 font-light">
          Soluções completas em <span className="font-semibold text-imperio-ice">bombas d'água</span> e{' '}
          <span className="font-semibold text-imperio-ice">ferramentas</span> das melhores marcas.
          <br className="hidden lg:block" />
          Atendimento especializado, pronta entrega e condições facilitadas.
        </p>

        {/* CTAs otimizados */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-16 animate-fade-in-up animation-delay-400">
          <a
            href="https://wa.me/5591980252240?text=Olá! Gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 md:px-10 py-3.5 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-bold shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <MessageCircle size={20} className="md:w-6 md:h-6 relative z-10" />
            <span className="relative z-10">Solicitar Orçamento</span>
            <ArrowRight size={16} className="md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#produtos"
            className="group flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-6 md:px-10 py-3.5 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-bold hover:bg-white hover:text-imperio-blue transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Package size={20} className="md:w-6 md:h-6" />
            <span>Ver Produtos</span>
            <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Features/benefícios - mais compactos */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 md:mb-16 animate-fade-in-up animation-delay-500">
          <div className="flex items-center gap-1.5 md:gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <CheckCircle size={14} className="md:w-[18px] md:h-[18px] text-green-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">Pronta Entrega</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <CheckCircle size={14} className="md:w-[18px] md:h-[18px] text-green-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">Marcas Confiáveis</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <CheckCircle size={14} className="md:w-[18px] md:h-[18px] text-green-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">Pagamento Facilitado</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <CheckCircle size={14} className="md:w-[18px] md:h-[18px] text-green-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">Suporte Técnico</span>
          </div>
        </div>

        {/* Cards de estatísticas compactados */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto mb-8 md:mb-16 animate-fade-in-up animation-delay-600">
          <div className="group bg-white/5 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 hover:scale-105 hover:border-white/40 transition-all duration-300 cursor-pointer">
            <div className="bg-gradient-to-br from-imperio-light-blue to-imperio-mid-blue p-2 md:p-3 rounded-lg md:rounded-xl inline-block mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Droplet className="text-white w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2 bg-gradient-to-r from-white to-imperio-ice bg-clip-text text-transparent">10+</div>
            <div className="text-xs md:text-sm font-semibold text-imperio-ice/90">Marcas Renomadas</div>
          </div>

          <div className="group bg-white/5 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 hover:scale-105 hover:border-white/40 transition-all duration-300 cursor-pointer">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 md:p-3 rounded-lg md:rounded-xl inline-block mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2 bg-gradient-to-r from-white to-imperio-ice bg-clip-text text-transparent">1000+</div>
            <div className="text-xs md:text-sm font-semibold text-imperio-ice/90">Clientes Satisfeitos</div>
          </div>

          <div className="group bg-white/5 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 hover:scale-105 hover:border-white/40 transition-all duration-300 cursor-pointer">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 md:p-3 rounded-lg md:rounded-xl inline-block mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Package className="text-white w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2 bg-gradient-to-r from-white to-imperio-ice bg-clip-text text-transparent">500+</div>
            <div className="text-xs md:text-sm font-semibold text-imperio-ice/90">Produtos Disponíveis</div>
          </div>

          <div className="group bg-white/5 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 hover:scale-105 hover:border-white/40 transition-all duration-300 cursor-pointer">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-2 md:p-3 rounded-lg md:rounded-xl inline-block mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-white w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2 bg-gradient-to-r from-white to-imperio-ice bg-clip-text text-transparent">100%</div>
            <div className="text-xs md:text-sm font-semibold text-imperio-ice/90">Qualidade Garantida</div>
          </div>
        </div>

        {/* Scroll indicator - escondido no mobile */}
        <div className="hidden md:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm font-medium">Role para explorar</span>
          <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-2">
            <ChevronDown className="text-white" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;