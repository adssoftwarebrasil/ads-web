import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="section-padding bg-cream/30">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold"></div>
            <span className="text-gold font-sans text-xs font-medium uppercase tracking-widest">Onde Estamos</span>
            <div className="h-px w-10 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone font-light mb-4">
            Nossa <span className="italic text-gold">Localização</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-cream h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6992.832347804753!2d-56.08733920883415!3d-15.590576221355649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1ba469a4a91%3A0x7c24820a87ec6464!2sEmilia%20Hair%20%26%20Care!5e0!3m2!1spt-BR!2sbr!4v1775759417364!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Emilia Hair & Care"
              style={{ border: '0px', minHeight: '320px' }}
            ></iframe>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 border border-cream shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <MapPin className="lucide lucide-map-pin text-gold" width={18} height={18} />
                </div>
                <div>
                  <p className="font-sans text-xs text-stone-light uppercase tracking-wide font-medium">Endereço</p>
                  <p className="font-sans text-sm font-semibold text-stone mt-0.5">R. Safira, 35 - Baú</p>
                </div>
              </div>
              <p className="font-sans text-sm text-stone-light pl-[52px]">Cuiabá - MT, 78008-030</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Clock className="lucide lucide-clock text-gold" width={18} height={18} />
                </div>
                <div>
                  <p className="font-sans text-xs text-stone-light uppercase tracking-wide font-medium">Horários</p>
                  <p className="font-sans text-sm font-semibold text-stone mt-0.5">Terça a Sábado</p>
                </div>
              </div>
              <p className="font-sans text-sm text-stone-light pl-[52px]">08h00 às 18h00</p>
            </div>
            <div className="bg-stone rounded-2xl p-6 text-white flex-1">
              <h4 className="font-serif text-xl font-light mb-3">
                Como <span className="italic text-gold">chegar</span>
              </h4>
              <p className="font-sans text-sm text-white/75 leading-relaxed mb-4">
                Localizado no Bairro Baú, em Cuiabá — MT. Fácil acesso e estacionamento próximo.
              </p>
              <a
                href="https://maps.google.com/?q=Emilia+Hair+Care+Cuiabá"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300"
              >
                <Navigation className="lucide lucide-navigation" width={14} height={14} />
                Abrir no Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
