import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '../data';

const INFO = [
  { icon: Phone, label: 'TELEFONE / WHATSAPP', value: PHONE_DISPLAY, href: PHONE_TEL },
  { icon: Mail, label: 'E-MAIL', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: 'ENDEREÇO', value: ADDRESS },
  { icon: Clock, label: 'HORÁRIO', value: HOURS },
];

export default function Contact() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.nome}.%0A%0AE-mail: ${form.email}%0AWhatsApp: ${form.telefone}%0A%0A${form.mensagem}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5566996677499&text=${text}`,
      '_blank',
    );
  }

  return (
    <section id="contato" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
              CONTATO
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
              Vamos conversar sobre o{' '}
              <span className="text-gold">seu próximo carro</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Nossa equipe está pronta para te atender. Fale conosco pelos
              canais abaixo ou venha nos visitar em Sinop/MT.
            </p>

            <div className="mt-10 space-y-6">
              {INFO.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-wider text-gold">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm text-white/80">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-card p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                required
                placeholder="Seu nome"
                name="nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Seu e-mail"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
              />
              <input
                inputMode="tel"
                placeholder="WhatsApp"
                name="telefone"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
              />
              <textarea
                name="mensagem"
                required
                rows={5}
                placeholder="Como podemos ajudar?"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-gold px-6 py-3.5 text-sm font-bold tracking-wider text-black hover:bg-gold-light transition-colors"
              >
                ENVIAR MENSAGEM
              </button>
              <p className="text-center text-xs text-white/50">
                Ao enviar, você será redirecionado para o WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
