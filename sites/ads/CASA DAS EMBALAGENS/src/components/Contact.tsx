import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Av. Elizabeth Marques, Qd 06 Lt 12', 'Parque dos Buritis, Trindade-GO', 'CEP: 74.485-800'],
  },
  {
    icon: Phone,
    title: 'Telefone / WhatsApp',
    lines: ['(62) 98407-5879'],
    link: 'https://wa.me/5562984075879',
    linkLabel: 'Enviar mensagem',
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    lines: ['Segunda a Sexta: 08h às 19h', 'Sábado: 08h às 18h'],
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-blue/10 text-brand-blue font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Contato e Localização
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight">
            Venha nos <span className="text-brand-red">visitar</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-lg mx-auto">
            Atendemos Trindade e toda a região de Goiânia. Compra presencial ou entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-brand-blue rounded-xl p-3 flex-shrink-0">
                  <item.icon size={20} className="text-brand-yellow" />
                </div>
                <div>
                  <p className="text-brand-blue font-bold text-sm mb-1">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-gray-600 text-sm">{line}</p>
                  ))}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-brand-red font-semibold text-sm hover:underline"
                    >
                      {item.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
              <div className="bg-brand-blue rounded-xl p-3 flex-shrink-0">
                <Instagram size={20} className="text-brand-yellow" />
              </div>
              <div>
                <p className="text-brand-blue font-bold text-sm mb-2">Redes Sociais</p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://www.instagram.com/casadasembalagensr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-600 text-sm hover:text-brand-red transition-colors"
                  >
                    <Instagram size={14} />
                    @casadasembalagensr
                  </a>
                  <a
                    href="https://www.facebook.com/casadasembalagensr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-600 text-sm hover:text-brand-red transition-colors"
                  >
                    <Facebook size={14} />
                    casadasembalagensr
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.677812030236!2d-49.3907222!3d-16.642931399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5f1bcc0f58b5%3A0xbf49ac20c90e7bf5!2sCasa%20das%20embalagens%20Ma%C3%ADsa!5e0!3m2!1spt-BR!2sbr!4v1774567934875!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Casa das Embalagens"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
