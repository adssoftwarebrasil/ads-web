import { useRef, useState } from 'react';
import { ArrowLeftRight, Eye } from 'lucide-react';

interface Comparison {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const comparisons: Comparison[] = [
  {
    id: 1,
    title: 'Bathroom Deep Clean & Sanitization',
    category: 'Bathroom Deep Clean',
    location: 'New Haven, CT',
    description:
      'Complete bathroom transformation including toilet sanitization, shower/tub scrubbing, mirror polishing, and floor deep cleaning.',
    beforeImage: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0034.jpg',
    afterImage: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0028.jpg',
  },
  {
    id: 2,
    title: 'Bedroom Organization & Cleaning',
    category: 'Bedroom Cleaning',
    location: 'Hartford, CT',
    description:
      'Professional bedroom cleaning including bed making, surface dusting, floor vacuuming, and complete organization of personal items.',
    beforeImage: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0030.jpg',
    afterImage: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0032.jpg',
  },
  {
    id: 3,
    title: 'Living Room Deep Clean & Care',
    category: 'Living Room Cleaning',
    location: 'Stamford, CT',
    description:
      'Complete living room cleaning including furniture dusting, upholstery vacuuming, floor care, and entertainment center detailing.',
    beforeImage: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0033.jpg',
    afterImage: 'https://storage.lucasmendes.dev/caroba/img%2FIMG-20250917-WA0029.jpg',
  },
];

function SliderImages({ item }: { item: Comparison }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  };

  return (
    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize select-none touch-none"
        onMouseDown={(e) => {
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
        onMouseMove={(e) => dragging && updateFromClientX(e.clientX)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        <img
          src={item.afterImage}
          alt={`After - ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={item.beforeImage}
          alt={`Before - ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0px ${100 - position}% 0px 0px)` }}
        />
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize touch-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg touch-none">
            <ArrowLeftRight className="h-4 w-4 text-gray-600" />
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
          AFTER
        </div>
      </div>
    </div>
  );
}

function ComparisonCard({ item }: { item: Comparison }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <SliderImages item={item} />
        <div className="hidden lg:flex p-4 sm:p-6 lg:p-8 flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
              {item.category}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-black mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 mb-4 flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              {item.location}
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Tip:</strong> Drag the slider left and right to see the complete transformation
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Eye className="h-3 w-3" />
              <span>Click and drag to compare</span>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 text-center"
          >
            Get Your Transformation Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Transformation() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-full inline-block mb-4">
            <ArrowLeftRight className="h-6 w-6 text-black" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 px-4">
            See the Transformation
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real results from our professional cleaning services in Connecticut
          </p>
        </div>

        <div className="hidden md:block">
          <ComparisonCard item={comparisons[selected]} />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 px-4">
            {comparisons.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setSelected(i)}
                className={
                  i === selected
                    ? 'px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                    : 'px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-8">
          {comparisons.map((c) => (
            <ComparisonCard key={c.id} item={c} />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {comparisons.map((c, i) => (
            <div
              key={c.id}
              onClick={() => setSelected(i)}
              className={
                i === selected
                  ? 'bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-200 ring-4 ring-yellow-400 shadow-lg'
                  : 'bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg'
              }
            >
              <div className="grid grid-cols-2 h-24 sm:h-32">
                <div className="relative">
                  <img
                    src={c.beforeImage}
                    alt={`Before - ${c.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={c.afterImage}
                    alt={`After - ${c.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-black text-sm">{c.title}</h4>
                <p className="text-xs text-gray-500">{c.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
