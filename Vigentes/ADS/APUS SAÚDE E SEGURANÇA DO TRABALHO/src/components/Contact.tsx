import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

const serviceOptions = [
  'Medicina do Trabalho',
  'Segurança do Trabalho',
  'Laudos e Documentação',
  'Avaliação de Riscos',
  'Perícia Médica',
  'Consultoria Especializada',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    acceptContact: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*E-mail:* ${form.email}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*Empresa:* ${form.company}%0A` +
      `*Serviço de Interesse:* ${form.service}%0A` +
      `*Mensagem:* ${form.message}`;
    window.open(`https://wa.me/558192487254?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-[rgb(28,9,31)] to-[rgb(78,20,104)]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Solicite um Orçamento Sem Compromisso
            </h2>
            <p className="text-xl text-gray-200">
              Nossa equipe entrará em contato em até 24 horas para entender suas necessidades e
              apresentar a melhor solução.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,144,41)] focus:border-transparent outline-none transition-all"
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
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,144,41)] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,144,41)] focus:border-transparent outline-none transition-all"
                    placeholder="(81) 99999-9999"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,144,41)] focus:border-transparent outline-none transition-all"
                    placeholder="Nome da empresa"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,144,41)] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,144,41)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Conte-nos um pouco sobre suas necessidades..."
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptContact"
                  name="acceptContact"
                  required
                  checked={form.acceptContact}
                  onChange={(e) => setForm({ ...form, acceptContact: e.target.checked })}
                  className="mt-1 h-4 w-4 text-[rgb(253,144,41)] focus:ring-[rgb(253,144,41)] border-gray-300 rounded"
                />
                <label htmlFor="acceptContact" className="ml-3 text-sm text-gray-600">
                  Aceito receber contato da APUS sobre os serviços solicitados *
                </label>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-[rgb(253,144,41)] text-white font-bold rounded-lg hover:bg-[rgb(233,124,21)] transition-all duration-200 hover:shadow-xl"
              >
                <span>Enviar Solicitação</span>
                <Send size={20} className="lucide lucide-send " />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
