import { Navigation, MapPin } from 'lucide-react';

interface Airport {
  name: string;
  code: string;
  description: string;
}

const airports: Airport[] = [
  {
    name: 'San Francisco International Airport',
    code: 'SFO',
    description: 'Primary hub for international and domestic flights',
  },
  {
    name: 'Oakland International Airport',
    code: 'OAK',
    description: 'Convenient East Bay airport location',
  },
  {
    name: 'San Jose International Airport',
    code: 'SJC',
    description: "South Bay's major airport facility",
  },
  {
    name: 'Private Airports',
    code: 'FBO',
    description: 'Fixed-Base Operator facilities across the Bay Area',
  },
];

const cities = [
  'San Francisco',
  'Oakland',
  'San Jose',
  'Berkeley',
  'San Mateo',
  'Palo Alto',
  'Mountain View',
  'Fremont',
  'Hayward',
  'Sunnyvale',
  'Santa Clara',
  'Daly City',
  'Napa Valley',
  'Sonoma',
  'Marin County',
  'Peninsula Areas',
];

function ServiceCoverage() {
  const scrollToBook = () => {
    const el = document.getElementById('book-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Service Coverage
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Serving the Entire
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              San Francisco Bay Area
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            With a 100-mile service radius from San Francisco Airport, we provide luxury
            transportation throughout the Bay Area and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mr-4">
                <Navigation size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Airport Services</h3>
            </div>
            <div className="space-y-4">
              {airports.map((airport) => (
                <div
                  key={airport.code}
                  className="bg-black/50 border border-yellow-400/10 rounded-xl p-4 hover:border-yellow-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-bold text-lg">{airport.name}</h4>
                    <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                      {airport.code}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{airport.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mr-4">
                <MapPin size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Cities We Serve</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <MapPin size={16} className="text-yellow-400 flex-shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-yellow-400/20">
              <p className="text-gray-400 text-sm">
                <span className="text-yellow-400 font-semibold">Note:</span> We serve all cities
                within a 100-mile radius of San Francisco International Airport. Don't see your city?
                Contact us—we can accommodate special requests.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-600/5 to-yellow-400/10 border border-yellow-400/30 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Need Service Outside Our Regular Area?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            We're happy to accommodate special requests for destinations beyond our standard service
            area. Contact us to discuss your transportation needs, and we'll make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBook}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Request a Quote
            </button>
            <a
              href="tel:5103162021"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              Call (510) 316-2021
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCoverage;
