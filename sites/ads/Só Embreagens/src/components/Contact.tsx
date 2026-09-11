import { useState } from 'react';
import { Send, User, Phone as PhoneIcon, MessageSquare } from 'lucide-react';

interface FormState {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  message: string;
}

const SERVICES = [
  'Remanufatura de Embreagem',
  'Recuperação de Embreagem',
  'Compra de Embreagem Nova',
  'Embreagem para Caminhão',
  'Embreagem para Trator',
  'Outro / Dúvida',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá! Vim pelo site e gostaria de um orçamento.`,
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      form.vehicle ? `*Veículo:* ${form.vehicle}` : null,
      form.service ? `*Serviço:* ${form.service}` : null,
      form.message ? `*Mensagem:* ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/5566996595500?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-200 ';

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'rgb(210, 210, 208)',
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'rgb(22, 17, 21)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 80% 50%, rgba(73,20,15,0.6) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                background: 'rgba(234,34,37,0.12)',
                color: 'rgb(234, 34, 37)',
                border: '1px solid rgba(234,34,37,0.25)',
              }}
            >
              Fale Conosco
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black mb-5 leading-tight"
              style={{ color: '#fff' }}
            >
              Solicite seu{' '}
              <span style={{ color: 'rgb(234, 34, 37)' }}>Orçamento</span>{' '}
              Grátis
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgb(153, 151, 150)' }}
            >
              Preencha o formulário e entraremos em contato via WhatsApp com a
              melhor solução para sua embreagem. Atendemos Sinop e toda a região
              do Mato Grosso e estados vizinhos.
            </p>

            <div className="space-y-4">
              {[
                { icon: User, text: 'Atendimento personalizado' },
                { icon: PhoneIcon, text: 'Retorno rápido via WhatsApp' },
                { icon: MessageSquare, text: 'Orçamento sem compromisso' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(234,34,37,0.12)' }}
                  >
                    <Icon size={15} style={{ color: 'rgb(234, 34, 37)' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'rgb(210, 210, 208)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgb(153, 151, 150)' }}>
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={inputBase}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgb(153, 151, 150)' }}>
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(66) 9 9999-9999"
                  className={inputBase}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgb(153, 151, 150)' }}>
                  Veículo
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  placeholder="Ex: Caminhão Volvo FH 460"
                  className={inputBase}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgb(153, 151, 150)' }}>
                  Serviço Desejado
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputBase + 'cursor-pointer'}
                  style={inputStyle}
                >
                  <option value="" style={{ background: 'rgb(22,17,21)' }}>
                    Selecione um serviço
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} style={{ background: 'rgb(22,17,21)' }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgb(153, 151, 150)' }}>
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Descreva o problema ou dúvida..."
                  className={inputBase + 'resize-none'}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl mt-2"
                style={{
                  background: 'rgb(234, 34, 37)',
                  color: '#fff',
                  boxShadow: '0 4px 24px rgba(234,34,37,0.3)',
                }}
              >
                <Send size={16} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
