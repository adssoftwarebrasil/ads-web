import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicePageLayoutProps {
  children: React.ReactNode;
}

export default function ServicePageLayout({ children }: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/beevox%2Fimg%2Flogo-sem-fundo.webp"
              alt="BEEVOX - Soluções Auditivas"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-[rgb(246,182,31)] font-medium transition-colors text-sm gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-black text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <img
            src="https://storage.lucasmendes.dev/site-sp/beevox%2Fimg%2Flogo-sem-fundo.webp"
            alt="BEEVOX"
            className="h-14 w-auto mx-auto"
          />
          <p className="text-gray-400 text-sm">
            Rua Gago Coutinho, 350, Araés, Cuiabá-MT
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-6 py-3 rounded-full font-semibold hover:bg-[rgb(226,162,11)] transition-all shadow-md gap-2"
          >
            Agendar Consulta
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
