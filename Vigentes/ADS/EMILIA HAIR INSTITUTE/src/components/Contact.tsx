import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const serviceOptions = [
  'Corte Feminino',
  'Corte Masculino',
  'Mechas / Reflexos',
  'Morena Iluminada',
  'Alisamento',
  'Selagem Capilar',
  'Botox Capilar',
  'Tratamento Capilar',
  'Estética Facial',
  'Estética Corporal',
  'Designer de Sobrancelhas',
  'Manicure e Pedicure',
  'Coloração',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de agendar um horário na Emilia Hair & Care.`;
    if (form.name) text += `\n\nNome: ${form.name}`;
    if (form.phone) text += `\nWhatsApp/Telefone: ${form.phone}`;
    if (form.service) text += `\nServiço desejado: ${form.service}`;
    if (form.message) text += `\nMensagem: ${form.message}`;
    window.open(`https://wa.me/556599811065?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold"></div>
            <span className="text-gold font-sans text-xs font-medium uppercase tracking-widest">Entre em Contato</span>
            <div className="h-px w-10 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone font-light mb-4">
            Agende Seu <span className="italic text-gold">Horário</span>
          </h2>
          <p className="font-sans text-stone-light text-sm max-w-md mx-auto leading-relaxed">
            Entre em contato pelo formulário abaixo ou diretamente pelo WhatsApp. Respondemos com agilidade!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 h-full">
            <form className="flex flex-col h-full gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-semibold text-stone uppercase tracking-wide mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Como podemos te chamar?"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-cream hover:border-gold/50 focus:border-gold focus:ring-2 focus:ring-gold/20 rounded-xl px-4 py-3.5 font-sans text-sm text-stone placeholder-tan outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold text-stone uppercase tracking-wide mb-2">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(65) 9 9999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-cream hover:border-gold/50 focus:border-gold focus:ring-2 focus:ring-gold/20 rounded-xl px-4 py-3.5 font-sans text-sm text-stone placeholder-tan outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-stone uppercase tracking-wide mb-2">
                  Serviço Desejado
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-white border border-cream hover:border-gold/50 focus:border-gold focus:ring-2 focus:ring-gold/20 rounded-xl px-4 py-3.5 font-sans text-sm text-stone placeholder-tan outline-none transition-all duration-300"
                >
                  <option value="">Selecione um serviço...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="block font-sans text-xs font-semibold text-stone uppercase tracking-wide mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  placeholder="Descreva sua necessidade, dúvidas ou preferências..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-cream hover:border-gold/50 focus:border-gold focus:ring-2 focus:ring-gold/20 rounded-xl px-4 py-3.5 font-sans text-sm text-stone placeholder-tan outline-none transition-all duration-300 resize-none flex-1 min-h-[120px]"
                ></textarea>
              </div>
              <div className="pt-2 mt-auto">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-white font-sans font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm uppercase tracking-wide"
                >
                  <Send className="lucide lucide-send" width={18} height={18} />
                  Enviar pelo WhatsApp
                </button>
                <p className="font-sans text-xs text-stone-light text-center mt-3">
                  Ao clicar, você será redirecionada para o WhatsApp com os dados preenchidos.
                </p>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-stone rounded-2xl p-8 text-white shadow-lg">
              <h3 className="font-serif text-2xl font-light mb-8">
                Informações de <span className="italic text-gold">Contato</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Phone className="lucide lucide-phone text-gold" width={18} height={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider mb-0.5 font-medium">
                      Telefone / WhatsApp
                    </p>
                    <a
                      href="tel:+556599811065"
                      className="font-sans text-sm text-white/95 hover:text-gold transition-colors font-medium"
                    >
                      (65) 9 9981-1065
                    </a>
                    <a
                      href="tel:+556536221065"
                      className="font-sans text-sm text-white/95 hover:text-gold transition-colors font-medium"
                    >
                      (65) 3622-1065
                    </a>
                    <a
                      href="tel:+556533210975"
                      className="font-sans text-sm text-white/95 hover:text-gold transition-colors font-medium"
                    >
                      (65) 3321-0975
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <MapPin className="lucide lucide-map-pin text-gold" width={18} height={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider mb-0.5 font-medium">
                      Endereço
                    </p>
                    <a
                      href="https://maps.google.com/?q=Emilia+Hair+Care+Cuiabá"
                      className="font-sans text-sm text-white/95 hover:text-gold transition-colors font-medium"
                    >
                      R. Safira, 35 - Baú, Cuiabá - MT
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Clock className="lucide lucide-clock text-gold" width={18} height={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider mb-0.5 font-medium">
                      Horário de Funcionamento
                    </p>
                    <p className="font-sans text-sm text-white/95 font-medium">Terça a Sábado: 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gold rounded-2xl p-8 text-white shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <WhatsAppIcon className="w-6 h-6" />
                <span className="font-sans font-semibold text-base">Atendimento Rápido</span>
              </div>
              <p className="font-sans text-sm text-white/90 leading-relaxed">
                Prefere agendar pelo WhatsApp? Fale diretamente com a equipe e marque seu horário agora mesmo!
              </p>
              <a
                href="https://wa.me/556599811065"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-full sm:w-auto mt-6 bg-white text-gold font-sans font-bold text-sm px-8 py-3.5 rounded-full hover:bg-stone hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
