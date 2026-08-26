import { MapPin, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Contato() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const showBar = visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0';
  const showLeft = visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8';
  const showRight = visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8';

  return (
    <section id="contato" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div ref={ref} className="container mx-auto px-6 lg:px-8">
        <h2 className={`text-primary text-4xl lg:text-6xl font-extrabold text-center mb-6 transition-all duration-1000 ${show}`}>
          Venha Nos Conhecer
        </h2>
        <div className={`w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 lg:mb-20 rounded-full transition-all duration-1000 ${showBar}`}></div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${showLeft}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-start">
                <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  <MapPin className="lucide lucide-map-pin text-accent w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-6">
                  <h3 className="text-accent text-2xl font-bold mb-3">Endereço</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Praça Antônio Lopes Veludo, 120<br />
                    Jardim Sumaré - Ribeirão Preto SP<br />
                    CEP: 14.025-059
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-start">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <Mail className="lucide lucide-mail text-primary w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-6">
                  <h3 className="text-primary text-2xl font-bold mb-3">E-mail</h3>
                  <a
                    href="mailto:pri_raiosol@yahoo.com.br"
                    className="text-gray-700 text-lg hover:text-primary transition-colors font-medium"
                  >
                    pri_raiosol@yahoo.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-start">
                <div className="bg-secondary/10 p-4 rounded-2xl group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                  <Clock className="lucide lucide-clock text-secondary w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-6">
                  <h3 className="text-secondary text-2xl font-bold mb-3">Horário de Funcionamento</h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">7h às 19h de Segunda a Sexta</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-orange rounded-3xl p-8 shadow-xl">
              <h3 className="text-white text-2xl font-bold mb-6">Siga-nos nas Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/raiodesolencantado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Instagram"
                >
                  <Instagram className="lucide lucide-instagram" width={28} height={28} />
                </a>
                <a
                  href="https://www.facebook.com/escolaraiodesolencantado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Facebook"
                >
                  <Facebook className="lucide lucide-facebook" width={28} height={28} />
                </a>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-[400ms] ${showRight}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] lg:min-h-[650px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0935752397394!2d-47.82123!3d-21.18562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0c1e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sPra%C3%A7a%20Ant%C3%B4nio%20Lopes%20Veludo%2C%20120%20-%20Jardim%20Sumar%C3%A9%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-059!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Raio de Sol Encantado"
                style={{ border: '0px', minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
