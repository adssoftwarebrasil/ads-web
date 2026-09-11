import { useState } from 'react';
import { User, Phone, Mail, MessageSquare, Send, MapPin, Clock } from 'lucide-react';

const interests = [
  'Seguro de Vida',
  'Previdência Privada',
  'Consórcio',
  'Seguro Saúde',
  'Seguro Auto',
  'Seguro Residencial',
  'Seguro Empresarial',
  'Seguro Viagem',
  'Outro',
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Marguia! 👋\n\nMeu nome é *${form.name}*.\n📞 Telefone: ${form.phone}\n📧 E-mail: ${form.email || 'Não informado'}\n\n*Interesse:* ${form.interest || 'Não especificado'}\n\n*Mensagem:* ${form.message || 'Gostaria de receber uma cotação.'}\n\nAguardo o contato. Obrigado(a)!`;
    const encoded = encodeURIComponent(msg);
    window.open(`http://wa.me/556599183725?text=${encoded}`, '_blank');
  };

  const isValid = form.name.trim() && form.phone.trim();

  return (
    <section id="contato" className="py-24 bg-[rgb(52,82,108)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[rgb(77,175,215)] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-[rgb(77,175,215)]" />
            Contato
            <span className="w-8 h-0.5 bg-[rgb(77,175,215)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(252,255,254)] mb-4">
            Solicite sua{' '}
            <span className="text-[rgb(77,175,215)]">cotação gratuita</span>
          </h2>
          <p className="text-[rgb(252,255,254)]/70 max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato pelo WhatsApp
            com a melhor proposta para o seu perfil.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[rgb(252,255,254)]/80 text-sm font-medium mb-1.5 flex items-center gap-1.5">
                    <User size={14} /> Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[rgb(252,255,254)] placeholder-white/30 focus:outline-none focus:border-[rgb(77,175,215)] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-[rgb(252,255,254)]/80 text-sm font-medium mb-1.5 flex items-center gap-1.5">
                    <Phone size={14} /> WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(65) 9 0000-0000"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[rgb(252,255,254)] placeholder-white/30 focus:outline-none focus:border-[rgb(77,175,215)] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-[rgb(252,255,254)]/80 text-sm font-medium mb-1.5 flex items-center gap-1.5">
                  <Mail size={14} /> E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[rgb(252,255,254)] placeholder-white/30 focus:outline-none focus:border-[rgb(77,175,215)] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-[rgb(252,255,254)]/80 text-sm font-medium mb-1.5 flex items-center gap-1.5">
                  <MessageSquare size={14} /> Interesse
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[rgb(252,255,254)] focus:outline-none focus:border-[rgb(77,175,215)] transition-colors text-sm appearance-none"
                >
                  <option value="" className="bg-[rgb(52,82,108)]">Selecione um produto</option>
                  {interests.map((i) => (
                    <option key={i} value={i} className="bg-[rgb(52,82,108)]">{i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[rgb(252,255,254)]/80 text-sm font-medium mb-1.5 flex items-center gap-1.5">
                  <MessageSquare size={14} /> Mensagem
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte-nos um pouco sobre o que você precisa..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[rgb(252,255,254)] placeholder-white/30 focus:outline-none focus:border-[rgb(77,175,215)] transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="w-full flex items-center justify-center gap-2 bg-[rgb(77,175,215)] hover:bg-[rgb(61,119,189)] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>

              <p className="text-[rgb(252,255,254)]/40 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-[rgb(252,255,254)] font-bold text-lg mb-5">Informações de contato</h3>
              <div className="space-y-4">
                <a
                  href="http://wa.me/556599183725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/30 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[rgb(252,255,254)]/60 text-xs">WhatsApp</div>
                    <div className="text-[rgb(252,255,254)] font-medium text-sm group-hover:text-[rgb(77,175,215)] transition-colors">(65) 9 9918-3725</div>
                  </div>
                </a>

                <a
                  href="mailto:marguiaseg@terra.com.br"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgb(77,175,215)]/20 flex items-center justify-center shrink-0 group-hover:bg-[rgb(77,175,215)]/30 transition-colors">
                    <Mail size={18} className="text-[rgb(77,175,215)]" />
                  </div>
                  <div>
                    <div className="text-[rgb(252,255,254)]/60 text-xs">E-mail</div>
                    <div className="text-[rgb(252,255,254)] font-medium text-sm group-hover:text-[rgb(77,175,215)] transition-colors">marguiaseg@terra.com.br</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(77,175,215)]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-[rgb(77,175,215)]" />
                  </div>
                  <div>
                    <div className="text-[rgb(252,255,254)]/60 text-xs">Endereço</div>
                    <div className="text-[rgb(252,255,254)] font-medium text-sm">R. Comendador Henrique, 301</div>
                    <div className="text-[rgb(252,255,254)]/70 text-xs">Dom Aquino, Cuiabá - MT</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(77,175,215)]/20 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[rgb(77,175,215)]" />
                  </div>
                  <div>
                    <div className="text-[rgb(252,255,254)]/60 text-xs">Horário</div>
                    <div className="text-[rgb(252,255,254)] font-medium text-sm">Segunda a Sexta</div>
                    <div className="text-[rgb(252,255,254)]/70 text-xs">Atendimento presencial e online</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.7707160838663!2d-56.098033624873864!3d-15.603894485010162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db17ec8750d0d%3A0xb4956a7f218df426!2sSeguros%20e%20Cons%C3%B3rcios%20Marguia%20Corretora%20em%20Cuiab%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1774883967745!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Marguia Corretora de Seguros"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
