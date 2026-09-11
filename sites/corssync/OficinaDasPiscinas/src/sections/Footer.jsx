import { ArrowUp } from "lucide-react";
import { Brand } from "../components/Brand";
import { contact } from "../data/siteData";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Brand light />
          <p>
            Limpeza, manutenção, aquecimento, equipamentos e produtos para
            piscinas.
          </p>
        </div>

        <div className="footer__links">
          <div>
            <strong>Navegue</strong>
            <a href="#solucoes">Soluções</a>
            <a href="#estrutura">Estrutura</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Experiência</a>
          </div>
          <div>
            <strong>Contato</strong>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${contact.email}`}>E-mail</a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={contact.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <a className="footer__back" href="#inicio" aria-label="Voltar ao início">
          <ArrowUp size={21} />
        </a>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} Oficina das Piscinas. Todos os direitos
          reservados.
        </span>
        <span>30 anos de experiência</span>
      </div>
    </footer>
  );
}
