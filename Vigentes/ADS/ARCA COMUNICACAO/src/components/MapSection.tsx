import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-[rgb(30,30,30)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <MapPin className="text-[rgb(255,204,44)]" size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(254,254,254)] mb-4">
            Visite nossa <span className="text-[rgb(255,204,44)]">Sede</span>
          </h2>
          <p className="text-lg text-[rgb(212,212,212)] max-w-2xl mx-auto">
            Venha conhecer nosso espaço e ver de perto a qualidade dos nossos materiais e projetos
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[rgb(255,204,44)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5494079276655!2d-46.52612792480651!3d-18.594342382513606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8b6a1af48df9%3A0x4bc0b697647c1928!2sArca%20Comunica%C3%A7%C3%A3o%20Visual!5e0!3m2!1spt-BR!2sbr!4v1770124529166!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Arca Comunicação"
            className="w-full"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/place/Arca+Comunica%C3%A7%C3%A3o+Visual/@-18.5943424,-46.5261279,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(255,204,44)] text-[rgb(11,9,48)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(210,175,112)] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
