import { CarFront, Clock3, Coffee, MoveVertical, Wifi, Zap } from "lucide-react";
import { hotelImages } from "../data/content";

const services = [
  { Icon: Coffee, title: "Café da manhã", text: "Incluso na hospedagem" },
  { Icon: CarFront, title: "Estacionamento", text: "Privativo e incluso" },
  { Icon: Wifi, title: "Wi-Fi", text: "Conexão para sua rotina" },
  { Icon: Clock3, title: "Recepção 24 horas", text: "Atendimento a qualquer hora" },
  { Icon: MoveVertical, title: "Elevador", text: "Acesso aos apartamentos" },
  { Icon: Zap, title: "Recarga rápida", text: "Para carros elétricos" },
];

function Essentials() {
  return (
    <section id="comodidades" className="section essentials-section">
      <div className="container essentials-grid">
        <div className="essentials-copy">
          <div className="reveal" data-reveal>
            <p className="section-eyebrow section-eyebrow--light">Praticidade em cada etapa</p>
            <h2 className="section-title section-title--light">O essencial já está esperando por você.</h2>
            <p>
              Estrutura para quem precisa ganhar tempo, descansar de verdade e encontrar facilidade desde a chegada.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ Icon, title, text }) => (
              <article className="service-item reveal" data-reveal key={title}>
                <Icon aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>

        <figure className="essentials-photo reveal" data-reveal>
          <img src={hotelImages.evCharge} alt="Estação de recarga rápida para carros elétricos" loading="lazy" />
          <figcaption><Zap size={18} /> Recarga rápida para carros elétricos</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Essentials;
