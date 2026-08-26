export default function ParallaxCTA() {
  return (
    <section
      className="parallax min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center relative"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/inspirar%2FFale%20Conosco-paralax-efeito.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(25,85,137,0.9)] via-[rgba(25,85,137,0.85)] to-[rgba(15,60,100,0.9)]"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-shadow leading-tight">
          Sua Saúde Respiratória Merece Atenção Especializada
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/95 text-shadow max-w-3xl mx-auto leading-relaxed">
          Agende uma Conversa com Nossos Especialistas e Descubra Soluções
          Personalizadas
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=556630153100&text=Olá, gostaria de conhecer os serviços da Inspirar..."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[rgb(25,85,137)] px-10 sm:px-12 py-4 sm:py-5 rounded-xl hover:bg-blue-50 transition-all duration-300 font-bold text-lg sm:text-xl shadow-2xl hover:scale-105 hover:shadow-3xl"
        >
          Fale Conosco Agora
        </a>
      </div>
    </section>
  );
}
