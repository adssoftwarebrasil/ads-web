import { MapPin, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(24, 82, 151, 0.08)', color: 'rgb(24, 82, 151)' }}
          >
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Nos encontre em
            <br />
            <span style={{ color: 'rgb(241, 93, 34)' }}>Primavera do Leste — MT</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-4">
            <MapPin size={16} strokeWidth={2} style={{ color: 'rgb(241, 93, 34)' }} />
            <span>Av. Belo Horizonte, 1901 — Primavera I, Primavera do Leste - MT, 78850-000</span>
          </div>
        </div>
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ border: '2px solid rgba(241, 93, 34, 0.15)' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.7956476785516!2d-54.2958065248749!3d-15.549081885057596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9377255a66f596b7%3A0xba5e5eb9cdb5bdb6!2zUmFwaWTDo28gZ8OhcyBlIMOhZ3Vh!5e0!3m2!1spt-BR!2sbr!4v1772208668251!5m2!1spt-BR!2sbr"
            width="100%"
            height="420"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Rapidão Gás e Água"
            style={{ border: '0px', display: 'block' }}
          ></iframe>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <a
              href="https://maps.google.com/?q=Rapidão+gás+e+água,+Av.+Belo+Horizonte+1901,+Primavera+do+Leste+MT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'rgb(24, 82, 151)' }}
            >
              <ExternalLink size={13} strokeWidth={2} />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
