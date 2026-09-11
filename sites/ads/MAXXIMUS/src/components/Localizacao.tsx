import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Localizacao() {
  return (
    <section className="py-16 md:py-24 bg-white" id="localizacao">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[rgb(19,57,94)] text-3xl md:text-5xl font-bold mb-8">
              Visite Nossas Lojas
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin
                  size={28}
                  strokeWidth={2}
                  className="lucide text-[rgb(244,95,38)] flex-shrink-0 mt-1"
                />
                <div className="w-full space-y-6">
                  <h3 className="text-[rgb(19,57,94)] font-semibold text-lg mb-2 border-b border-gray-100 pb-2">
                    Endereços
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[rgb(19,57,94)]">
                    <strong className="block text-[rgb(19,57,94)] mb-1">
                      Matriz - Ribeirão Preto
                    </strong>
                    <p className="text-[rgb(173,173,175)] text-base leading-relaxed">
                      Av. Caramuru, 840 - Jardim Sumaré
                      <br />
                      Ribeirão Preto/SP
                      <br />
                      CEP: 14025-710
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[rgb(244,95,38)]">
                    <strong className="block text-[rgb(19,57,94)] mb-1">
                      Filial - Araraquara
                    </strong>
                    <p className="text-[rgb(173,173,175)] text-base leading-relaxed">
                      Av. Padre Francisco Salles Colturato, 0473
                      <br />
                      São Geraldo - Araraquara/SP
                      <br />
                      CEP: 14800-000
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock
                  size={28}
                  strokeWidth={2}
                  className="lucide text-[rgb(244,95,38)] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-[rgb(19,57,94)] font-semibold text-lg mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-[rgb(173,173,175)] text-base">
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="text-[rgb(173,173,175)] text-base">
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone
                  size={28}
                  strokeWidth={2}
                  className="lucide text-[rgb(244,95,38)] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-[rgb(19,57,94)] font-semibold text-lg mb-2">
                    Telefones
                  </h3>
                  <a
                    href="https://wa.me/5516997891482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(244,95,38)] text-base hover:underline block font-medium"
                  >
                    WhatsApp Ribeirão Preto: (16) 99789-1482
                  </a>
                  <a
                    href="https://wa.me/5516993268596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(244,95,38)] text-base hover:underline block font-medium mt-2"
                  >
                    WhatsApp Araraquara: (16) 99326-8596
                  </a>
                  <a
                    href="tel:+551636060600"
                    className="text-[rgb(173,173,175)] text-base hover:text-[rgb(244,95,38)] transition-colors block mt-2"
                  >
                    Fixo: (16) 3606-0600
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail
                  size={28}
                  strokeWidth={2}
                  className="lucide text-[rgb(244,95,38)] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-[rgb(19,57,94)] font-semibold text-lg mb-2">
                    E-mail
                  </h3>
                  <a
                    href="vendas@maxximusmaquinas.com.br"
                    className="text-[rgb(173,173,175)] hover:text-[rgb(244,95,38)] text-base block mb-1 transition-colors"
                  >
                    vendas@maxximusmaquinas.com.br - Ribeirão Preto
                  </a>
                  <a
                    href="mailto:araraquara@maxximusmaquinas.com.br"
                    className="text-[rgb(173,173,175)] hover:text-[rgb(244,95,38)] text-base block transition-colors"
                  >
                    araraquara@maxximusmaquinas.com.br - Araraquara
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="bg-[rgb(19,57,94)] text-white text-xs font-bold px-4 py-2 uppercase tracking-wide">
                Localização - Ribeirão Preto
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.940866898993!2d-47.8166!3d-21.1945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9beeba6b663bb%3A0x6e76054881657388!2sAv.%20Caramuru%2C%20840%20-%20Jardim%20Sumar%C3%A9%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-710!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Ribeirão Preto"
                style={{ border: '0px' }}
              ></iframe>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="bg-[rgb(244,95,38)] text-white text-xs font-bold px-4 py-2 uppercase tracking-wide">
                Localização - Araraquara
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.664402636657!2d-48.1888!3d-21.7932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f15f0a0a0a0a%3A0x0!2sAv.%20Padre%20Francisco%20Salles%20Colturato%2C%200473%20-%20S%C3%A3o%20Geraldo%2C%20Araraquara%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Araraquara"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
