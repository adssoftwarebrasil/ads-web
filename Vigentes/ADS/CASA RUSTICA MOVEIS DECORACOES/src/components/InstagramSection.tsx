import { Instagram, ExternalLink } from 'lucide-react';
import { INSTAGRAM } from '../shared';

const posts = [
  'https://storage.lucasmendes.dev/site-sp/casarustica%2FMesa%20Redonda%20com%20Girato%CC%81rio.avif',
  'https://storage.lucasmendes.dev/site-sp/casarustica%2FJogo%20Sofa%CC%81%20Master.avif',
  'https://storage.lucasmendes.dev/site-sp/casarustica%2F%20Cristaleiras1.avif',
  'https://storage.lucasmendes.dev/site-sp/casarustica%2FMesa%20Mineira.avif',
  'https://storage.lucasmendes.dev/site-sp/casarustica%2FItens%20de%20decorac%CC%A7a%CC%83o%201.avif',
  'https://storage.lucasmendes.dev/site-sp/casarustica%2FMesa%20Redonda%20Industrial.avif',
];

export default function InstagramSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-8 h-8 text-[rgb(5,86,77)]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(5,86,77)]">Acompanhe no Instagram</h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-2xl text-[rgb(248,177,1)] hover:text-[rgb(228,157,0)] transition-colors font-medium"
          >
            <span>@casarusticauberlandia</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <div className="w-24 h-1 bg-[rgb(248,177,1)] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img src={src} alt="Instagram Post" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
