import { ArrowUpRight } from 'lucide-react';
import { IMG, WHATSAPP_URL } from '../data';

const CATEGORIES = [
  { image: IMG.car1, tag: 'CONFORTO E FAMÍLIA', title: 'SUVs Premium' },
  { image: IMG.car2, tag: 'PERFORMANCE', title: 'Sedans Esportivos' },
  { image: IMG.car3, tag: 'TRABALHO E LAZER', title: 'Picapes Robustas' },
  { image: IMG.car4, tag: 'ESTILO ÚNICO', title: 'Coupés & Sport' },
];

export default function Stock() {
  return (
    <section id="estoque" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
              ESTOQUE
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
              Veja os <span className="text-gold">veículos disponíveis</span>
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wider text-gold hover:gap-2.5 transition-all"
          >
            Consultar estoque completo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-gold">
                  {cat.tag}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold uppercase text-white">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
