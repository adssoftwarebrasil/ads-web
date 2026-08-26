import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.198921765157!2d-54.634196!3d-16.465462199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c981c36365c1%3A0x30697c1dec3f4ae9!2sJR%20VEICULOS%20RONDONOPOLIS!5e0!3m2!1spt-BR!2sbr!4v1775669673858!5m2!1spt-BR!2sbr';

const contactItems = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Av. Ponce de Arruda, 2099 — Centro\nEsquina com Otávio Pitaluga\nRondonópolis — MT',
  },
  {
    icon: Clock,
    label: 'Horários',
    value: 'Seg–Sex: 07h30 às 18h00\nSáb: 08h00 às 12h00',
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(66) 99975-5005',
    href: 'https://wa.me/5566999755005',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'jrveiculos.roo@gmail.com',
    href: 'mailto:jrveiculos.roo@gmail.com',
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: '@jrveiculos.roo',
    href: 'https://www.instagram.com/jrveiculos.roo',
  },
  {
    icon: Facebook,
    label: 'JR Veículos Rondonópolis',
    href: 'https://www.facebook.com/jrveiculos.rondonopolis',
  },
];

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-brand-black-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase">
            Onde estamos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
            Nossa <span className="text-brand-red">Localização</span>
          </h2>
          <p className="mt-4 text-[#C0C0C0] max-w-xl mx-auto text-lg leading-relaxed">
            Venha nos visitar em Rondonópolis — MT. Atendemos você com toda a atenção que merece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JR Veículos — Localização no Mapa"
            />
          </div>

          <div className="lg:col-span-2 space-y-4" id="contato">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 bg-brand-black border border-white/10 rounded-2xl hover:border-brand-red/30 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-brand-red/10 border border-brand-red/30 rounded-xl">
                    <Icon size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-brand-red transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white text-sm font-medium whitespace-pre-line">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="p-5 bg-brand-black border border-white/10 rounded-2xl">
              <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-3">
                Redes Sociais
              </div>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[#C0C0C0] hover:text-white transition-colors group"
                    >
                      <Icon size={18} className="text-brand-red group-hover:scale-110 transition-transform" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="https://wa.me/5566999755005?text=Olá! Vim pelo site e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-2xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-red/20"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
