import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'R. Barão de Souza Leão, 1071 - Boa Viagem, Recife - PE, 51030-300',
    link: 'https://maps.google.com/?q=R.+Barão+de+Souza+Leão,+1071+-+Boa+Viagem,+Recife+-+PE',
  },
  {
    icon: Phone,
    title: 'Telefone / WhatsApp',
    content: '(81) 99299-8284',
    link: 'https://wa.me/5581992928284',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'finoacabamento2013@gmail.com',
    link: 'mailto:finoacabamento2013@gmail.com',
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    content: 'Segunda a Sexta das 09:00 às 17:30',
  },
];

const socialLinks = [
  {
    icon: Instagram,
    url: 'https://www.instagram.com/finoacabamentoloja/',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/finoacabamentoexclusive/',
    label: 'Facebook',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos Pernambuco, Paraíba e Alagoas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-black mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="text-white" size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3936746789847!2d-34.899825!3d-8.087778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18be76c7e0c9%3A0x1c9c9c9c9c9c9c9c!2sR.%20Bar%C3%A3o%20de%20Souza%20Le%C3%A3o%2C%201071%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051030-300!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Fino Acabamento"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
