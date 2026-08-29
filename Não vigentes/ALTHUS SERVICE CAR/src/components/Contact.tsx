import { useState, FormEvent } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const serviceOptions = [
  'Revisão Completa',
  'Troca de Óleo',
  'Motor (Gasolina/Flex/Diesel)',
  'Transmissão / Embreagem',
  'Suspensão e Direção',
  'Freios e ABS',
  'Sistema Elétrico',
  'Injeção Eletrônica',
  'Arrefecimento',
  'Pneus e Alinhamento',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = 'Olá! Gostaria de agendar um serviço na Althus Service Car.';
    if (name) text += `\n\nNome: ${name}`;
    if (phone) text += `\nTelefone: ${phone}`;
    if (service) text += `\nServiço: ${service}`;
    if (message) text += `\nMensagem: ${message}`;
    window.open(
      `https://wa.me/551636240220?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 scrolled-hidden">
          <span className="text-[rgb(240,26,40)] text-sm font-bold uppercase tracking-widest mb-3 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Agende seu <span className="text-[rgb(240,26,40)]">Atendimento</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto text-base leading-relaxed">
            Preencha o formulário e entraremos em contato via WhatsApp para confirmar seu agendamento.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-16 bg-[rgb(240,26,40)] rounded-full"></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3 transition-all duration-700 scrolled-hidden">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 focus:border-[rgb(240,26,40)] text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(16) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 focus:border-[rgb(240,26,40)] text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Serviço desejado</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 focus:border-[rgb(240,26,40)] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#111]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva o problema ou serviço que precisa..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 focus:border-[rgb(240,26,40)] text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fa854] disabled:opacity-70 text-white font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5"
              >
                <WhatsappIcon size={20} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex gap-4 p-5 bg-[#111] border border-white/5 rounded-2xl hover:border-[rgb(240,26,40)]/25 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-[rgb(240,26,40)]/10 border border-[rgb(240,26,40)]/20 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="lucide lucide-phone text-[rgb(240,26,40)]" />
              </div>
              <div>
                <div className="text-white/45 text-xs font-medium uppercase tracking-wide mb-1">
                  Telefone / WhatsApp
                </div>
                <a
                  href="tel:+551636240220"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium whitespace-pre-line hover:text-[rgb(240,26,40)] transition-colors duration-200"
                >
                  (16) 3624-0220
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#111] border border-white/5 rounded-2xl hover:border-[rgb(240,26,40)]/25 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-[rgb(240,26,40)]/10 border border-[rgb(240,26,40)]/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="lucide lucide-map-pin text-[rgb(240,26,40)]" />
              </div>
              <div>
                <div className="text-white/45 text-xs font-medium uppercase tracking-wide mb-1">
                  Endereço
                </div>
                <a
                  href="https://maps.google.com/?q=Althus+Service+Car+Ribeirao+Preto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium whitespace-pre-line hover:text-[rgb(240,26,40)] transition-colors duration-200"
                >
                  Av. Antônio Gomes da Silva Júnior, 810
                  {'\n'}Parque Industrial Lagoinha – Ribeirão Preto/SP
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#111] border border-white/5 rounded-2xl hover:border-[rgb(240,26,40)]/25 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-[rgb(240,26,40)]/10 border border-[rgb(240,26,40)]/20 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="lucide lucide-clock text-[rgb(240,26,40)]" />
              </div>
              <div>
                <div className="text-white/45 text-xs font-medium uppercase tracking-wide mb-1">
                  Horário de Atendimento
                </div>
                <p className="text-white text-sm font-medium whitespace-pre-line">
                  Segunda a Sexta-Feira
                  {'\n'}08:00 às 18:00
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden flex-1 min-h-48 border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1794341109976!2d-47.763097224739184!3d-21.185029780503587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9c16ec296137d%3A0xb36ab87bbd0205a1!2sAlthus%20Service%20Car!5e0!3m2!1spt-BR!2sbr!4v1772805693050!5m2!1spt-BR!2sbr"
                width="100%"
                height={200}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Althus Service Car"
                style={{ border: '0px', filter: 'invert(90%) hue-rotate(180deg)' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
