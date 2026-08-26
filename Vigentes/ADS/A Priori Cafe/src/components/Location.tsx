import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import ContactForm from './ContactForm';

const hours = [
  { days: 'Segunda a Sexta', time: '07:30 às 19:00h' },
  { days: 'Sábado', time: '08:00 às 16:00h' },
  { days: 'Domingo', time: 'Fechado' },
];

export default function Location() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-burgundy mb-3 block">
            Onde Estamos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Venha nos Visitar
          </h2>
          <p className="font-sans text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Estamos no coração do Centro de Campinas, esperando por você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-8 animate-on-scroll-left">
            <div className="bg-cream-light rounded-2xl p-7 border border-cream">
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <MapPin size={18} className="text-burgundy" />
                Localização
              </h3>
              <p className="font-sans text-gray-700 text-base leading-relaxed">
                Rua Barão de Jaguara, 915
                <br />
                Centro · Campinas · SP
                <br />
                CEP 13015-001
              </p>
              <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed">
                Convênio com estacionamento <span className="font-semibold text-gray-700">Estacione Park</span> em frente — os primeiros 30 minutos são por nossa conta.
              </p>
              <a
                href="https://maps.google.com/?q=A+Priori+Café+Campinas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-burgundy font-sans text-sm font-medium hover:underline"
              >
                Abrir no Google Maps →
              </a>
            </div>

            <div className="bg-cream-light rounded-2xl p-7 border border-cream">
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <Clock size={18} className="text-burgundy" />
                Horários de Funcionamento
              </h3>
              <div className="space-y-3">
                {hours.map(({ days, time }) => (
                  <div key={days} className="flex items-center justify-between gap-4">
                    <span className="font-sans text-sm text-gray-600">{days}</span>
                    <span className="font-sans text-sm font-semibold text-gray-900 whitespace-nowrap">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream-light rounded-2xl p-7 border border-cream">
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-5">Contato & Redes Sociais</h3>
              <div className="space-y-3">
                <a
                  href="http://wa.me/5519996561976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-burgundy transition-colors duration-200"
                >
                  <Phone size={16} className="text-burgundy flex-shrink-0" />
                  <span className="font-sans text-sm">(19) 9 9656-1976</span>
                </a>
                <a
                  href="mailto:aprioricafecentro@aprioricafe.com.br"
                  className="flex items-center gap-3 text-gray-700 hover:text-burgundy transition-colors duration-200"
                >
                  <Mail size={16} className="text-burgundy flex-shrink-0" />
                  <span className="font-sans text-sm">aprioricafecentro@aprioricafe.com.br</span>
                </a>
                <a
                  href="https://www.instagram.com/aprioricafecps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-burgundy transition-colors duration-200"
                >
                  <Instagram size={16} className="text-burgundy flex-shrink-0" />
                  <span className="font-sans text-sm">@aprioricafecps</span>
                </a>
                <a
                  href="https://www.facebook.com/aprioricafecps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-burgundy transition-colors duration-200"
                >
                  <Facebook size={16} className="text-burgundy flex-shrink-0" />
                  <span className="font-sans text-sm">@aprioricafecps</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll-right">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-cream h-64 md:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1869272718104!2d-47.06069632468957!3d-22.906475179255274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cfc88597ea99%3A0x3b122b175699da5a!2sA%20Priori%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1774375411907!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa A Priori Café"
              />
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
