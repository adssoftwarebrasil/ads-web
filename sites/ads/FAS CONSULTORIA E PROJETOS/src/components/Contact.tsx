import { useState } from 'react';
import { Phone, Clock, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    iconCls: 'lucide lucide-phone',
    label: 'WhatsApp / Telefone',
    value: '(65) 9 9226-4219',
    href: 'http://wa.me/556592264219',
  },
  {
    icon: Clock,
    iconCls: 'lucide lucide-clock',
    label: 'Horário de Atendimento',
    value: '24 horas por dia, 7 dias por semana',
  },
  {
    icon: MapPin,
    iconCls: 'lucide lucide-map-pin',
    label: 'Endereço',
    value: 'Av. Brasil, 31 - Tancredo Neves, Cuiabá - MT',
    href: 'https://maps.google.com/?q=FAS+Rastreamento+Veicular+Cuiabá',
  },
  {
    icon: Instagram,
    iconCls: 'lucide lucide-instagram',
    label: 'Instagram',
    value: '@fasrastreamento',
    href: 'https://www.instagram.com/fasrastreamento/',
  },
  {
    icon: Facebook,
    iconCls: 'lucide lucide-facebook',
    label: 'Facebook',
    value: 'FAS Rastreamento Veicular',
    href: 'https://www.facebook.com/fasrastreamento',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `Olá! Meu nome é ${form.name}.`;
    if (form.service) msg += `\nServiço de interesse: ${form.service}.`;
    if (form.phone) msg += `\nMeu contato: ${form.phone}.`;
    if (form.message) msg += `\n${form.message}`;
    window.open(`http://wa.me/556592264219?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(27, 53, 74)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 intersection-animate">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: 'rgba(70, 96, 117, 0.4)',
              color: 'rgb(203, 219, 233)',
              border: '1px solid rgba(112, 136, 160, 0.3)',
            }}
          >
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Fale com Nossa <span style={{ color: 'rgb(203, 219, 233)' }}>Equipe</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgb(112, 136, 160)' }}>
            Tire suas dúvidas ou solicite um orçamento. Respondemos em minutos!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="intersection-animate-left space-y-6">
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'rgba(5, 31, 52, 0.6)', border: '1px solid rgba(70, 96, 117, 0.4)' }}
            >
              <h3 className="text-lg font-bold text-white mb-5">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'rgb(70, 96, 117)' }}
                      >
                        <span style={{ color: 'rgb(203, 219, 233)' }}>
                          <Icon className={c.iconCls} width={18} height={18} />
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-0.5" style={{ color: 'rgb(112, 136, 160)' }}>
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium transition-colors duration-200"
                            style={{ color: 'rgb(203, 219, 233)' }}
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium" style={{ color: 'rgb(203, 219, 233)' }}>
                            {c.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(70, 96, 117, 0.4)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.4640649696007!2d-56.05655262487442!3d-15.566835285042176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1a47f0b2331%3A0xb21bf50c3dc0b2c6!2sFAS%20Rastreamento%20Veicular!5e0!3m2!1spt-BR!2sbr!4v1771610176271!5m2!1spt-BR!2sbr"
                width="100%"
                height="220"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FAS Rastreamento Veicular - Localização"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
          </div>
          <div className="intersection-animate-right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-7"
              style={{ backgroundColor: 'rgba(5, 31, 52, 0.6)', border: '1px solid rgba(70, 96, 117, 0.4)' }}
            >
              <h3 className="text-lg font-bold text-white mb-6">Solicite um Orçamento</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgb(203, 219, 233)' }}>
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Como posso te chamar?"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 border"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ backgroundColor: 'rgba(27, 53, 74, 0.8)', borderColor: 'rgba(70, 96, 117, 0.5)', color: 'white' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgb(203, 219, 233)' }}>
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(65) 9 0000-0000"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 border"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{ backgroundColor: 'rgba(27, 53, 74, 0.8)', borderColor: 'rgba(70, 96, 117, 0.5)', color: 'white' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgb(203, 219, 233)' }}>
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 border"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{ backgroundColor: 'rgba(27, 53, 74, 0.8)', borderColor: 'rgba(70, 96, 117, 0.5)', color: 'rgb(112, 136, 160)' }}
                  >
                    <option value="" style={{ color: 'rgb(112, 136, 160)', backgroundColor: 'rgb(27, 53, 74)' }}>
                      Selecione um serviço
                    </option>
                    <option value="Rastreamento Veicular" style={{ color: 'white', backgroundColor: 'rgb(27, 53, 74)' }}>
                      Rastreamento Veicular
                    </option>
                    <option value="Proteção Veicular" style={{ color: 'white', backgroundColor: 'rgb(27, 53, 74)' }}>
                      Proteção Veicular
                    </option>
                    <option value="Gestão de Frotas" style={{ color: 'white', backgroundColor: 'rgb(27, 53, 74)' }}>
                      Gestão de Frotas
                    </option>
                    <option value="Câmera Veicular" style={{ color: 'white', backgroundColor: 'rgb(27, 53, 74)' }}>
                      Câmera Veicular
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgb(203, 219, 233)' }}>
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Descreva sua necessidade..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 border"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ backgroundColor: 'rgba(27, 53, 74, 0.8)', borderColor: 'rgba(70, 96, 117, 0.5)', color: 'white', resize: 'none' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 20px' }}
                >
                  <Send className="lucide lucide-send" width={16} height={16} />
                  Enviar via WhatsApp
                </button>
                <p className="text-xs text-center" style={{ color: 'rgb(112, 136, 160)' }}>
                  Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
