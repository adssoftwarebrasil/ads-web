import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '5545991434496';

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
    const text = `Olá! Meu nome é ${form.name}.%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0AAssunto: ${form.subject}%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-semibold text-[#09b588] uppercase tracking-wide mb-4">
              Contato
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dúvidas ou Sugestões</h3>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato conosco e tire suas dúvidas. Estamos aqui para ajudar!
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#09b588] p-3 rounded-xl flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Telefone</p>
                  <a
                    href="tel:+5545991434496"
                    className="text-gray-600 hover:text-[#09b588] transition-colors"
                  >
                    (45) 99143-4496
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#09b588] p-3 rounded-xl flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">E-mail</p>
                  <a
                    href="mailto:contato@petshowesteticanimal.com.br"
                    className="text-gray-600 hover:text-[#09b588] transition-colors"
                  >
                    contato@petshowesteticanimal.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#09b588] p-3 rounded-xl flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Endereço</p>
                  <p className="text-gray-600">Rua Vitória, 934 - Bairro Neva, Cascavel - PR</p>
                </div>
              </div>
            </div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/petshowe%2FContato.jpg"
              alt="Contato"
              className="rounded-3xl shadow-2xl w-full h-64 object-cover"
            />
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#09b588] focus:ring-2 focus:ring-[#09b588]/20 outline-none transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-900 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#09b588] focus:ring-2 focus:ring-[#09b588]/20 outline-none transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#09b588] focus:ring-2 focus:ring-[#09b588]/20 outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#09b588] focus:ring-2 focus:ring-[#09b588]/20 outline-none transition-all duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#09b588] focus:ring-2 focus:ring-[#09b588]/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#09b588] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Send size={24} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
