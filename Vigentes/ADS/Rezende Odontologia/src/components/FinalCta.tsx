import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { formServices } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import { track } from '../lib/analytics';
import { whatsappUrl } from '../lib/site';

/** (00) 00000-0000 — máscara aplicada enquanto o usuário digita. */
function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, '($1');
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
  if (digits.length <= 10) return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}

export default function FinalCta() {
  const copy = useReveal<HTMLDivElement>();
  const started = useRef(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(formServices[0]);
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const digits = phone.replace(/\D/g, '');

    if (name.trim().length < 2) {
      setError('Informe seu nome para continuarmos.');
      return;
    }
    if (digits.length < 10) {
      setError('Informe um WhatsApp válido com DDD.');
      return;
    }

    setError('');
    const message = `Olá! Vim pelo site da Rezende Odontologia e gostaria de solicitar atendimento.\n\nNome: ${name}\nWhatsApp: ${phone}\nInteresse: ${service}`;
    track('form_submit', { section: 'cta_final', service });
    window.open(whatsappUrl(message), '_blank', 'noopener');
  };

  const onFocus = () => {
    if (started.current) return;
    started.current = true;
    track('form_start', { section: 'cta_final' });
  };

  const fieldClass =
    'h-[47px] w-full rounded-xl border border-white/25 bg-[rgba(4,17,31,.33)] px-[.8rem] text-white outline-none transition-colors focus:border-cyan-brand';
  const labelClass = 'mb-[.35rem] block text-[.69rem] font-extrabold uppercase tracking-[.08em] text-[rgba(236,253,255,.8)]';

  return (
    <section
      id="contato"
      className="blueprint relative mx-auto mb-12 min-h-[510px] w-[min(1360px,calc(100%-48px))] overflow-hidden rounded-[32px] p-[clamp(3rem,7vw,6.5rem)] text-white max-md:mb-6 max-md:min-h-0 max-md:w-[calc(100%-20px)] max-md:rounded-[22px] max-md:p-[4.1rem_16px]"
    >
      <div className="relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(330px,.8fr)] items-center gap-[clamp(2.5rem,8vw,8rem)] max-md:grid-cols-1 max-md:gap-8">
        <div ref={copy.ref} className={copy.className}>
          <p className="eyebrow !text-cyan-soft">
            REZENDE ODONTOLOGIA <span className="px-[.28rem] text-cyan-brand">/</span> IPATINGA
          </p>
          <h2 className="heading-xl mb-4 mt-[.45rem] max-w-[560px]">
            Seu próximo passo pode começar com uma conversa.
          </h2>
          <p className="max-w-[480px] text-[rgba(230,249,252,.72)]">
            Entre em contato com a Rezende Odontologia e agende sua avaliação em Ipatinga.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          onFocus={onFocus}
          noValidate
          className="grid gap-[.85rem] rounded-card border border-white/15 bg-white/10 p-[1.15rem] backdrop-blur-md"
        >
          <div>
            <label className={labelClass} htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={`${fieldClass} placeholder:text-[rgba(230,249,252,.55)]`}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="phone">
              WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(event) => setPhone(maskPhone(event.target.value))}
              className={`${fieldClass} placeholder:text-[rgba(230,249,252,.55)]`}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="service">
              Tratamento de interesse
            </label>
            <select
              id="service"
              name="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              className={fieldClass}
            >
              {formServices.map((option) => (
                <option key={option} value={option} className="text-ink">
                  {option}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p role="alert" className="m-0 text-[.76rem] font-bold text-cyan-soft">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-cyan mt-[.3rem]">
            Solicitar atendimento
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>

          <p className="m-0 text-[.72rem] leading-[1.45] text-[rgba(230,249,252,.68)]">
            Ao enviar, você será direcionado ao WhatsApp com sua mensagem preenchida.
          </p>
        </form>
      </div>
    </section>
  );
}
