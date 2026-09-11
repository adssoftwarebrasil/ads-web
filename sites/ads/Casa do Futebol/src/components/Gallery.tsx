import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const IMAGES = [
  {
    src: '/fotos/time-posando-no-campo.jpeg',
    alt: 'Time da Casa do Futebol posando no campo',
  },
  {
    src: '/fotos/trofeu-copa-vg-kids.jpeg',
    alt: 'Comissão técnica com o troféu da Copa VG Kids',
  },
  {
    src: '/fotos/time-abraco-antes-do-jogo.jpeg',
    alt: 'Time reunido em abraço antes do jogo',
  },
  {
    src: '/fotos/aquecimento-por-do-sol.jpeg',
    alt: 'Alunos em aquecimento no fim da tarde',
  },
  {
    src: '/fotos/comemoracao-com-treinador.jpeg',
    alt: 'Alunos comemorando com o treinador',
  },
  {
    src: '/fotos/grito-de-equipe.jpeg',
    alt: 'Grito de equipe após a partida',
  },
  {
    src: '/fotos/faltou-esta.jpg',
    alt: 'Crianças reunidas em abraço no gramado',
  },
  {
    src: '/fotos/treino-coletivo-manha.jpeg',
    alt: 'Turmas em treino coletivo no campo da escolinha',
  },
  {
    src: '/fotos/disputa-de-bola-no-treino.jpeg',
    alt: 'Alunos disputando a bola durante o treino',
  },
  {
    src: '/fotos/jogo-treino-turma-completa.jpeg',
    alt: 'Jogo-treino com a turma completa em campo',
  },
  {
    src: '/fotos/criancas-correndo-no-sol.jpeg',
    alt: 'Crianças correndo pelo gramado em dia de sol',
  },
  {
    src: '/fotos/partida-entre-turmas.jpeg',
    alt: 'Partida entre turmas da escolinha',
  },
  {
    src: '/fotos/chute-a-gol-no-campo-iluminado.jpeg',
    alt: 'Aluno chutando a gol no campo iluminado',
  },
  {
    src: '/fotos/familias-assistindo-o-treino.jpeg',
    alt: 'Famílias acompanhando o treino na área coberta',
  },
  {
    src: '/fotos/espaco-de-convivencia-do-complexo.jpeg',
    alt: 'Espaço de convivência ao lado do campo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/time-de-futebol-infantil-uniforme-verde_1170x909.webp',
    alt: 'Time de futebol infantil',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/menino-chutando-bola-campo-futebol-noite_1170x2080.webp',
    alt: 'Menino chutando bola no campo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/equipe-infantil-futebol-campo-pose-foto_1440x1440.webp',
    alt: 'Equipe infantil posando',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/time-futebol-juvenil-posando-no-campo-noturno_960x1200.webp',
    alt: 'Time juvenil no campo noturno',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/time-futebol-infantil-posando-com-o-treinador_1170x993.webp',
    alt: 'Time posando com treinador',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/criancas-jogando-futebol-campo-predio-ao-fundo_1440x1917.webp',
    alt: 'Crianças jogando futebol',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#C8CAC9]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#236E45]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#236E45] rounded-full" />
            <span className="text-[#236E45] text-sm font-semibold tracking-wide uppercase">Galeria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#363434] leading-tight">
            Nossa <span className="text-[#236E45]">história</span> em fotos
          </h2>
          <p className="text-[#363434]/60 text-lg max-w-xl mx-auto mt-4">
            Momentos que mostram a paixão pelo futebol e o compromisso com a qualidade da Casa do Futebol.
          </p>
        </div>

        {/* Grid ajustado para ser uniforme e responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#2C4D39]/0 group-hover:bg-[#2C4D39]/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
            onClick={() => setSelected(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selected}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl relative z-40"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}