import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const WA_NUMBER = '5564999743169';

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua Rio Branco, 155 - Setor Nova Acreúna',
    sub: 'Em frente à BR-060 · Acreúna, GO',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '(64) 9 9974-3169',
    sub: 'Atendimento rápido pelo WhatsApp',
    link: `https://wa.me/${WA_NUMBER}`,
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Segunda a Sexta: 08h às 18h',
    sub: 'Sábados mediante agendamento',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'rbautopecas.adm@gmail.com',
    sub: 'Suporte e orçamentos por e-mail',
    link: 'mailto:rbautopecas.adm@gmail.com',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Fale conosco
          </span>
          <h2 className="font-['Barlow_Condensed'] font-black text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            ENTRE EM CONTATO
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Estamos prontos para atender você. Venha nos visitar ou entre em contato pelos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {INFO_ITEMS.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#111111] border border-[#2a2a2a] rounded-2xl p-5 hover:border-red-600/40 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-600/15 border border-red-600/20 flex items-center justify-center group-hover:bg-red-600/25 transition-colors">
                    <Icon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">{item.label}</span>
                    <span className="block text-white text-sm font-semibold">{item.value}</span>
                    {item.sub && <span className="block text-gray-500 text-xs mt-0.5">{item.sub}</span>}
                  </div>
                </div>
              );

              if (item.link) {
                return (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                );
              }
              return content;
            })}

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/rb_auto_pecas?igsh=bmR1bnY4OWN4ODJh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#111111] border border-[#2a2a2a] hover:border-red-600/40 text-gray-400 hover:text-white rounded-2xl py-3.5 text-sm font-medium transition-all duration-200"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/RBauto%20pe%C3%A7as"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#111111] border border-[#2a2a2a] hover:border-red-600/40 text-gray-400 hover:text-white rounded-2xl py-3.5 text-sm font-medium transition-all duration-200"
              >
                <Facebook size={18} />
                Facebook
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#2a2a2a] min-h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.464868240058!2d-50.38163742483513!3d-17.389464583498114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9360423a06564309%3A0x9e486d00a32d0572!2sRb%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1775670419303!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização RB Auto Peças"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-base mb-5">Prefere falar direto pelo WhatsApp?</p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Olá! Vim pelo site e gostaria de mais informações.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105"
          >
            Enviar Mensagem no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
