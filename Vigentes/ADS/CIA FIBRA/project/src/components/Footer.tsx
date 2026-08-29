const Footer = () => {
  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#012E60] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img
              src="/logo-cia-fibra-branco.png"
              alt="Cia Fibra Uniformes"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Profissionalismo, credibilidade, cuidado e segurança em cada uniforme.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#D7B46A]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#D7B46A] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#D7B46A]">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                Av. Monsenhor Gerônimo Galo, 460<br />
                Vila Rezende, Piracicaba - SP
              </li>
              <li>
                <a href="mailto:contato@ciafibra.com.br" className="hover:text-[#D7B46A] transition-colors duration-300">
                  contato@ciafibra.com.br
                </a>
              </li>
              <li>
                <a href="tel:+551934135428" className="hover:text-[#D7B46A] transition-colors duration-300">
                  (19) 3413-5428
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#D7B46A]">Horário de Atendimento</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Segunda a Sexta:</li>
              <li className="font-semibold">8h às 17h30</li>
              <li className="mt-4">Sábado:</li>
              <li className="font-semibold">8h às 12h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400">
            Copyright &copy; {new Date().getFullYear()} Cia Fibra | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
