import { useState } from 'react';
import { MapPin, Clock, Phone, Send } from 'lucide-react';

const INFO_ITEMS = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Av. dos Tarumãs, 3756', 'Jardim Nações, Sinop - MT', 'CEP: 78556-402'],
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    lines: ['Segunda a Sexta', '07h00 às 11h00', '13h00 às 18h00'],
  },
  {
    icon: Phone,
    title: 'Fale Conosco',
    lines: ['(66) 99232-7182', 'lordcarautocenter@gmail.com'],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Me chamo *${form.name}*. Meu telefone é *${form.phone}*.%0A%0AServiço desejado: *${form.service}*%0A%0AMensagem: ${form.message}`;
    window.open(`http://wa.me/556692327182?text=${text}`, '_blank');
  };

  const inputClass =
    'w-full bg-brand-softgray border-2 border-transparent rounded-xl px-4 py-3 text-brand-dark placeholder-brand-midgray/60 text-sm font-medium focus:outline-none focus:border-brand-yellow transition-all duration-200';

  return (
    <section id="contato" className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-yellow/20 text-brand-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            Agende seu Serviço{' '}
            <span className="text-brand-midgray">Agora</span>
          </h2>
          <p className="text-brand-midgray text-lg max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato via WhatsApp rapidamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            {INFO_ITEMS.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-brand-yellow/40 transition-colors duration-200"
              >
                <div className="w-11 h-11 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-dark" />
                </div>
                <div>
                  <p className="text-brand-dark font-bold text-sm mb-1">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-brand-midgray text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.6471917798654!2d-55.53342442494177!3d-11.8599508883625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77f27d9fcb001%3A0xf04308122992d704!2sLord%20Car%20Auto%20Center!5e0!3m2!1spt-BR!2sbr!4v1774460985494!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Lord Car Auto Center"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-brand-dark mb-6">
              Solicite um Orçamento Gratuito
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ex: João Silva"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(66) 99999-9999"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                  Serviço Desejado *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Selecione um serviço...</option>
                  <option>Mecânica Geral</option>
                  <option>Alinhamento e Balanceamento</option>
                  <option>Injeção Eletrônica</option>
                  <option>Troca de Óleo de Motor</option>
                  <option>Troca de Óleo de Câmbio Automático</option>
                  <option>Ar-Condicionado Automotivo</option>
                  <option>Motor de Partida / Alternador</option>
                  <option>Suspensão</option>
                  <option>Freios</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                  Descreva o Problema (opcional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva brevemente o problema ou dúvida que está tendo com seu veículo..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-brand-yellow text-brand-dark font-bold py-4 px-6 rounded-xl hover:bg-yellow-300 transition-all duration-200 hover:shadow-lg hover:shadow-brand-yellow/30 hover:-translate-y-0.5 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Enviar via WhatsApp
              </button>

              <p className="text-center text-brand-midgray text-xs">
                Ao clicar, você será redirecionado para o nosso WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
