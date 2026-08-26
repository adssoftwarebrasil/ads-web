import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const infoCards = [
  {
    Icon: MapPin,
    name: 'map-pin',
    title: 'Endereço',
    line1: 'Rua Miguel Serror, 22 – Santa Rosa',
    line2: 'Atrás do Shopping Estação Cuiabá',
  },
  {
    Icon: Phone,
    name: 'phone',
    title: 'Telefones',
    line1: '(65) 3637-4521',
    line2: '(65) 99976-9001',
  },
  {
    Icon: Mail,
    name: 'mail',
    title: 'E-mail',
    line1: 'nilsoncortinas@hotmail.com',
    line2: 'Respondemos em até 24h',
  },
  {
    Icon: Clock,
    name: 'clock',
    title: 'Horário',
    line1: 'Seg a Sex: 08h às 17h30',
    line2: 'Sábado: 09h às 12h',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(114,115,119)] mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-[rgb(207,173,109)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visite nossa loja ou entre em contato para um atendimento personalizado
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {infoCards.map((c) => (
                <div
                  key={c.title}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <c.Icon
                    className={`lucide lucide-${c.name} text-[rgb(207,173,109)] mb-4`}
                    width={32}
                    height={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-bold text-[rgb(114,115,119)] mb-2">{c.title}</h3>
                  <p className="text-gray-700 font-medium mb-1">{c.line1}</p>
                  <p className="text-gray-500 text-sm">{c.line2}</p>
                </div>
              ))}
            </div>
            <div className="bg-[rgb(207,173,109)] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Siga-nos no Instagram</h3>
              <p className="mb-6">Acompanhe nossos projetos, novidades e inspirações para decoração</p>
              <a
                href="https://instagram.com/nilsoncortinas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[rgb(207,173,109)] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="lucide lucide-instagram " width={20} height={20} />
                @nilsoncortinas
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.008882376853!2d-56.126090024874166!3d-15.591174285021122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1f3c5a9a401%3A0xb4ea0c1148ffefe5!2sNilson%20Cortinas!5e0!3m2!1spt-BR!2sbr!4v1768521271645!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Nilson Cortinas"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[rgb(207,173,109)] to-[rgb(187,153,89)] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar seu ambiente?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça nossa loja. Nossos especialistas estão prontos para criar o projeto perfeito para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=556599769001&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[rgb(207,173,109)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Falar no WhatsApp
            </a>
            <a
              href="tel:6536374521"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[rgb(207,173,109)] transition-all duration-300"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
