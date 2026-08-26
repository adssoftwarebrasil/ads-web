export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Flogo.png"
              alt="Fino Acabamento"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Há 13 anos, referência em pisos e revestimentos de alto padrão em Recife.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Produtos', 'Catálogos', 'Sobre', 'Marcas', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Segunda a Sexta</li>
              <li>09:00 às 17:30</li>
              <li className="pt-2">
                <a
                  href="tel:+5581992928284"
                  className="hover:text-white transition-colors"
                >
                  (81) 99299-8284
                </a>
              </li>
              <li>
                <a
                  href="mailto:finoacabamento2013@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  finoacabamento2013@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {currentYear} Fino Acabamento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
