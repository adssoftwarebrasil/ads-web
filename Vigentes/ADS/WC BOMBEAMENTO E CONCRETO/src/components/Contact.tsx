import { useState, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const services = [
  'Concreto Usinado',
  'Bombeamento de Concreto',
  'Concreto para Piso',
  'Concreto Sarrafeado',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${name}\n` +
      `*Telefone:* ${phone}\n` +
      `*Serviço:* ${service}\n` +
      `*Necessidade:* ${message}`;
    window.open(`https://wa.me/553199292900?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="bg-brand-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white">
            Solicite seu orçamento <span className="text-brand-orange">gratuitamente</span>
          </h2>
          <p className="mt-3 text-brand-gray max-w-xl mx-auto">
            Preencha o formulário ou nos chame direto no WhatsApp. Respondemos rapidamente!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 transition-all duration-700 opacity-100 translate-y-0">
            <form
              onSubmit={handleSubmit}
              className="bg-brand-surface rounded-2xl border border-white/6 p-7 lg:p-9 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-brand-gray-light mb-2">Nome completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-orange/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-gray-light mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(31) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-orange/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-gray-light mb-2">Serviço desejado</label>
                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-orange/60 transition-colors appearance-none"
                >
                  <option value="" className="text-brand-gray">
                    Selecione o serviço
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-gray-light mb-2">
                  Descreva sua necessidade
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Ex: Laje de 80m², obra em Betim, prazo em 2 semanas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-orange/60 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-brand-orange text-brand-dark font-bold rounded-xl hover:bg-amber-400 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5"
              >
                <Send size={17} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-brand-gray">
                Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-5 transition-all duration-700 delay-200 opacity-100 translate-y-0">
            <div className="flex gap-4 p-5 bg-brand-surface rounded-xl border border-white/6 hover:border-white/12 transition-colors group">
              <div className="w-11 h-11 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-xs text-brand-gray font-medium">Telefone / WhatsApp</p>
                <a
                  href="tel:+553199292900"
                  className="text-sm font-semibold text-brand-white hover:text-brand-orange transition-colors mt-0.5 block"
                >
                  (31) 9 9929-2900
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-brand-surface rounded-xl border border-white/6 hover:border-white/12 transition-colors group">
              <div className="w-11 h-11 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-xs text-brand-gray font-medium">E-mail</p>
                <a
                  href="mailto:wcbombeamento@gmail.com"
                  className="text-sm font-semibold text-brand-white hover:text-brand-orange transition-colors mt-0.5 block"
                >
                  wcbombeamento@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-brand-surface rounded-xl border border-white/6 hover:border-white/12 transition-colors group">
              <div className="w-11 h-11 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-xs text-brand-gray font-medium">Endereço</p>
                <a
                  href="https://maps.google.com/?q=WC+Concreto+e+Bombeamento+Betim"
                  className="text-sm font-semibold text-brand-white hover:text-brand-orange transition-colors mt-0.5 block"
                >
                  R. Tavira, 54 — São João, Betim - MG
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-brand-surface rounded-xl border border-white/6 hover:border-white/12 transition-colors group">
              <div className="w-11 h-11 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-xs text-brand-gray font-medium">Funcionamento</p>
                <p className="text-sm font-semibold text-brand-white mt-0.5">Seg–Sex: 07h às 17h</p>
              </div>
            </div>
            <a
              href="https://wa.me/553199292900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-green/10 border border-brand-green/30 text-brand-green font-bold rounded-xl hover:bg-brand-green/20 transition-all duration-200 mt-4"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chamar no WhatsApp agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
