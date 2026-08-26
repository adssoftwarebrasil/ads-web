import { Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brownDeep text-white/70 py-5 md:py-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo/logomarcaAline.png" alt="TRC - Da Teoria ao Raciocínio Clínico" className="h-8 w-auto" />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <a
              href="mailto:psialinerds@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={12} className="lucide lucide-mail " /> psialinerds@gmail.com
            </a>
            <a
              href="https://www.instagram.com/alinerodrigues.psicologa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram size={12} className="lucide lucide-instagram " /> @alinerodrigues.psicologa
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-3 pt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-[10px] text-white/40">
          <p>© 2025 Aline Rodrigues · Todos os direitos reservados</p>
          <p>Este site não é afiliado ao Instagram nem ao Facebook</p>
        </div>
      </div>
    </footer>
  );
}
