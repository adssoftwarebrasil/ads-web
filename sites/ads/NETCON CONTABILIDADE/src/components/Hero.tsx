function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-white pt-20 min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 opacity-60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[rgb(0,0,87)] mb-4 sm:mb-6 leading-tight">
                Ajudo mercados, farmácias e pet shops a pagar menos imposto e lucrar mais
              </h1>
              <div className="h-2 w-20 sm:w-24 bg-[rgb(211,0,0)] mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Sem entender de contabilidade. Me chama pra ver se tá pagando a mais
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[rgb(211,0,0)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(231,0,0)] transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                QUERO PAGAR MENOS IMPOSTOS
              </button>
              <a
                href="https://wa.me/5595991548154"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[rgb(0,0,87)] text-[rgb(0,0,87)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(0,0,87)] hover:text-white transition-all text-center"
              >
                FALE CONOSCO
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=netcon%2Fnetcon1.jpg&version_id=null"
                alt="NetCon Contabilidade - Escritório"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute top-4 sm:top-8 -left-4 sm:-left-8 w-full h-full bg-gradient-to-br from-[rgb(0,0,87)] to-[rgb(0,0,120)] rounded-2xl -z-10 opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
