import { MapPin, Navigation, Car } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#F09100] text-xs uppercase tracking-[2px] font-semibold mb-3">
              LOCALIZAÇÃO
            </p>
            <h2 className="text-[#1A1A1A] text-3xl lg:text-5xl font-bold mb-4">
              Encontre-nos Facilmente
            </h2>
            <p className="text-[#4A4A4A] text-base lg:text-lg leading-relaxed mb-6">
              Estrategicamente localizado no centro de Jardim-MS, a poucos minutos das principais
              atrações de Bonito.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <MapPin size={24} className="text-[#F09100] flex-shrink-0" />
              <p className="text-[#333333] text-base font-medium">Jardim, Mato Grosso do Sul</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://waze.com/ul?ll=-21.483037,-56.142433&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#33CCFF] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#2BB8E8] hover:scale-105"
              >
                <Navigation size={20} />
                Abrir no Waze
              </a>
              <a
                href="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=-21.483037&dropoff[longitude]=-56.142433&dropoff[nickname]=Calderan%20Palace%20Hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#1A1A1A] hover:scale-105"
              >
                <Car size={20} />
                Pedir Uber
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[300px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5!2d-56.142433!3d-21.483037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI4JzU4LjkiUyA1NsKwMDgnMzIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Calderan Palace Hotel"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
