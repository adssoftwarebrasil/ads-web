import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.%0A` +
      `Telefone/WhatsApp: ${form.phone}%0A` +
      `E-mail: ${form.email}%0A` +
      `Serviço de Interesse: ${form.service}%0A` +
      `Mensagem: ${form.message}`;
    window.open(
      `https://wa.me/557598115869?text=${text.replace(/ /g, '%20')}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[rgb(16,215,237)] font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
            <div className="h-1 w-20 bg-[rgb(16,215,237)] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(2,66,147)] mt-4 leading-tight">
            Estamos Prontos para Atender Você
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Tire suas dúvidas, solicite um orçamento ou agende uma visita. Nossa
            equipe está pronta para ajudar!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-[rgb(2,66,147)] to-[rgb(0,68,139)] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(16,215,237)] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[rgb(2,66,147)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Rua Faustino Bispo dos Santos, 724
                      <br />
                      Santo Antônio - Alagoinhas/BA
                      <br />
                      CEP: 48.018-620
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(16,215,237)] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[rgb(2,66,147)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-200 text-sm">
                      Segunda à Sexta
                      <br />
                      08:00 às 12:00
                      <br />
                      14:00 às 18:00
                    </p>
                    <p className="text-[rgb(16,215,237)] text-xs mt-2">
                      *Emergências 24h: (75) 99811-5869
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(16,215,237)] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[rgb(2,66,147)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/557598115869"
                      className="text-gray-200 text-sm hover:text-[rgb(16,215,237)] transition-colors"
                    >
                      (75) 9 9811-5869
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(16,215,237)] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[rgb(2,66,147)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <a
                      href="mailto:financeiro@tsrastreamento.com.br"
                      className="text-gray-200 text-sm hover:text-[rgb(16,215,237)] transition-colors break-all"
                    >
                      financeiro@tsrastreamento.com.br
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
                <p className="text-sm text-center">
                  <strong className="text-[rgb(16,215,237)]">Emergência?</strong>
                  <br />
                  Em caso de roubo ou furto, ligue a qualquer momento para nosso
                  número de emergência 24h
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-3xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[rgb(2,66,147)] mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(16,215,237)] focus:outline-none transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[rgb(2,66,147)] mb-2"
                  >
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(16,215,237)] focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[rgb(2,66,147)] mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(16,215,237)] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-[rgb(2,66,147)] mb-2"
                >
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(16,215,237)] focus:outline-none transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Rastreamento Veicular">
                    Rastreamento Veicular
                  </option>
                  <option value="Reboque e Guincho">Reboque e Guincho 24h</option>
                  <option value="Serviço de Táxi">Serviço de Táxi</option>
                  <option value="Gestão de Frotas">Gestão de Frotas</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[rgb(2,66,147)] mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(16,215,237)] focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[rgb(2,66,147)] to-[rgb(0,68,139)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Enviar via WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>
              <p className="text-xs text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua
                mensagem pré-preenchida
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
