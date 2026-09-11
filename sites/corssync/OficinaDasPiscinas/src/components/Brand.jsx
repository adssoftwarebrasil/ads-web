import { Waves } from "lucide-react";

export function Brand({ light = false }) {
  return (
    <a
      className={`brand${light ? " brand--light" : ""}`}
      href="#inicio"
      aria-label="Oficina das Piscinas — voltar ao início"
    >
      <span className="brand__symbol" aria-hidden="true">
        <Waves size={25} strokeWidth={2.2} />
      </span>
      <span className="brand__name">
        <strong>Oficina</strong>
        <span>das Piscinas</span>
      </span>
    </a>
  );
}
