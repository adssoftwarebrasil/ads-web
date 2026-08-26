import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0ATelefone: ${form.phone}%0AE-mail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/554599160175?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(237,23,21)] font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fale com{' '}
            <span className="text-[rgb(237,23,21)]">Nossos Especialistas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você e encontrar a solução perfeita para
            o seu caminhão.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(237,23,21)] focus:ring-2 focus:ring-[rgb(237,23,21)]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(237,23,21)] focus:ring-2 focus:ring-[rgb(237,23,21)]/20 outline-none transition-all"
                  placeholder="(45) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(237,23,21)] focus:ring-2 focus:ring-[rgb(237,23,21)]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(237,23,21)] focus:ring-2 focus:ring-[rgb(237,23,21)]/20 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(237,23,21)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(200,20,18)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send className="lucide lucide-send" width={20} height={20} />
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(237,23,21)] p-3 rounded-lg flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-600">
                    Av. 24 de Outubro, 4213
                    <br />
                    Parque Independência
                    <br />
                    Medianeira - PR, 85884-000
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(237,23,21)] p-3 rounded-lg flex-shrink-0">
                  <Phone className="lucide lucide-phone text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Telefones
                  </h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Vendas: (45) 99916-0175</p>
                    <p>Vendas: (45) 99827-8309</p>
                    <p>Vendas: (45) 99862-7581</p>
                    <p>Financeiro: (45) 99816-8660</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(237,23,21)] p-3 rounded-lg flex-shrink-0">
                  <Mail className="lucide lucide-mail text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">E-mail</h3>
                  <a
                    href="mailto:pecas@autopecasdiniz.com.br"
                    className="text-gray-600 hover:text-[rgb(237,23,21)] transition-colors"
                  >
                    pecas@autopecasdiniz.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(237,23,21)] p-3 rounded-lg flex-shrink-0">
                  <Clock className="lucide lucide-clock text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Horário de Atendimento
                  </h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Segunda a Sexta: 08:00 - 12:00 | 13:30 - 18:00</p>
                    <p>Sábado: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6066.632095120772!2d-54.12033908030788!3d-25.296104930328752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ab9a7986bbcd%3A0xf3eb77636713c2f!2sAuto%20Pe%C3%A7as%20Diniz%20Eireli%20Pe%C3%A7as%20para%20Caminh%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1767102215327!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Auto Peças Diniz"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
