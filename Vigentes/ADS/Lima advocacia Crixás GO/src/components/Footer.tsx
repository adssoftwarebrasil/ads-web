import { Phone, Mail, MapPin } from 'lucide-react';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Áreas de Atuação', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'Consultoria Jurídica',
  'Planejamento Previdenciário',
  'Planejamento Trabalhista',
  'Cálculo de Benefícios',
  'Ações Judiciais',
  'Elaboração de Contratos',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/logos/logo-dourado-sem-fundo.webp"
              alt="Lima Advocacia"
              className="h-14 w-auto mb-5 opacity-80"
            />
            <p className="font-sans text-sm text-[#BBB39D] leading-relaxed mb-6">
              Escritório especializado em Direito do Trabalho e Previdenciário, com sede em
              Crixás/GO, fundado em 2022.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#A1825A]/50" />
              <span className="font-sans text-xs text-[#A1825A] tracking-widest uppercase">
                OAB/GO
              </span>
            </div>
          </div>

          <div>
            <p className="font-serif text-sm text-white mb-5 tracking-wider">Navegação</p>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href + item.label}>
                  <a
                    href={item.href}
                    className="font-sans text-sm text-[#BBB39D] hover:text-[#A1825A] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm text-white mb-5 tracking-wider">Serviços</p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="font-sans text-sm text-[#BBB39D] hover:text-[#A1825A] transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm text-white mb-5 tracking-wider">Contato</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#A1825A] shrink-0 mt-0.5" />
                <p className="font-sans text-sm text-[#BBB39D] leading-relaxed">
                  Rua Domingos Marques, nº 15, Sala 1<br />
                  Centro — Crixás/GO<br />
                  CEP: 76.510-000
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#A1825A] shrink-0" />
                <a
                  href="tel:+5562981442263"
                  className="font-sans text-sm text-[#BBB39D] hover:text-[#A1825A] transition-colors duration-300"
                >
                  (62) 9 8144-2263
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#A1825A] shrink-0" />
                <a
                  href="mailto:gabrielhlrodrigues@gmail.com"
                  className="font-sans text-sm text-[#BBB39D] hover:text-[#A1825A] transition-colors duration-300 break-all"
                >
                  gabrielhlrodrigues@gmail.com
                </a>
              </li>
            </ul>

            <a
              href="http://wa.me/5562981442263"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block gold-gradient text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-sm tracking-wider uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#BBB39D]/40 text-center sm:text-left">
            © {year} Lima Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
