import { StarIcon } from './icons';

const reviews = [
  {
    text: '"Ambiente maravilhoso, com espaço aconchegante e brinquedos que garantem a diversão das crianças. A comida é deliciosa, tem uma porção de peixe esplêndida e tudo é preparado com muito capricho. O atendimento é atencioso e cordial. Uma ótima opção para reunir a família!"',
    initial: 'A',
    name: 'Ana Paula Padilha',
    meta: 'Jantar',
  },
  {
    text: '"Ambiente familiar e aconchegante, o atendimento foi excelente — um dos melhores que já tivemos nos espetinhos da cidade. A comida chegou bem rápido e com um sabor MARAVILHOSO, lembra muito a boa e velha comida de vó. Eu e meu marido amamos, com toda certeza retornaremos!"',
    initial: 'T',
    name: 'Thaís Turra',
    meta: 'Jantar · R$ 20–40',
  },
  {
    text: '"Tudo impecável. Atendimento maravilhoso, comida deliciosa! Vale muito a visita, recomendo a todos que estiverem em Sinop e quiserem uma boa jantinha."',
    initial: 'A',
    name: 'Aline Cardoso',
    meta: 'R$ 20–40',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-[#111111] py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">O que dizem nossos clientes</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(230,232,234)] leading-tight mb-4">Avaliações Reais</h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-[rgb(230,232,234)] font-bold text-base">5.0</span>
            <span className="text-[rgb(230,232,234)]/40 text-sm">no Google Avaliações</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-white/6 rounded-2xl p-6 flex flex-col gap-5 hover:border-amber-500/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-[rgb(230,232,234)]/70 text-sm leading-relaxed flex-1">{r.text}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold text-sm">{r.initial}</span>
                </div>
                <div>
                  <p className="text-[rgb(230,232,234)] font-semibold text-sm">{r.name}</p>
                  <p className="text-[rgb(230,232,234)]/40 text-xs">{r.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[rgb(230,232,234)]/35 text-sm">
            Avaliações verificadas via <span className="text-amber-400/70 font-medium">Google Maps</span>
          </p>
        </div>
      </div>
    </section>
  );
}
