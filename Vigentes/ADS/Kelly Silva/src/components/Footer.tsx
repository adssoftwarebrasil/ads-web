const navLinks = [
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

const regions = ['Goiás', 'Tocantins', 'Minas Gerais', 'Mato Grosso'];

export default function Footer() {
  return (
    <footer className="bg-[#1a2e3f] text-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-10">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=kellysilva%2Fimg%2Flogo-fundo-azul-Photoroom.png&version_id=null"
              alt="Kelly Silva Advocacia"
              className="h-16 w-auto mb-4"
            />
            <p className="font-serif text-base mb-3">Direito Previdenciário com empatia e excelência técnica</p>
            <p className="font-medium text-gold-light text-sm">OAB/GO 39.151</p>
          </div>
          <div>
            <h3 className="font-semibold text-off-white text-lg mb-4">Navegação</h3>
            <ul className="space-y-2 font-serif">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-light transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-off-white text-lg mb-4">Onde Atuamos</h3>
            <ul className="space-y-2 font-serif">
              {regions.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gold-light border-opacity-20 pt-6">
          <p className="text-center font-serif text-sm">
            © 2025 Kelly Silva Advocacia. Todos os direitos reservados. OAB/GO 39.151
          </p>
        </div>
      </div>
    </footer>
  );
}
