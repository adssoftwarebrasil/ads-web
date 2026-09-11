import { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';

const serviceOptions = [
  'Câmeras CFTV',
  'Alarmes',
  'Portões Eletrônicos',
  'Interfones',
  'Fechaduras Digitais',
  'Cerca Elétrica',
  'Concertina',
  'Monitoramento',
  'Manutenção',
  'Outros',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (service) text += `\nServiço de interesse: ${service}.`;
    if (phone) text += `\nTelefone: ${phone}.`;
    if (message) text += `\nMensagem: ${message}`;
    const url = `https://wa.me/553799961702?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge bg-brand-50 text-brand mb-4">Fale Conosco</div>
          <h2 className="section-title mb-4">
            Solicite um <span className="text-gradient">Orçamento Gratuito</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="section-subtitle max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato rapidamente pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-brand rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="lucide lucide-phone h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">WhatsApp / Telefone</div>
                    <a
                      href="https://wa.me/553799961702"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      (37) 99996-1702
                    </a>
                    <br />
                    <a
                      href="https://wa.me/5537999714135"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      (37) 99971-4135
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Endereço</div>
                    <div className="text-white/80 text-sm">
                      R. Nova Serrana - Centro
                      <br />
                      Pará de Minas - MG, 35660-418
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="lucide lucide-clock h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Horário de Atendimento</div>
                    <div className="text-white/80 text-sm">
                      Segunda a Sexta: 08h às 18h
                      <br />
                      Sábado: 08h às 12h
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Instagram className="lucide lucide-instagram h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Instagram</div>
                    <a
                      href="https://www.instagram.com/assistecparademinas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      @assistecparademinas
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-card h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.582501078058!2d-44.6110640247747!3d-19.85761068151457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73b007398d5bb%3A0xb80b466728b84f52!2sSistema%20de%20Seguran%C3%A7a%20Assistec%20-%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1773329842346!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Assistec"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card border border-neutral-200">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Enviar Mensagem</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Seu Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João Silva"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Telefone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(37) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Serviço de Interesse</label>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm appearance-none bg-white"
                >
                  <option value="">Selecione um serviço...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Sua Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva sua necessidade..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-4 text-base rounded-xl justify-center">
                <Send className="lucide lucide-send h-5 w-5" />
                Enviar via WhatsApp
              </button>
              <p className="text-xs text-neutral-500 text-center mt-3">
                Você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
