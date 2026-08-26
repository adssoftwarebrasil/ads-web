import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

export default function Contact() {
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', subject: '', message: '' });

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg =
      `Olá! Gostaria de mais informações.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*WhatsApp:* ${form.whatsapp}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Assunto:* ${form.subject}\n` +
      `*Mensagem:* ${form.message}`;
    openWhatsApp(msg);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFFEF]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-[#721515] font-medium tracking-wider uppercase mb-2 text-sm">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vamos realizar seu sonho?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Entre em contato para agendar sua prova ou tirar dúvidas. Nossa equipe está pronta para lhe atender.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="tel:+558738617180" className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="w-12 h-12 bg-[#721515]/10 rounded-full flex items-center justify-center text-[#721515] mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Telefone</h3>
            <p className="text-gray-600 text-sm break-all">(87) 3861-7180</p>
          </a>
          <a href="mailto:noivaeciapetrolina@gmail.com" className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="w-12 h-12 bg-[#721515]/10 rounded-full flex items-center justify-center text-[#721515] mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
            <p className="text-gray-600 text-sm break-all">noivaeciapetrolina@gmail.com</p>
          </a>
          <a className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 ">
            <div className="w-12 h-12 bg-[#721515]/10 rounded-full flex items-center justify-center text-[#721515] mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Localização</h3>
            <p className="text-gray-600 text-sm break-all">Petrolina/PE</p>
          </a>
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie uma mensagem</h3>
              <p className="text-gray-500">Preencha o formulário abaixo e retornaremos pelo WhatsApp.</p>
            </div>
            <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome completo</label>
                  <input type="text" id="name" name="name" required placeholder="Seu nome" value={form.name} onChange={update('name')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#721515] focus:border-transparent transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">WhatsApp</label>
                  <input type="tel" id="whatsapp" name="whatsapp" required placeholder="(00) 00000-0000" value={form.whatsapp} onChange={update('whatsapp')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#721515] focus:border-transparent transition-all outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" id="email" name="email" required placeholder="seu@email.com" value={form.email} onChange={update('email')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#721515] focus:border-transparent transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                  <input type="text" id="subject" name="subject" required placeholder="Ex: Orçamento Vestido de Noiva" value={form.subject} onChange={update('subject')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#721515] focus:border-transparent transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="message" name="message" required rows={4} placeholder="Como podemos ajudar você?" value={form.message} onChange={update('message')} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#721515] focus:border-transparent transition-all outline-none resize-none"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full group flex items-center justify-center gap-3 bg-[#721515] hover:bg-[#8b1a1a] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  Enviar Mensagem no WhatsApp
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
          <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              Prefere falar direto?
              <button onClick={() => openWhatsApp()} className="text-[#721515] font-semibold hover:underline flex items-center gap-1">
                <MessageSquare className="w-4 h-4" /> Clique aqui
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
