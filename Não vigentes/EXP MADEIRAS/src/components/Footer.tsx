const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const services = [
  'Alizar 7cm',
  'Meia Cana Cedrinho',
  'Cimalha Cedrinho',
  'Forro Cedrinho Cerne',
  'Batente Coração Negro',
  'Batente Jatobá',
];

export default function Footer() {
  return (
    <footer className="pt-12 pb-6" style={{ backgroundColor: 'rgb(35, 24, 11)' }}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FLogo.png"
              alt="EXP Madeiras"
              className="h-[60px] mb-4"
            />
            <p
              className="text-[#F1F1FF] opacity-70 leading-relaxed max-w-[300px]"
              style={{ fontSize: '0.95rem' }}
            >
              A EXP Madeiras é referência em acabamentos de madeira em Sinop (MT). Comprometidos com a
              excelência em cada projeto há mais de 20 anos.
            </p>
          </div>
          <div>
            <h3 className="text-[#F1F1FF] font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F1F1FF] opacity-70 hover:text-[#B88654] hover:opacity-100 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#F1F1FF] font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-[#F1F1FF] opacity-70">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="pt-8 mt-8 text-center"
          style={{ borderTop: '1px solid rgba(241, 241, 255, 0.1)' }}
        >
          <p className="text-[#F1F1FF] opacity-50" style={{ fontSize: '0.9rem' }}>
            © 2025 EXP Madeiras - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
