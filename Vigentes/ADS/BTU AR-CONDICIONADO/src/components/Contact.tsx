import { useState, type FormEvent } from 'react';
import { MessageCircle, Phone, Mail, Star } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, WHATSAPP_NUMBER } from '../constants';

const serviceOptions = [
  { value: 'Instalação de ar condicionado', label: 'Instalação' },
  { value: 'Manutenção preventiva', label: 'Manutenção preventiva' },
  { value: 'Limpeza e higienização', label: 'Limpeza e higienização' },
  { value: 'Conserto e reparo', label: 'Conserto e reparo' },
  { value: 'Venda de equipamento', label: 'Venda de equipamento' },
  { value: 'Contrato empresarial', label: 'Contrato empresarial' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${name}`,
      `WhatsApp / Telefone: ${phone}`,
      `Serviço desejado: ${service}`,
    ];
    if (message.trim()) {
      lines.push(`Mensagem: ${message}`);
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-6 leading-tight">
              Solicite seu orçamento agora
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Entre em contato pelo WhatsApp ou preencha o formulário ao lado. Nossa equipe responde
              com agilidade para atender sua necessidade.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl p-5 transition-all group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">WhatsApp</p>
                  <p className="text-green-600 text-sm font-semibold group-hover:underline">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-5 transition-all group"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Telefone</p>
                  <p className="text-primary text-sm font-semibold group-hover:underline">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>
              <a
                href="mailto:btuarcondicionadodf@gmail.com"
                className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-5 transition-all group"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">E-mail</p>
                  <p className="text-secondary text-sm font-semibold group-hover:underline break-all">
                    btuarcondicionadodf@gmail.com
                  </p>
                </div>
              </a>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-gray-600 text-sm font-semibold ml-1">Avaliações Google</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A BTU Ar Condicionado possui avaliações positivas no Google. Confira nossos clientes
                satisfeitos e tome a melhor decisão.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Preencha para receber seu orçamento
            </h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Nome completo
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  WhatsApp / Telefone
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="(61) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Serviço desejado
                </label>
                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition text-sm appearance-none"
                >
                  <option value="" disabled>
                    Selecione um serviço
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua necessidade..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl text-base transition-all duration-300 hover:shadow-lg hover:scale-[1.02] mt-2"
              >
                Enviar pelo WhatsApp
              </button>
              <p className="text-gray-400 text-xs text-center">
                Ao enviar você será redirecionado para o WhatsApp da BTU.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
