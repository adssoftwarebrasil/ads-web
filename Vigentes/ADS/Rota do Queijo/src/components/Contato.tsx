import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-20 md:py-32 bg-gradient-to-b from-[rgb(247,247,247)] to-[rgb(254,254,254)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(197,162,3)] font-bold text-sm tracking-wider uppercase">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(32,29,30)] mt-3 mb-6 leading-tight">
            Venha Nos Visitar
          </h2>
          <p className="text-[rgb(32,29,30)]/70 text-lg max-w-2xl mx-auto">
            Estamos localizados em Águas Claras, Brasília. Venha conhecer nosso espaço e experimentar
            nossos produtos.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[rgb(197,162,3)]/10 rounded-xl flex items-center justify-center">
                  <MapPin width={28} height={28} className="text-[rgb(197,162,3)]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[rgb(32,29,30)] text-lg mb-2">Endereço</h3>
                  <p className="text-[rgb(32,29,30)]/80 font-medium">
                    QS 01 Condomínio LED/Intercity Hotéis - Loja 10 e 11
                  </p>
                  <p className="text-[rgb(32,29,30)]/60 text-sm mt-1">
                    Águas Claras, Brasília - DF, 71950-770
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[rgb(197,162,3)]/10 rounded-xl flex items-center justify-center">
                  <Clock width={28} height={28} className="text-[rgb(197,162,3)]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[rgb(32,29,30)] text-lg mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-[rgb(32,29,30)]/80 font-medium">
                    Segunda a Sexta: 07:00 - 17:30
                  </p>
                  <p className="text-[rgb(32,29,30)]/60 text-sm mt-1">
                    Sábado: 07:00 - 12:00 | Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[rgb(197,162,3)]/10 rounded-xl flex items-center justify-center">
                  <Phone width={28} height={28} className="text-[rgb(197,162,3)]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[rgb(32,29,30)] text-lg mb-2">Telefone/WhatsApp</h3>
                  <a
                    href="http://wa.me/556184960294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(197,162,3)] hover:text-[rgb(217,182,23)] font-semibold transition-colors"
                  >
                    (61) 9 8496-0294
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(197,162,3)]/10 rounded-2xl p-6 border-2 border-[rgb(197,162,3)]/30">
              <h3 className="font-bold text-[rgb(32,29,30)] text-lg mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/rotadoqueijodf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl hover:bg-[rgb(197,162,3)] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Instagram width={20} height={20} />
                  <span className="font-semibold">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100069847886739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl hover:bg-[rgb(197,162,3)] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Facebook width={20} height={20} />
                  <span className="font-semibold">Facebook</span>
                </a>
              </div>
            </div>
            <a
              href="http://wa.me/556184960294"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[rgb(197,162,3)] text-[rgb(32,29,30)] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[rgb(217,182,23)] transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Entre em Contato pelo WhatsApp
            </a>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.323731406761!2d-48.0438176!3d-15.839573699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33604d8cb37d%3A0xfa82afbedf83ad23!2sRota%20do%20Queijo%20DF!5e0!3m2!1spt-BR!2sbr!4v1766066946643!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rota do Queijo"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
