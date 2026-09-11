import { CalendarCheck } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5565996610607?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export default function CtaBanner() {
  return (
    <section className="bg-[#32A19A] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Pronto para transformar
          <span className="block">o seu sorriso?</span>
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Agende agora uma avaliação gratuita com o Dr. Antonio Carlos Junior e dê o primeiro passo
          para o sorriso que você merece.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#32A19A] hover:bg-gray-100 font-bold text-base px-10 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
        >
          <CalendarCheck size={20} />
          Agendar Avaliação Gratuita
        </a>
      </div>
    </section>
  );
}
