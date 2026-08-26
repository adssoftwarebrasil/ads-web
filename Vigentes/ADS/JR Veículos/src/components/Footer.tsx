const LOGO_URL =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=jrveiculos%2Fmobile-removebg-preview.png&version_id=null';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src={LOGO_URL}
              alt="JR Veículos"
              className="h-12 w-auto object-contain"
            />
            <p className="text-[#9CA3AF] text-sm max-w-xs text-center md:text-left leading-relaxed">
              Venda, troca, consignação de seminovos, consórcio YAMAHA e locação de veículos em
              Rondonópolis — MT.
            </p>
            <p className="text-xs text-brand-red font-semibold italic">
              "Temos mais que clientes, temos clientes amigos."
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B7280]">
            &copy; {year} JR Veículos Rondonópolis. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#6B7280]">
            Av. Ponce de Arruda, 2099 — Centro, Rondonópolis — MT
          </p>
        </div>
      </div>
    </footer>
  );
}
