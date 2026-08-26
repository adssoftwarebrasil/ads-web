import { BedDouble } from 'lucide-react';
import Reveal from './Reveal';

const IMG =
  'https://storage.lucasmendes.dev/site-sp/restaurante%20e%20pousada%20ovomaltine/quartos/';

const accommodations = [
  { src: IMG + 'quarto-duplo-camas-solteiro-decoracao-baton_960x1280.webp', alt: 'Foto da acomodação 1' },
  { src: IMG + 'quarto-hotel-cama-marrom-escrivaninha-cadeira_960x1280.webp', alt: 'Foto da acomodação 2' },
  { src: IMG + 'quarto-hotel-duas-camas-tv-mesa_960x1280.webp', alt: 'Foto da acomodação 3' },
  { src: IMG + 'quarto-pequeno-cama-frigobar-espelho_960x1280.webp', alt: 'Foto da acomodação 4' },
  { src: IMG + 'quarto-pequeno-cama-prestigio-mesa-frigobar_1280x960.webp', alt: 'Foto da acomodação 5' },
  { src: IMG + 'quarto-simples-cama-televisao-cortinas-marrom_960x1280.webp', alt: 'Foto da acomodação 6' },
];

export default function Quartos() {
  return (
    <section id="quartos" className="section-padding bg-brand-cream">
      <div className="container-max">
        <Reveal className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <BedDouble size={28} className="text-brand-orange" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark mb-4">
            Nossas Acomodações
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conforto e tranquilidade para o seu descanso. Conheça um pouco mais dos nossos quartos.
          </p>
        </Reveal>
        <Reveal
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto delay-200"
          from="opacity-0 translate-y-10"
        >
          {accommodations.map((room) => (
            <div
              key={room.alt}
              className="rounded-2xl overflow-hidden shadow-md card-hover aspect-[3/4] w-full"
            >
              <img
                src={room.src}
                alt={room.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
