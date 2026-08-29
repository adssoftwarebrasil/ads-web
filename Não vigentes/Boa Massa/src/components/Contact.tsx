import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_URL, PHONE_DISPLAY, EMAIL } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n` +
      `Assunto: ${form.subject}\n` +
      `Mensagem: ${form.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClass =
    'w-full px-4 py-4 rounded-lg border border-gray-300 focus:border-[rgb(255,220,2)] focus:outline-none transition-colors';

  return (
    <div className="animate-on-scroll">
      <section
        id="contato"
        className="py-16 lg:py-24"
        style={{ backgroundColor: 'rgb(250, 250, 250)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
            >
              Contato
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              Dúvidas ou Sugestões
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                    className={inputClass}
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp"
                    required
                    className={inputClass}
                    value={form.whatsapp}
                    onChange={(e) =>
                      setForm({ ...form, whatsapp: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    className={inputClass}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    required
                    className={inputClass}
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Mensagem"
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
                  style={{
                    backgroundColor: 'rgb(255, 220, 2)',
                    color: 'rgb(0, 0, 0)',
                  }}
                >
                  <WhatsAppIcon className="w-6 h-6" fill="currentColor" />
                  <span>Enviar para WhatsApp</span>
                </button>
              </form>
            </div>
            <div>
              <div className="mb-8">
                <p
                  className="text-base lg:text-lg leading-relaxed"
                  style={{ color: 'rgb(51, 51, 51)' }}
                >
                  Na Boa Massa, somos especializados na venda de argamassas
                  colantes e rejuntes para construção civil. Com a missão de
                  oferecer sempre o melhor, garantimos a qualidade dos nossos
                  produtos, que passam por rigorosos testes antes de chegarem até
                  você.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone
                    size={24}
                    color="rgb(255, 220, 2)"
                    strokeWidth={2}
                    className="flex-shrink-0 mt-1"
                  />
                  <div>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: 'rgb(0, 0, 0)' }}
                    >
                      WhatsApp
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70"
                      style={{ color: 'rgb(51, 51, 51)' }}
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail
                    size={24}
                    color="rgb(255, 220, 2)"
                    strokeWidth={2}
                    className="flex-shrink-0 mt-1"
                  />
                  <div>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: 'rgb(0, 0, 0)' }}
                    >
                      E-mail
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="hover:opacity-70"
                      style={{ color: 'rgb(51, 51, 51)' }}
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin
                    size={24}
                    color="rgb(255, 220, 2)"
                    strokeWidth={2}
                    className="flex-shrink-0 mt-1"
                  />
                  <div>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: 'rgb(0, 0, 0)' }}
                    >
                      Endereço
                    </p>
                    <p style={{ color: 'rgb(51, 51, 51)' }}>
                      Rua Emanuel Nazareno Sales do Rego, S/N
                      <br />
                      Distrito Industrial - João Pessoa/PB
                      <br />
                      CEP: 58.082-244
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mt-8 p-5 rounded-lg"
                style={{ backgroundColor: 'rgb(255, 220, 2)' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Clock
                    size={24}
                    color="rgb(0, 0, 0)"
                    strokeWidth={2}
                    className="flex-shrink-0"
                  />
                  <p
                    className="font-bold text-lg"
                    style={{ color: 'rgb(0, 0, 0)' }}
                  >
                    Horário de Atendimento
                  </p>
                </div>
                <p
                  className="text-sm lg:text-base"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  <strong>Segunda a Quinta:</strong> 07:00 às 12:00 / 13:00 às
                  17:00
                  <br />
                  <strong>Sexta:</strong> 07:00 às 12:00 / 13:00 às 16:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
