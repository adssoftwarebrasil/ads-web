import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const GREEN = '#004a27'
const RED = 'rgb(236,28,36)'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: [
      'Av. Dom Sebastião Figueiredo, 142',
      'Bairro Primavera Quatro',
      'Primavera do Leste - MT, CEP 78850-000',
    ],
  },
  {
    icon: Phone,
    title: 'Telefone / WhatsApp',
    lines: ['(66) 99937-1417'],
    link: 'https://wa.me/5566999371417',
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['financeiro@topmadeiraspva.com.br'],
    link: 'mailto:financeiro@topmadeiraspva.com.br',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    lines: [
      'Segunda à Sexta',
      '07:00 às 11:00',
      '13:00 às 17:00',
    ],
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14 md:mb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
          >
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: GREEN }}>
            Fale Conosco
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Entre em contato e receba um orçamento sem compromisso. Atendemos
            Primavera do Leste e toda a região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${GREEN}15` }}
                  >
                    <Icon size={20} style={{ color: GREEN }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: GREEN }}>
                      {item.title}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm hover:underline"
                        style={{ color: item.link.startsWith('https://wa') ? '#16a34a' : undefined }}
                      >
                        {item.lines.join(' ')}
                      </a>
                    ) : (
                      item.lines.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">{line}</p>
                      ))
                    )}
                  </div>
                </div>
              )
            })}

            <a
              href="https://wa.me/5566999371417?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg"
              style={{ backgroundColor: RED }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80 md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4965.109226120113!2d-54.2958905!3d-15.540514499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9377277359f34c81%3A0x475cd882417f5545!2sTop%20Madeiras%2C%20Materiais%20e%20Servi%C3%A7os!5e1!3m2!1spt-BR!2sbr!4v1771714153019!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Top Madeiras"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
