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
              src="https://storage.lucasmendes.dev/site-sp/ciafibra%2Flogo-hero%2Fciafibra_logociafibraasul.png"
              alt="Kaly Agon - Uniformes Personalizados"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Uniformes personalizados com compromisso, honestidade e atendimento personalizado desde 1992.
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
                Rua da Saudade, 373 - Sala 2<br />
                Centro, Cristalina - GO
              </li>
              <li>
                <a href="mailto:mckaartes@gmail.com" className="hover:text-[#D7B46A] transition-colors duration-300">
                  mckaartes@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+556136122686" className="hover:text-[#D7B46A] transition-colors duration-300">
                  (61) 3612-2686
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#D7B46A]">Horário de Atendimento</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Segunda a Sexta:</li>
              <li className="font-semibold">8h às 11h | 13h às 18h</li>
              <li className="mt-4">Sábado:</li>
              <li className="font-semibold">8h às 12h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400">
            Copyright &copy; {new Date().getFullYear()} Kaly Agon | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
