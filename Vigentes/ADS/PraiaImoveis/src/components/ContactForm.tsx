import { useState, FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = '5585989253428';

const interests = [
  'Compra de Imóvel',
  'Investimento',
  'Lançamentos',
  'Consultoria',
  'Outros',
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Me chamo *${form.name}*.\n\nTelefone: ${form.phone}\nInteresse: ${form.interest}\nMensagem: ${form.message}\n\nGostaria de mais informações sobre os imóveis da Praia Imóveis.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contato" className="bg-[#003438] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-white/30" />
              Entre em Contato
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Vamos Encontrar
              <br />
              <span className="text-white/70 font-light italic">
                Seu Imóvel Ideal
              </span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-10">
              Preencha o formulário e um de nossos especialistas entrará em contato pelo WhatsApp
              para entender o seu perfil e apresentar as melhores oportunidades de investimento.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: 'Endereço', value: 'R. Prof. José Arthur de Carvalho, 1962\nFortaleza – CE' },
                { icon: Phone, label: 'WhatsApp', value: '(85) 98925-3428' },
                { icon: Mail, label: 'E-mail', value: 'praiaimoveisce@gmail.com' },
                { icon: Clock, label: 'Horário', value: 'Segunda a Sábado, 08h às 20h' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={17} className="text-white/70" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-white/75 text-sm whitespace-pre-line">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#00484e] border border-white/10 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2" htmlFor="name">
                  Seu Nome *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Como posso te chamar?"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 focus:border-white/40 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2" htmlFor="phone">
                  WhatsApp / Telefone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="(85) 9 0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 focus:border-white/40 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                  Tenho Interesse em
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setForm({ ...form, interest: item })}
                      className={`text-xs px-4 py-2 rounded-full border transition-all ${
                        form.interest === item
                          ? 'bg-white border-white text-[#00484e] font-bold'
                          : 'border-white/20 text-white/55 hover:border-white/40 hover:text-white/75'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2" htmlFor="message">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Descreva o imóvel que você procura, região, orçamento..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 focus:border-white/40 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 hover:scale-[1.02] text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar pelo WhatsApp
                <Send size={15} />
              </button>

              <p className="text-white/30 text-xs text-center">
                Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
