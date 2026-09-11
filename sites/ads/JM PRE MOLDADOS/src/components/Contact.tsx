import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${form.name}.`,
      `WhatsApp: ${form.whatsapp}`,
    ];
    if (form.email) lines.push(`E-mail: ${form.email}`);
    if (form.subject) lines.push(`Assunto: ${form.subject}`);
    if (form.message) lines.push(`Mensagem: ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5567999737241?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B4C] mb-4">Entre em Contato</h2>
          <p className="text-lg text-[#A8AAAA] max-w-2xl mx-auto">
            Estamos prontos para atender você e esclarecer suas dúvidas
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#0D1B4C] font-semibold mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:outline-none focus:shadow-lg transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-[#0D1B4C] font-semibold mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:outline-none focus:shadow-lg transition-all duration-300"
                    placeholder="(67) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-[#0D1B4C] font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:outline-none focus:shadow-lg transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#0D1B4C] font-semibold mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:outline-none focus:shadow-lg transition-all duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#0D1B4C] font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:outline-none focus:shadow-lg transition-all duration-300 resize-none"
                  placeholder="Descreva como podemos ajudar você..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <WhatsappIcon size={24} />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0D1B4C] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <a
                  href="tel:6799737241"
                  className="flex items-start space-x-4 text-[#A8AAAA] hover:text-[#3b82f6] transition-colors group"
                >
                  <div className="p-3 bg-[#4A90E2] bg-opacity-10 rounded-lg group-hover:bg-[#FF6B35] group-hover:bg-opacity-10 transition-colors">
                    <Phone size={24} className="text-[#4A90E2] group-hover:text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B4C]">Telefone 1</p>
                    <p>(67) 99973-7241</p>
                  </div>
                </a>
                <a
                  href="tel:6799841689"
                  className="flex items-start space-x-4 text-[#A8AAAA] hover:text-[#3b82f6] transition-colors group"
                >
                  <div className="p-3 bg-[#4A90E2] bg-opacity-10 rounded-lg group-hover:bg-[#FF6B35] group-hover:bg-opacity-10 transition-colors">
                    <Phone size={24} className="text-[#4A90E2] group-hover:text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B4C]">Telefone 2</p>
                    <p>(67) 99984-1689</p>
                  </div>
                </a>
                <a
                  href="mailto:jm.premoldados@email.com"
                  className="flex items-start space-x-4 text-[#A8AAAA] hover:text-[#3b82f6] transition-colors group"
                >
                  <div className="p-3 bg-[#4A90E2] bg-opacity-10 rounded-lg group-hover:bg-[#FF6B35] group-hover:bg-opacity-10 transition-colors">
                    <Mail size={24} className="text-[#4A90E2] group-hover:text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B4C]">E-mail</p>
                    <p></p>
                  </div>
                </a>
                <div className="flex items-start space-x-4 text-[#A8AAAA]">
                  <div className="p-3 bg-[#4A90E2] bg-opacity-10 rounded-lg">
                    <MapPin size={24} className="text-[#4A90E2]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B4C]">Endereço</p>
                    <p>
                      Rodovia BR-163, SN
                      <br />
                      Parque das Nações
                      <br />
                      Dourados/MS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0D1B4C] rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-white text-opacity-80">
                <p>Segunda a Sexta: 7h às 18h</p>
                <p>Sábado: 7h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
