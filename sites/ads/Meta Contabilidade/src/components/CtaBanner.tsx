import { ArrowRight } from 'lucide-react';
import { WHATSAPP_GRATUITA, TEL, PHONE } from '../data';

const PATTERN =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

export default function CtaBanner() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: 'rgb(232, 76, 74)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url("${PATTERN}")` }}
      ></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight animate-on-scroll">
          Pronto para transformar a gestão do seu negócio?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto animate-on-scroll delay-100">
          Agende uma consultoria gratuita e descubra como a Meta Contabilidade pode maximizar a
          rentabilidade da sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200">
          <a
            href={WHATSAPP_GRATUITA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Consultoria Gratuita
            <ArrowRight size={18} />
          </a>
          <a
            href={TEL}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
