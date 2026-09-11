import { ArrowRight } from 'lucide-react';

const WHATSAPP =
  'https://api.whatsapp.com/send/?phone=556699231818&text&type=phone_number&app_absent=0';

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight text-balance">
          Pronto para encontrar o seu <span className="text-[#d5a222]">próximo endereço?</span>
        </h2>
        <p className="text-neutral-300 mt-6 max-w-2xl mx-auto leading-relaxed">
          Nossa equipe está pronta para atender você com transparência, agilidade e as melhores
          oportunidades do mercado.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 bg-[#d5a222] text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl"
        >
          Falar com um especialista
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
