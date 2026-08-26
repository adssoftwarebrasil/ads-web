import { useState, FormEvent } from 'react';
import { User, Phone, Car, MessageSquare, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const STEPS = [
  {
    number: '01',
    title: 'Preencha o formulário',
    description: 'Informe seus dados e o modelo do seu veículo.',
  },
  {
    number: '02',
    title: 'Receba o orçamento',
    description: 'Nossa equipe te contata no WhatsApp com preços e disponibilidade.',
  },
  {
    number: '03',
    title: 'Bateria instalada!',
    description: 'Venha até a loja ou solicite atendimento — rápido e sem complicação.',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá, Scorpion Xpress! Gostaria de solicitar um orçamento de bateria automotiva.\n\n`;
    text += `*Nome:* ${name}\n`;
    text += `*WhatsApp/Telefone:* ${phone}\n`;
    if (vehicle) text += `*Modelo do Veículo:* ${vehicle}\n`;
    if (message) text += `*Mensagem:* ${message}\n`;
    const url = `https://wa.me/5514996487352?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#fcc209] text-sm font-semibold tracking-widest uppercase mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Solicite seu <span className="text-[#fcc209]">Orçamento</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Preencha o formulário e entraremos em contato pelo WhatsApp com o melhor preço para a sua
            bateria.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {STEPS.map((step) => (
                <div key={step.number} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#fcc209] text-black font-black text-sm flex items-center justify-center">
                    {step.number}
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">{step.title}</p>
                    <p className="text-white/50 text-sm mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#b31115]/10 border border-[#b31115]/30 rounded-2xl p-5">
              <p className="text-[#fcc209] font-bold text-sm mb-1">Atendimento Imediato</p>
              <p className="text-white/70 text-sm">
                Precisa de atendimento urgente? Nos chame direto no WhatsApp e resolveremos o mais
                rápido possível!
              </p>
              <a
                href="https://wa.me/5514996487352"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[#fcc209] text-sm font-bold hover:underline"
              >
                Chamar agora
                <Send size={14} className="lucide lucide-send " />
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <User size={12} className="lucide lucide-user " /> Seu Nome *
              </label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: João da Silva"
                className="bg-white/5 border border-white/15 focus:border-[#fcc209]/60 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Phone size={12} className="lucide lucide-phone " /> WhatsApp / Telefone *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: (14) 99648-7352"
                className="bg-white/5 border border-white/15 focus:border-[#fcc209]/60 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Car size={12} className="lucide lucide-car " /> Modelo do Veículo
              </label>
              <input
                type="text"
                name="vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="Ex: Chevrolet Onix 2020"
                className="bg-white/5 border border-white/15 focus:border-[#fcc209]/60 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare size={12} className="lucide lucide-message-square " /> Mensagem
              </label>
              <textarea
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva sua necessidade ou dúvida..."
                className="bg-white/5 border border-white/15 focus:border-[#fcc209]/60 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 bg-[#fcc209] hover:bg-[#e6b008] text-black font-black text-base px-6 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#fcc209]/30"
            >
              <WhatsAppIcon size={20} fill="currentColor" />
              Enviar pelo WhatsApp
            </button>
            <p className="text-center text-white/30 text-xs">
              Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
