import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const symptoms = [
  'Hemorroidas',
  'Fissura Anal',
  'Fístula Anal',
  'Sangramento Anal',
  'Colonoscopia',
  'Tumor Intestinal',
  'Doença de Crohn',
  'Constipação',
  'Câncer Colorretal',
  'Incontinência Fecal',
  'Diverticulite',
  'Endometriose',
];

export default function Symptoms() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#009FC2] to-[#144170] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Está com algum desses sintomas?</h2>
          <p className="text-white/80 mt-4 text-base max-w-2xl mx-auto">
            Não espere os sintomas piorarem. A detecção precoce é fundamental para um tratamento eficaz e uma
            recuperação mais rápida. Agende sua consulta hoje mesmo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {symptoms.map((s) => (
            <span
              key={s}
              className="bg-white/15 hover:bg-white/25 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/553399711500?text=Ol%C3%A1%2C%20Dr.%20Sillas!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#144170] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5" fill="#25D366" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="tel:+553399711500"
            className="flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-white/10"
          >
            Ligar Agora
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
