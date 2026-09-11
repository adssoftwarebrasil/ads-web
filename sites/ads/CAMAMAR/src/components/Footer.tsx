import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@/assets/logo-camamar-banner.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  return (
    <footer className="bg-camamar-dark text-white relative">
      <div className="h-1 w-full bg-primary" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Camamar" className="h-16 mb-5 brightness-0 invert" />
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Soluções completas em materiais de construção há mais de 30 anos em Goiânia.
            Qualidade, agilidade e o melhor atendimento.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/Camamargoiania" },
              { Icon: FaInstagram, href: "https://www.instagram.com/Camamargoiania/" },
              { Icon: FaTwitter, href: "https://twitter.com/camamar_goiania" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm tracking-[0.3em] uppercase text-primary mb-5">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white/70 hover:text-primary transition">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm tracking-[0.3em] uppercase text-primary mb-5">Contato</h4>
          <div className="text-sm text-white/70 space-y-2">
            <p>Av. C-104 Qd 259 Lt 04 Nº 531</p>
            <p>Jardim América, Goiânia - GO</p>
            <p>(62) 3275-1030</p>
            <p>comercial3@camamar.com.br</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto text-xs text-white/50 text-center">
          CMM Comercio Serviços Eireli | CNPJ: 03.623.169/0001-96 © Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
