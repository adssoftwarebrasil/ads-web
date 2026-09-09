import { ArrowUpRight, Clock3, MapPin, Phone, Plus } from "lucide-react";
import { business, mapsUrl } from "../data/business";
import WhatsAppLink from "../components/WhatsAppLink";

const questions = [
  {
    question: "Qual película é indicada para o meu carro?",
    answer:
      "A escolha depende do seu veículo e do que você procura em conforto, tonalidade e acabamento. Trabalhamos com 3M e Across, incluindo opções de cerâmica, carbono e linha profissional. Fale com a equipe para conhecer as linhas disponíveis.",
  },
  {
    question: "A M1 é aplicadora autorizada 3M?",
    answer:
      "Sim. A M1 Películas é aplicadora autorizada 3M e também trabalha com a marca Across. Você pode conhecer as opções pessoalmente em nossa loja na Pedra Branca.",
  },
  {
    question: "Vocês atendem carros elétricos?",
    answer:
      "Sim. Temos atenção especial ao cuidado e à proteção dos carros elétricos durante a instalação. Informe o modelo do seu veículo no atendimento para conversarmos sobre o serviço.",
  },
  {
    question: "Como solicitar um orçamento e agendar?",
    answer:
      "É só chamar no WhatsApp e informar o modelo e o ano do carro, além do tipo de película que você procura. Nossa equipe orienta sua escolha e confirma valores, prazo e disponibilidade para agendamento.",
  },
];

export default function Contact() {
  return (
    <>
      <section
        className="contact section-space"
        id="contato"
        aria-labelledby="contact-title"
      >
        <div className="container contact-grid">
          <div className="contact-invitation">
            <p className="eyebrow">
              <span /> VAMOS CUIDAR DO SEU CARRO?
            </p>
            <h2 id="contact-title">
              O PRÓXIMO CARRO
              <br />
              POR AQUI PODE
              <br />
              SER O <em>SEU.</em>
            </h2>
            <p>
              Conte o que você procura. A gente ajuda a escolher a película e
              combina o melhor momento para receber você.
            </p>
            <WhatsAppLink className="button-white">
              Conversar no WhatsApp
            </WhatsAppLink>
            <a className="contact-phone" href={`tel:+${business.phone}`}>
              {business.displayPhone}{" "}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <div className="invitation-line" aria-hidden="true" />
          </div>
          <div className="visit-info">
            <p className="eyebrow">
              <span /> ESPERAMOS VOCÊ NA PEDRA BRANCA
            </p>
            <h3>
              PERTINHO DE VOCÊ.
              <br />
              PRONTO PARA RECEBER.
            </h3>
            <div className="visit-detail">
              <MapPin size={22} aria-hidden="true" />
              <div>
                <h4>Venha conhecer nossa loja</h4>
                <address>
                  {business.address}
                  <br />
                  {business.neighborhood}
                  <br />
                  {business.city} · CEP {business.postalCode}
                </address>
                <a
                  className="text-link"
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Como chegar <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="visit-detail">
              <Clock3 size={22} aria-hidden="true" />
              <div>
                <h4>Horários de atendimento</h4>
                <p>
                  Segunda a sexta <strong>8h às 18h</strong>
                  <br />
                  Sábado <strong>8h às 12h</strong>
                </p>
              </div>
            </div>
            <div className="visit-detail">
              <Phone size={21} aria-hidden="true" />
              <div>
                <h4>Fale direto com a M1</h4>
                <a href={`tel:+${business.phone}`}>{business.displayPhone}</a>
              </div>
            </div>
            <div className="neighborhoods">
              <span>PEDRA BRANCA</span>
              <span>PAGANI</span>
              <span>ELDORADO</span>
              <span>PALHOÇA</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="faq section-light section-space"
        aria-labelledby="faq-title"
      >
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">
              <span /> ANTES DE VIR
            </p>
            <h2 id="faq-title">
              PODE PERGUNTAR.
              <br />
              <span className="muted-heading">A GENTE EXPLICA.</span>
            </h2>
            <p>Escolher bem começa com uma boa conversa.</p>
          </div>
          <div className="faq-list">
            {questions.map((item) => (
              <details key={item.question} name="m1-faq">
                <summary>
                  {item.question}
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
