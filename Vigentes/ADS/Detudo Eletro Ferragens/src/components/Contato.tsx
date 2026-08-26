import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { WHATSAPP_PHONE, WhatsAppIcon } from '../constants';

export default function Contato() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.%0A` +
      `WhatsApp: ${form.whatsapp}%0A` +
      `E-mail: ${form.email}%0A` +
      `Assunto: ${form.subject}%0A` +
      `Mensagem: ${form.message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
        text.replace(/%0A/g, '\n')
      )}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(34,34,34)] mb-4">
            CONTATO
          </h2>
          <h3 className="text-xl sm:text-2xl text-[rgb(34,34,34)] font-semibold">
            <span className="inline-block bg-[rgb(246,239,3)] px-4 py-1 rounded">
              Dúvidas ou sugestões
            </span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="transition-all duration-1000 opacity-100 translate-x-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[rgb(34,34,34)] font-semibold mb-2">Nome *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[rgb(246,239,3)] transition-colors border-[rgb(34,34,34)]"
                />
              </div>
              <div>
                <label className="block text-[rgb(34,34,34)] font-semibold mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[rgb(246,239,3)] transition-colors border-[rgb(34,34,34)]"
                />
              </div>
              <div>
                <label className="block text-[rgb(34,34,34)] font-semibold mb-2">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[rgb(246,239,3)] transition-colors border-[rgb(34,34,34)]"
                />
              </div>
              <div>
                <label className="block text-[rgb(34,34,34)] font-semibold mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[rgb(246,239,3)] transition-colors border-[rgb(34,34,34)]"
                />
              </div>
              <div>
                <label className="block text-[rgb(34,34,34)] font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[rgb(246,239,3)] transition-colors resize-none border-[rgb(34,34,34)]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(246,239,3)] text-[rgb(34,34,34)] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
          <div className="transition-all duration-1000 opacity-100 translate-x-0">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[rgb(246,239,3)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[rgb(34,34,34)] mb-1">Endereço</h4>
                  <p className="text-gray-700">
                    Av. Pres. Getúlio Vargas, 1343 - Popular, Cuiabá - MT
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[rgb(246,239,3)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[rgb(34,34,34)] mb-1">Telefone</h4>
                  <a
                    href="tel:6599806-4793"
                    className="text-gray-700 hover:text-[rgb(246,239,3)] transition-colors"
                  >
                    65 99806-4793
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[rgb(246,239,3)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[rgb(34,34,34)] mb-1">E-mail</h4>
                  <a
                    href="mailto:detudoltda760@gmail.com"
                    className="text-gray-700 hover:text-[rgb(246,239,3)] transition-colors"
                  >
                    detudoltda760@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                title="Mapa Detudo Eletro Ferragens"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.0!2d-56.0!3d-15.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM2JzAwLjAiUyA1NsKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
