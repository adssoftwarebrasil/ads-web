import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.
Assunto: ${form.subject}
E-mail: ${form.email}
WhatsApp: ${form.whatsapp}

${form.message}`;
    window.open(`https://wa.me/5579991570550?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest mb-3 block">Contato</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#013413]">Entre em Contato</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="animate-slide-up  bg-[#013413] p-8 md:p-10 rounded-3xl shadow-2xl shadow-[#013413]/20 border border-gray-100">
            <h3 className="font-display text-2xl font-semibold text-white mb-6 text-center">Envie uma mensagem</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#4ade80]/50 focus:bg-white/20 transition-all"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="WhatsApp"
                  required
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#4ade80]/50 focus:bg-white/20 transition-all"
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                />
                <input
                  placeholder="Seu e-mail"
                  required
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#4ade80]/50 focus:bg-white/20 transition-all"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <input
                placeholder="Assunto"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#4ade80]/50 focus:bg-white/20 transition-all"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Descreva seu projeto ou necessidade..."
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#4ade80]/50 focus:bg-white/20 transition-all resize-none"
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold rounded-xl text-sm tracking-wide transition-all duration-300 mt-1 shadow-lg bg-[#f8f1e1] text-[#013413] hover:bg-white hover:-translate-y-0.5"
              >
                <Send width={16} height={16} className="lucide lucide-send" aria-hidden="true" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
