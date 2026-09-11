import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const infoCards = [
  {
    icon: MapPin,
    name: 'lucide-map-pin',
    gradient: 'from-blue-500 to-blue-600',
    title: 'Endereço',
    line1: 'Rua Luiz de Matos, 498 - Cidade Alta',
    line2: 'Cuiabá - MT, 78030-395',
  },
  {
    icon: Phone,
    name: 'lucide-phone',
    gradient: 'from-emerald-500 to-emerald-600',
    title: 'Telefone',
    line1: '(65) 9 9950-0200',
    line2: 'WhatsApp disponível',
  },
  {
    icon: Clock,
    name: 'lucide-clock',
    gradient: 'from-amber-500 to-amber-600',
    title: 'Horário',
    line1: 'Segunda a Sexta: 8h às 18h',
    line2: 'Sábado e Domingo: Fechado',
  },
  {
    icon: Mail,
    name: 'lucide-mail',
    gradient: 'from-purple-500 to-purple-600',
    title: 'Atendimento',
    line1: 'Somente Lojistas',
    line2: 'Pronta Entrega',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
            Entre em Contato
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Estamos Prontos para{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Atendê-lo
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Fale conosco e descubra as melhores soluções em tecidos e acessórios
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {infoCards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className={`lucide ${c.name} text-white`} size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-700 text-sm font-medium">{c.line1}</p>
                <p className="text-gray-500 text-xs mt-1">{c.line2}</p>
              </div>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    placeholder="(65) 9 9999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none"
                    placeholder="Como podemos ajudá-lo?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="lucide lucide-send" size={20} />
                  <span>Enviar pelo WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa Localização</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[calc(100%-5rem)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.687797837458!2d-56.12755772487368!3d-15.608320685006406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db3eed165ebf5%3A0x4ed9a9b47ac97e7a!2sPrime%20Tecidos%20e%20Acess%C3%B3rios%20para%20Cortinas%20-%20Prime%20T%C3%AAxtil!5e0!3m2!1spt-BR!2sbr!4v1770120584294!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Prime Têxtil"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
