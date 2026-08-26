import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[rgb(0,168,89)]/10 text-[rgb(0,168,89)] px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">Localização</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Venha nos{' '}
            <span className="text-[rgb(0,168,89)]">Visitar</span>
          </h2>
          <p className="text-lg text-gray-600">
            Estamos localizados no Jardim das Américas, Curitiba, com fácil acesso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[rgb(0,168,89)]/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-[rgb(0,168,89)]" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">Endereço</h3>
                <p className="text-gray-600 leading-relaxed">
                  Av. Cel. Francisco H. dos Santos, 555 - Loja 2<br />
                  Jardim das Américas<br />
                  Curitiba - PR, 81530-000
                </p>
                <a
                  href="https://www.google.com/maps/place/Armaz%C3%A9m+da+Info+Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[rgb(0,168,89)] hover:text-[rgb(0,148,79)] font-semibold transition-colors"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[rgb(46,47,147)]/10 rounded-lg flex items-center justify-center">
                <Clock className="text-[rgb(46,47,147)]" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-600 leading-relaxed">
                  Segunda a Sexta-feira<br />
                  <span className="font-semibold text-gray-900">9h às 18:00h</span>
                </p>
              </div>
            </div>

            {/* Seção Telefone Atualizada */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[rgb(0,168,89)]/10 rounded-lg flex items-center justify-center">
                <Phone className="text-[rgb(0,168,89)]" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">Telefone / WhatsApp</h3>
                <div className="flex flex-col gap-1">
                  <a
                    href="http://wa.me/554191217176"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[rgb(0,168,89)] transition-colors font-semibold w-fit"
                  >
                    (41) 9 9121-7176
                  </a>
                  <a
                    href="tel:554133651768"
                    className="text-gray-600 hover:text-[rgb(0,168,89)] transition-colors font-semibold w-fit"
                  >
                    (41) 3365-1768
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[rgb(46,47,147)]/10 rounded-lg flex items-center justify-center">
                <Mail className="text-[rgb(46,47,147)]" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">E-mail</h3>
                <a
                  href="mailto:contato@armazemdainfo.com.br"
                  className="text-gray-600 hover:text-[rgb(46,47,147)] transition-colors"
                >
                  contato@armazemdainfo.com.br
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(0,168,89)] to-[rgb(46,47,147)] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Consultoria Personalizada</h3>
              <p className="mb-6">
                Nossa equipe está pronta para oferecer as melhores soluções para suas necessidades tecnológicas
              </p>
              <a
                href="http://wa.me/554191217176"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[rgb(46,47,147)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg font-semibold"
              >
                Agendar Visita
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px] border-4 border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5490090566295!2d-49.232399924609766!3d-25.45333707754699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce516a4c7577d%3A0xd801da0b328ce45c!2sArmaz%C3%A9m%20da%20Info%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1767641744476!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Armazém da Informática"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}