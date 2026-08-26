import { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const benefits = [
  'Resposta em minutos pelo WhatsApp',
  'Orçamento sem compromisso e totalmente gratuito',
  'Entrega no mesmo dia ou conforme sua necessidade',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (service) text += ` Tenho interesse em: ${service}.`;
    text += ` Telefone/WhatsApp: ${phone}.`;
    if (message) text += ` ${message}`;
    const url = `http://wa.me/553491233322?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffaf24]/20 text-[#ffaf24] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Fale conosco
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fefefe] mb-6 leading-tight">
              Pronto para solicitar sua <span className="text-[#ffaf24]">caçamba?</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Preencha o formulário e entraremos em contato pelo WhatsApp imediatamente. Sem
              burocracia, sem demora — atendemos de{' '}
              <strong className="text-[#fefefe]">segunda a sexta, das 07h às 17h</strong>.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#ffaf24]"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Como podemos te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-[#ffaf24] text-[#fefefe] placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(34) 9 XXXX-XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-[#ffaf24] text-[#fefefe] placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                  Serviço desejado
                </label>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-[#ffaf24] text-[#fefefe] rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none"
                >
                  <option value="" className="bg-[#343434]">
                    Selecione um serviço
                  </option>
                  <option value="Caçamba estacionária" className="bg-[#343434]">
                    Caçamba estacionária
                  </option>
                  <option value="Caminhão truck 12m³" className="bg-[#343434]">
                    Caminhão truck 12m³
                  </option>
                  <option value="Outro" className="bg-[#343434]">
                    Outro
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                  Mensagem adicional
                </label>
                <textarea
                  name="message"
                  placeholder="Descreva sua necessidade (endereço, quantidade, prazo...)"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-[#ffaf24] text-[#fefefe] placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ffaf24] hover:bg-[#ec8f2b] text-[#343434] font-extrabold text-base py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon width={20} height={20} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
