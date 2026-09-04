import { Link, Navigate, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SpecialistBand from '../components/SpecialistBand';
import { ArrowRight, Check, MapPin, Package, WhatsApp } from '../components/icons';
import { categorias, contato, getCategoria, whats } from '../data/site';
import useTitulo from '../useTitulo';

export default function Category() {
  const { slug } = useParams();
  const categoria = getCategoria(slug);

  useTitulo(
    categoria ? `${categoria.nome} — CAMPMED Campinas` : undefined,
    categoria ? categoria.descricao : undefined,
  );

  if (!categoria) return <Navigate to="/catalogo" replace />;

  const outras = categorias.filter((c) => c.slug !== categoria.slug).slice(0, 4);

  return (
    <>
      {/* ---------- Abertura da categoria ---------- */}
      <header className="cat-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Você está aqui">
            <Link to="/">Início</Link>
            <span aria-hidden="true">/</span>
            <Link to="/catalogo">Catálogo</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{categoria.nome}</span>
          </nav>

          <div className="cat-hero-grid">
            <div>
              <h1>{categoria.nome}</h1>
              <p className="lead">{categoria.descricao}</p>

              <dl className="cat-hero-badge">
                <dt>Indicado para</dt>
                <dd>{categoria.indicadoPara}</dd>
              </dl>

              <div className="cat-hero-actions">
                <a
                  className="btn btn--wa"
                  href={whats(
                    `Olá! Vim pelo site da CAMPMED e gostaria de consultar disponibilidade de ${categoria.nome.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp size={18} />
                  Consultar disponibilidade
                </a>
                <a
                  className="btn btn--ghost-light"
                  href={contato.mapaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={17} />
                  Visitar a loja
                </a>
              </div>
            </div>

            <div className="cat-hero-media">
              <img src={categoria.capa} alt={categoria.nome} width={900} height={675} />
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Indicação e benefícios ---------- */}
      <section className="section">
        <div className="shell profile-grid">
          <Reveal className="profile-block">
            <span className="eyebrow">Indicação</span>
            <h2>Para quem é indicado</h2>
            <p className="profile-lead">{categoria.perfilTitulo}</p>
            <p>{categoria.perfilTexto}</p>
          </Reveal>

          <Reveal className="profile-block">
            <span className="eyebrow">Benefícios</span>
            <h2>Benefícios clínicos</h2>
            <ul className="checklist">
              {categoria.beneficios.map((b) => (
                <li key={b}>
                  <Check size={17} />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Linha de produtos ---------- */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Produtos</span>
            <h2>Linha de {categoria.nome.toLowerCase()}</h2>
            <p>
              Modelos disponíveis na loja. A indicação correta depende do caso — consulte a
              equipe antes de decidir.
            </p>
          </Reveal>

          <Reveal mode="stagger" className="prod-grid">
            {categoria.produtos.map((p) => (
              <article className="prod-card" key={p.nome}>
                {p.imagem ? (
                  <div className="prod-media">
                    <img src={p.imagem} alt={p.nome} loading="lazy" width={640} height={640} />
                  </div>
                ) : (
                  <div className="prod-media prod-media--blank" aria-hidden="true">
                    <Package size={30} />
                  </div>
                )}

                <div className="prod-body">
                  <h3>{p.nome}</h3>
                  <dl className="prod-specs">
                    <div>
                      <dt>Indicação</dt>
                      <dd>{p.indicacao}</dd>
                    </div>
                    <div>
                      <dt>Público</dt>
                      <dd>{p.publico}</dd>
                    </div>
                  </dl>
                  <a
                    className="btn btn--outline btn--sm btn--block"
                    href={whats(
                      `Olá! Vim pelo site da CAMPMED e gostaria de informações sobre: ${p.nome}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsApp size={16} />
                    Consultar
                  </a>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Diferenciais da categoria ---------- */}
      <section className="section section--dark grain">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Diferenciais</span>
            <h2>Por que comprar na CAMPMED</h2>
          </Reveal>

          <Reveal mode="stagger" className="marks">
            {categoria.diferenciais.map((d) => (
              <div className="mark" key={d}>
                <span className="mark-icon" aria-hidden="true">
                  <Check size={17} />
                </span>
                <p>{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <SpecialistBand
        titulo={`Precisa de orientação sobre ${categoria.nome.toLowerCase()}?`}
        texto={`Nossa equipe está pronta para ajudar a escolher o melhor modelo para o seu caso. Atendimento presencial no Cambuí, em Campinas.`}
        mensagem={`Olá! Vim pelo site da CAMPMED e preciso de orientação sobre ${categoria.nome.toLowerCase()}.`}
      />

      {/* ---------- Outras categorias ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Continue navegando</span>
            <h2>Explore outras categorias</h2>
          </Reveal>

          <Reveal mode="stagger" className="related-grid">
            {outras.map((c) => (
              <Link className="related-card" key={c.slug} to={`/catalogo/${c.slug}`}>
                <img src={c.capa} alt="" loading="lazy" width={600} height={375} />
                <h3>{c.nome}</h3>
              </Link>
            ))}
          </Reveal>

          <p style={{ marginTop: '1.6rem' }}>
            <Link className="btn btn--outline" to="/catalogo">
              Ver catálogo completo
              <ArrowRight size={16} />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
