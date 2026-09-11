import { useState, FormEvent } from 'react';
import { User, Phone, ChevronDown, MessageSquare, Send } from 'lucide-react';

const benefits = [
  { icon: '⚡', title: 'Resposta Rápida', desc: 'Retornamos em até 30 minutos' },
  { icon: '💰', title: 'Orçamento Gratuito', desc: 'Sem custo e sem compromisso' },
  { icon: '✅', title: 'Garantia no Serviço', desc: 'Qualidade com procedência' },
];

const serviceOptions = [
  'Troca de Parabrisa',
  'Troca de Vidro Lateral',
  'Troca de Vidro Traseiro',
  'Aplicação de Insulfilm',
  'Recuperação de Trincados',
  'Outros',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (service) text += `\nServiço desejado: ${service}`;
    if (phone) text += `\nTelefone: ${phone}`;
    if (message) text += `\n${message}`;
    window.open(
      `http://wa.me/559284131569?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-[#034087] text-sm font-bold uppercase tracking-widest mb-3">
                Fale Conosco
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Solicite seu orçamento sem compromisso
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Preencha o formulário abaixo e entraremos em contato via WhatsApp. Respondemos
                rapidamente durante nosso horário de atendimento:{' '}
                <strong>segunda a sexta, das 8h às 17h</strong>.
              </p>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f6ff]"
                  >
                    <span className="text-2xl flex-shrink-0">{b.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{b.title}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm"
            >
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#034087] focus:ring-2 focus:ring-[#034087]/10 transition-all duration-200 pl-10"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="WhatsApp / Telefone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#034087] focus:ring-2 focus:ring-[#034087]/10 transition-all duration-200 pl-10"
                  />
                </div>
                <div className="relative">
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#034087] focus:ring-2 focus:ring-[#034087]/10 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Selecione o serviço desejado</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <textarea
                    placeholder="Descreva seu veículo e o problema (opcional)"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#034087] focus:ring-2 focus:ring-[#034087]/10 transition-all duration-200 pl-10 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#034087] text-white font-bold py-4 rounded-xl hover:bg-[#022d5e] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Enviar pelo WhatsApp
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
