import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon.jsx";
import { company, whatsappUrl } from "../data/company.js";

export default function Contact() {
  const [readyUrl, setReadyUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem("name");
    if (nameInput.value.trim().length < 2) {
      nameInput.setCustomValidity(
        "Informe seu nome com pelo menos dois caracteres.",
      );
      nameInput.reportValidity();
      return;
    }
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      `Olá, Premium! Meu nome é ${data.get("name").trim()}.`,
      `Tenho interesse em: ${data.get("interest")}.`,
      `Tipo de projeto: ${data.get("profile")}.`,
      data.get("message").trim()
        ? `Sobre o projeto: ${data.get("message").trim()}`
        : "",
      "Gostaria de conversar com a equipe e solicitar um orçamento.",
    ]
      .filter(Boolean)
      .join("\n");
    const url = whatsappUrl(message);
    // O envio é concluído pelo visitante no WhatsApp. Não há API, armazenamento ou envio automático.
    setReadyUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      className="contact-shell"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">VAMOS CONSTRUIR ESSE PRÓXIMO PASSO?</p>
          <h2 id="contact-title">
            A mudança começa
            <br />
            com uma <span>conversa.</span>
          </h2>
          <p>
            Conte o que você tem em mente. Nossa equipe ajuda a encontrar a
            solução de energia que faz sentido para você.
          </p>
          <div className="contact-details">
            <a href={`tel:+${company.businessNumber}`}>
              <Phone size={19} />
              <span>
                <small>Ligue para a Premium</small>
                {company.businessPhone}
              </span>
              <ArrowUpRight size={18} />
            </a>
            <div>
              <Clock3 size={19} />
              <span>
                <small>Horário de atendimento</small>
                {company.hours}
              </span>
            </div>
            <div>
              <MapPin size={19} />
              <span>
                <small>Perto de você</small>Brasília e Distrito Federal
              </span>
            </div>
          </div>
          <span className="contact-signature">
            Energia solar. Mobilidade elétrica. Premium.
          </span>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          onChange={() => setReadyUrl("")}
        >
          <h3>Vamos falar sobre seu projeto?</h3>
          <p>Preencha abaixo e continue com nossa equipe no WhatsApp.</p>
          <div className="form-field">
            <label htmlFor="contact-name">
              Seu nome <span>*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Como podemos chamar você?"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-interest">
                O que você procura? <span>*</span>
              </label>
              <select
                id="contact-interest"
                name="interest"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma solução
                </option>
                <option>Energia solar</option>
                <option>Recarga veicular</option>
                <option>Energia solar + recarga</option>
                <option>Manutenção e monitoramento</option>
                <option>Consultoria energética</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="contact-profile">
                Para qual espaço? <span>*</span>
              </label>
              <select
                id="contact-profile"
                name="profile"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione seu perfil
                </option>
                <option>Condomínio</option>
                <option>Empresa ou comércio</option>
                <option>Residência</option>
                <option>Propriedade rural</option>
                <option>Usina solar</option>
                <option>Outro empreendimento</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">
              Quer contar mais? <small>(opcional)</small>
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Localização, necessidades ou dúvidas sobre o projeto..."
              rows={3}
              maxLength={1200}
            />
          </div>
          <button className="button button-dark form-submit" type="submit">
            <WhatsAppIcon size={22} /> Continuar no WhatsApp{" "}
            <ArrowUpRight size={19} />
          </button>
          <p className="form-note">
            Você revisa a mensagem e conclui o envio no WhatsApp.
            <br />
            Os campos com * são obrigatórios.
          </p>
          {readyUrl && (
            <div className="form-success" role="status">
              <CheckCircle2 size={21} />
              <p>
                Sua mensagem está pronta.{" "}
                <a href={readyUrl} target="_blank" rel="noopener noreferrer">
                  Abrir o WhatsApp para enviar.
                </a>
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
