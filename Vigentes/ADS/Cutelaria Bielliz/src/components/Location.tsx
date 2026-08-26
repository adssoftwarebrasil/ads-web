import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(245,241,220)] text-[rgb(84,10,1)] px-4 py-2 rounded-full text-sm font-bold mb-4">
            NOSSA LOCALIZAÇÃO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(84,10,1)] mb-6">
            Visite Nossa Loja
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Estamos localizados no Centro de Campinas, prontos para receber você e ajudá-lo a
            encontrar a peça perfeita.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[rgb(245,241,220)] to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[rgb(84,10,1)] p-3 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(84,10,1)] text-xl mb-2">Endereço</h3>
                  <p className="text-gray-700">
                    Av. Senador Saraiva, 573
                    <br />
                    Centro, Campinas - SP
                    <br />
                    CEP: 13013-060
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[rgb(84,10,1)] p-3 rounded-lg">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(84,10,1)] text-xl mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-gray-700">
                    Segunda a Sexta: 08:00 - 19:00
                    <br />
                    Sábado: 08:00 - 17:00
                    <br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(84,10,1)] p-3 rounded-lg">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(84,10,1)] text-xl mb-2">Contato</h3>
                  <a
                    href="https://wa.me/5519992079201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[rgb(84,10,1)] transition-colors"
                  >
                    (19) 99207-9201
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(84,10,1)] to-[rgb(120,30,20)] p-8 rounded-2xl shadow-lg text-white">
              <h3 className="font-bold text-2xl mb-4">Siga-nos nas Redes Sociais</h3>
              <p className="mb-6 text-[rgb(245,241,220)]">
                Fique por dentro das novidades, lançamentos e promoções exclusivas.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/bielliz.oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-all"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61574936881207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-all"
                >
                  <Facebook size={28} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1901878841672!2d-47.066521024689564!3d-22.90635487925547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9cf6ef92a63%3A0x4eae6a4aa68d2404!2sCutelaria%20Bielliz!5e0!3m2!1spt-BR!2sbr!4v1769663528873!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Cutelaria Bielliz"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
