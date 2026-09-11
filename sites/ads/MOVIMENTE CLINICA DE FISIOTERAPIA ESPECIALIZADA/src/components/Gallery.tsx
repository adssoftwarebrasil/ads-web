import Reveal from './Reveal';

interface Photo {
  id: string;
  width: number;
  height: number;
  alt: string;
}

// Arquivos em public/img/gallery: gNN.webp (largura abaixo) e gNN-480.webp.
const photos: Photo[] = [
  {
    id: 'g01',
    width: 960,
    height: 640,
    alt: 'Estúdio de Pilates da Movimente, com aparelhos, espelhos e parede laranja',
  },
  {
    id: 'g02',
    width: 960,
    height: 1705,
    alt: 'Fisioterapeuta avaliando a amplitude de movimento do ombro de uma paciente',
  },
  {
    id: 'g03',
    width: 960,
    height: 640,
    alt: 'Paciente em exercício de Pilates no Cadillac acompanhada pela instrutora',
  },
  {
    id: 'g04',
    width: 683,
    height: 1024,
    alt: 'Fisioterapeuta aplicando terapia manual na região cervical de um paciente',
  },
  {
    id: 'g05',
    width: 960,
    height: 640,
    alt: 'Sala de Pilates da clínica com aparelhos e o mural "Pilates é vida em movimento"',
  },
  {
    id: 'g06',
    width: 960,
    height: 1706,
    alt: 'Detalhe da decoração da clínica: parede laranja com esculturas de escaladores',
  },
  {
    id: 'g07',
    width: 960,
    height: 640,
    alt: 'Atendimento de fisioterapia na mesa de tração eletrônica',
  },
  {
    id: 'g08',
    width: 683,
    height: 1024,
    alt: 'Fisioterapeuta tratando a região dorsal de um paciente na maca',
  },
  {
    id: 'g09',
    width: 960,
    height: 640,
    alt: 'Exercício de Pilates na parede de molas, com apoio da fisioterapeuta',
  },
  {
    id: 'g10',
    width: 960,
    height: 640,
    alt: 'Fisioterapeuta auxiliando paciente em exercício de alongamento na barra de parede',
  },
  {
    id: 'g11',
    width: 960,
    height: 640,
    alt: 'Avaliação de joelho com faixa elástica durante sessão de reabilitação',
  },
];

const SIZES = '(min-width: 1024px) 292px, (min-width: 768px) 33vw, 50vw';

export default function Gallery() {
  return (
    <section className="py-24" style={{ background: 'rgb(253, 246, 242)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-primary/10 text-brand-primary">
            Nossa Clínica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            Conheça{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, rgb(62, 48, 123), rgb(219, 67, 43)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Nosso Espaço
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Estrutura moderna, ambiente acolhedor e equipe dedicada a proporcionar a melhor experiência de tratamento
            para você.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group relative shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`/img/gallery/${photo.id}.webp`}
                srcSet={`/img/gallery/${photo.id}-480.webp 480w, /img/gallery/${photo.id}.webp ${photo.width}w`}
                sizes={SIZES}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a
            href="https://www.instagram.com/movimentefisiosorriso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold border-2 text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
            </svg>
            Ver mais no Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
