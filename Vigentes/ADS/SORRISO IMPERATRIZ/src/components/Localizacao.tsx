import { MapPin } from 'lucide-react';

export default function Localizacao() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MapPin className="lucide lucide-map-pin w-12 h-12 text-[rgb(212,175,55)] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-4">
            Venha Nos Visitar
          </h2>
          <p className="text-xl text-gray-600">
            Rua Pará 616, Esquina com a Rua Luiz Domingues
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7942.501553578649!2d-47.490382706420924!3d-5.529767399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55f002c2149ef%3A0xe4cedfdaa9c2b74f!2sCLINICA%20SORRISO%20IMPERATRIZ!5e0!3m2!1spt-BR!2sus!4v1764289052668!5m2!1spt-BR!2sus"
            width="100%"
            height={450}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica Sorriso Imperatriz"
            className="w-full h-96 sm:h-[450px]"
            style={{ border: '0px' }}
          ></iframe>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com/?q=Rua+Pará+616+Imperatriz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(13,51,98)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
