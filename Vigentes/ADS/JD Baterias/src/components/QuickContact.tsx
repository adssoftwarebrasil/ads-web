import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, MAPS_URL } from '../constants';

export default function QuickContact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={WHATSAPP_URL}
            className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-700 hover:scale-105 hover:shadow-2xl opacity-100 translate-y-0"
            style={{ backgroundColor: 'rgb(37, 211, 102)', transitionDelay: '0ms' }}
          >
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={40} style={{ color: 'rgb(37, 211, 102)' }} />
              </div>
              <h3 className="text-white text-2xl font-bold">Mensagem</h3>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
          <a
            href={PHONE_TEL}
            className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-700 hover:scale-105 hover:shadow-2xl opacity-100 translate-y-0"
            style={{ backgroundColor: 'rgb(33, 150, 243)', transitionDelay: '150ms' }}
          >
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone size={40} style={{ color: 'rgb(33, 150, 243)' }} />
              </div>
              <h3 className="text-white text-2xl font-bold">Ligação</h3>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-700 hover:scale-105 hover:shadow-2xl opacity-100 translate-y-0"
            style={{ backgroundColor: 'rgb(255, 152, 0)', transitionDelay: '300ms' }}
          >
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin size={40} style={{ color: 'rgb(255, 152, 0)' }} />
              </div>
              <h3 className="text-white text-2xl font-bold">Localização</h3>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
