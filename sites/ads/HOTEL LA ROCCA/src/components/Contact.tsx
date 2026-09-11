import { useState, FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

interface ContactInfo {
  Icon: typeof MapPin;
  iconName: string;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}

const infos: ContactInfo[] = [
  {
    Icon: MapPin,
    iconName: 'lucide-map-pin',
    title: 'Endereço',
    value: 'R. 8-A, 27 - St. Aeroporto, Goiânia - GO, 74075-240',
  },
  {
    Icon: Phone,
    iconName: 'lucide-phone',
    title: 'WhatsApp',
    value: '(62) 98308-0229',
    href: 'https://wa.me/5562983080229',
    external: true,
  },
  {
    Icon: Phone,
    iconName: 'lucide-phone',
    title: 'Fixo',
    value: '(62) 3225-5216',
    href: 'tel:+556232255216',
  },
  {
    Icon: Mail,
    iconName: 'lucide-mail',
    title: 'Email',
    value: 'contato@hotellarocca.com.br',
    href: 'mailto:contato@hotellarocca.com.br',
  },
  {
    Icon: Clock,
    iconName: 'lucide-clock',
    title: 'Horário',
    value: '24 horas',
  },
  {
    Icon: Instagram,
    iconName: 'lucide-instagram',
    title: 'Instagram',
    value: '@hotellarocca',
    href: 'https://instagram.com/hotellarocca',
    external: true,
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nE-mail: ${email}\nTelefone: ${phone}\n\n${message}`;
    window.open(
      `https://wa.me/5562983080229?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Entre em <span className="text-[rgb(190,0,3)]">Contato</span>
          </h2>
          <div className="h-1 w-32 bg-[rgb(190,0,3)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Reserve sua estadia no Hotel La Rocca. Descubra como a hospitalidade
            calorosa pode transformar sua experiência.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgb(190,0,3)] focus:border-[rgb(190,0,3)] outline-none transition-all text-gray-700 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgb(190,0,3)] focus:border-[rgb(190,0,3)] outline-none transition-all text-gray-700 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgb(190,0,3)] focus:border-[rgb(190,0,3)] outline-none transition-all text-gray-700 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgb(190,0,3)] focus:border-[rgb(190,0,3)] outline-none transition-all text-gray-700 bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(190,0,3)] hover:bg-[rgb(160,0,3)] text-white font-bold py-5 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl"
              >
                <Send size={22} className="lucide lucide-send " />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contato
            </h3>
            {infos.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.Icon
                    size={24}
                    className={`lucide ${info.iconName} text-[rgb(190,0,3)]`}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    {info.title}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      {...(info.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-gray-600 hover:text-[rgb(190,0,3)] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
