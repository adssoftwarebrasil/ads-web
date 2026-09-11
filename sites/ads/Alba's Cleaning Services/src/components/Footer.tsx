import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const quickLinks: { label: string; id?: string }[] = [
  { label: 'Home', id: 'hero' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
  { label: 'About Us', id: 'about' },
  { label: 'Customer Guidance' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="/marcad'agua3.png" alt="Alba's Cleaning Services Logo" className="h-12 w-auto" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional cleaning services for homes and offices in Connecticut. Satisfaction
              guaranteed, so you can have quality moments with your family.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => link.id && scrollToId(link.id)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <a
                  href="tel:8607786773"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                >
                  (860) 778-6773
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <a
                  href="mailto:contact@albascleaningservices.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  contact@albascleaningservices.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">Serving Connecticut</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Alba's Cleaning Services. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Licensed &amp; Insured • Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
}
