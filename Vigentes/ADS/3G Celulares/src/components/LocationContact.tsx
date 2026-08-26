import { MapPin, Clock, Phone, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function LocationContact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className={`${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            } transition-all duration-700`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#172059] mb-8">
              Visite Nossa Loja
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00adec] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#172059] mb-2">Endereço</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rua Mal. Bormann, 154 D - Sala 2<br />
                    Centro, Chapecó - SC, 89801-050
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#81c227] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#172059] mb-2">Horários</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Segunda a Sexta:</strong> 08h às 12h | 13h30 às 18h15<br />
                    <strong>Sábado:</strong> 09h às 12h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#f7cb0c] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#172059] mb-3">WhatsApp</h3>
                  <a
                    href="https://wa.me/5549999504348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#81c227] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6fa01f] transition-all duration-200 hover:shadow-lg"
                  >
                    (49) 99950-4348
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-[#172059] mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/3gcelularescco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#00adec] rounded-full flex items-center justify-center hover:bg-[#0095cd] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-white" size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/3gcelulareschapeco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            } transition-all duration-700 delay-200`}
          >
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7843564731844!2d-52.61766842449516!3d-27.09508017654877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5e6c7c8f3c3%3A0x1234567890abcdef!2sR.%20Mal.%20Bormann%2C%20154%20-%20Centro%2C%20Chapec%C3%B3%20-%20SC%2C%2089801-050!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização 3G Celulares"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
