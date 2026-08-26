import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5548988277661';
const WHATSAPP_NUMBER = '5548988277661';

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.\n` +
      `Telefone: ${phone}\n` +
      `Mensagem: ${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-gradient-to-b from-[rgb(223,202,178)]/10 to-[rgb(254,254,252)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(102,78,56)] mb-4">Visite Nossa Loja</h2>
          <p className="text-lg md:text-xl text-[rgb(102,78,56)]/70 max-w-2xl mx-auto">
            Estamos no coração de Florianópolis, prontos para receber você com carinho e oferecer a melhor experiência
            em conforto e elegância
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="bg-[rgb(254,254,252)] p-8 rounded-2xl shadow-lg border border-[rgb(223,202,178)]/30">
              <h3 className="text-2xl font-bold text-[rgb(102,78,56)] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[rgb(223,202,178)] to-[rgb(111,86,60)]/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin width={22} height={22} className="text-[rgb(102,78,56)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(102,78,56)] mb-1">Endereço</h4>
                    <p className="text-[rgb(102,78,56)]/70">
                      R. Vidal Ramos, 201 - Centro<br />Florianópolis - SC, 88010-320
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[rgb(223,202,178)] to-[rgb(111,86,60)]/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone width={22} height={22} className="text-[rgb(102,78,56)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(102,78,56)] mb-1">WhatsApp</h4>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(102,78,56)]/70 hover:text-[rgb(111,86,60)] transition-colors"
                    >
                      (48) 98827-7661
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[rgb(223,202,178)] to-[rgb(111,86,60)]/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail width={22} height={22} className="text-[rgb(102,78,56)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(102,78,56)] mb-1">E-mail</h4>
                    <a
                      href="mailto:moonpijamass@gmail.com"
                      className="text-[rgb(102,78,56)]/70 hover:text-[rgb(111,86,60)] transition-colors"
                    >
                      moonpijamass@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[rgb(223,202,178)] to-[rgb(111,86,60)]/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock width={22} height={22} className="text-[rgb(102,78,56)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(102,78,56)] mb-1">Horário de Atendimento</h4>
                    <p className="text-[rgb(102,78,56)]/70">
                      Segunda a Sexta: 9h às 18h30<br />Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(254,254,252)] p-8 rounded-2xl shadow-lg border border-[rgb(223,202,178)]/30">
              <h3 className="text-2xl font-bold text-[rgb(102,78,56)] mb-6">Envie uma Mensagem</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-[rgb(102,78,56)] font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[rgb(223,202,178)] focus:outline-none focus:ring-2 focus:ring-[rgb(102,78,56)] focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[rgb(102,78,56)] font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[rgb(223,202,178)] focus:outline-none focus:ring-2 focus:ring-[rgb(102,78,56)] focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[rgb(102,78,56)] font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[rgb(223,202,178)] focus:outline-none focus:ring-2 focus:ring-[rgb(102,78,56)] focus:border-transparent transition-all resize-none"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(102,78,56)] text-[rgb(254,254,252)] px-6 py-4 rounded-full hover:bg-[rgb(111,86,60)] transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send width={20} height={20} />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px] lg:min-h-full">
              <iframe
                title="Mapa Moonlight Pijamas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9466218208427!2d-48.55109505116768!3d-27.59518445442039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527398dacf38e13%3A0x1e98ad4d28397755!2sMoonlight%20Pijamas!5e0!3m2!1spt-BR!2sbr!4v1768229461044!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px', minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
