import { useState } from 'react';
import { Send, User, Phone as PhoneIcon, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é *${form.name}*.%0A📞 Telefone: *${form.phone}*%0A📌 Assunto: *${form.subject}*%0A%0A💬 Mensagem:%0A${form.message}`;
    window.open(`http://wa.me/556697173455?text=${msg}`, '_blank');
  };

  const subjects = [
    'Orçamento de Tintas Imobiliárias',
    'Orçamento de Tintas Automotivas',
    'Linha Industrial',
    'Impermeabilizantes',
    'Entrega na Obra',
    'Dúvida sobre Produto',
    'Outro Assunto',
  ];

  return (
    <section id="contato" className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, rgb(1,1,1) 0%, rgb(20,20,20) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(17,157,219,0.2)', color: 'rgb(111,196,233)' }}
            >
              Fale Conosco
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Pronto para{' '}
              <span style={{ color: 'rgb(17,157,219)' }}>transformar</span>
              <br />seu espaço?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Preencha o formulário e nossa equipe especializada entrará em contato via WhatsApp para te ajudar a escolher as melhores tintas para o seu projeto.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🕐', title: 'Horário de Atendimento', desc: 'Seg–Sex: 7h–11h30 e 13h–17h30' },
                { icon: '📍', title: 'Atendimento', desc: 'Toda a cidade de Sorriso - MT' },
                { icon: '🚚', title: 'Entrega', desc: 'Direto na sua obra, sem custo adicional' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/5">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-black text-black mb-1">Solicite seu Orçamento</h3>
            <p className="text-gray-500 text-sm mb-6">Resposta rápida pelo WhatsApp</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[rgb(17,157,219)] focus:ring-2 focus:ring-[rgb(17,157,219)]/20 outline-none text-sm text-black transition-all"
                />
              </div>

              <div className="relative">
                <PhoneIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Seu telefone / WhatsApp"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[rgb(17,157,219)] focus:ring-2 focus:ring-[rgb(17,157,219)]/20 outline-none text-sm text-black transition-all"
                />
              </div>

              <div>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[rgb(17,157,219)] focus:ring-2 focus:ring-[rgb(17,157,219)]/20 outline-none text-sm text-black transition-all bg-white appearance-none"
                >
                  <option value="">Selecione o assunto</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="relative">
                <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Descreva seu projeto ou necessidade..."
                  rows={4}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[rgb(17,157,219)] focus:ring-2 focus:ring-[rgb(17,157,219)]/20 outline-none text-sm text-black transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'rgb(108,189,81)', boxShadow: '0 8px 25px rgba(108,189,81,0.35)' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar pelo WhatsApp
                <Send size={14} />
              </button>

              <p className="text-center text-gray-400 text-xs">
                Ao enviar, você será redirecionado para o WhatsApp com a mensagem já preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
