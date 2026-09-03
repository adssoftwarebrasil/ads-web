import { Link } from 'react-router-dom';
import { ArrowRight, WhatsApp } from '../components/icons';
import { whatsGeral } from '../data/site';
import useTitulo from '../useTitulo';

export default function NotFound() {
  useTitulo('Página não encontrada — CAMPMED');

  return (
    <section className="shell notfound">
      <span className="eyebrow">Erro 404</span>
      <h1>Essa página não existe</h1>
      <p>
        O endereço pode ter mudado. Volte para o início, veja o catálogo completo ou fale
        direto com a nossa equipe.
      </p>
      <div className="cta-band-actions" style={{ justifyContent: 'center' }}>
        <Link className="btn btn--primary" to="/catalogo">
          Ver catálogo
          <ArrowRight size={16} />
        </Link>
        <a
          className="btn btn--outline"
          href={whatsGeral}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp size={17} />
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
