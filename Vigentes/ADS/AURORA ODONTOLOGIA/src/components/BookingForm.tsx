import { useState, type FormEvent } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP = '5566996456124';
const TELEFONE = '+5566996456124';
const ENDERECO = 'Avenida Tiradentes, 2164 - Centro, Rondonópolis - MT';

export default function BookingForm() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  // O site e estatico, entao nao ha para onde "enviar" o formulario. O botao
  // monta a mensagem e abre o WhatsApp da clinica, que e onde ela ja atende.
  const agendar = (e: FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá! Meu nome é ${nome.trim()} e gostaria de agendar uma avaliação ` +
      `na Aurora Odontologia. Meu telefone é ${telefone.trim()}.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section className="section booking">
      <div className="booking__card">
        <img src="/logo.png" alt="Aurora Odontologia" className="booking__logo" />

        <h2 className="booking__title">
          Agende agora
          <br />
          uma <span className="booking__title-hl">avaliação</span>
        </h2>

        <div className="booking__ornament" aria-hidden="true">
          <span />
          <b>◆</b>
          <span />
        </div>

        <p className="booking__address">
          <span className="booking__pin" aria-hidden="true">
            📍
          </span>
          {ENDERECO}
        </p>

        <form className="booking__form" onSubmit={agendar}>
          <label className="booking__field">
            <span>Nome</span>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              autoComplete="name"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

          <label className="booking__field">
            <span>Telefone</span>
            <input
              type="tel"
              name="telefone"
              placeholder="(00) 00000-0000"
              autoComplete="tel"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </label>

          <button type="submit" className="booking__submit">
            <span aria-hidden="true">🗓</span>
            Agendar
          </button>
        </form>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="booking__alt"
        >
          <WhatsAppIcon size={18} />
          Falar no WhatsApp
        </a>

        <a href={`tel:${TELEFONE}`} className="booking__alt">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
          </svg>
          Ligar agora
        </a>

        <p className="booking__tagline">
          <strong>Cuidar do seu sorriso</strong>
          <span>é iluminar o que há de melhor em você</span>
        </p>
      </div>
    </section>
  );
}
