import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const unit = {
  address: 'Av. Antônio Vilhena, 410 - Casa B - Laranjeira, Marabá - PA, 68501-151',
  phone: '(94) 9 9194-1919',
  whatsapp: 'http://wa.me/559491941919',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10549.120039491652!2d-49.14170454323061!3d-5.377383720914935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c309e455c1fea5%3A0xb364d881fed93835!2sNetCompany%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1774977008112!5m2!1spt-BR!2sbr',
};

export default function Locations() {
  return (
    <section id="unidades" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F58842] font-semibold text-sm uppercase tracking-widest">
            Onde estamos
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
            Nossa Localização em Marabá
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Estamos localizados no bairro Laranjeira, de fácil acesso para toda a cidade.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#F5F7FA] border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full">
            <Clock size={14} className="text-[#3069A3]" />
            Seg a Sex: 08h às 18h &nbsp;|&nbsp; Sábado: 08h às 12h
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
          <div className="bg-[#3069A3] px-6 py-4 flex items-center justify-between">
            <div>
              <span className="text-[#F58842] text-xs font-bold uppercase tracking-widest">
                NetCompany
              </span>
              <h3 className="text-white font-bold text-xl">Informática – Marabá</h3>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin size={18} className="text-white" />
            </div>
          </div>

          <div className="aspect-video w-full">
            <iframe
              src={unit.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa NetCompany Informática"
              className="w-full h-full"
            />
          </div>

          <div className="bg-[#F5F7FA] px-6 py-5 space-y-3">
            <div className="flex items-start gap-3 text-gray-600 text-sm">
              <Navigation size={16} className="text-[#3069A3] mt-0.5 shrink-0" />
              {unit.address}
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Phone size={16} className="text-[#3069A3] shrink-0" />
              {unit.phone}
            </div>
            <div className="pt-2 flex gap-3">
              <a
                href={unit.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#F58842] hover:bg-[#e07432] text-white text-sm font-bold py-2.5 rounded-lg text-center transition-all duration-200"
              >
                WhatsApp
              </a>
              <a
                href="tel:+559491941919"
                className="flex-1 bg-[#3069A3] hover:bg-[#245a8e] text-white text-sm font-bold py-2.5 rounded-lg text-center transition-all duration-200"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
