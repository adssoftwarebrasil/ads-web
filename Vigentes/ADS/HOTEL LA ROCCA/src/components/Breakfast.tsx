import { Coffee, Clock } from 'lucide-react';

const images = [
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=hotellarocca%2Fcafe-da-manha-1-1.webp&version_id=null',
    alt: 'Café da manhã 1',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=hotellarocca%2Fcafe-da-manha-3-1.webp&version_id=null',
    alt: 'Café da manhã 2',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=hotellarocca%2Fcafe-da-manha-4.webp&version_id=null',
    alt: 'Café da manhã 3',
  },
];

export default function Breakfast() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
              <Coffee
                size={48}
                strokeWidth={1.5}
                className="lucide lucide-coffee text-[rgb(190,0,3)]"
              />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Café da Manhã <span className="text-[rgb(190,0,3)]">Incluso</span>
            </h2>
            <div className="h-1 w-32 bg-[rgb(190,0,3)] mx-auto mb-8"></div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md">
                <Clock
                  size={28}
                  className="lucide lucide-clock text-[rgb(190,0,3)]"
                />
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                  06:30 às 09:30
                </p>
              </div>
              <div className="bg-white px-6 py-4 rounded-xl shadow-md">
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                  Buffet e Continental
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
