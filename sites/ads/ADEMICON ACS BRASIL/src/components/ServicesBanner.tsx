import React from 'react';

const BASE_SERVICES = [
  { icon: '🏠', label: 'Imóveis' },
  { icon: '🚗', label: 'Veículos' },
  { icon: '🚜', label: 'Agro' },
  { icon: '⛵', label: 'Náutica' },
  { icon: '🚛', label: 'Caminhões' },
  { icon: '💼', label: 'Investimentos' },
  { icon: '🏗️', label: 'Construção' },
  { icon: '🔧', label: 'Reformas' },
];

export default function ServicesBanner() {
  const animatedServices = [...BASE_SERVICES, ...BASE_SERVICES];

  return (
    <div className="bg-gradient-to-r from-[rgb(87,168,45)] via-[rgb(253,192,20)] to-[rgb(87,168,45)] py-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative flex will-change-transform animate-scroll-medium hover:pause"
      >
        {animatedServices.map((service, index) => (
          <div
            key={`${service.label}-${index}`}
            className="flex items-center gap-3 px-8 whitespace-nowrap flex-shrink-0"
          >
            <span className="text-3xl">{service.icon}</span>
            <span className="text-white font-bold text-lg">{service.label}</span>
            <span className="text-white/50 text-2xl mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}