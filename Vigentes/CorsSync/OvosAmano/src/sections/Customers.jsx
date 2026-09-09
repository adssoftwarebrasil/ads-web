import Icon from "../components/Icon";

const customerGroups = [
  { title: "Consumidor final", text: "Ovos frescos em diferentes quantidades para a rotina da casa.", icon: "people" },
  { title: "Supermercados e empórios", text: "Variedade de tamanhos e embalagens para abastecer suas prateleiras.", icon: "layers" },
  { title: "Padarias e docerias", text: "Regularidade para receitas, produção diária e demandas de maior volume.", icon: "leaf" },
  { title: "Restaurantes e hotéis", text: "Fornecimento próximo para cozinhas que precisam de confiança e pontualidade.", icon: "truck" },
  { title: "Marmitarias e lanchonetes", text: "Formatos que acompanham o ritmo de operações enxutas ou de alta produção.", icon: "shield" },
  { title: "Revendedores", text: "Atendimento personalizado para quem leva os produtos Amano a novos clientes.", icon: "trace" },
];

export default function Customers() {
  return (
    <section className="customers section" id="atendimento">
      <div className="container customers__grid">
        <div className="customers__sticky" data-reveal>
          <p className="eyebrow eyebrow--dark">Atacado + varejo</p>
          <h2>Um atendimento do tamanho da sua necessidade.</h2>
          <p>
            Da compra de casa ao abastecimento profissional, a equipe entende o
            volume e o formato mais adequado para cada cliente.
          </p>
          <a className="text-link" href="#produtos">
            Conhecer as opções <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="customer-list" data-reveal>
          {customerGroups.map((group, index) => (
            <article className="customer-row" key={group.title}>
              <span className="customer-row__index">{String(index + 1).padStart(2, "0")}</span>
              <span className="customer-row__icon"><Icon name={group.icon} size={24} /></span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
