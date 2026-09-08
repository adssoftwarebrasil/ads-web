import { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { supabase } from '../lib/supabase';

const emptyForm = { name: '', email: '', phone: '', company: '', message: '' };

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Av. Jorge Abraão, 926', 'Jardim Liberdade', 'Sertãozinho - SP, 14160-020'],
  },
  { icon: Phone, title: 'Telefone', lines: ['(16) 99751-6375'] },
  { icon: Mail, title: 'E-mail', lines: ['contato@veranita.com.br'] },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    lines: ['Segunda a Sexta', '07h30 às 11h30', '13h00 às 17h30'],
  },
];

function Field({
  label,
  placeholder,
  value,
  onChange,
  required,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-brand-brown uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-brand-beige/60 text-brand-brown text-sm font-medium placeholder:text-brand-brown/45 focus:outline-none focus:ring-2 focus:ring-brand-gold border border-transparent focus:border-brand-gold transition"
      />
    </div>
  );
}

export default function Contato() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange =
    (field: keyof typeof emptyForm) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
      });
      if (error) throw error;

      const text = `Olá, sou ${form.name}.%0A%0A${form.message}%0A%0AContato: ${form.phone} | ${
        form.email
      }${form.company ? ` | Empresa: ${form.company}` : ''}`;
      window.open(`https://wa.me/5516997516375?text=${text}`, '_blank');
      setStatus('success');
      setForm(emptyForm);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage(
        'Não foi possível enviar a mensagem agora. Tente novamente em instantes.'
      );
    }
  };

  return (
    <>
      <section className="bg-brand-gold text-brand-brown relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold/85 to-brand-gold/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-red text-white text-xs font-bold tracking-[0.25em] uppercase mb-6">
            Fale com a Veranita
          </span>
          <h1 className="font-heavy text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Estamos prontos
            <br />
            para <span className="text-brand-red">atender você</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-book text-brand-brown/85 leading-relaxed">
            Fale conosco e descubra como podemos ajudar o seu negócio com a tradição e qualidade
            Veranita.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <SectionTitle align="left" eyebrow="Informações" title={<>Informações de contato</>} />
            <div className="space-y-5 mt-8">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-brand-brown" />
                  </div>
                  <div>
                    <p className="font-extrabold text-brand-brown text-sm tracking-wide uppercase mb-1">
                      {item.title}
                    </p>
                    {item.lines.map((line, index) => (
                      <p
                        key={index}
                        className="text-sm font-book text-brand-brown/80 leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/5516997516375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-gold text-brand-brown font-bold text-sm uppercase tracking-wider hover:bg-brand-red hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
              <h3 className="font-heavy text-2xl md:text-3xl text-brand-brown mb-2">
                Envie sua mensagem
              </h3>
              <p className="text-sm font-book text-brand-brown/70 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
              </p>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-brand-gold/20 border border-brand-gold flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-brown shrink-0" />
                  <p className="text-sm font-medium text-brand-brown">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </motion.div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-brand-red/10 border border-brand-red text-brand-red text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    label="Nome Completo *"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                  <Field
                    label="E-mail *"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                  />
                  <Field
                    label="Telefone *"
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    required
                  />
                  <Field
                    label="Empresa"
                    placeholder="Nome da sua empresa"
                    value={form.company}
                    onChange={handleChange('company')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-brown uppercase tracking-wider mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-4 py-3 rounded-xl bg-brand-beige/60 text-brand-brown text-sm font-medium placeholder:text-brand-brown/45 focus:outline-none focus:ring-2 focus:ring-brand-gold border border-transparent focus:border-brand-gold transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-brown text-brand-gold font-bold text-sm uppercase tracking-wider hover:bg-brand-brown-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Enviar via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="rounded-3xl overflow-hidden shadow-card aspect-[16/9] md:aspect-[21/9] bg-brand-brown">
            <iframe
              title="Localização Veranita"
              src="https://www.google.com/maps?q=Av.+Jorge+Abra%C3%A3o+926+Sert%C3%A3ozinho+SP&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
