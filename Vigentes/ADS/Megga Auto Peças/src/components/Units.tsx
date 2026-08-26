import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface Unit {
  badge: string;
  title: string;
  image: string;
  imageAlt: string;
  address: string;
  neighborhood: string;
  cep: string;
  phone: string;
  phoneHref: string;
  whatsappUrl: string;
  mapUrl: string;
  mapEmbed: string;
  mapTitle: string;
}

const units: Unit[] = [
  {
    badge: 'Matriz',
    title: 'Matriz - Aracaju/SE',
    image:
      'https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/loja-auto-pecas-frente.webp',
    imageAlt: 'Matriz - Aracaju/SE',
    address: 'Av. Chanceler Osvaldo Aranha, 161',
    neighborhood: 'Novo Paraíso, Aracaju - SE',
    cep: 'CEP: 49085-100',
    phone: '(79) 3241-1388',
    phoneHref: 'tel:7932411388',
    whatsappUrl: 'http://wa.me/5579998036999',
    mapUrl:
      'https://www.google.com/maps?q=Av.%20Chanceler%20Osvaldo%20Aranha%2C%20161%2C%20Novo%20Para%C3%ADso%2C%20Aracaju%20-%20SE',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.706414999089!2d-37.07959582495615!3d-10.909902089247083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab30380d96fa1%3A0x7675a8c18d3bef64!2sMegga%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1766485471129!5m2!1spt-BR!2sbr',
    mapTitle: 'Mapa Matriz - Aracaju/SE',
  },
  {
    badge: 'Filial',
    title: 'Filial - Maceió/AL',
    image:
      'https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/loja-auto-pecas-noite.webp',
    imageAlt: 'Filial - Maceió/AL',
    address: 'Av. Menino Marcelo, 1040',
    neighborhood: 'Cidade Universitária, Maceió - AL',
    cep: 'CEP: 57073-495',
    phone: '(82) 2121-2750',
    phoneHref: 'tel:8221212750',
    whatsappUrl: 'http://wa.me/5582982102088',
    mapUrl:
      'https://www.google.com/maps?q=Av.%20Menino%20Marcelo%2C%201040%2C%20Cidade%20Universit%C3%A1ria%2C%20Macei%C3%B3%20-%20AL',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.392101970337!2d-35.771359324974625!3d-9.561427690522736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701491a027ed84b%3A0x3f682713b88265d1!2sMegga%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1766485522264!5m2!1spt-BR!2sbr',
    mapTitle: 'Mapa Filial - Maceió/AL',
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Units() {
  return (
    <section id="unidades" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-sm font-semibold">
            Nossas Unidades
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(28,58,122)] mb-6">
            Duas Unidades Para Melhor Atendê-lo
          </h2>
          <p className="text-lg text-gray-700">
            Presença consolidada em Sergipe e Alagoas, prontos para atender você com
            excelência.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {units.map((unit) => (
            <div
              key={unit.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={unit.image}
                  alt={unit.imageAlt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[rgb(216,32,38)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {unit.badge}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[rgb(28,58,122)] mb-6">
                  {unit.title}
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{unit.address}</p>
                      <p className="text-gray-600">{unit.neighborhood}</p>
                      <p className="text-gray-600">{unit.cep}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0" />
                    <a
                      href={unit.phoneHref}
                      className="text-gray-700 hover:text-[rgb(216,32,38)] transition-colors"
                    >
                      {unit.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0" />
                    <a
                      href="mailto:meggaautopecas@gmail.com"
                      className="text-gray-700 hover:text-[rgb(216,32,38)] transition-colors"
                    >
                      meggaautopecas@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={unit.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[rgb(216,32,38)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(196,22,28)] transition-all duration-300 font-semibold"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={unit.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[rgb(28,58,122)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(24,48,102)] transition-all duration-300 font-semibold"
                  >
                    Ver Rota
                  </a>
                </div>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src={unit.mapEmbed}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={unit.mapTitle}
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[rgb(28,58,122)] to-[rgb(26,21,92)] rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-[rgb(216,32,38)]" />
            <h3 className="text-2xl md:text-3xl font-bold">Horário de Funcionamento</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="font-semibold text-lg mb-2">Segunda a Sexta</p>
              <p className="text-gray-200">08:00 às 18:00</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="font-semibold text-lg mb-2">Sábado</p>
              <p className="text-gray-200">08:00 às 12:00</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="font-semibold text-lg mb-2">Domingo</p>
              <p className="text-gray-200">Fechado</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[rgb(216,32,38)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(196,22,28)] transition-all duration-300 font-bold text-lg shadow-xl hover:scale-105"
            >
              Entre em Contato Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
