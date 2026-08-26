const cities = ['Imperatriz', 'Araguaína', 'Colinas', 'Guaraí', 'Paraíso', 'Gurupi', 'Porangatu', 'Uruaçu', 'Goiânia'];

export default function RouteLineSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--color-green-900)] text-white" aria-labelledby="routeline-heading">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 id="routeline-heading" className="section-title text-white">
            Uma rota que conecta Maranhão, Tocantins e Goiás
          </h2>
          <p className="section-subtitle mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            A Fabbitur atende trechos importantes para quem sai de Imperatriz em direção a cidades do Tocantins e Goiânia.
          </p>
        </div>
        <div
          className="overflow-x-auto pb-4"
          role="img"
          aria-label="Linha de rota: Imperatriz até Goiânia passando por Araguaína, Colinas, Guaraí, Paraíso, Gurupi, Porangatu e Uruaçu"
        >
          <div className="flex items-center gap-0 min-w-max mx-auto w-fit">
            {cities.map((city, i) => {
              const highlight = i === 0 || i === cities.length - 1;
              return (
                <div key={city} className="flex items-center">
                  {i > 0 && <div className="w-12 h-px bg-white/30 mx-1 flex-shrink-0" />}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={
                        highlight
                          ? 'rounded-full border-2 border-white bg-[var(--color-gold-500)] w-4 h-4'
                          : 'w-3 h-3 rounded-full border-2 border-white bg-white/40'
                      }
                    />
                    <span
                      className={
                        highlight
                          ? 'text-xs font-medium whitespace-nowrap text-[var(--color-gold-500)] font-bold'
                          : 'text-xs font-medium whitespace-nowrap text-green-200'
                      }
                    >
                      {city}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="/rotas/imperatriz-goiania"
            className="btn-primary bg-[var(--color-gold-500)] text-[var(--color-green-900)] hover:bg-yellow-400 text-base px-8 py-3.5"
          >
            Consultar minha rota
          </a>
        </div>
      </div>
    </section>
  );
}
