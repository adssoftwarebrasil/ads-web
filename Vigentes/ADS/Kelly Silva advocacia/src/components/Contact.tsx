import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const subjectOptions = [
  'BPC/LOAS - Deficiente',
  'BPC/LOAS - Idoso',
  'Auxílio Acidente',
  'Auxílio Doença',
  'Aposentadoria por Idade',
  'Aposentadoria por Invalidez',
  'Salário Maternidade',
  'Pensão por Morte',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0A%0AWhatsApp: ${phone}%0AE-mail: ${email}%0AAssunto: ${subject}%0A%0A${message}`;
    window.open(`https://wa.me/5562999714722?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-navy py-16 lg:py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-bold text-4xl lg:text-5xl text-off-white mb-6">Entre em Contato</h2>
            <p className="font-serif text-xl text-beige mb-10 leading-relaxed">
              Estou pronta para ouvir sua história e ajudar você a garantir seus direitos.
            </p>
            <div className="space-y-6 mb-10">
              <a
                href="https://wa.me/5562999714722"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg bg-off-white bg-opacity-5 hover:bg-opacity-10 group hover:translate-x-2 transition-all duration-300 border border-transparent hover:border-gold-light hover:border-opacity-30"
              >
                <div className="bg-gold bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all">
                  <Phone className="text-gold w-6 h-6 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm text-beige opacity-75 mb-1">WhatsApp</p>
                  <p className="font-serif text-lg text-off-white group-hover:text-gold-light transition-colors font-semibold">
                    +55 (62) 9 9971-4722
                  </p>
                </div>
              </a>
              <a
                href="mailto:kellysilva.advocacia2024@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg bg-off-white bg-opacity-5 hover:bg-opacity-10 group hover:translate-x-2 transition-all duration-300 border border-transparent hover:border-gold-light hover:border-opacity-30"
              >
                <div className="bg-gold bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all">
                  <Mail className="text-gold w-6 h-6 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm text-beige opacity-75 mb-1">E-mail</p>
                  <p className="font-serif text-lg text-off-white group-hover:text-gold-light transition-colors font-semibold break-all">
                    kellysilva.advocacia2024@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white bg-opacity-5">
                <div className="bg-gold bg-opacity-20 p-3 rounded-lg">
                  <MapPin className="text-gold w-6 h-6 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm text-beige opacity-75 mb-1">Endereço</p>
                  <p className="font-serif text-lg text-off-white">Av. Amazonas entre ruas 4 e 5, N° 296, Centro</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white bg-opacity-5">
                <div className="bg-gold bg-opacity-20 p-3 rounded-lg">
                  <Clock className="text-gold w-6 h-6 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm text-beige opacity-75 mb-1">Horário</p>
                  <p className="font-serif text-lg text-off-white">Segunda a Sexta, 08:00 às 18:00</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gold-light border-opacity-20 pt-8">
              <p className="font-semibold text-off-white mb-5 text-lg">Redes Sociais</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/kellysilva.adv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-gold to-gold-dark hover:from-gold-dark hover:to-gold w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-gold/50"
                >
                  <Instagram className="text-off-white w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-gold to-gold-dark hover:from-gold-dark hover:to-gold w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-gold/50"
                >
                  <Facebook className="text-off-white w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-off-white bg-opacity-5 border border-gold-light border-opacity-20 rounded-2xl p-8 lg:p-10 backdrop-blur-sm shadow-2xl">
            <h3 className="font-bold text-2xl text-gold-light mb-6">Envie sua Mensagem</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-off-white font-medium mb-2 text-sm">Nome completo *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-off-white bg-opacity-95 border-2 border-gold-medium border-opacity-30 focus:border-gold focus:border-opacity-100 focus:outline-none font-serif transition-all duration-300 hover:border-opacity-50"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-off-white font-medium mb-2 text-sm">WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-off-white bg-opacity-95 border-2 border-gold-medium border-opacity-30 focus:border-gold focus:border-opacity-100 focus:outline-none font-serif transition-all duration-300 hover:border-opacity-50"
                  placeholder="(00) 0 0000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-off-white font-medium mb-2 text-sm">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-off-white bg-opacity-95 border-2 border-gold-medium border-opacity-30 focus:border-gold focus:border-opacity-100 focus:outline-none font-serif transition-all duration-300 hover:border-opacity-50"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-off-white font-medium mb-2 text-sm">Assunto *</label>
                <select
                  id="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-off-white bg-opacity-95 border-2 border-gold-medium border-opacity-30 focus:border-gold focus:border-opacity-100 focus:outline-none font-serif transition-all duration-300 hover:border-opacity-50 cursor-pointer"
                >
                  <option value="">Selecione um serviço</option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-off-white font-medium mb-2 text-sm">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-off-white bg-opacity-95 border-2 border-gold-medium border-opacity-30 focus:border-gold focus:border-opacity-100 focus:outline-none font-serif resize-none transition-all duration-300 hover:border-opacity-50"
                  placeholder="Conte-nos mais sobre sua situação..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-whatsapp text-off-white font-bold text-lg py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-whatsapp/50 hover:scale-[1.02] flex items-center justify-center gap-3 group"
              >
                <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
