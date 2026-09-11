import { FileDown } from 'lucide-react';
import { CATALOG_URL } from '../data/baskets';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CatalogDownload() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <FileDown className="w-14 h-14 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Baixe Nosso Catalogo
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
          Tenha todas as nossas cestas basicas em um unico arquivo PDF
        </p>
        <a
          href={CATALOG_URL}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-primary-dark px-10 py-4 rounded-full text-base font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          <FileDown size={20} />
          Baixar Catalogo em PDF
        </a>
      </div>
    </section>
  );
}
