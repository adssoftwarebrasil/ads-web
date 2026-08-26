import { useState, FormEvent } from 'react';
import { MessageSquare, Phone, Mail, User, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `E-mail: ${form.email}\n` +
      `Telefone: ${form.phone}\n\n` +
      `Mensagem: ${form.message}`;
    window.open(`https://wa.me/556293252626?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)]/10 px-4 py-2 rounded-full mb-4">
            <MessageSquare width={20} height={20} className="text-[rgb(212,171,85)]" />
            <span className="text-sm font-semibold text-[rgb(45,45,45)]">Contato</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-[rgb(212,171,85)]">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Envie sua mensagem e nossa equipe responderá em breve
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pronto para transformar seu ambiente?</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nossa equipe especializada está pronta para te atender e ajudar a encontrar os produtos perfeitos para o seu projeto. Entre em contato agora mesmo!
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(212,171,85)]/10 p-3 rounded-xl">
                  <Phone width={24} height={24} className="text-[rgb(212,171,85)]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-700">Atendimento rápido e direto</p>
                  <a
                    href="http://wa.me/556293252626"
                    className="text-[rgb(45,45,45)] hover:text-[rgb(212,171,85)] font-semibold"
                  >
                    (62) 9 9325-2626
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(45,45,45)]/10 p-3 rounded-xl">
                  <Mail width={24} height={24} className="text-[rgb(45,45,45)]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-gray-700">Envie suas dúvidas</p>
                  <a
                    href="mailto:quasetudogo@gmail.com"
                    className="text-[rgb(45,45,45)] hover:text-[rgb(212,171,85)] font-semibold"
                  >
                    quasetudogo@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(212,171,85)]/10 to-[rgb(45,45,45)]/10 rounded-2xl p-6 border border-[rgb(212,171,85)]/20">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-[rgb(45,45,45)]">Dica:</strong> Ao enviar o formulário, você será redirecionado para o WhatsApp com sua mensagem já preenchida. É rápido, fácil e seguro!
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User
                    width={20}
                    height={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[rgb(212,171,85)] focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="Seu nome"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail
                    width={20}
                    height={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[rgb(212,171,85)] focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone *
                </label>
                <div className="relative">
                  <Phone
                    width={20}
                    height={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[rgb(212,171,85)] focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[rgb(212,171,85)] focus:border-transparent transition-all duration-200 text-gray-900 resize-none"
                  placeholder="Conte-nos sobre o que você está procurando..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[rgb(45,45,45)] text-white px-8 py-4 rounded-xl hover:bg-[rgb(212,171,85)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Enviar via WhatsApp</span>
                <Send width={20} height={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
