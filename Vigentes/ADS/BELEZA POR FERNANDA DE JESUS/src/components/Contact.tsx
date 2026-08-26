import { useState, type FormEvent } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';

const PHONE = '558588055759';

export default function Contact() {
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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `*Assunto:* ${form.subject}\n` +
      `*Mensagem:* ${form.message}\n` +
      `*WhatsApp:* ${form.whatsapp}\n` +
      `*E-mail:* ${form.email}`;
    const url = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest uppercase text-gray-500">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-6">Vamos conversar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tire suas dúvidas, agende um horário ou envie uma sugestão. Estamos prontos para te
            atender.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Canais de Atendimento
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+558588055759"
                  className="flex items-start gap-4 text-gray-600 hover:text-black transition-colors group"
                >
                  <div className="bg-gray-100 p-3 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefone / WhatsApp</div>
                    <div className="text-sm">(85) 98805-5759</div>
                  </div>
                </a>
                <a
                  href="mailto:contato@belezaporfj.com.br"
                  className="flex items-start gap-4 text-gray-600 hover:text-black transition-colors group"
                >
                  <div className="bg-gray-100 p-3 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-sm">contato@belezaporfj.com.br</div>
                  </div>
                </a>
                <div className="flex items-start gap-4 text-gray-600 group">
                  <div className="bg-gray-100 p-3 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Localização</div>
                    <div className="text-sm">
                      Rua Nogueira Acioli, 330
                      <br />
                      Centro - Fortaleza/CE
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a
                  href="https://www.instagram.com/belezaporfernandadejesus_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg w-full"
                >
                  <Instagram className="w-5 h-5" />
                  Siga no Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-black mb-8">Envie uma mensagem</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase text-gray-500 ml-1">Nome</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase text-gray-500 ml-1">WhatsApp</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="(DD) 99999-9999"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase text-gray-500 ml-1">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase text-gray-500 ml-1">Assunto</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Dúvida, Agendamento..."
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase text-gray-500 ml-1">Mensagem</label>
                  <textarea
                    name="message"
                    placeholder="Como podemos te ajudar?"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full mt-12">
          <div className="bg-white p-2 rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.354521455242!2d-38.5247954!3d-3.7226685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74845010696e5%3A0x6291612450892015!2sR.%20Nogueira%20Acioli%2C%20330%20-%20Centro%2C%20Fortaleza%20-%20CE%2C%2060110-140!5e0!3m2!1spt-BR!2sbr!4v1709664000000!5m2!1spt-BR!2sbr"
              width="100%"
              height={400}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Beleza por Fernanda de Jesus"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: '0px', borderRadius: '1.25rem' }}
            ></iframe>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm flex items-center justify-center gap-1">
            <MapPin className="w-4 h-4" />
            Rua Nogueira Acioli, 330 - Centro, Fortaleza
          </p>
        </div>
      </div>
    </section>
  );
}
