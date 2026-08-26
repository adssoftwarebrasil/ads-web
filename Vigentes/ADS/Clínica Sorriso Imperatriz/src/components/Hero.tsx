import { Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FEquipe%20Multidisciplinar.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(13,51,98)]/90 via-[rgb(13,51,98)]/85 to-[rgb(100,149,237)]/80"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[rgb(212,175,55)]/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full">
              <Sparkles className="lucide lucide-sparkles w-4 h-4 text-[rgb(212,175,55)]" />
              <span className="text-white font-semibold text-sm">
                Clínica Referência em Imperatriz
              </span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 text-center animate-fade-in-up px-4">
            Transforme Seu Sorriso Com{' '}
            <span className="text-[rgb(212,175,55)] inline-block">
              Tecnologia de Ponta
            </span>{' '}
            e Atendimento Humanizado
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 text-center animate-fade-in-up max-w-3xl mx-auto px-4"
            style={{ animationDelay: '0.2s' }}
          >
            Mais de 15 anos cuidando do seu sorriso com excelência, tecnologia e
            carinho
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-16 animate-fade-in-up px-4"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="https://wa.me/5599982501000?text=Olá! Gostaria de agendar uma avaliação gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[rgb(212,175,55)] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl text-center relative overflow-hidden"
            >
              <span className="relative z-10">Agendar Avaliação Gratuita</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#servicos"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-white hover:text-[rgb(13,51,98)] transition-all duration-300 shadow-xl backdrop-blur-sm text-center"
            >
              Conhecer Serviços
            </a>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto animate-fade-in-up px-4"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium hidden sm:block">
            Role para baixo
          </span>
          <ChevronDown className="lucide lucide-chevron-down w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
