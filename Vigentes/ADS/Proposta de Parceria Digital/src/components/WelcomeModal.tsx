import { X, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-8 md:p-12">
          <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Importante: Condições Especiais</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              <span className="font-semibold text-slate-900">Observação:</span> Os valores apresentados podem ser
              negociados de acordo com a demanda e volume de projetos da agência. Entre em contato para discutirmos
              condições especiais para parcerias de longo prazo.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900 mb-1">Vantagens para parcerias contínuas:</p>
                <ul className="space-y-1">
                  <li>• Descontos progressivos por volume</li>
                  <li>• Prioridade no atendimento</li>
                  <li>• Condições flexíveis de pagamento</li>
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            Entendi, ver proposta completa
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
