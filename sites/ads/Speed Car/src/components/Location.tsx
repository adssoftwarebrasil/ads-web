import { MapPin } from 'lucide-react';
import Reveal from './Reveal';

export default function Location() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
              <span className="text-speedcar-red text-xs font-bold tracking-[0.2em] uppercase">
                Localização
              </span>
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-speedcar-black leading-tight">
              Onde Estamos
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
              <MapPin className="lucide lucide-map-pin w-4 h-4 text-speedcar-red" />
              <p className="text-sm">
                R. Colonizador Ênio Pipino, 5485 - St. Industrial Norte, Sinop - MT
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-black/10 border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.9287044903263!2d-55.49311132494211!3d-11.840264388380707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fffbaadc68f%3A0xe9ebbd34fdb0927f!2sSpeedCar%20Centro%20Automotivo!5e0!3m2!1spt-BR!2sbr!4v1770342729008!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SpeedCar Centro Automotivo - Mapa"
              className="w-full"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
