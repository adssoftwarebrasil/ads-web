import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fquem-somos.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(237,185,47)]/95 to-[rgb(222,143,34)]/95"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Pronto para Economizar na Conta de Luz?
        </h2>
        <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
          Solicite agora mesmo um orçamento gratuito e descubra quanto você pode economizar com energia solar.
        </p>
        <a
          href="https://wa.me/5579991174811?text=Olá, vim do site e gostaria de solicitar um orçamento grátis!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[rgb(40,68,126)] hover:bg-[rgb(30,48,106)] text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
        >
          Solicitar Orçamento Grátis Agora
          <ArrowRight width={24} height={24} className="lucide lucide-arrow-right ml-3" />
        </a>
      </div>
    </section>
  );
}
