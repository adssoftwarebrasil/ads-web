import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Our Services', id: 'services' },
  { label: 'Why Choose Us', id: 'why-choose-us' },
  { label: 'Our Fleet', id: 'fleet' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Book Now', id: 'book-now' },
];

const services = [
  'Airport Transportation',
  'Corporate & Executive',
  'Special Events & Weddings',
  'Wine Tours',
  'Memorial Services',
];

function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=royall%2Fimg%2Flogo.jpg&version_id=null"
              alt="Royal Ride LLC"
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Luxury and comfort in every ride. Premium transportation services across the San
              Francisco Bay Area.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/royalridelimoserviceca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center hover:bg-yellow-400/20 transition-colors"
              >
                <Instagram size={20} className="text-yellow-400" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5103162021"
                  className="flex items-start space-x-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <Phone size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>(510) 316-2021</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:royalridelimoservice@gmail.com"
                  className="flex items-start space-x-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <Mail size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="break-all">royalridelimoservice@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>Serving San Francisco Bay Area & surrounding regions</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-yellow-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Royal Ride LLC. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Premium Transportation Services | San Francisco Bay Area
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
