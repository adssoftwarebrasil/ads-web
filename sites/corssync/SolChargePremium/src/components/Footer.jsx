import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Brand from "./Brand.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { company, navigation, whatsappUrl } from "../data/company.js";

export default function Footer() {
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contato");
    const observer = new IntersectionObserver(([entry]) =>
      setContactVisible(entry.isIntersecting),
    );
    if (contact) observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Brand />
            <p>
              Energia que transforma.
              <br />
              Mobilidade que conecta.
            </p>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r=".8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>{" "}
              @premiumenergiasolar <ArrowUpRight size={15} />
            </a>
          </div>
          <div>
            <h2>Explore</h2>
            <nav aria-label="Navegação do rodapé">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#duvidas">Dúvidas frequentes</a>
            </nav>
          </div>
          <div>
            <h2>Fale com a Premium</h2>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <WhatsAppIcon size={18} /> {company.businessPhone}
            </a>
            <a
              href={`https://wa.me/${company.mobileNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <Phone size={17} /> {company.mobilePhone}
            </a>
            <p>Atendimento {company.hours.toLowerCase()}</p>
          </div>
          <div className="footer-address">
            <h2>Brasília, Distrito Federal</h2>
            <p>
              {company.address}
              <br />
              CEP {company.postalCode}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <MapPin size={16} /> Como chegar <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Premium Energia Solar. Todos os
            direitos reservados.
          </p>
          <span>Energia solar & Electric Car Solutions</span>
        </div>
      </footer>
      <a
        className={`floating-whatsapp ${contactVisible ? "is-hidden" : ""}`}
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Premium no WhatsApp"
      >
        <WhatsAppIcon size={27} />
        <span>Fale com a Premium</span>
      </a>
    </>
  );
}
