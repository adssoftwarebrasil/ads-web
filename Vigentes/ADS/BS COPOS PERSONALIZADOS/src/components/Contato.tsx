import { useState, FormEvent } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contato() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0A*WhatsApp:* ${form.whatsapp}%0A*E-mail:* ${form.email}%0A*Assunto:* ${form.subject}%0A%0A${form.message}`;
    window.open(`https://wa.me/556733216604?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600">
            Dúvidas ou sugestões? Nossa equipe está pronta para ouvir você.
          </p>
          <div className="w-24 h-1 bg-[#000EFF] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000EFF] focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000EFF] focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000EFF] focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000EFF] focus:border-transparent transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000EFF] focus:border-transparent transition-all resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#000EFF] hover:bg-[#0008CC] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Send width={20} height={20} />
                Enviar Mensagem
              </button>
            </form>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <MapPin width={24} height={24} className="text-[#000EFF] flex-shrink-0" />
                <p className="text-gray-700">Rua 14 de Julho 3496, Campo Grande, MS</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <Phone width={24} height={24} className="text-[#000EFF] flex-shrink-0" />
                <a
                  href="tel:6733216604"
                  className="text-gray-700 hover:text-[#000EFF] transition-colors"
                >
                  67 3321 6604
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <Mail width={24} height={24} className="text-[#000EFF] flex-shrink-0" />
                <a
                  href="mailto:bspersonalizados@hotmail.com"
                  className="text-gray-700 hover:text-[#000EFF] transition-colors"
                >
                  bspersonalizados@hotmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7476.761944042779!2d-54.619677!3d-20.44954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e62b3f8f3de9%3A0x4b92d039db3e369e!2sBS%20Copos%20Personalizados!5e0!3m2!1spt-BR!2sus!4v1769799514617!5m2!1spt-BR!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização BS Copos Personalizados"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
