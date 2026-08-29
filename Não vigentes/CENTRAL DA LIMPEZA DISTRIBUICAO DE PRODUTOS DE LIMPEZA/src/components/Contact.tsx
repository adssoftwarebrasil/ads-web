import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const subjectOptions = [
  'Tratamento de piscina',
  'Produtos de limpeza doméstica',
  'Produtos para limpeza empresarial',
  'Informações sobre marcas',
  'Entrega / frete',
  'Outro assunto',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Me chamo *${form.name}*.\n\n*Assunto:* ${form.subject}\n*Telefone:* ${form.phone}\n*E-mail:* ${form.email}\n\n*Mensagem:*\n${form.message}`
    );
    window.open(`https://wa.me/5541999150216?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding bg-gray-900">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-blue/20 text-brand-blue text-sm font-semibold rounded-full mb-4">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Entre em{' '}
              <span className="text-brand-blue">contato</span>{' '}
              agora
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado e enviaremos automaticamente sua mensagem
              pelo WhatsApp. Nossa equipe responde com agilidade!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-blue text-xs font-bold">1</span>
                </div>
                <p className="text-gray-300 text-sm">Preencha seus dados de contato</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-blue text-xs font-bold">2</span>
                </div>
                <p className="text-gray-300 text-sm">Escolha o assunto e descreva sua necessidade</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-green text-xs font-bold">3</span>
                </div>
                <p className="text-gray-300 text-sm">Receba atendimento personalizado via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mensagem enviada!</h3>
                <p className="text-gray-600 text-sm max-w-xs">
                  Você foi redirecionado para o WhatsApp. Nossa equipe responderá em breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-full hover:bg-brand-blue-dark transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(41) 99999-9999"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Assunto <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all bg-white"
                  >
                    <option value="">Selecione o assunto</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Descreva sua necessidade..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-brand-green text-white font-bold text-base rounded-xl hover:bg-brand-green-dark transition-all duration-200 hover:shadow-lg active:scale-95"
                >
                  <Send size={18} />
                  Enviar pelo WhatsApp
                </button>

                <p className="text-center text-xs text-gray-400">
                  Você será redirecionado para o WhatsApp com a mensagem preenchida.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
