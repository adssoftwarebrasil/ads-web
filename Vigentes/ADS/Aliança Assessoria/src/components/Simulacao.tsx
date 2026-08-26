import { useState } from 'react';
import {
  Sparkles,
  Car,
  Bike,
  Truck,
  Package,
  ChevronRight,
  Clock,
  Shield,
  Check,
  type LucideIcon,
} from 'lucide-react';

interface Option {
  icon: LucideIcon;
  iconClass: string;
  label: string;
}

const options: Option[] = [
  { icon: Car, iconClass: 'lucide lucide-car text-white', label: 'Tenho um Carro Financiado' },
  { icon: Bike, iconClass: 'lucide lucide-bike text-white', label: 'Tenho uma Moto Financiada' },
  { icon: Truck, iconClass: 'lucide lucide-truck text-white', label: 'Tenho um Caminhão Financiado' },
  { icon: Package, iconClass: 'lucide lucide-package text-white', label: 'Tenho Outro Veículo Financiado' },
];

export default function Simulacao() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="simulacao" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0B2447]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2447]/8 border border-[#0B2447]/20 rounded-full text-sm font-semibold mb-4 text-[#0B2447]">
            <Sparkles className="lucide lucide-sparkles text-amber-500" width={14} height={14} />
            Simulação em 4 Passos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2447] mb-3">
            Faça sua <span className="text-amber-500">Simulação Gratuita</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Descubra quanto você pode economizar no seu financiamento!
          </p>
        </div>
        <div className="mb-8 md:mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">Passo 1 de 4</span>
            <span className="text-sm font-bold text-amber-600">25%</span>
          </div>
          <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0B2447] to-amber-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: '25%' }}
            ></div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-100 overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-black text-[#0B2447]">1. QUAL O SEU FINANCIAMENTO?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {options.map((opt, idx) => {
                  const Icon = opt.icon;
                  const isSelected = selected === idx;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => setSelected(idx)}
                      className={`group p-4 md:p-6 rounded-2xl border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? 'border-amber-500 shadow-md bg-amber-50'
                          : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all bg-[#0B2447] group-hover:bg-[#19376D]">
                          <Icon className={opt.iconClass} width={20} height={20} />
                        </div>
                        <span className="flex-1 text-sm md:text-base font-semibold text-slate-900">
                          {opt.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-5 md:p-6 border-t-2 border-slate-100">
            <div className="flex gap-3 md:gap-4">
              <button
                disabled={selected === null}
                className="flex-1 px-5 py-3 bg-gradient-to-r from-[#0B2447] to-[#19376D] text-white rounded-xl font-bold hover:from-[#19376D] hover:to-[#0B2447] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                Próximo
                <ChevronRight className="lucide lucide-chevron-right" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock className="lucide lucide-clock text-amber-500" width={14} height={14} />
            <span>Resposta em 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="lucide lucide-shield text-amber-500" width={14} height={14} />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="lucide lucide-check text-amber-500" width={14} height={14} />
            <span>Sem compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
