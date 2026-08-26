import { MapPin, Phone, Clock } from 'lucide-react';

const units = [
  {
    badge: 'Matriz',
    name: 'Matriz São Pedro',
    address: 'R. São Pedro, 2235 - Centro (Sul), Teresina - PI, 64000-000',
    hours: 'Seg-Sex: 7h-19h | Sáb: 7h-13h',
    whatsapp: 'https://wa.me/5586988511762',
    route:
      'https://www.google.com/maps/search/?api=1&query=R.%20S%C3%A3o%20Pedro%2C%202235%20-%20Centro%20(Sul)%2C%20Teresina%20-%20PI%2C%2064000-000',
  },
  {
    badge: 'Filial',
    name: 'Shopping Riverside',
    address: 'Av. Ininga, 1201 - Loja H128 - Fátima, Teresina - PI, 64049-538',
    hours: 'Seg-Sex: 7h-19h | Sáb: 7h-13h',
    whatsapp: 'http://wa.me/5586988511763',
    route:
      'https://www.google.com/maps/search/?api=1&query=Av.%20Ininga%2C%201201%20-%20Loja%20H128%20-%20F%C3%A1tima%2C%20Teresina%20-%20PI%2C%2064049-538',
  },
  {
    badge: 'Filial',
    name: 'Lisandro Nogueira',
    address: 'R. Lisandro Nogueira, 1260 - Centro (Norte), Teresina - PI, 64000-200',
    hours: 'Seg-Sex: 7h-19h | Sáb: 7h-13h',
    whatsapp: 'http://wa.me/5586988511758',
    route:
      'https://www.google.com/maps/search/?api=1&query=R.%20Lisandro%20Nogueira%2C%201260%20-%20Centro%20(Norte)%2C%20Teresina%20-%20PI%2C%2064000-200',
  },
];

const maps = [
  {
    title: 'Matriz São Pedro',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0851465670667!2d-42.80439559999999!3d-5.0899329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3760ee2191c7%3A0xa75afc198df8bb25!2zR0FMRU5PIEZhcm3DoWNpYSBkZSBNYW5pcHVsYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1766086756858!5m2!1spt-BR!2sbr',
  },
  {
    title: 'Shopping Riverside',
    src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15896.341381993303!2d-42.8146954!3d-5.0899007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39f1c6513d7b%3A0x69582a0361612aad!2zR0FMRU5PIEzhcm3DoWNpYSBkZSBNYW5pcHVsYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1766086772074!5m2!1spt-BR!2sbr',
  },
  {
    title: 'Lisandro Nogueira',
    src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15896.341381993303!2d-42.8146954!3d-5.0899007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39d7f9d8a25b%3A0x5c288fddd85f8bc6!2zR2FsZW5vIEZhcm3DoWNpYSBkZSBNYW5pcHVsYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1766086785759!5m2!1spt-BR!2sbr',
  },
];

export default function Unidades() {
  return (
    <section id="unidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(230,217,182)] px-4 py-2 rounded-full mb-6">
            <MapPin size={20} className="text-[rgb(40,84,48)]" />
            <span className="text-[rgb(40,84,48)] font-semibold">Nossas Unidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(40,84,48)] mb-6">Encontre a Unidade Mais Próxima</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Três unidades estrategicamente localizadas em Teresina para melhor atendê-lo. Visite-nos e descubra o cuidado personalizado que você merece.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {units.map((unit) => (
            <div
              key={unit.name}
              className="bg-gradient-to-br from-[rgb(40,84,48)] to-[rgb(95,141,77)] rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-block bg-[rgb(230,217,182)] text-[rgb(40,84,48)] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {unit.badge}
              </div>
              <h3 className="text-2xl font-bold mb-4">{unit.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-[rgb(230,217,182)] flex-shrink-0 mt-1" />
                  <p className="text-white/90 text-sm leading-relaxed">{unit.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-[rgb(230,217,182)] flex-shrink-0" />
                  <a href="tel:+558632218485" className="text-white/90 hover:text-white transition-colors text-sm">
                    +558632218485
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-[rgb(230,217,182)] flex-shrink-0" />
                  <p className="text-white/90 text-sm">{unit.hours}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={unit.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-[rgb(40,84,48)] py-3 px-4 rounded-xl font-semibold hover:bg-[rgb(230,217,182)] transition-all duration-300 text-center text-sm shadow-lg"
                >
                  WhatsApp
                </a>
                <a
                  href={unit.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm text-white py-3 px-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-center text-sm border border-white/20"
                >
                  Ver Rota
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {maps.map((map) => (
            <div key={map.title} className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-[rgb(230,217,182)] p-4">
                <h4 className="text-[rgb(40,84,48)] font-bold text-center">{map.title}</h4>
              </div>
              <div className="relative w-full h-80">
                <iframe
                  src={map.src}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${map.title}`}
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
