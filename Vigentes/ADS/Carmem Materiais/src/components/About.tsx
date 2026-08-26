import { CheckCircle2, Award, Users, Truck } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

const FEATURES = [
  'Materiais de construção civil',
  'Ferragens e ferramentas',
  'Produtos hidráulicos e elétricos',
  'Tintas e acessórios para pintura',
  'Produtos agropecuários',
  'Artigos de caça, pesca e camping',
  'Produtos para piscinas',
  'Locação de equipamentos e máquinas',
];

const CARDS = [
  { Icon: Award, title: '16 Anos no Mercado', text: 'Uma história construída com seriedade, respeito e compromisso com a qualidade.' },
  { Icon: Users, title: 'Atendimento Familiar', text: 'Tratamos cada cliente como um amigo, com orientação personalizada em cada compra.' },
  { Icon: Truck, title: 'Solução Completa', text: 'Do básico ao acabamento, tudo que sua obra precisa em um único lugar.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 opacity-100 translate-y-0">
          <div>
            <span className="inline-block text-[#2F44C8] font-bold text-sm uppercase tracking-widest mb-4">Nossa História</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-6 leading-tight">
              Crescemos junto com<br /><span className="text-[#2F44C8]">Santa Carmem</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Fundada em outubro de 2009, a Carmem Materiais nasceu como filial de uma empresa familiar de Sinop, trazendo experiência sólida e o desejo genuíno de crescer junto com uma nova comunidade. Desde o primeiro dia, apostamos no potencial da cidade — e fomos recompensados com a confiança das pessoas.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hoje, com mais de 16 anos de história, somos referência em materiais de construção, ferragens, ferramentas e muito mais. Nosso propósito continua o mesmo: entregar o melhor, com seriedade e o calor de uma empresa que acredita em pessoas.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#2F44C8] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#2F44C8] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#29394C] transition-colors">
              Falar com a gente
            </a>
          </div>
          <div className="space-y-5">
            {CARDS.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#2F44C8]/30 hover:shadow-md transition-all duration-300 bg-gray-50 group">
                <div className="w-12 h-12 flex-shrink-0 bg-[#2F44C8]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2F44C8] transition-colors duration-300">
                  <Icon size={22} className="text-[#2F44C8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-[#000000] mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden h-52 bg-gray-100">
              <img
                src="https://storage.lucasmendes.dev/site-sp/carmem%20materiais%20para%20construcao/catalogo%20de%20produtos/loja-pessoas-balcao-atendimento-foxlux-laranja_960x1280.webp"
                alt="Equipe Carmem Materiais"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
