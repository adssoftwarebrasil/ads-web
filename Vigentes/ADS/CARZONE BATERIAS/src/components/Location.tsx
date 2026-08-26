import { MapPin, Navigation } from 'lucide-react';

const areas = ['Cuiabá – MT', 'Várzea Grande – MT', 'Região Metropolitana', 'Delivery para toda a cidade'];

export default function Location() {
  return (
    <section className="bg-[#F6FBFC] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-[#1003AD] font-bold text-sm uppercase tracking-widest mb-3">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#000E27] mb-3">Onde Estamos</h2>
          <p className="text-gray-500">
            R. Carlos Alberto Feitosa Macedo, 20 – quadra 46 – Nova Esperança, Cuiabá – MT, 78098-540
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-72 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.225871401475!2d-55.96644042487331!3d-15.632956084985016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939da55278dd01d9%3A0xe355c5d64261b2e1!2sCarZone%20Baterias!5e0!3m2!1spt-BR!2sbr!4v1774267594060!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Carzone Baterias"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-4">
            <div className="bg-[#000E27] rounded-2xl p-6 text-white">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7EE30]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin text-[#F7EE30]" width={18} height={18} />
                </div>
                <div>
                  <p className="font-bold mb-1">Carzone Baterias</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    R. Carlos Alberto Feitosa Macedo, 20 – Nova Esperança
                    <br />
                    Cuiabá – MT, 78098-540
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=CarZone+Baterias+Cuiab%C3%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#F7EE30] text-[#000E27] py-3 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors mt-4"
              >
                <Navigation className="lucide lucide-navigation" width={15} height={15} />
                Como Chegar
              </a>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#000E27] text-sm mb-3">Área de Atendimento</p>
              <div className="space-y-2">
                {areas.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#1003AD] flex-shrink-0"></span>
                    {a}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1003AD]/5 border border-[#1003AD]/10 rounded-2xl p-5">
              <p className="font-bold text-[#000E27] text-sm mb-3">Horários de Funcionamento</p>
              <div className="mb-2">
                <p className="text-gray-500 text-sm">Segunda a Sexta</p>
                <p className="text-[#1003AD] font-black text-lg mt-0.5">7h30 às 21h</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Sábado</p>
                <p className="text-[#1003AD] font-black text-lg mt-0.5">7h30 às 17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
