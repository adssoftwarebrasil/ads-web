import { MapPin, Clock, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '../utils';

export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visite Nossa <span className="text-[rgb(167,20,42)]">Localização</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(167,20,42)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos localizados em Goiânia, prontos para atender você com excelência. Venha nos
            visitar e conhecer nossa estrutura!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-[rgb(167,20,42)]">
              <MapPin width={32} height={32} className="text-[rgb(167,20,42)] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Endereço</h3>
              <p className="text-gray-600 leading-relaxed">
                R. Cp 26, 46 - Quadra 24, Lote 03<br />
                Res. Celina Park<br />
                Goiânia - GO, 74373-240
              </p>
              <a
                href="https://www.google.com/maps/dir//Ret%C3%ADfica+de+Motores+Anhanguera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[rgb(167,20,42)] font-semibold hover:text-[rgb(147,15,37)] transition-colors"
              >
                Ver no Google Maps →
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-[rgb(167,20,42)]">
              <Clock width={32} height={32} className="text-[rgb(167,20,42)] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Segunda a Sexta:</span>
                  <span>07:30 - 11:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium"></span>
                  <span>13:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="font-medium">Sábado e Domingo:</span>
                  <span className="text-red-600">Fechado</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-[rgb(167,20,42)]">
              <Phone width={32} height={32} className="text-[rgb(167,20,42)] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contato</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <p className="font-medium mb-1">Telefone / WhatsApp:</p>
                  <a
                    href="tel:+556235584336"
                    className="text-[rgb(167,20,42)] hover:text-[rgb(147,15,37)] transition-colors font-semibold"
                  >
                    (62) 3558-4336
                  </a>
                </div>
                <div className="pt-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[rgb(167,20,42)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(147,15,37)] transition-all duration-300 font-semibold"
                  >
                    Enviar Mensagem no WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(167,20,42)] to-red-700 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Atendemos Goiânia e Região</h3>
              <p className="opacity-95 leading-relaxed">
                Nossa área de atuação abrange toda Goiânia e cidades do interior de Goiás. Entre em
                contato para verificar disponibilidade na sua região!
              </p>
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4200357847167!2d-49.324287399999996!3d-16.705880999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7d12ac1cddf%3A0xd21c9f5c75df541!2sRet%C3%ADfica%20de%20Motores%20Anhanguera!5e0!3m2!1spt-BR!2sbr!4v1768842613471!5m2!1spt-BR!2sbr"
                width="100%"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Anhanguera Retífica de Motores"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
