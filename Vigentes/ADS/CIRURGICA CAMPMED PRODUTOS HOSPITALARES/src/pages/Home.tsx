import { Link } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';
import Reveal from '../components/Reveal';
import SpecialistBand from '../components/SpecialistBand';
import {
  ArrowRight,
  Building,
  Clock,
  HandHeart,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
  WhatsApp,
} from '../components/icons';
import {
  categorias,
  contato,
  depoimentos,
  diferenciais,
  etapasAtendimento,
  marcas,
  whats,
} from '../data/site';
import useTitulo from '../useTitulo';

const iconesDiferenciais = [ShieldCheck, Stethoscope, HandHeart, Building, Package, MapPin];

export default function Home() {
  useTitulo();
  const destaques = categorias.slice(0, 5);

  return (
    <>
      <HeroVideo />

      {/* ---------- Declaração de abertura ---------- */}
      <section className="section statement">
        <div className="shell statement-grid">
          <Reveal>
            <span className="eyebrow">Cirúrgica CAMPMED · Campinas, SP</span>
            <h1>
              Produtos hospitalares com <em>atendimento especializado</em>
            </h1>
          </Reveal>

          <Reveal className="statement-side">
            <p>
              Referência em Campinas para clínicas, profissionais de saúde, cuidadores e
              famílias. Orientação técnica consultiva para chegar na escolha certa — e não
              só num carrinho de compras.
            </p>
            <dl className="statement-meta">
              <div className="meta-row">
                <dt>Desde</dt>
                <dd>Mais de 25 anos no mercado de saúde</dd>
              </div>
              <div className="meta-row">
                <dt>Loja física</dt>
                <dd>Rua Major Solon, 685 — Cambuí, Campinas</dd>
              </div>
              <div className="meta-row">
                <dt>Atendemos</dt>
                <dd>Clínicas, consultórios, cuidadores e home care</dd>
              </div>
            </dl>
            <a
              className="btn btn--primary"
              href={whats(
                'Olá! Vim pelo site da CAMPMED e gostaria de falar com um especialista.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              style={{ justifySelf: 'start' }}
            >
              <WhatsApp size={18} />
              Falar com Especialista
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- Marcas ---------- */}
      <section className="section section--mist" style={{ paddingBlock: '3.2rem' }}>
        <div className="shell">
          <Reveal>
            <p
              className="eyebrow"
              style={{ justifyContent: 'center', display: 'flex', marginBottom: '1.8rem' }}
            >
              Trabalhamos com as principais marcas do mercado hospitalar
            </p>
          </Reveal>
          <Reveal mode="stagger" className="brands">
            {marcas.map((m) => (
              <img
                key={m.nome}
                src={m.imagem}
                alt={m.nome}
                loading="lazy"
                width={120}
                height={46}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Categorias ---------- */}
      <section className="section" id="categorias">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Nossas especialidades</span>
            <h2>Principais categorias atendidas</h2>
            <p>
              Produtos hospitalares, ortopédicos e de reabilitação com orientação técnica
              para cada necessidade.
            </p>
          </Reveal>

          <Reveal mode="stagger" className="cat-grid">
            {destaques.map((c, i) => (
              <Link className="cat-card" key={c.slug} to={`/catalogo/${c.slug}`}>
                <div className="cat-card-media">
                  <span className="cat-index">{String(i + 1).padStart(2, '0')}</span>
                  <img src={c.capa} alt={c.nome} loading="lazy" width={900} height={675} />
                </div>
                <div className="cat-card-body">
                  <h3>{c.nome}</h3>
                  <p>{c.resumo}</p>
                  <span className="cat-card-more">
                    Conhecer produtos
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}

            <div className="help-card">
              <h3>São 7 categorias no total</h3>
              <p>
                Veja também instrumentos cirúrgicos e fraldas geriátricas — ou fale com a
                equipe se não encontrar o que procura.
              </p>
              <Link className="btn btn--outline" to="/catalogo">
                Ver catálogo completo
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Como funciona ---------- */}
      <section className="section section--dark grain">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Como funciona</span>
            <h2>Atendimento consultivo em 3 etapas</h2>
            <p>
              Ninguém deveria escolher uma cadeira de rodas ou uma órtese no escuro. O
              caminho aqui começa por uma conversa.
            </p>
          </Reveal>

          <Reveal mode="stagger" className="steps">
            {etapasAtendimento.map((e) => (
              <article className="step" key={e.titulo}>
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <SpecialistBand />

      {/* ---------- Diferenciais ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Nossos diferenciais</span>
            <h2>Por que profissionais escolhem a CAMPMED</h2>
          </Reveal>

          <Reveal mode="stagger" className="diffs">
            {diferenciais.map((d, i) => {
              const Ico = iconesDiferenciais[i] ?? Users;
              return (
                <article className="diff" key={d.titulo}>
                  <span className="diff-icon">
                    <Ico size={21} />
                  </span>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ---------- Depoimentos ---------- */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Confiança</span>
            <h2>Quem nos procura, recomenda</h2>
            <p>Avaliações publicadas por clientes no Google.</p>
          </Reveal>

          <Reveal mode="stagger" className="quotes">
            {depoimentos.map((d) => (
              <figure className="quote" key={d.nome}>
                <span className="stars" aria-label="Cinco estrelas">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} />
                  ))}
                </span>
                <p>{d.texto}</p>
                <footer>
                  <b>{d.nome}</b>
                  <span>Google</span>
                </footer>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Visita à loja ---------- */}
      <section className="section" id="visitar">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Visite a loja</span>
            <h2>Teste, experimente e leve com segurança</h2>
            <p>
              Venha conhecer os produtos pessoalmente no Cambuí. Estacionamento fácil na
              região e acessibilidade garantida.
            </p>
          </Reveal>

          <div className="visit-grid">
            <Reveal className="map-frame ticks">
              <iframe
                src={contato.mapaEmbed}
                title="Mapa com a localização da Cirúrgica CAMPMED no Cambuí, Campinas"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            <Reveal>
              <dl className="info-list">
                <div className="info-row">
                  <MapPin size={19} />
                  <div>
                    <dt>Endereço</dt>
                    <dd>
                      <a href={contato.mapaLink} target="_blank" rel="noopener noreferrer">
                        Rua Major Solon, 685 — Cambuí, Campinas, SP
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="info-row">
                  <Clock size={19} />
                  <div>
                    <dt>Horário</dt>
                    <dd>
                      {contato.horarioSemana}
                      <br />
                      {contato.horarioSabado}
                    </dd>
                  </div>
                </div>
                <div className="info-row">
                  <Phone size={19} />
                  <div>
                    <dt>Telefone e WhatsApp</dt>
                    <dd>
                      <a href={contato.telefoneFixoLink}>{contato.telefoneFixo}</a>
                      <br />
                      <a href={`tel:+${contato.whatsappNumero}`}>{contato.whatsapp}</a>
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="info-note">
                <Users size={16} />
                Atendemos também clínicas e instituições com condições especiais.
              </p>

              <div className="cta-band-actions" style={{ marginTop: '1.6rem' }}>
                <a
                  className="btn btn--wa"
                  href={whats(
                    'Olá! Vim pelo site da CAMPMED e gostaria de agendar uma visita à loja.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp size={18} />
                  Falar com Especialista
                </a>
                <a
                  className="btn btn--outline"
                  href={contato.mapaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={17} />
                  Ver no mapa
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
