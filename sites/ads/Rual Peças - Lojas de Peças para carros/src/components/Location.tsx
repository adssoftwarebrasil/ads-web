import { useEffect, useState } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('localizacao');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#2b2d91' }}>
              Visite Nossa Loja
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={28} style={{ color: '#f91b0e', flexShrink: 0 }} />
                <div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: '#0a0d00' }}>
                    Endereço
                  </h3>
                  <p style={{ color: '#0a0d00' }}>Avenida José Maria de Brito, 1249</p>
                  <p style={{ color: '#0a0d00' }}>Bairro Monjolo</p>
                  <p style={{ color: '#0a0d00' }}>Foz do Iguaçu - PR</p>
                  <p style={{ color: '#0a0d00' }}>CEP: 85.864-320</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock size={28} style={{ color: '#2b2d91', flexShrink: 0 }} />
                <div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: '#0a0d00' }}>
                    Horário de Funcionamento
                  </h3>
                  <p style={{ color: '#0a0d00' }}>Segunda a Sexta</p>
                  <p style={{ color: '#0a0d00' }}>Manhã: 08:00 - 12:00</p>
                  <p style={{ color: '#0a0d00' }}>Tarde: 13:30 - 17:30</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg" style={{ color: '#0a0d00' }}>
                  Contatos
                </h3>

                <a
                  href="https://wa.me/5545984268490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <Phone size={24} style={{ color: '#2b2d91' }} />
                  <span style={{ color: '#0a0d00' }}>+55 45 98426-8490</span>
                </a>

                <a
                  href="mailto:brunocastagnaroxxx@gmail.com"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <Mail size={24} style={{ color: '#2b2d91' }} />
                  <span style={{ color: '#0a0d00' }}>brunocastagnaroxxx@gmail.com</span>
                </a>

                <a
                  href="https://instagram.com/rualpecas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <Instagram size={24} style={{ color: '#2b2d91' }} />
                  <span style={{ color: '#0a0d00' }}>@rualpecas</span>
                </a>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Jos%C3%A9+Maria+de+Brito+1249+Foz+do+Igua%C3%A7u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#fdf309', color: '#0a0d00' }}
              >
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.2!2d-54.5775!3d-25.5153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzU1LjEiUyA1NMKwMzQnMzkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              className="w-full h-full rounded-xl shadow-lg"
              style={{ minHeight: '500px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rual Peças"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
