import { useState } from 'react';
import { Send, Phone, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WA_LINK = 'http://wa.me/553184631447';
const PHONE = '(31) 3565-4833';

export default function CTASection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Me chamo *${form.name}*. Telefone: ${form.phone || 'não informado'}. Mensagem: ${form.message || 'Quero saber mais sobre os produtos.'}`;
    window.open(`${WA_LINK}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="bg-[#111111] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 block">
              Entre em Contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Pronto para receber o
              <span className="text-brand-red block">melhor atendimento?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Envie sua mensagem pelo formulário ou fale diretamente pelo WhatsApp.
              Nossa equipe responde rapidamente para te ajudar a encontrar a solução ideal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-red-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
              >
                <MessageCircle size={18} />
                WhatsApp Direto
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
          </div>

          <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-xl mb-6">Enviar mensagem</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1.5">
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva"
                  className="w-full bg-[#1E1E1E] border border-white/10 focus:border-brand-red rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1.5">
                  Seu telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(31) 9 0000-0000"
                  className="w-full bg-[#1E1E1E] border border-white/10 focus:border-brand-red rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1.5">
                  O que você precisa?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ex: Preciso de máquina de solda MIG para serralheria..."
                  className="w-full bg-[#1E1E1E] border border-white/10 focus:border-brand-red rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-brand-red hover:bg-red-600 text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
              >
                <Send size={18} />
                Enviar via WhatsApp
              </button>
              <p className="text-gray-600 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
