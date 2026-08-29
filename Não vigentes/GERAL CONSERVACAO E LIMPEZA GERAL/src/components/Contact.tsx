import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const services = [
  'Conservação e Limpeza',
  'Limpeza de Fachadas',
  'Limpeza de Reservatórios',
  'Serviços em Altura',
  'PMOC - Ar Condicionado',
  'Portaria e Zeladoria',
  'Jardinagem',
  'Controle de Pragas',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${form.name}`,
      `*E-mail:* ${form.email}`,
      `*Telefone:* ${form.phone}`,
      `*Serviço de Interesse:* ${form.service}`,
    ];
    if (form.message) lines.push(`*Mensagem:* ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5592981671587?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[rgb(3,171,255)] font-semibold text-sm md:text-base uppercase tracking-wider mb-4 block">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Solicite seu Orçamento Gratuito
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender sua empresa com soluções personalizadas. Entre em contato conosco
              agora!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(2,103,253)] to-[rgb(3,171,255)] mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
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
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(2,103,253)] focus:border-transparent transition-all outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
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
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(2,103,253)] focus:border-transparent transition-all outline-none"
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
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(2,103,253)] focus:border-transparent transition-all outline-none"
                      placeholder="(92) 98167-1587"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(2,103,253)] focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(2,103,253)] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[rgb(2,103,253)] to-[rgb(3,171,255)] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(2,103,253)] to-[rgb(3,171,255)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Rua Coronel Sérgio Pessoa, 99 Sala 04<br />
                      Centro - Manaus/AM<br />
                      CEP: 69005-030
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(2,103,253)] to-[rgb(3,171,255)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Telefone / WhatsApp</h3>
                    <a href="tel:+5592981671587" className="text-gray-600 hover:text-[rgb(2,103,253)] transition-colors">
                      (92) 98167-1587
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(2,103,253)] to-[rgb(3,171,255)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
                    <a
                      href="mailto:geral.limpeza@hotmail.com"
                      className="text-gray-600 hover:text-[rgb(2,103,253)] transition-colors break-all"
                    >
                      geral.limpeza@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(2,103,253)] to-[rgb(3,171,255)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 17h</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[rgb(2,103,253)] to-[rgb(3,171,255)] rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-white mb-4 text-center">Siga-nos nas Redes Sociais</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/geral.limpeza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/geral.limp/?locale=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8294821162594!2d-60.024993825028865!3d-3.1396894968357327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05f3f8e5fec9%3A0x871c3ad2bf479a5!2zR2VyYWwgQ29uc2VydmHDp8OjbyAmIExpbXBlemEg4oCTIFRlcmNlaXJpemHDp8OjbyBlIEZhY2lsaXRpZXM!5e0!3m2!1spt-BR!2sbr!4v1768329054467!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Geral Conservação & Limpeza"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
