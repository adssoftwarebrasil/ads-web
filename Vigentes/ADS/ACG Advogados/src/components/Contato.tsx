import { useState, type FormEvent } from 'react';
import { Send, Phone, Mail, Clock } from 'lucide-react';

const areaOptions = [
  'Direito Público',
  'Direito Trabalhista',
  'Direito Empresarial',
  'Direito Tributário',
  'Direito do Consumidor',
  'Direito Previdenciário',
  'Direito Civil',
  'Direito de Família',
  'Direito Agrário',
  'Direito Ambiental',
  'Consultoria Preventiva',
  'Outro',
];

export default function Contato() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.\n\nTelefone/WhatsApp: ${form.phone}\nE-mail: ${form.email}\nÁrea de Interesse: ${form.subject}\n\nMensagem: ${form.message}`;
    window.open(`http://wa.me/556399974853?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(175,145,93)] font-bold text-sm tracking-widest uppercase">Entre em Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(16,17,12)] mt-4 mb-6">Estamos Prontos para Ajudar</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e nossa equipe entrará em contato em breve
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-[rgb(16,17,12)] font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(175,145,93)] focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[rgb(16,17,12)] font-semibold mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(175,145,93)] focus:outline-none transition-colors"
                    placeholder="(63) 9 9999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[rgb(16,17,12)] font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(175,145,93)] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[rgb(16,17,12)] font-semibold mb-2">
                  Área de Interesse *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(175,145,93)] focus:outline-none transition-colors"
                >
                  <option value="">Selecione uma área</option>
                  {areaOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[rgb(16,17,12)] font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(175,145,93)] focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos sobre seu caso..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-8 py-4 rounded-lg hover:bg-[rgb(16,17,12)] hover:text-[rgb(175,145,93)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar via WhatsApp</span>
              </button>
              <p className="text-sm text-gray-600 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida
              </p>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[rgb(16,17,12)] to-[rgb(16,17,12)]/95 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(175,145,93)]/20 p-3 rounded-lg flex-shrink-0">
                    <Phone size={24} className="text-[rgb(175,145,93)]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefones</p>
                    <p className="text-[rgb(199,195,192)]">(63) 9 9997-4853</p>
                    <p className="text-[rgb(199,195,192)]">(63) 3322-1977</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(175,145,93)]/20 p-3 rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-[rgb(175,145,93)]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <p className="text-[rgb(199,195,192)]">contato@acgadvogados.com.br</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(175,145,93)]/20 p-3 rounded-lg flex-shrink-0">
                    <Clock size={24} className="text-[rgb(175,145,93)]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horário de Atendimento</p>
                    <p className="text-[rgb(199,195,192)]">Segunda a Sexta</p>
                    <p className="text-[rgb(199,195,192)]">08h às 12h | 14h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(175,145,93)]/10 border-2 border-[rgb(175,145,93)]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[rgb(16,17,12)] mb-4">Precisa de Atendimento Urgente?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Entre em contato diretamente pelo WhatsApp e receba atendimento imediato de nossa equipe.
              </p>
              <a
                href="http://wa.me/556399974853"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-6 py-4 rounded-lg hover:bg-[rgb(16,17,12)] hover:text-[rgb(175,145,93)] transition-all duration-300 font-bold text-center shadow-lg"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
