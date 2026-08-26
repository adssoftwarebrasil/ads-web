const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#turmas', label: 'Turmas' },
  { href: '#atividades', label: 'Atividades' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Flogo-fundo-branco.webp"
              alt="Raio de Sol Encantado"
              className="w-44 h-auto mb-6"
            />
            <p className="text-gray-400 text-base leading-relaxed">
              Educação infantil com amor e dedicação desde 1997.
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-base hover:text-secondary hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-base leading-relaxed">
              <li>
                Praça Antônio Lopes Veludo, 120<br />
                Jardim Sumaré - Ribeirão Preto SP
              </li>
              <li>
                <a
                  href="mailto:pri_raiosol@yahoo.com.br"
                  className="hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-2"
                >
                  pri_raiosol@yahoo.com.br
                </a>
              </li>
              <li>7h às 19h de Segunda a Sexta</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700/50 mt-12 pt-10 text-center">
          <p className="text-gray-500 text-base">© 2025 Raio de Sol Encantado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
