import BrandMark from "../components/BrandMark";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div>
          <BrandMark compact />
          <p>Hospitalidade, conforto e qualidade em Barreiras desde 2016.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href="#hotel">O hotel</a>
          <a href="#acomodacoes">Acomodações</a>
          <a href="#comodidades">Comodidades</a>
          <a href="#galeria">Galeria</a>
        </div>
        <div>
          <h2>Contato</h2>
          <a href="tel:+557799340180">(77) 9934-0180</a>
          <a href="mailto:parishotel.ba@gmail.com">parishotel.ba@gmail.com</a>
          <a href="mailto:Trabalhoreservashotelparis@gmail.com">Trabalhe conosco</a>
        </div>
        <div>
          <h2>Atendimento</h2>
          <p>Recepção 24 horas</p>
          <p>Barreiras, Bahia</p>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Paris Apart Hotel.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
