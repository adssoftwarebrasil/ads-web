import { MapPinned } from 'lucide-react';

interface Cidade {
  nome: string;
  descricao: string;
}

const cidades: Cidade[] = [
  { nome: 'Luzimangues', descricao: 'Sede e entrega imediata' },
  { nome: 'Porto Nacional', descricao: 'Atendimento e entrega' },
  { nome: 'Palmas', descricao: 'Entrega programada' },
  { nome: 'Paraíso do Tocantins', descricao: 'Entrega programada' },
];

export default function OndeAtendemos() {
  return (
    <section id="areas" className="w-full py-16 md:py-24 px-4 md:px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Onde Atendemos</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Levamos nosso serviço até você.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {cidades.map((cidade) => (
            <div
              key={cidade.nome}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] max-w-[200px] bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-accent/60 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
            >
              <MapPinned width={22} height={22} className="text-accent mb-2" aria-hidden="true" />
              <h4 className="font-semibold text-white text-base">{cidade.nome}</h4>
              <p className="text-white/60 text-xs mt-1">{cidade.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
