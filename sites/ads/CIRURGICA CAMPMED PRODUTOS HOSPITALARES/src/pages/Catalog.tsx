import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SpecialistBand from '../components/SpecialistBand';
import { ArrowRight, WhatsApp } from '../components/icons';
import { categorias, whats } from '../data/site';
import useTitulo from '../useTitulo';

export default function Catalog() {
  useTitulo(
    'Catálogo de Produtos — CAMPMED Produtos Hospitalares',
    'Sete categorias de produtos hospitalares, ortopédicos e de reabilitação com orientação técnica: ortopédicos, equipamentos médicos, cadeiras, camas, fraldas, instrumentos e inaladores.',
  );

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <nav className="crumbs" aria-label="Você está aqui">
            <Link to="/">Início</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Catálogo</span>
          </nav>
          <h1>Encontre o produto certo para sua necessidade</h1>
          <p>
            Navegue pelas categorias e descubra a solução ideal. Nossos especialistas podem
            orientar você sobre o produto mais indicado para cada caso — inclusive os que não
            estão listados aqui.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell">
          <div className="catalog-list">
            {categorias.map((c) => (
              <Reveal key={c.slug}>
                <article className="catalog-row">
                  <Link
                    className="catalog-row-media"
                    to={`/catalogo/${c.slug}`}
                    aria-label={c.nome}
                  >
                    <img src={c.capa} alt={c.nome} loading="lazy" width={900} height={560} />
                  </Link>

                  <div className="catalog-row-body">
                    <h2>
                      <Link to={`/catalogo/${c.slug}`}>{c.nome}</Link>
                    </h2>
                    <p>{c.resumo}</p>

                    <dl className="spec-note">
                      <dt>Indicado para</dt>
                      <dd>{c.indicadoPara}</dd>
                    </dl>

                    <div className="catalog-row-actions">
                      <Link className="btn btn--primary btn--sm" to={`/catalogo/${c.slug}`}>
                        Ver a linha completa
                        <ArrowRight size={16} />
                      </Link>
                      <a
                        className="btn btn--outline btn--sm"
                        href={whats(
                          `Olá! Vim pelo site da CAMPMED e gostaria de orientação sobre ${c.nome.toLowerCase()}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsApp size={16} />
                        Tirar dúvida
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SpecialistBand
        titulo="Não encontrou o que procura?"
        texto="Trabalhamos com diversas marcas e modelos que podem não estar listados no site. Nossa equipe ajuda a encontrar o produto ideal para o seu caso."
        mensagem="Olá! Vim pelo site da CAMPMED e procuro um produto que não encontrei no catálogo."
      />
    </>
  );
}
