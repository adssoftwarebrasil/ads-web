import { useState } from 'react';
import { Wine } from 'lucide-react';

export default function AgeVerification() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 md:p-10 text-center shadow-2xl animate-fade-in-up">
        <div className="w-20 h-20 bg-[rgb(176,146,71)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Wine size={40} className="text-[rgb(176,146,71)]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[rgb(40,44,115)] mb-4">Verificação de Idade</h2>
        <p className="text-gray-600 mb-2 text-lg">Este site contém informações sobre bebidas alcoólicas.</p>
        <p className="text-gray-700 font-semibold mb-8 text-lg">Você tem 18 anos ou mais?</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setVisible(false)}
            className="flex-1 h-14 bg-[rgb(40,44,115)] text-white font-semibold rounded-lg hover:bg-[rgb(176,146,71)] transition-all duration-300 hover:scale-105"
          >
            Sim, tenho 18+
          </button>
          <button
            onClick={() => { window.location.href = 'https://www.google.com'; }}
            className="flex-1 h-14 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Não
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          Ao confirmar, você declara ter idade legal para consumo de bebidas alcoólicas conforme a legislação brasileira.
        </p>
      </div>
    </div>
  );
}
