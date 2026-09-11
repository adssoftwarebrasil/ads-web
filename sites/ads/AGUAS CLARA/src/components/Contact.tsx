import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.
*Assunto:* ${form.subject}
*E-mail:* ${form.email}
*WhatsApp:* ${form.whatsapp}
*Mensagem:* ${form.message}`;
    window.open(
      `https://wa.me/5574981267777?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-slate-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            Transforme seu projeto em realidade
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Entre em contato conosco e faça seu orçamento sem compromisso. Nossa equipe está pronta
            para te atender.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 lg:order-1 bg-white p-8 rounded-2xl shadow-lg h-fit">
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-3 border-slate-100">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 ">
                <div className="bg-accent/10 rounded-xl p-3 shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 mb-1 font-medium">Fale Conosco</p>
                  <a
                    href="https://wa.me/5574981267777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-primary hover:text-secondary transition-colors break-words"
                  >
                    (74) 98126-7777
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 ">
                <div className="bg-accent/10 rounded-xl p-3 shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 mb-1 font-medium">E-mail</p>
                  <a
                    href="mailto:aguasclaraspiscinasbf@gmail.com"
                    className="text-lg font-bold text-primary hover:text-secondary transition-colors break-words"
                  >
                    aguasclaraspiscinasbf@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 lg:pr-0">
                <div className="bg-accent/10 rounded-xl p-3 shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 mb-1 font-medium">Localização</p>
                  <p className="text-base text-slate-700 break-words">
                    Br 407 rodovia, Av. do Contôrno, SN - km 127 - Lomanto junior, Sr. do Bonfim -
                    BA, 48970-000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:order-2 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome completo"
                    className="w-full bg-white border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full bg-white border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-white border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Assunto da mensagem"
                    className="w-full bg-white border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full bg-white border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/20"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
