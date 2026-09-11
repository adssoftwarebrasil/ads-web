import { useState } from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.%0A%0A` +
      `Telefone/WhatsApp: ${phone}%0A%0A` +
      `${message}`;
    window.open(`https://wa.me/556135424555?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 lg:py-32" style={{ backgroundColor: 'rgb(240, 238, 239)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ backgroundColor: 'rgba(223, 209, 162, 0.5)', color: 'rgb(80, 4, 4)' }}
          >
            Fale Conosco
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'rgb(53, 59, 59)' }}
          >
            Visite-nos ou entre em <span style={{ color: 'rgb(80, 4, 4)' }}>contato</span>
          </h2>
          <p
            className="text-base lg:text-lg max-w-xl mx-auto"
            style={{ color: 'rgb(99, 99, 97)', lineHeight: 1.7 }}
          >
            Estamos na Asa Sul, prontos para atendê-lo. Venha nos visitar ou mande uma mensagem —
            respondemos rapidinho!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="section-reveal space-y-6">
            <form
              className="p-8 rounded-2xl space-y-5"
              style={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 4px 30px' }}
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-bold mb-1" style={{ color: 'rgb(53, 59, 59)' }}>
                Envie uma mensagem
              </h3>
              <p className="text-sm" style={{ color: 'rgb(99, 99, 97)' }}>
                Preencha o formulário e você será direcionado para o nosso WhatsApp.
              </p>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: 'rgb(99, 99, 97)' }}
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Como devemos te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(240, 238, 239)',
                    color: 'rgb(53, 59, 59)',
                    border: '1.5px solid rgb(196, 194, 195)',
                    ['--tw-ring-color' as string]: 'rgb(80, 4, 4)',
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: 'rgb(99, 99, 97)' }}
                >
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(240, 238, 239)',
                    color: 'rgb(53, 59, 59)',
                    border: '1.5px solid rgb(196, 194, 195)',
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: 'rgb(99, 99, 97)' }}
                >
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Como podemos te ajudar? (produto de interesse, dúvidas, etc.)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200 focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(240, 238, 239)',
                    color: 'rgb(53, 59, 59)',
                    border: '1.5px solid rgb(196, 194, 195)',
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: 'rgb(80, 4, 4)', color: 'rgb(223, 209, 162)' }}
              >
                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
          <div className="section-reveal space-y-6">
            <div
              className="p-7 rounded-2xl space-y-5"
              style={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 4px 30px' }}
            >
              <h3 className="text-xl font-bold" style={{ color: 'rgb(53, 59, 59)' }}>
                Informações de Contato
              </h3>
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(223, 209, 162, 0.4)' }}
                >
                  <MapPin
                    width={18}
                    height={18}
                    className="lucide lucide-map-pin"
                    strokeWidth={2}
                    style={{ color: 'rgb(80, 4, 4)' }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'rgb(99, 99, 97)' }}
                  >
                    Endereço
                  </p>
                  <p
                    className="text-sm whitespace-pre-line"
                    style={{ color: 'rgb(53, 59, 59)' }}
                  >
                    {'SCL 205 15 - Asa Sul, Brasília - DF\nCEP: 70235-510'}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(223, 209, 162, 0.4)' }}
                >
                  <Phone
                    width={18}
                    height={18}
                    className="lucide lucide-phone"
                    strokeWidth={2}
                    style={{ color: 'rgb(80, 4, 4)' }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'rgb(99, 99, 97)' }}
                  >
                    Telefone
                  </p>
                  <a
                    href="tel:+556135424555"
                    className="text-sm font-medium hover:underline"
                    style={{ color: 'rgb(53, 59, 59)' }}
                  >
                    (61) 3542-4555
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(223, 209, 162, 0.4)' }}
                >
                  <Clock
                    width={18}
                    height={18}
                    className="lucide lucide-clock"
                    strokeWidth={2}
                    style={{ color: 'rgb(80, 4, 4)' }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'rgb(99, 99, 97)' }}
                  >
                    Horário de Atendimento
                  </p>
                  <p
                    className="text-sm whitespace-pre-line"
                    style={{ color: 'rgb(53, 59, 59)' }}
                  >
                    {'Segunda à Sexta: 9h às 19h\nSábado: 9h às 17h'}
                  </p>
                </div>
              </div>
              <div
                className="flex gap-4 pt-2"
                style={{ borderTop: '1px solid rgb(196, 194, 195)' }}
              >
                <a
                  href="http://wa.me/556135424555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: 'rgb(80, 4, 4)', color: 'rgb(223, 209, 162)' }}
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/opticasalute/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
                  style={{ border: '1.5px solid rgb(80, 4, 4)', color: 'rgb(80, 4, 4)' }}
                >
                  <Instagram
                    width={16}
                    height={16}
                    className="lucide lucide-instagram"
                    strokeWidth={2}
                  />
                  Instagram
                </a>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.07) 0px 4px 30px', height: '280px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8010201473126!2d-47.89720202486947!3d-15.814442584828738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2f776a987e99%3A0xa54e07e6c4438334!2s%C3%93ptica%20Salute!5e0!3m2!1spt-BR!2sbr!4v1774979702214!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Óptica Salute"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
