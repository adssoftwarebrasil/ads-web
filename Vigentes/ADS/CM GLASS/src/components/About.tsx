import { CheckCircle2 } from 'lucide-react';
import StarIcon from './StarIcon';

const highlights = [
  'Representante oficial da fábrica Saint-Gobain em Manaus',
  'Amplo estoque de vidros nacionais e importados',
  'Atendimento para toda a região de Manaus e interior do Amazonas',
  'Equipe técnica especializada com anos de experiência',
  'Qualidade e procedência garantidas em todos os produtos',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 opacity-100 translate-y-0">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/cm%20glass/img/Especialistas%20em%20vidros%20automotivos.webp"
                alt="Profissional CM Glass"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#034087]/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#034087] text-white rounded-2xl p-5 shadow-2xl">
              <div className="text-4xl font-extrabold leading-none">4.9</div>
              <div className="flex gap-0.5 my-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className="text-xs text-white/80 font-medium">Avaliação no Google</div>
            </div>
            <div className="absolute -top-4 -left-4 lg:-left-6 bg-white border border-gray-100 rounded-2xl p-4 shadow-xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/cm%20glass%2Fimg%2Flogo-sem-fundo.webp"
                alt="CM Glass"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <div>
            <span className="inline-block text-[#034087] text-sm font-bold uppercase tracking-widest mb-3">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Especialistas em vidros automotivos no coração de Manaus
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A <strong className="text-gray-800">CM Glass</strong> nasceu da paixão por qualidade e
              do compromisso com o cliente. Somos representantes oficiais da renomada fábrica{' '}
              <strong className="text-[#034087]">Saint-Gobain</strong> em Manaus — uma das maiores
              fabricantes de vidros do mundo — o que nos permite oferecer produtos com total
              procedência e garantia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Com anos de experiência no setor automotivo, atendemos desde particulares até frotas,
              sempre com o mesmo nível de excelência. Nosso portfólio abrange vidros nacionais e
              importados para praticamente todos os modelos de veículos, com pronta entrega para
              Manaus e interior do Amazonas.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="lucide-check-circle2 w-5 h-5 text-[#034087] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/559284131569?text=Olá! Gostaria de saber mais sobre a CM Glass."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#034087] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#022d5e] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Fale com a Gente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
