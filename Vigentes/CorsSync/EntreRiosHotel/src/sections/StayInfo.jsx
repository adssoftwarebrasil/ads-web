import { Plus, ArrowRight, Clock3 } from "lucide-react";
import ReservationLink from "../components/ReservationLink";

const questions = [
  [
    "Quais são os horários de entrada e saída?",
    "O check-in é a partir das 14h e o check-out é até as 12h. Se precisar de outro horário, consulte nossa equipe antes da sua chegada.",
  ],
  [
    "Posso me hospedar com meu pet?",
    "Sim, pets são bem-vindos no Entre Rios Hotel. Avise nossa equipe na consulta da reserva para saber as condições de hospedagem.",
  ],
  [
    "O hotel tem estacionamento e lavanderia?",
    "Sim. Contamos com estacionamento e serviço de lavanderia. Fale com a recepção para consultar os detalhes e as condições de uso.",
  ],
  [
    "Como consultar valores e fazer minha reserva?",
    "Fale diretamente com nossa equipe pelo WhatsApp. Informe as datas de entrada e saída e o número de hóspedes para consultar as acomodações, os valores e a disponibilidade. A reserva é confirmada pela equipe durante o atendimento.",
  ],
];

export default function StayInfo() {
  return (
    <section className="stay-info section" aria-labelledby="stay-title">
      <div className="container stay-grid">
        <div className="stay-copy">
          <p className="eyebrow">ANTES DE FAZER AS MALAS</p>
          <h2 id="stay-title">
            Tudo pronto para
            <br />
            <em>uma boa estadia.</em>
          </h2>
          <div className="stay-times">
            <Clock3 size={23} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <span>CHECK-IN</span>
              <strong>14h</strong>
            </div>
            <ArrowRight size={20} aria-hidden="true" />
            <div>
              <span>CHECK-OUT</span>
              <strong>12h</strong>
            </div>
          </div>
          <p>
            Ficou com alguma dúvida? Nossa equipe está aqui para ajudar você.
          </p>
          <ReservationLink className="button-outline">
            Converse com a gente
          </ReservationLink>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer], i) => (
            <details key={question} name="hotel-questions">
              <summary>
                <span className="faq-number">0{i + 1}</span>
                <h3>{question}</h3>
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
