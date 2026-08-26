import { useState } from 'react';
import { Filter } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { cars, CATEGORIES, carWhatsapp, WHATSAPP } from '../data';

const GOLD_GRADIENT = 'linear-gradient(135deg, rgb(245, 223, 108), rgb(218, 158, 12))';

export default function Estoque() {
  const [active, setActive] = useState('Todos');
  const visible = active === 'Todos' ? cars : cars.filter((c) => c.category === active);

  return (
    <section id="estoque" className="py-20 md:py-28" style={{ background: 'rgb(10, 10, 10)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'rgb(245, 223, 108)' }}>
            Nosso Estoque
          </span>
          <h2 className="section-title text-white mt-3">
            Encontre o Veículo{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, rgb(245, 223, 108) 0%, rgb(218, 158, 12) 100%)' }}
            >
              Ideal para Você
            </span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base">
            Todos os veículos são selecionados com critério. Consulte preço e condições diretamente pelo WhatsApp.
          </p>
        </div>
        <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
          <Filter size={16} className="lucide lucide-filter text-white/40 flex-shrink-0" />
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  isActive
                    ? 'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-brand-black font-semibold'
                    : 'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/5 border border-white/10 text-white/60 hover:border-golden/30 hover:text-white'
                }
                style={isActive ? { background: GOLD_GRADIENT } : undefined}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((car) => (
            <div
              key={car.name}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden card-hover hover:border-golden/40 hover:bg-white/8"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '9 / 16', maxHeight: '320px' }}>
                <img
                  src={car.image}
                  alt={`${car.name} `}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
                {car.featured && (
                  <span
                    className="absolute top-3 left-3 text-brand-black text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: GOLD_GRADIENT }}
                  >
                    Novo
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-brand-black/70 backdrop-blur-sm text-white/70 text-xs px-2 py-1 rounded-full border border-white/10">
                  {car.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-base leading-tight">{car.name}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-white/50 text-sm"></span>
                  <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  <span className="text-white/50 text-sm">{car.transmission}</span>
                </div>
                <a
                  href={carWhatsapp(car.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-brand-black text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: GOLD_GRADIENT }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Consultar Preço
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="btn-outline-golden rounded-xl px-10 py-3 font-semibold">Ver Todos os 27 Veículos</button>
        </div>
        <div className="mt-12 text-center bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-white/70 text-base mb-4">
            Não encontrou o que procurava? Fale conosco e descreva o veículo dos seus sonhos.
          </p>
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent('Olá! Estou procurando um veículo e gostaria de ajuda.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-golden rounded-xl px-8 py-3 font-semibold"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Quero Ajuda para Encontrar Meu Carro
          </a>
        </div>
      </div>
    </section>
  );
}
