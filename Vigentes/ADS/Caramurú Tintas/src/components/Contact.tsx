import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${form.name}%0A*Telefone:* ${form.phone}%0A*E-mail:* ${form.email}%0A*Mensagem:* ${form.message}`;
    window.open(`https://wa.me/5587988263372?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-4">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pronto para Começar <span className="text-blue-600">Seu Projeto?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe está pronta para atender você e fornecer a melhor solução para suas
            necessidades. Visite nossa loja ou entre em contato agora mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Maj. Antônio Rufino, 1029<br />
                      Nossa Sra. de Graças<br />
                      Salgueiro - PE, 56000-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                    <a href={WHATSAPP_URL} className="text-gray-600 hover:text-blue-600">
                      (87) 98826-3372
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                    <a
                      href="mailto:comercial@caramurutintas.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      comercial@caramurutintas.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda à Sexta: 7:30 às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Atendimento via WhatsApp</h3>
              <p className="mb-6">
                Fale diretamente com nossa equipe através do WhatsApp para um atendimento mais
                rápido e personalizado.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Enviar via WhatsApp
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3329339741804!2d-39.124165424992135!3d-8.067483491960381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a09186427802c9%3A0x96373278e5284fa8!2sCaramur%C3%BA%20Tintas!5e0!3m2!1spt-BR!2sbr!4v1768844979473!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Caramurú Tintas"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
