import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-medium">
            Onde estamos
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">Localização</h2>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mb-10"></div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">Stark Barbearia — Sinop, MT</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">Segunda a Sábado · 8h às 19h</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto ring-1 ring-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5043.55979320226!2d-55.514278499999996!3d-11.8568578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77f8512beea0b%3A0xfc2bbd61bf8ab07c!2sStark%20Barbearia%20-%20Imagem%20Masculina!5e1!3m2!1spt-BR!2sbr!4v1771713013740!5m2!1spt-BR!2sbr"
            width="100%"
            height="460"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full block"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
