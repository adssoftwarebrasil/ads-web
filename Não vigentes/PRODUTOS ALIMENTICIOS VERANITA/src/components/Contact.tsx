import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `E-mail: ${form.email}\n` +
      `Telefone: ${form.phone}\n` +
      (form.company ? `Empresa: ${form.company}\n` : '') +
      `\nMensagem: ${form.message}`;
    const url = `http://wa.me/5516997516375?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-[rgb(0,173,239)]">Contato</span>
          </h2>
          <p className="text-lg text-gray-600">
            Estamos prontos para atender você. Fale conosco e descubra como podemos ajudar seu negócio
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(0,173,239)]/10 p-3 rounded-full">
                    <MapPin className="lucide lucide-map-pin w-6 h-6 text-[rgb(0,173,239)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Jorge Abraão, 926<br />Jardim Liberdade<br />Sertãozinho - SP, 14160-020
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(238,29,35)]/10 p-3 rounded-full">
                    <Phone className="lucide lucide-phone w-6 h-6 text-[rgb(238,29,35)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(16) 99751-6375</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(46,49,146)]/10 p-3 rounded-full">
                    <Mail className="lucide lucide-mail w-6 h-6 text-[rgb(46,49,146)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@veranita.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(253,241,0)]/30 p-3 rounded-full">
                    <Clock className="lucide lucide-clock w-6 h-6 text-[rgb(46,49,146)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta<br />07h30 às 11h30<br />13h00 às 17h30
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7280056756504!2d-47.99642512474071!3d-21.123407380549754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9995f037e4029%3A0x6a2b0336b9d77d36!2sVERANITA!5e0!3m2!1spt-BR!2sbr!4v1769008274802!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,173,239)] focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,173,239)] focus:border-transparent transition-all outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,173,239)] focus:border-transparent transition-all outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,173,239)] focus:border-transparent transition-all outline-none"
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,173,239)] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[rgb(238,29,35)] to-[rgb(238,29,35)]/90 text-white px-6 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="lucide lucide-send w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
