import { MapPin, Users, BedDouble } from 'lucide-react';
import type { Property } from '../data/properties';

interface Props {
  property: Property;
  delay: number;
}

export default function PropertyCard({ property, delay }: Props) {
  return (
    <div
      className="opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{ animationDelay: `${delay}ms` }}
    >
      <a className="block group" href={`/imovel/${property.id}`} data-discover="true">
        <div className="bg-clean-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="relative overflow-hidden">
            <div className="aspect-4/3">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
              <div className="text-clean-accent font-heading font-bold text-lg">
                R$ {property.price}
              </div>
              <div className="text-clean-secondary font-body text-xs -mt-1">por noite</div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-clean-secondary">
              <MapPin className="lucide lucide-map-pin w-4 h-4 flex-shrink-0" />
              <span className="font-body text-sm font-medium">{property.location}</span>
            </div>
            <h3 className="font-heading font-semibold text-xl text-clean-dark leading-tight line-clamp-2 group-hover:text-clean-accent transition-colors duration-300">
              {property.title}
            </h3>
            <p className="font-body text-clean-secondary text-sm leading-relaxed line-clamp-2">
              {property.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-clean-secondary">
                  <Users className="lucide lucide-users w-4 h-4" />
                  <span className="font-body text-sm font-medium">{property.guests}</span>
                </div>
                <div className="flex items-center space-x-1 text-clean-secondary">
                  <BedDouble className="lucide lucide-bed-double w-4 h-4" />
                  <span className="font-body text-sm font-medium">{property.beds}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-heading font-bold text-2xl text-clean-accent">
                  R$ {property.price}
                </div>
                <div className="font-body text-clean-secondary text-xs -mt-1">por noite</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
