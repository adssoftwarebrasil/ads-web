const depoimentos = [
  {
    name: 'Lucas Felipe',
    time: '2 semanas atrás',
    stars: 5,
    text: '"Muito bom atendimento. Souberam resolver rapidamente meu problema. Super indicado!"',
  },
  {
    name: 'Rosy Assumpção',
    time: 'Um comentário',
    stars: 4,
    text: '"Ótimo atendimento da equipe. Me ajudaram a reduzir quase 40% da minha parcela. Recomendo!"',
  },
  {
    name: 'Carlos Mendes',
    time: '1 mês atrás',
    stars: 5,
    text: '"Estava com o carro prestes a ser apreendido. A Aliança resolveu em menos de 2 semanas. Incrível!"',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testi-inner">
        <div className="testi-header">
          <div className="section-label">Depoimentos</div>
          <h2 className="section-title">O que nossos clientes dizem</h2>
        </div>
        <div className="testi-grid">
          {depoimentos.map((d) => (
            <div className="testi-card" key={d.name}>
              <div className="testi-stars">
                {Array(d.stars)
                  .fill(0)
                  .map((_, i) => (
                    <span className="star" key={i}>
                      ★
                    </span>
                  ))}
              </div>
              <p className="testi-text">{d.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{d.name[0]}</div>
                <div>
                  <div className="testi-name">{d.name}</div>
                  <div className="testi-time">{d.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
