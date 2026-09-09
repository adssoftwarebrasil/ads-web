import Logo from "./Logo";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__egg" aria-hidden="true" />

      <div className="container site-footer__cta">
        <div className="site-footer__statement">
          <p className="eyebrow eyebrow--orange">Ovos Amano</p>
          <h2>Ovos frescos para sua casa ou seu negócio.</h2>
        </div>
        <a className="footer-action" href="#produtos">
          <small>Atacado e varejo</small>
          <span>Conhecer as opções</span>
          <i><Icon name="arrow" size={24} /></i>
        </a>
      </div>

      <div className="container site-footer__main">
        <div className="site-footer__brand-block">
          <a href="#inicio" aria-label="Ovos Amano — voltar ao início">
            <Logo inverse />
          </a>
          <p>
            Mais de 60 anos de tradição, procedência e cuidado — de Bastos para
            Ribeirão Preto.
          </p>
        </div>

        <div className="site-footer__column">
          <span>Navegue</span>
          <nav aria-label="Navegação do rodapé">
            <a href="#origem">Nossa origem</a>
            <a href="#produtos">Produtos e embalagens</a>
            <a href="#qualidade">Nosso processo</a>
            <a href="#atendimento">Para quem atendemos</a>
          </nav>
        </div>

        <div className="site-footer__column">
          <span>Atendimento</span>
          <a className="site-footer__location" href="#encontre">
            <Icon name="map" size={23} />
            <div>
              <strong>Ribeirão Preto · SP</strong>
              <small>Loja física e distribuidora</small>
            </div>
          </a>
          <p>Consumidor final, empresas e revendedores.</p>
        </div>

        <div className="site-footer__seal" aria-label="Mais de 60 anos de tradição">
          <strong>60+</strong>
          <span>anos de<br />tradição</span>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} Ovos Amano</p>
        <span>Bastos (SP) <i>→</i> Ribeirão Preto (SP)</span>
        <a href="#inicio">Voltar ao topo <b>↑</b></a>
      </div>
    </footer>
  );
}
