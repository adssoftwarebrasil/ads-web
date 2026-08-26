import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const CONTACTS: { Icon: typeof MapPin; label: string; value: string }[] = [
  { Icon: MapPin, label: 'Endereço', value: 'Av. Duque de Caxias, 733 – Centro\nSanta Carmem – MT, 78545-000' },
  { Icon: Phone, label: 'Telefone / WhatsApp', value: '(66) 9 9667-5395' },
  { Icon: Mail, label: 'E-mail', value: 'carmemmateriaissnp@gmail.com' },
  { Icon: Clock, label: 'Horário de Atendimento', value: 'Segunda a Sábado: 07h00 às 18h00' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`;
    window.open(`https://wa.me/556696675395?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#29394C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2F44C8] font-bold text-sm uppercase tracking-widest mb-3">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Entre em contato</h2>
          <p className="text-white/60 max-w-xl mx-auto">Tire suas dúvidas, solicite orçamentos ou venha nos visitar. Estamos prontos para te atender!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              {CONTACTS.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#2F44C8]/20 rounded-lg flex items-center justify-center">
                    <Icon size={18} className="text-[#2F44C8]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white font-medium text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.031882291161!2d-55.28217332494015!3d-11.972294488258724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9309cf867af4802f%3A0x89034c12e630b478!2sCarmem%20Materiais%20P%2F%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1771963774233!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Carmem Materiais"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-[#000000] mb-2">Envie uma mensagem</h3>
            <p className="text-gray-500 text-sm mb-6">Preencha o formulário e entraremos em contato pelo WhatsApp.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome completo <span className="text-[#2F44C8]">*</span></label>
                <input type="text" name="name" required placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F44C8]/30 focus:border-[#2F44C8] transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone / WhatsApp <span className="text-[#2F44C8]">*</span></label>
                <input type="tel" name="phone" required placeholder="(66) 9 0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F44C8]/30 focus:border-[#2F44C8] transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem <span className="text-[#2F44C8]">*</span></label>
                <textarea name="message" required rows={4} placeholder="Como podemos ajudar? Ex: preciso de orçamento para cimento e areia..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F44C8]/30 focus:border-[#2F44C8] transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2F44C8] hover:bg-[#29394C] text-white font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                <WhatsAppIcon className="w-5 h-5 fill-current" />Enviar pelo WhatsApp
              </button>
              <p className="text-xs text-gray-400 text-center">Ao enviar, você será redirecionado ao WhatsApp com a mensagem preenchida.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
