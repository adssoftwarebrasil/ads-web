import { useState } from 'react';
import {
  Bed,
  Wind,
  Tv,
  Droplet,
  Wifi,
  UtensilsCrossed,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Room {
  title: string;
  image: string;
  imageCount: number;
  bed: string;
  capacity: string;
}

const rooms: Room[] = [
  {
    title: 'Quarto Duplo Standard',
    image:
      'https://storage.lucasmendes.dev/site-sp/royal%20hotel%2FQuarto%20Duplo%20Standard%2F771441976.jpg',
    imageCount: 4,
    bed: '1 cama de casal',
    capacity: 'Capacidade: 2 pessoas',
  },
  {
    title: 'Quarto Duplo (Duas Camas)',
    image:
      'https://storage.lucasmendes.dev/site-sp/royal%20hotel%2FQuarto%20Duplo%2F620799062.jpg',
    imageCount: 2,
    bed: '2 camas de solteiro',
    capacity: 'Capacidade: 2 pessoas',
  },
  {
    title: 'Quarto Triplo Comfort',
    image:
      'https://storage.lucasmendes.dev/site-sp/royal%20hotel%2FQuarto%20Triplo%20Comfort%2F496436994.jpg',
    imageCount: 6,
    bed: '1 cama casal + 1 solteiro',
    capacity: 'Capacidade: 3 pessoas',
  },
];

const amenities = [
  { icon: Wind, label: 'Ar-condicionado' },
  { icon: Tv, label: 'TV tela plana' },
  { icon: Droplet, label: 'Banheiro privativo' },
  { icon: Wifi, label: 'Wi-Fi gratuito' },
  { icon: UtensilsCrossed, label: 'Frigobar' },
];

function RoomCard({ room }: { room: Room }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + room.imageCount) % room.imageCount);
  const next = () => setIndex((i) => (i + 1) % room.imageCount);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ">
      <div className="relative group">
        <div className="relative h-64 overflow-hidden">
          <img
            src={room.image}
            alt={`${room.title} - ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronLeft width={20} height={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronRight width={20} height={20} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: room.imageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">{room.title}</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-[#2C2C2C]">
            <Bed width={18} height={18} className="text-[#435A4A]" />
            <span>{room.bed}</span>
          </div>
          {amenities.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.label} className="flex items-center space-x-3 text-[#2C2C2C]">
                <Icon width={18} height={18} className="text-[#435A4A]" />
                <span>{a.label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center space-x-2 mb-6 text-[#435A4A] font-medium">
          <Users width={20} height={20} />
          <span>{room.capacity}</span>
        </div>
        <button className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-[#435A4A] text-white hover:bg-[#2D3A2F] w-full ">
          Ver Disponibilidade
        </button>
      </div>
    </div>
  );
}

export default function Rooms() {
  return (
    <section id="quartos" className="py-16 md:py-24 bg-[#FAFAF8] ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[#C8AF82] font-semibold text-lg uppercase tracking-wide mb-3">
            Acomodações
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">Nossos Quartos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.title} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
