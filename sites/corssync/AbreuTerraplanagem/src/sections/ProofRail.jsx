import { Gauge, MapPinned, ShieldCheck, Wrench } from "lucide-react";

const proofs = [
  { icon: Gauge, title: "Atendimento ágil", text: "Rapidez desde o primeiro contato" },
  { icon: Wrench, title: "Manutenção especializada", text: "Resposta rápida para a operação" },
  { icon: ShieldCheck, title: "Experiência desde 1977", text: "Décadas atuando em obras" },
  { icon: MapPinned, title: "Alcance regional e nacional", text: "Base em Goiás e consultas para todo o Brasil" },
];

function ProofRail() {
  return (
    <section className="proof-rail" aria-label="Diferenciais da Abreu Terraplenagem">
      <div className="container proof-rail__grid">
        {proofs.map(({ icon: Icon, title, text }) => (
          <article key={title} className="proof-item">
            <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
            <span>
              <strong>{title}</strong>
              <small>{text}</small>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProofRail;
