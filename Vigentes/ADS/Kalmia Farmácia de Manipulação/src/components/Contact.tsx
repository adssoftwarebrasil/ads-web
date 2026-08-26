import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Send } from 'lucide-react';

const subjects = [
  'Fórmula personalizada para humanos',
  'Fórmula veterinária para pets',
  'Kalmia Hair',
  'Dermocosméticos',
  'Suplementos',
  'Homeopatia e florais',
  'Orçamento',
  'Outro assunto',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${name}.`,
      subject ? `Assunto: ${subject}.` : '',
      message ? `Mensagem: ${message}` : '',
      phone ? `Meu contato: ${phone}` : '',
    ].filter(Boolean);
    const url = `http://wa.me/5516991594153?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-green uppercase tracking-widest mb-4">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Estamos prontos para <span className="text-primary">te atender</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas, solicite uma fórmula ou simplesmente diga olá. Nossa equipe responde rapidinho!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="lucide lucide-map-pin text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Av. Dr. Carlos Botelho, 2471 – Centro<br />
                    São Carlos – SP, 13560-251
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="lucide lucide-phone text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Telefone &amp; WhatsApp</p>
                  <p className="text-gray-500 text-sm">(16) 3372-8889</p>
                  <p className="text-gray-500 text-sm">(16) 99159-4153</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="lucide lucide-clock text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Horários de atendimento</p>
                  <p className="text-gray-500 text-sm">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-500 text-sm">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-8">
              <a
                href="https://www.instagram.com/kalmiafarmacia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-sm px-4 py-2.5 rounded-xl hover:shadow-lg transition-all"
              >
                <Instagram size={16} className="lucide lucide-instagram" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/farmaciakalmia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white font-medium text-sm px-4 py-2.5 rounded-xl hover:shadow-lg transition-all"
              >
                <Facebook size={16} className="lucide lucide-facebook" />
                Facebook
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.002727352133!2d-47.88909582471576!3d-22.011206479895485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b877ae18ec4f1d%3A0xca7953a1c57e247b!2zS2FsbWlhIEZhcm3DoWNpYSBkZSBNYW5pcHVsYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1774551049289!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Kalmia Farmácia"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="animate-on-scroll">
            <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Envie sua mensagem</h3>
              <p className="text-gray-500 text-sm mb-7">
                Preencha o formulário e falaremos diretamente pelo WhatsApp.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome completo *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(16) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Assunto</label>
                  <select
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm text-gray-700"
                  >
                    <option value="">Selecione...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Conte mais sobre o que você precisa..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
                >
                  <Send size={17} className="lucide lucide-send" />
                  Enviar pelo WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
