import { Phone } from 'lucide-react';

export default function CtaMigrar() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#234783] to-[#5BA3E8] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FPrecisando%20abrir%20empresa%20ou%20migrar%20de%20contabilidade%3F.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Precisando Abrir Empresa ou Migrar de Contabilidade?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Fale com nossos consultores especializados e descubra como podemos
          transformar a gestão financeira e contábil do seu negócio. Atendimento
          personalizado, soluções sob medida e resultados comprovados.
        </p>
        <a
          href="https://wa.me/556733052146?text=Olá! Preciso de ajuda com abertura de empresa ou migração de contabilidade."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-lg font-bold text-xl shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <Phone className="lucide lucide-phone " width={28} height={28} />
          Enviar Mensagem Agora
        </a>
      </div>
    </section>
  );
}
