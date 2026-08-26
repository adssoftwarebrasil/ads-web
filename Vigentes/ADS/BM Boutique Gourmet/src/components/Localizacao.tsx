import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const horarios = [
  { dia: 'Segunda a Sexta', hora: '08:00 - 19:00' },
  { dia: 'Sábado', hora: '08:00 - 12:00' },
  { dia: 'Domingo', hora: 'Fechado' },
];

export default function Localizacao() {
  return (
    <section className="bg-slate-100 py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-black text-black text-center mb-12">Visite Nossa Loja</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6">Como Chegar</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(242,51,52)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[rgb(242,51,52)]" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">Endereço</h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Av. Ismerino Soares de Carvalho, 707 - Quadra 157, Lote 05<br />
                    Setor Faiçalville, Goiânia - GO<br />
                    CEP: 74.350-680
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(242,51,52)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[rgb(242,51,52)]" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">Contato</h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Telefone: (62) 99218-4220<br />
                    WhatsApp: (62) 93474-673
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(242,51,52)]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[rgb(242,51,52)]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black text-lg mb-1">Horário de Funcionamento</h4>
                  <div className="bg-slate-50 rounded-lg p-4 mt-4">
                    {horarios.map((h) => (
                      <div
                        key={h.dia}
                        className="flex justify-between py-2 border-b border-gray-200 last:border-0"
                      >
                        <span className="font-medium text-gray-700">{h.dia}</span>
                        <span className="text-gray-600">{h.hora}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=BM+Boutique+das+Linguicas+Goiania"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black hover:bg-slate-800 py-4 rounded-lg text-white font-bold flex items-center justify-center gap-2 transition-colors duration-300 mt-6"
            >
              <Navigation className="w-5 h-5" />
              Ver no Google Maps
            </a>
          </div>
          <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4273.529284450634!2d-49.31211222484974!3d-16.736637084043753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef700532c093f%3A0x2b46edafbc4d6ce3!2sBM%20Boutique%20das%20Linguicas!5e1!3m2!1spt-BR!2sbr!4v1765798239973!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização BM Boutique das Linguiças"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
