import { useState } from 'react';
import { TrendingUp, Sun, Calculator, Info, Send } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { formatBRL, WHATSAPP_URL } from '../lib/utils';

export default function CTA() {
  const [bill, setBill] = useState(350);

  const monthly = bill * 0.8;
  const yearly = monthly * 12;
  const total25 = yearly * 25;

  const openWhatsapp = () => window.open(WHATSAPP_URL, '_blank');

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-[#1b2d72] to-[#162252] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[rgb(235,156,51)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgb(26,110,76)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simule sua Economia Real</h2>
            <p className="text-lg text-gray-300">
              Descubra quanto dinheiro você pode deixar de pagar para a concessionária.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="animate-fade-in space-y-8">
              <div className="text-center space-y-4">
                <p className="text-xl text-white font-medium">Qual o valor médio da sua conta de luz?</p>
                <div className="text-5xl md:text-6xl font-bold text-[rgb(235,156,51)] transition-all">
                  {formatBRL(bill)}
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4">
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[rgb(235,156,51)]"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>R$ 100</span>
                  <span>Arraste para ajustar</span>
                  <span>R$ 3.000+</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group">
                  <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-green-400 group-hover:scale-110 transition-transform">
                    <TrendingUp className="lucide lucide-trending-up" width={24} height={24} />
                  </div>
                  <p className="text-gray-300 text-sm mb-1">Economia Mensal</p>
                  <p className="text-2xl font-bold text-white">{formatBRL(monthly)}</p>
                </div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors transform md:scale-110 md:-translate-y-2 border-[rgb(235,156,51)]/30 shadow-lg shadow-[rgb(235,156,51)]/10 group">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(235,156,51)] text-[#1b2d72] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Melhor Retorno
                  </div>
                  <div className="bg-[rgb(235,156,51)]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-[rgb(235,156,51)] group-hover:rotate-12 transition-transform">
                    <Sun className="lucide lucide-sun" width={24} height={24} />
                  </div>
                  <p className="text-gray-300 text-sm mb-1">Economia em 1 Ano</p>
                  <p className="text-3xl font-bold text-white">{formatBRL(yearly)}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform">
                    <Calculator className="lucide lucide-calculator" width={24} height={24} />
                  </div>
                  <p className="text-gray-300 text-sm mb-1">Em 25 Anos</p>
                  <p className="text-2xl font-bold text-white">{formatBRL(total25)}</p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-2 max-w-2xl mx-auto text-center">
                <Info className="lucide lucide-info text-white/40 mt-0.5 flex-shrink-0" width={16} height={16} />
                <p className="text-xs text-white/40 text-left md:text-center">
                  Cálculo considera a dedução aproximada da{' '}
                  <strong>Taxa Mínima (Custo de Disponibilidade)</strong> e <strong>Iluminação Pública</strong> cobradas
                  na região de Franca. Valores reais podem variar conforme perfil de consumo.
                </p>
              </div>
              <div className="text-center pt-2">
                <button
                  onClick={openWhatsapp}
                  className="bg-[rgb(235,156,51)] hover:bg-[rgb(235,156,51)]/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(235,156,51,0.3)] hover:shadow-[0_0_30px_rgba(235,156,51,0.5)] flex items-center justify-center gap-2 mx-auto w-full md:w-auto hover:-translate-y-1"
                >
                  Quero garantir essa economia
                  <Send className="lucide lucide-send" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="flex items-center gap-4 mb-6 justify-center max-w-md mx-auto">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="text-white/60 text-sm">Ou fale diretamente</span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>
            <button
              onClick={openWhatsapp}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium border border-white/20 hover:border-white/50 px-6 py-2 rounded-full"
            >
              <WhatsappIcon className="w-5 h-5 text-[#25D366]" />
              Não quero simular, apenas falar com atendente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
