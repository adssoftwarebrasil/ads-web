import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    servicos: [
      { nome: 'Contabilidade Empresarial', href: '#servicos' },
      { nome: 'Gestão Fiscal e Tributária', href: '#servicos' },
      { nome: 'Departamento Pessoal', href: '#servicos' },
      { nome: 'Imposto de Renda PF', href: '#servicos' },
    ],
    empresa: [
      { nome: 'Sobre Nós', href: '#sobre' },
      { nome: 'Metodologia', href: '#servicos' },
      { nome: 'Áreas de Atendimento', href: '#servicos' },
    ],
  };

  const contatos = [
    {
      icone: Phone,
      texto: '(62) 99973-2807',
      href: 'tel:+5562999732807',
    },
    {
      icone: Mail,
      texto: 'contato@wpfcontabilidade.com.br',
      href: 'mailto:contato@wpfcontabilidade.com.br',
    },
    {
      icone: MapPin,
      texto: 'Goiânia, GO',
      href: '#',
    },
  ];

  const redesSociais = [
    { icone: Instagram, href: '#', nome: 'Instagram' },
    { icone: Linkedin, href: '#', nome: 'LinkedIn' },
    { icone: Facebook, href: '#', nome: 'Facebook' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#2B2B2B] via-[#111111] to-[#0A0A0A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="mb-6 inline-block">
                <img 
                  src="/logo-fonseca.png"
                  alt="Fonseca Contabilidade Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Soluções contábeis estratégicas para o crescimento sustentável do seu negócio.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center gap-3">
                {redesSociais.map((rede) => {
                  const IconComponent = rede.icone;
                  return (
                    <a
                      key={rede.nome}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={rede.nome}
                    >
                      <IconComponent className="w-5 h-5 text-[#E8CE8A]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-[#E8CE8A] font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-3">
                {links.servicos.map((link) => (
                  <li key={link.nome}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#E8CE8A] text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="text-[#E8CE8A] font-bold text-lg mb-4">Empresa</h3>
              <ul className="space-y-3">
                {links.empresa.map((link) => (
                  <li key={link.nome}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#E8CE8A] text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-[#E8CE8A] font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-4">
                {contatos.map((contato) => {
                  const IconComponent = contato.icone;
                  return (
                    <li key={contato.texto}>
                      <a
                        href={contato.href}
                        className="flex items-start gap-3 text-white/70 hover:text-[#E8CE8A] text-sm transition-colors duration-300 group"
                      >
                        <IconComponent className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <span>{contato.texto}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/5562999732807?text=Olá! Gostaria de falar com a Fonseca Contabilidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#C9A44C] text-[#0A0A0A] rounded-lg font-semibold text-sm hover:bg-[#E8CE8A] hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} Fonseca Contabilidade. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}