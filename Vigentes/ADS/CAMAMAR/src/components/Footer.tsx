import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-camamar-dark text-white relative">
      <div className="h-1 w-full bg-primary"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img
            src="/assets/logo-camamar-banner-CUcyF2bH.png"
            alt="Camamar"
            className="h-16 mb-5 brightness-0 invert"
          />
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Soluções completas em materiais de construção há mais de 30 anos em Goiânia. Qualidade, agilidade e o melhor
            atendimento.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/Camamargoiania"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
            >
              <FacebookIcon height={15} width={15} />
            </a>
            <a
              href="https://www.instagram.com/Camamargoiania/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
            >
              <InstagramIcon height={15} width={15} />
            </a>
            <a
              href="https://twitter.com/camamar_goiania"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
            >
              <TwitterIcon height={15} width={15} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm tracking-[0.3em] uppercase text-primary mb-5">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/70 hover:text-primary transition">
                  {link.label}
                </a>
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
}
