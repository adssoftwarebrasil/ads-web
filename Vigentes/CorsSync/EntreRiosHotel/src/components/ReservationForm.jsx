import { useState } from "react";
import { ArrowUpRight, CalendarDays, UsersRound } from "lucide-react";
import { hotel, whatsappUrl } from "../data/hotel";

function localDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function nextDay(value) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + 1);
  return localDate(date);
}
function formatDate(value) {
  return value.split("-").reverse().join("/");
}

export default function ReservationForm() {
  const today = localDate(new Date());
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [status, setStatus] = useState("");
  const message = `Olá! Gostaria de consultar a disponibilidade no Entre Rios Hotel.\nCheck-in: ${formatDate(arrival)}\nCheck-out: ${formatDate(departure)}\nHóspedes: ${guests}\nPodem me informar as opções e os valores?`;

  function submit(event) {
    if (arrival < today || departure <= arrival) {
      event.preventDefault();
      setStatus("Confira as datas: a saída deve ser depois da chegada.");
      return;
    }
    setStatus(
      "Continue no WhatsApp para consultar valores e confirmar a disponibilidade com nossa equipe.",
    );
  }

  return (
    <div id="reservas" className="reservation-wrap container">
      <form
        className="reservation-form"
        action={`https://wa.me/${hotel.whatsapp}`}
        method="get"
        target="_blank"
        rel="noopener noreferrer"
        onSubmit={submit}
      >
        <div className="reservation-intro">
          <span className="eyebrow">SEU PRÓXIMO DESCANSO</span>
          <h2>Vamos receber você?</h2>
        </div>
        <label className="reservation-field">
          <span>
            <CalendarDays size={15} aria-hidden="true" /> CHEGADA
          </span>
          <input
            aria-label="Data de chegada"
            type="date"
            value={arrival}
            min={today}
            required
            onChange={(event) => {
              setArrival(event.target.value);
              if (departure && departure <= event.target.value)
                setDeparture("");
              setStatus("");
            }}
          />
        </label>
        <label className="reservation-field">
          <span>
            <CalendarDays size={15} aria-hidden="true" /> SAÍDA
          </span>
          <input
            aria-label="Data de saída"
            type="date"
            value={departure}
            min={arrival ? nextDay(arrival) : nextDay(today)}
            required
            onChange={(event) => {
              setDeparture(event.target.value);
              setStatus("");
            }}
          />
        </label>
        <label className="reservation-field guest-field">
          <span>
            <UsersRound size={15} aria-hidden="true" /> HÓSPEDES
          </span>
          <select
            aria-label="Número de hóspedes"
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
          >
            {["1", "2", "3", "4", "5", "6 ou mais"].map((n) => (
              <option key={n} value={n}>
                {n} {n === "1" ? "hóspede" : "hóspedes"}
              </option>
            ))}
          </select>
        </label>
        <button className="button button-dark reservation-submit" type="submit">
          Consultar estadia <ArrowUpRight size={18} aria-hidden="true" />
        </button>
        <input type="hidden" name="text" value={message} />
      </form>
      <p className="reservation-note" aria-live="polite">
        {status ||
          "Sua consulta vai direto para nossa equipe no WhatsApp. Simples, pessoal e sem intermediários."}
        {status && arrival >= today && departure > arrival && (
          <>
            {" "}
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir conversa
            </a>
          </>
        )}
      </p>
    </div>
  );
}
