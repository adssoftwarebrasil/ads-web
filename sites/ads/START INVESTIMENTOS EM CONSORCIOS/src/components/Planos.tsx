import { useState, type ReactNode } from 'react';
import { CarIcon, HomeIcon, TruckIcon, StarIcon, CheckIcon } from './icons';

type TabId = 'vehicles' | 'properties' | 'trucks' | 'promo';

const PLANS: Record<TabId, [number, number][]> = {
  vehicles: [
    [34000, 197.2],
    [50000, 290.2],
    [80000, 464.2],
    [100000, 483.2],
    [130000, 628.29],
    [180000, 869],
  ],
  properties: [
    [100000, 341.5],
    [200000, 683],
    [400000, 1230],
    [600000, 1845],
    [800000, 2236],
    [1000000, 2795.5],
  ],
  trucks: [
    [400000, 1657.2],
    [500000, 2071.5],
    [600000, 2485.8],
    [800000, 3314.4],
  ],
  promo: [
    [200000, 615.5],
    [300000, 922.5],
    [400000, 1230],
  ],
};

const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const tabs: { id: TabId; label: string; rate: string; icon: (active: boolean) => ReactNode }[] = [
  {
    id: 'vehicles',
    label: 'Veículos',
    rate: '0,15%',
    icon: (active) => <CarIcon size={24} className={active ? 'text-white' : 'text-[#E7251C]'} />,
  },
  {
    id: 'properties',
    label: 'Imóveis',
    rate: '0,11%',
    icon: (active) => <HomeIcon size={24} className={active ? 'text-white' : 'text-[#E7251C]'} />,
  },
  {
    id: 'trucks',
    label: 'Pesados',
    rate: '0,15%',
    icon: (active) => <TruckIcon size={24} className={active ? 'text-white' : 'text-[#E7251C]'} />,
  },
  {
    id: 'promo',
    label: 'Promo',
    rate: 'Especial',
    icon: (active) => <StarIcon size={24} className={active ? 'text-white' : 'text-[#E7251C]'} />,
  },
];

const beneficios = [
  'Lance do próprio crédito (embutido)',
  'Sem juros, apenas taxa adm.',
  'Aceitamos seu veículo como lance',
  'FGTS para lances (Imóveis)',
];

export default function Planos() {
  const [active, setActive] = useState<TabId>('vehicles');

  return (
    <section id="planos" className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Planos Start
          </h2>
          <p className="text-gray-500 mt-2">Escolha a categoria e veja como é fácil começar</p>
        </div>

        <div id="planTabs" className="flex overflow-x-auto pb-4 gap-2 no-scrollbar snap-x">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                data-tab={tab.id}
                onClick={() => setActive(tab.id)}
                className={`plan-tab flex-1 min-w-[140px] snap-start flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-[#E7251C] text-white shadow-lg shadow-red-500/20'
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab.icon(isActive)}
                <span className="font-bold text-sm mt-2">{tab.label}</span>
                <span
                  className={`tab-rate text-[10px] uppercase tracking-widest ${
                    isActive ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  {tab.rate}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-widest">
                    Crédito
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-widest text-right">
                    Meia Parcela
                  </th>
                </tr>
              </thead>
              <tbody id="planBody" className="divide-y divide-gray-50">
                {PLANS[active].map(([credit, half], i) => (
                  <tr key={i} className="hover:bg-red-50/30 transition-colors group">
                    <td className="px-6 py-4 font-semibold text-gray-700">{brl(credit)}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-[#E7251C] font-bold text-lg">{brl(half)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-900 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon size={20} className="text-[#E7251C]" strokeWidth={3} />
              <p className="text-white text-sm font-medium">Meia parcela até a contemplação!</p>
            </div>
            <a
              href="./simulador.html"
              className="flex items-center gap-2 bg-[#E7251C] text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
            >
              Simular este valor →
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {beneficios.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100"
            >
              <div className="bg-red-100 p-1 rounded-full text-[#E7251C]">
                <CheckIcon size={14} strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
