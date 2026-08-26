import { ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Brand {
  name: string;
  description: string;
}

const brands: Brand[] = [
  { name: 'Gree', description: 'Maior fabricante de ar condicionado do mundo' },
  { name: 'Fujitsu', description: 'Tecnologia japonesa de alto desempenho' },
  { name: 'Elgin', description: 'Referência nacional em climatização' },
  { name: 'TCL', description: 'Inovação e custo-benefício incomparáveis' },
];

export default function Brands() {
  return (
    <section id="marcas" className="py-20 md:py-28 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            Credenciais
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">
            Assistência Técnica Autorizada
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Somos credenciados pelas principais marcas do mercado, garantindo atendimento
            especializado com peças originais e técnicos certificados.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white/5 hover:bg-primary/30 border border-white/10 hover:border-primary/50 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                <ShieldCheck size={26} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{brand.name}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{brand.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            Precisa de assistência técnica autorizada?
          </h3>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Atendemos aparelhos de todas essas marcas com peças originais e técnicos certificados.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Solicitar Assistência Técnica
          </a>
        </div>
      </div>
    </section>
  );
}
