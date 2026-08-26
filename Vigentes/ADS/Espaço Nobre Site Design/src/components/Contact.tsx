import { useState, type FormEvent } from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guests: '',
  message: '',
};

const inputStyle = { borderColor: 'rgb(229, 231, 235)' };
const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition';

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg =
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Tipo de Evento:* ${form.eventType}\n` +
      `*Data Prevista:* ${form.eventDate}\n` +
      `*Número de Convidados:* ${form.guests}\n` +
      `*Mensagem:* ${form.message}`;
    window.open(
      `https://wa.me/5565992265027?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em{' '}
            <span style={{ color: 'rgb(203, 162, 108)' }}>
              Contato Conosco
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-amber-100"
            >
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Tipo de Evento
                </label>
                <select
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="">Selecione</option>
                  <option value="Casamento">Casamento</option>
                  <option value="15 Anos">15 Anos</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Infantil">Infantil</option>
                  <option value="Formatura">Formatura</option>
                  <option value="Evento Corporativo">Evento Corporativo</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Data Prevista
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Número de Convidados
                </label>
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(203, 162, 108) 0%, rgb(184, 149, 106) 100%)',
                  boxShadow: 'rgba(203, 162, 108, 0.4) 0px 10px 40px',
                }}
              >
                Enviar via WhatsApp
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5565992265027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#cba26c] transition group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Cristiano</p>
                    <p className="text-sm">(65) 99226-5027</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/5565992512232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#cba26c] transition group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Luzia</p>
                    <p className="text-sm">(65) 99251-2232</p>
                  </div>
                </a>
                <a
                  href="mailto:espaconobrecasadefesta@hotmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#cba26c] transition group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition"
                    style={{
                      background:
                        'linear-gradient(135deg, rgb(203, 162, 108) 0%, rgb(184, 149, 106) 100%)',
                    }}
                  >
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm break-all">
                      espaconobrecasadefesta@hotmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/espaconobre_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#cba26c] transition group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <Instagram size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm">@espaconobre_</p>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/espaconobre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#cba26c] transition group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <Facebook size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Facebook</p>
                    <p className="text-sm">Espaço Nobre</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <MapPin
                  size={24}
                  className="flex-shrink-0"
                  style={{ color: 'rgb(203, 162, 108)' }}
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Localização
                  </h3>
                  <p className="text-gray-600">
                    Visite nosso espaço com hora marcada
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.5!2d-56.0!3d-15.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM2JzAwLjAiUyA1NsKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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
      </div>
    </section>
  );
}
