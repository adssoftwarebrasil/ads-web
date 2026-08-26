import { WhatsAppIcon } from './icons';
import { WHATSAPP_BASE } from '../hooks/useInView';

const S = 'https://storage.lucasmendes.dev/site-sp/mecanica%20cordeiro';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#E32626] py-16">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("${S}/img/motor-complexo-mecanico-sobre-mesa-oficina_1600x900.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="absolute inset-0 bg-[#E32626]/80"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          Seu Carro Precisa de Atenção?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Não deixe para amanhã o que pode ser resolvido hoje. Fale agora com a nossa
          equipe e receba um orçamento gratuito e sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#E32626] font-black text-lg px-10 py-4 rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Orçamento Gratuito
          </a>
          <a
            href="tel:+5566996293425"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            (66) 99629-3425
          </a>
        </div>
      </div>
    </section>
  );
}
