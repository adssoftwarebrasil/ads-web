import { Smartphone, Headphones, Cable, Speaker, type LucideIcon } from 'lucide-react';
import { openWhatsApp } from '../lib/constants';

interface Item {
  Icon: LucideIcon;
  label: string;
}

const items: Item[] = [
  { Icon: Smartphone, label: 'Películas de Vidro 3D' },
  { Icon: Headphones, label: 'Fones e Earbuds' },
  { Icon: Cable, label: 'Cabos e Carregadores' },
  { Icon: Speaker, label: 'Caixas de Som Portáteis' },
];

export default function Accessories() {
  return (
    <section id="sobre" className="bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Acessórios Premium para Seu <span className="text-[rgb(231,189,44)]">Smartphone</span>
          </h2>
          <p className="text-lg text-gray-300">Proteja e potencialize seu aparelho com nossa linha completa de acessórios de alta qualidade.</p>
          <div className="space-y-4">
            {items.map(({ Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="w-8 h-8 flex-shrink-0 stroke-[rgb(231,189,44)]" />
                <span className="text-gray-200 font-medium text-lg">{label}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => openWhatsApp('Olá! Gostaria de consultar os acessórios disponíveis.')}
            className="mt-6 bg-[rgb(231,189,44)] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(241,199,54)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Consultar no WhatsApp
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fsmartphone-preto-embalagem.webp"
            alt="Acessórios Premium"
            className="w-full max-w-md mx-auto h-auto rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
