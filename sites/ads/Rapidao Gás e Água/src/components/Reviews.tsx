import { Star, Quote } from 'lucide-react';
import { GoogleVerifiedIcon } from './icons';

interface Review {
  initials: string;
  color: string;
  name: string;
  meta: string;
  text: string;
}

const reviews: Review[] = [
  {
    initials: 'LG',
    color: 'rgb(241, 93, 34)',
    name: 'Luis Gustavo',
    meta: '3 avaliações • 3 fotos',
    text: '"Atendimento ótimo, preço justo, excelente qualidade! Recomendo muito, sempre que preciso é aqui que ligo."',
  },
  {
    initials: 'RF',
    color: 'rgb(24, 82, 151)',
    name: 'Ronicleia Franco',
    meta: '1 avaliação',
    text: '"Excelente atendimento e rápido na entrega! Fiz o pedido de manhã e já chegou em menos de uma hora."',
  },
  {
    initials: 'LA',
    color: 'rgb(243, 159, 29)',
    name: 'Luís Antunes',
    meta: 'Local Guide • 66 avaliações • 1 foto',
    text: '"Atendimento muito bom. Equipe educada, produto de qualidade e preço honesto. Sempre volto aqui!"',
  },
];

function Stars({ size }: { size: number }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} fill="rgb(246,227,8)" stroke="none" />
      ))}
    </>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(246, 227, 8, 0.2)', color: 'rgb(180, 140, 0)' }}
          >
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            O que nossos clientes
            <br />
            <span style={{ color: 'rgb(241, 93, 34)' }}>dizem sobre nós</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              <Stars size={28} />
            </div>
            <div className="text-left">
              <p className="text-4xl font-black text-gray-900 leading-none">5.0</p>
              <p className="text-sm text-gray-500 font-medium">Avaliação média no Google</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <Quote
                size={60}
                strokeWidth={2}
                className="lucide lucide-quote absolute top-4 right-4 opacity-5"
                style={{ color: r.color }}
              />
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.meta}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <Stars size={15} />
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{r.text}</p>
              <div
                className="mt-5 pt-4 border-t flex items-center gap-2 text-xs font-semibold"
                style={{ borderColor: 'rgba(156, 156, 154, 0.2)', color: r.color }}
              >
                <GoogleVerifiedIcon />
                Avaliação verificada no Google
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Rapid%C3%A3o+g%C3%A1s+e+%C3%A1gua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full border-2 transition-all duration-200 hover:text-white hover:-translate-y-0.5"
            style={{ borderColor: 'rgb(24, 82, 151)', color: 'rgb(24, 82, 151)' }}
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
