const items = [
  'Embreagens Agrícolas',
  'Linha Pesada',
  'Platôs',
  'Mancais de Rolamento',
  'Volantes de Motor',
  'Garfos de Embreagem',
  'Peças Remanufaturadas',
  'Envio para todo Brasil',
];

export default function Marquee() {
  return (
    <div className="bg-brand-navy text-white overflow-hidden border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 font-display text-lg sm:text-xl font-bold uppercase tracking-wider flex items-center gap-6"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
