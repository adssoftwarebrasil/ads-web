import { useState } from 'react';
import { Eye, X } from 'lucide-react';

interface Projeto {
  titulo: string;
  img: string;
}

const projetos: Projeto[] = [
  {
    titulo: 'Instalação Profissional',
    img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/img/varal-de-luz-instalacao-exemplo.webp',
  },
  {
    titulo: 'Projeto Concluído',
    img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/img/varal-de-luz-instalado-cliente.webp',
  },
];

export default function Projetos() {
  const [aberto, setAberto] = useState<Projeto | null>(null);

  return (
    <section className="py-20 md:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold mb-4">
            Projetos Realizados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Nossos Trabalhos em Ação</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja exemplos reais de instalações que transformaram ambientes e encantaram nossos clientes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <button
              key={projeto.titulo}
              onClick={() => setAberto(projeto)}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
              aria-label={`Ver imagem: ${projeto.titulo}`}
            >
              <img
                src={projeto.img}
                alt={projeto.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white">
                    <Eye size={20} />
                    <span className="text-lg font-semibold">{projeto.titulo}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {aberto && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setAberto(null)}
        >
          <button
            onClick={() => setAberto(null)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            aria-label="Fechar imagem"
          >
            <X size={32} />
          </button>
          <img
            src={aberto.img}
            alt={aberto.titulo}
            className="max-w-full max-h-[85vh] rounded-2xl border border-slate-700 shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
