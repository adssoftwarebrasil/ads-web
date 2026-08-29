import WhatsAppIcon from './WhatsAppIcon';

export default function CTASection() {
  return (
    <section
      className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FSolicite%20um%20Or%C3%A7amento-paralax-efeito.jpg")',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, rgba(46, 32, 15, 0.88), rgba(89, 62, 35, 0.88))' }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1F1FF] mb-4 sm:mb-6 leading-tight px-4">
          Pronto para Transformar<br className="hidden sm:block" />Seu Ambiente?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F1F1FF] opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
          Entre em contato e descubra como nossos acabamentos podem valorizar seu projeto com
          elegância e durabilidade.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-[#B88654] text-[#F1F1FF] text-base sm:text-lg md:text-xl rounded-lg font-semibold hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-2xl"
        >
          <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
          <span>Solicitar Orçamento Gratuito</span>
        </a>
      </div>
    </section>
  );
}
