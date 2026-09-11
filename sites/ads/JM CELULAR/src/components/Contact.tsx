import { useState, type FormEvent } from 'react';
import { Smartphone, User, MessageSquare, Send } from 'lucide-react';

const highlights = [
  { icon: Smartphone, text: 'Atendemos todas as marcas e modelos' },
  { icon: User, text: 'Diagnóstico gratuito e sem compromisso' },
  { icon: MessageSquare, text: 'Resposta rápida via WhatsApp' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', device: '', problem: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*Aparelho:* ${form.device}%0A` +
      `*Problema:* ${form.problem}`;
    window.open(`http://wa.me/557192534118?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#004AAC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-blue-200 font-semibold text-sm tracking-widest uppercase mb-4">
              Entre em contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Solicite seu orçamento <span className="text-sky-300">gratuito</span> agora
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado e entraremos em contato pelo WhatsApp com o orçamento do
              seu reparo. Rápido, sem compromisso e sem surpresas no final.
            </p>
            <div className="space-y-5">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon width={20} height={20} className="text-sky-300" />
                    </div>
                    <span className="text-blue-100 font-medium">{h.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-900/30">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Dados do seu aparelho</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Seu nome *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004AAC]/30 focus:border-[#004AAC] transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(71) 9 0000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004AAC]/30 focus:border-[#004AAC] transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Marca e modelo do aparelho *
                </label>
                <input
                  id="device"
                  name="device"
                  type="text"
                  required
                  value={form.device}
                  onChange={handleChange}
                  placeholder="Ex: iPhone 13, Samsung Galaxy S22..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004AAC]/30 focus:border-[#004AAC] transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Descreva o problema *
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={4}
                  value={form.problem}
                  onChange={handleChange}
                  placeholder="Ex: Tela rachada após queda, bateria não carrega..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004AAC]/30 focus:border-[#004AAC] transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#004AAC] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-xl active:scale-95 text-base"
              >
                <Send width={18} height={18} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-xs text-gray-400 text-center">
                Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
