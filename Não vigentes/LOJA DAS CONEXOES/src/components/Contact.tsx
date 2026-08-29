import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_ENCODED } from '../constants';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0AAssunto: ${form.subject}%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0AMensagem: ${form.message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5581987311236&text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[rgb(45,48,145)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[rgb(248,232,48)]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[rgb(45,48,145)] font-bold tracking-widest uppercase text-sm mb-4 block">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[rgb(45,48,145)] mb-6">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <div className="w-24 h-1.5 bg-[rgb(248,232,48)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dúvidas ou sugestões? Nossa equipe está pronta para atender você
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[rgb(45,48,145)] mb-8">Envie sua Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-[rgb(45,48,145)] font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[rgb(45,48,145)] focus:ring-2 focus:ring-[rgb(248,232,48)]/50 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-[rgb(45,48,145)] font-semibold mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[rgb(45,48,145)] focus:ring-2 focus:ring-[rgb(248,232,48)]/50 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="(81) 98731-1236"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[rgb(45,48,145)] font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[rgb(45,48,145)] focus:ring-2 focus:ring-[rgb(248,232,48)]/50 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-[rgb(45,48,145)] font-semibold mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[rgb(45,48,145)] focus:ring-2 focus:ring-[rgb(248,232,48)]/50 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[rgb(45,48,145)] font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[rgb(45,48,145)] focus:ring-2 focus:ring-[rgb(248,232,48)]/50 outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(248,232,48)] text-[rgb(45,48,145)] px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[rgb(45,48,145)] mb-8">Informações de Contato</h3>
            <div className="group bg-white rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[rgb(45,48,145)]">
              <div className="bg-gradient-to-br from-[rgb(45,48,145)] to-blue-700 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} className="text-[rgb(248,232,48)]" />
              </div>
              <div>
                <h4 className="font-bold text-[rgb(45,48,145)] mb-2 text-lg">Telefone</h4>
                <a
                  href="tel:+558132413322"
                  className="text-gray-600 hover:text-[rgb(45,48,145)] transition-colors font-medium text-lg"
                >
                  (81) 3241-3322
                </a>
              </div>
            </div>
            <div className="group bg-white rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[rgb(248,232,48)]">
              <div className="bg-gradient-to-br from-[rgb(248,232,48)] to-yellow-500 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-[rgb(45,48,145)]" />
              </div>
              <div>
                <h4 className="font-bold text-[rgb(45,48,145)] mb-2 text-lg">E-mail</h4>
                <a
                  href="mailto:contato@ralojadasconexoes.com.br"
                  className="text-gray-600 hover:text-[rgb(45,48,145)] transition-colors break-all font-medium"
                >
                  contato@ralojadasconexoes.com.br
                </a>
              </div>
            </div>
            <div className="group bg-white rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[rgb(45,48,145)] mb-2 text-lg">Endereço</h4>
                <p className="text-gray-600 leading-relaxed">
                  AV. SENADOR NILO DE SOUZA COLEHO, 2195 A – OURO PRETO / OLINDA -PE
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_ENCODED}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-500 to-green-600 text-white text-center px-8 py-5 rounded-2xl text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-2 border border-gray-100">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7902.198082179099!2d-34.863284!3d-7.988708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab17e1ee2b5963%3A0x3a2ce775d8cb3ea6!2sLoja%20Das%20Conex%C3%B5es!5e0!3m2!1spt-BR!2sus!4v1770084726462!5m2!1spt-BR!2sus"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização RA Loja das Conexões"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
