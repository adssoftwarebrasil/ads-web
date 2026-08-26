import { MapPin, Clock, Phone } from 'lucide-react';

export default function Mapa() {
  return (
    <section id="mapa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Localização
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">Nos Encontre</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Estamos localizados no SIA, em Brasília-DF. Venha nos visitar!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <MapPin className="lucide lucide-map-pin text-brand-orange" width={18} height={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-dark">Endereço</div>
                  <div className="text-sm text-gray-600 mt-1 leading-relaxed">
                    SIA Trecho 17, Rua 14, Lt 70/90, N°17
                    <br />
                    SIA — Brasília-DF
                    <br />
                    CEP: 71200-240
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Clock className="lucide lucide-clock text-brand-orange" width={18} height={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-dark">Horário de Funcionamento</div>
                  <div className="text-sm text-gray-600 mt-1">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta</span>
                      <span className="font-semibold text-brand-dark">08h – 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span className="font-semibold text-brand-dark">08h – 12h</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Domingo</span>
                      <span className="text-red-500 font-medium">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Phone className="lucide lucide-phone text-brand-orange" width={18} height={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-dark">Telefone / WhatsApp</div>
                  <a
                    href="tel:+556198770047"
                    className="block text-sm text-brand-orange font-semibold mt-1 hover:underline"
                  >
                    (61) 9 9877-0047
                  </a>
                  <a
                    href="tel:+556135504750"
                    className="block text-sm text-brand-orange font-semibold hover:underline"
                  >
                    Fixo: (61) 3550-4750
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Sia+Solda+-+Vendas+e+Loca%C3%A7%C3%A3o+de+Equipamentos+para+Solda/@-15.7968661,-47.9634007,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand-dark hover:bg-brand-dark-light text-white text-sm font-bold px-4 py-3 rounded-xl transition-colors"
            >
              <MapPin className="lucide lucide-map-pin" width={16} height={16} />
              Abrir no Google Maps
            </a>
          </div>
          <div
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            style={{ height: '420px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1343923602826!2d-47.96340068201451!3d-15.796866127547306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31ae933902c7%3A0x723622f9b1c865f4!2sSia%20Solda%20-%20Vendas%20e%20Loca%C3%A7%C3%A3o%20de%20Equipamentos%20para%20Solda!5e0!3m2!1spt-BR!2sbr!4v1774273806990!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Sia Solda"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
