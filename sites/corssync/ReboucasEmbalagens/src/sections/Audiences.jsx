import { Home, ShoppingBasket, Store, UtensilsCrossed } from "lucide-react";
import Reveal from "../components/Reveal";

const audiences = [
  {
    icon: UtensilsCrossed,
    title: "Para servir",
    description: "Copos, potes, pratos, talheres e marmitex para alimentos e bebidas.",
  },
  {
    icon: ShoppingBasket,
    title: "Para entregar",
    description: "Sacolas, sacos de papel, caixas para pizza e soluções para delivery.",
  },
  {
    icon: Store,
    title: "Para o comércio",
    description: "Variedade para compras no varejo e no atacado, conforme sua necessidade.",
  },
  {
    icon: Home,
    title: "Para a rotina",
    description: "Filme PVC, sacos plásticos e produtos para cozinha e limpeza.",
  },
];

function Audiences() {
  return (
    <section className="audiences" aria-label="Soluções para diferentes rotinas">
      <div className="container audiences__grid">
        {audiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal className="audience-card" delay={index * 70} key={item.title}>
              <span className="audience-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Audiences;
