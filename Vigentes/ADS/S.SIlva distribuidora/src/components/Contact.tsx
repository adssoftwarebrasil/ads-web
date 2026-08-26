import { useState, FormEvent } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const benefits = [
  'Resposta imediata via WhatsApp',
  'Orçamentos personalizados',
  'Condições especiais para oficinas e revendas',
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('Consulta de peças');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá! Meu nome é ${nome}.\n` +
      `*Assunto:* ${assunto}\n` +
      `*Telefone:* ${telefone}\n` +
      `*Mensagem:* ${mensagem}`;
    const url = `https://wa.me/5575981960232?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="reveal inline-block px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-wine text-xs font-bold uppercase tracking-[0.2em] mb-5">Fale com a gente</span>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.05] mb-6">
              Consulte peças, preços e <span className="text-gradient-brand">prazos de entrega.</span>
            </h2>
            <p className="reveal text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              Preencha o formulário e um de nossos consultores entrará em contato pelo WhatsApp. Resposta rápida e atendimento consultivo para oficinas, revendas e consumidor final.
            </p>
            <div className="reveal space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <MessageCircle className="lucide lucide-message-circle w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-700 font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="reveal p-6 md:p-8 rounded-3xl bg-gradient-to-br from-brand-navy to-[rgb(2,17,86)] shadow-2xl shadow-brand-navy/30 border border-white/10">
            <h3 className="font-display text-2xl font-bold text-white mb-1">Envie sua consulta</h3>
            <p className="text-white/60 text-sm mb-6">Retornamos direto no seu WhatsApp.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-2">Nome completo</label>
                <input
                  type="text"
                  placeholder="Ex: João Silva"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red/50 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(75) 9 9999-9999"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red/50 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-2">Assunto</label>
                <input
                  type="text"
                  placeholder="Ex: Consulta de peças"
                  required
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red/50 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Descreva a peça, modelo e ano do veículo..."
                  required
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red/50 transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red hover:bg-brand-wine text-white font-bold text-base shadow-lg shadow-brand-red/30 hover:shadow-brand-wine/40 transition-all hover:-translate-y-0.5"
              >
                Enviar para o WhatsApp
                <Send className="lucide lucide-send w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-[11px] text-white/50 text-center leading-relaxed">Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
