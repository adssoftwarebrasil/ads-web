import { useState } from 'react';
import { Camera, ZoomIn, X } from 'lucide-react';

interface GalleryItem {
  image: string;
  alt: string;
  category: string;
  title: string;
}

const items: GalleryItem[] = [
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0028.jpg',
    alt: 'Clean and organized bathroom with spotless toilet and bathtub',
    category: 'Bathroom',
    title: 'Bathroom Toilet & Tub Care',
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0029.jpg',
    alt: 'Clean and polished bathroom sink and vanity area',
    category: 'Bathroom',
    title: 'Bathroom Sink & Vanity',
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0032.jpg',
    alt: 'Clean and organized bedroom with perfectly made bed',
    category: 'Bedroom',
    title: 'Bedroom Organization',
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0035.jpg',
    alt: 'Tidy bedroom with clean bed and organized surfaces',
    category: 'Bedroom',
    title: 'Bedroom Bed Making',
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0037.jpg',
    alt: 'Clean and organized bedroom with fresh bedding',
    category: 'Bedroom',
    title: 'Bedroom Fresh Linens',
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0041.jpg',
    alt: 'Clean living room with organized fireplace area',
    category: 'Living Room',
    title: 'Living Room & Fireplace',
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0042.jpg',
    alt: "Clean and organized children's bedroom",
    category: 'Bedroom',
    title: "Children's Room Care",
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0044.jpg',
    alt: "Tidy children's bedroom with organized toys and furniture",
    category: 'Bedroom',
    title: "Kids' Room Organization",
  },
  {
    image: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0046.jpg',
    alt: 'Clean and organized bedroom with fresh bedding',
    category: 'Bedroom',
    title: 'Bedroom Deep Clean',
  },
];

const filters = ['All', 'Bathroom', 'Bedroom', 'Living Room'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const visible =
    activeFilter === 'All' ? items : items.filter((i) => i.category === activeFilter);

  return (
    <section id="gallery">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-full inline-block mb-4">
              <Camera className="h-6 w-6 text-black" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 px-4">
              Our Completed Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See the quality and attention to detail in every Alba's Cleaning Services project
            </p>
          </div>
          <div className="flex flex-wrap justify-center mb-12 gap-2 px-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={
                  f === activeFilter
                    ? 'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-md'
                    : 'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                }
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {visible.map((item) => (
              <div
                key={item.title}
                onClick={() => setLightbox(item)}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-black group-hover:text-yellow-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Ready to see your space transformed with the same level of care and attention?
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white p-2 hover:text-yellow-400 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox.image}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
