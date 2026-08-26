import { Quote } from 'lucide-react';
import { StarIcon, GoogleIcon } from './icons';

const REVIEWS: { initial: string; name: string; meta: string; text: string }[] = [
  {
    initial: 'R',
    name: 'Rô Pirez',
    meta: 'Guia Local · 40 avaliações',
    text: '"Ir nessa loja é como estar em casa, ou na casa de um amigo — todo mundo te trata como se fossem amigos de muito tempo. Qualidade no atendimento, gosto de pessoas que conversam com a gente, não estão ali apenas para vender. Eles dão opinião, ajudam a fazer a melhor escolha e ainda ensinam como utilizar o produto. Equipe de milhões!"',
  },
  {
    initial: 'M',
    name: 'Milton Antonio Dall Pizzolo',
    meta: 'Guia Local · 387 avaliações',
    text: '"Melhor loja de materiais de construção de Santa Carmem, onde você encontra de tudo. Atendimento excelente e variedade impressionante de produtos."',
  },
  {
    initial: 'L',
    name: 'Lucio Oliveira',
    meta: 'Guia Local · 485 avaliações',
    text: '"Grande variedade em materiais, amplas instalações, ótimo atendimento e bom preço. Recomendo a todos que precisam de materiais de construção na região."',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2F44C8] font-bold text-sm uppercase tracking-widest mb-3">O que dizem os clientes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-4">Avaliações reais do Google</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-extrabold text-[#000000]">4.7</span>
            <span className="text-gray-400 text-sm">média no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 transition-all duration-700 opacity-100 translate-y-0">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-5 relative">
              <Quote size={32} className="text-[#2F44C8]/15 absolute top-5 right-6" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm flex-1 italic">{r.text}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#2F44C8]/10 flex items-center justify-center font-bold text-[#2F44C8]">{r.initial}</div>
                <div>
                  <p className="font-bold text-[#000000] text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.meta}</p>
                </div>
                <div className="ml-auto">
                  <GoogleIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
