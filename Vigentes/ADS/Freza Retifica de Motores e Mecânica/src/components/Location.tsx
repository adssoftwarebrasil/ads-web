import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-brand-gray-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Localização</span>
          <h2 className="text-4xl font-black text-brand-dark mt-3 mb-4 tracking-tight">
            Onde Nos <span className="text-brand-red">Encontrar</span>
          </h2>
          <p className="text-brand-dark/60 text-base max-w-md mx-auto">
            Estamos no Setor Industrial Norte de Sinop, de fácil acesso para toda a região.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch animate-on-scroll">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-brand-gray min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.016255196081!2d-55.49197312494224!3d-11.834135288386397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93082b00382d91b3%3A0x2cc01492ec50f643!2sFreza%20Retifica%20de%20Motores%20e%20Mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1771613549902!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Freza Retifica"
              style={{ border: '0px', minHeight: '350px', display: 'block' }}
            ></iframe>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 border border-brand-gray shadow-sm flex-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin text-brand-red" width={20} height={20} />
                </div>
                <div>
                  <h3 className="text-brand-dark font-bold text-base mb-2">Endereço</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">
                    Av. dos Pinheiros, 169
                    <br />
                    Setor Industrial Norte
                    <br />
                    Sinop – MT, 78550-554
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-brand-gray shadow-sm flex-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-red text-lg">🕐</span>
                </div>
                <div>
                  <h3 className="text-brand-dark font-bold text-base mb-2">Horários</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">
                    Segunda a Sexta
                    <br />
                    <span className="text-brand-dark font-semibold">7:30 – 11:30</span>
                    <br />
                    <span className="text-brand-dark font-semibold">13:30 – 16:00</span>
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Freza+Retifica+de+Motores+e+Mecânica+Sinop+MT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-dark-deep text-white px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 hover:shadow-lg"
            >
              <Navigation className="lucide lucide-navigation" width={18} height={18} />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
