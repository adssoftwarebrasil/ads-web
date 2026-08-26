import { Users, Bed, Tv, Wifi, Wind, LucideIcon } from 'lucide-react';

interface RoomFeature {
  Icon: LucideIcon;
  iconName: string;
  label: string;
}

interface Room {
  images: { src: string; alt: string }[];
  title: string;
  subtitle: string;
  features: RoomFeature[];
}

const iconWifi: RoomFeature = {
  Icon: Wifi,
  iconName: 'lucide-wifi',
  label: 'Wi-Fi gratuito',
};
const iconTv: RoomFeature = {
  Icon: Tv,
  iconName: 'lucide-tv',
  label: 'TV de tela plana',
};
const iconAr: RoomFeature = {
  Icon: Wind,
  iconName: 'lucide-wind',
  label: 'Ar Condicionado',
};

const rooms: Room[] = [
  {
    images: [
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F2pessoas.webp',
        alt: 'Quarto Duplo - 1',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F2pessoass.webp',
        alt: 'Quarto Duplo - 2',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F2pessoasss.webp',
        alt: 'Quarto Duplo - 3',
      },
    ],
    title: 'Quarto Duplo',
    subtitle: 'Design simples e funcional',
    features: [
      { Icon: Users, iconName: 'lucide-users', label: '2 Pessoas' },
      {
        Icon: Bed,
        iconName: 'lucide-bed',
        label: '1 Cama de Casal ou 2 Camas de Solteiro',
      },
      iconTv,
      iconWifi,
      iconAr,
    ],
  },
  {
    images: [
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F2camassolteiro%2FWhatsApp%20Image%202025-11-05%20at%2021.10.24%20%281%29.jpeg',
        alt: 'Quarto com 2 Camas de Solteiro - 1',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F2camassolteiro%2FWhatsApp%20Image%202025-11-05%20at%2021.10.24.jpeg',
        alt: 'Quarto com 2 Camas de Solteiro - 2',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F2camassolteiro%2FWhatsApp%20Image%202025-11-05%20at%2021.10.26.jpeg',
        alt: 'Quarto com 2 Camas de Solteiro - 3',
      },
    ],
    title: 'Quarto com 2 Camas de Solteiro',
    subtitle: 'Perfeito para amigos ou família',
    features: [
      { Icon: Users, iconName: 'lucide-users', label: '2 Pessoas' },
      { Icon: Bed, iconName: 'lucide-bed', label: '2 Camas de Solteiro' },
      iconTv,
      iconWifi,
      iconAr,
    ],
  },
  {
    images: [
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F4%20pessoas.webp',
        alt: 'Quarto Familiar - 1',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F4pessoa.webp',
        alt: 'Quarto Familiar - 2',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F4pessoass.webp',
        alt: 'Quarto Familiar - 3',
      },
      {
        src: 'https://storage.lucasmendes.dev/site-sp/hotellarocca%2F4pessoasbanheiro.webp',
        alt: 'Quarto Familiar - 4',
      },
    ],
    title: 'Quarto Familiar',
    subtitle: 'Ambiente acolhedor e relaxante',
    features: [
      { Icon: Users, iconName: 'lucide-users', label: '4 Pessoas' },
      {
        Icon: Bed,
        iconName: 'lucide-bed',
        label: '1 Cama de Casal e 2 Camas de Solteiro',
      },
      iconTv,
      iconWifi,
      iconAr,
    ],
  },
];

export default function Rooms() {
  return (
    <section
      id="quartos"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Conheça Nossos <span className="text-[rgb(190,0,3)]">Quartos</span>
          </h2>
          <div className="h-1 w-32 bg-[rgb(190,0,3)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acomodações confortáveis e equipadas para sua melhor estadia
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-96 overflow-hidden group">
                <div className="flex h-full transition-transform duration-700 group-hover:translate-x-[-100%]">
                  {room.images.map((img) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
              <div className="p-10">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{room.subtitle}</p>
                </div>
                <div className="h-px bg-gray-200 mb-6"></div>
                <ul className="space-y-4 mb-10">
                  {room.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-gray-700"
                    >
                      <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <feature.Icon
                          size={18}
                          className={`lucide ${feature.iconName} text-[rgb(190,0,3)]`}
                        />
                      </div>
                      <span className="text-base leading-8">{feature.label}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5562983080229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[rgb(190,0,3)] hover:bg-[rgb(160,0,3)] text-white font-bold py-4 px-6 rounded-xl text-center text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Reserve Aqui
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
