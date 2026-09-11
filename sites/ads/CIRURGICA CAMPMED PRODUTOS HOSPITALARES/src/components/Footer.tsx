import { Link } from 'react-router-dom';
import { categorias, contato } from '../data/site';
import { Clock, Instagram, Mail, MapPin, Phone } from './icons';

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-plaque">
              <img
                src="/img/logo-campmed.png"
                alt="Cirúrgica CAMPMED Produtos Hospitalares"
                width={205}
                height={38}
                loading="lazy"
              />
            </div>
            <p>
              Referência em produtos hospitalares em Campinas. Com mais de 25 anos de
              experiência na área de saúde, nosso compromisso é levar aos nossos clientes os
              melhores produtos e um atendimento especializado.
            </p>
            <p>
              Atuamos com responsabilidade social, ética e inovação, sendo reconhecidos no
              fornecimento de equipamentos hospitalares, produtos ortopédicos e mobiliário de
              alta performance.
            </p>
          </div>

          <nav aria-label="Categorias">
            <h4>Catálogo</h4>
            <div className="footer-links">
              {categorias.map((c) => (
                <Link key={c.slug} to={`/catalogo/${c.slug}`}>
                  {c.nome}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h4>Contato</h4>
            <div className="footer-contact">
              <div>
                <MapPin size={16} />
                <a href={contato.mapaLink} target="_blank" rel="noopener noreferrer">
                  Rua Major Solon, 685
                  <br />
                  Cambuí — Campinas, SP
                </a>
              </div>
              <div>
                <Phone size={16} />
                <span>
                  <a href={contato.telefoneFixoLink}>{contato.telefoneFixo}</a>
                  {' · '}
                  <a href={`tel:+${contato.whatsappNumero}`}>{contato.whatsapp}</a>
                </span>
              </div>
              <div>
                <Mail size={16} />
                <a href={`mailto:${contato.email}`}>{contato.email}</a>
              </div>
              <div>
                <Instagram size={16} />
                <a href={contato.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {contato.instagram}
                </a>
              </div>
              <div>
                <Clock size={16} />
                <span>
                  {contato.horarioSemana}
                  <br />
                  {contato.horarioSabado}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {ano} Cirúrgica CAMPMED Produtos Hospitalares. Todos os direitos reservados.
          </span>
          <span>Campinas · São Paulo</span>
        </div>
      </div>
    </footer>
  );
}
