import { Sparkles } from 'lucide-react';

export default function OptimizerCta() {
  return (
    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 bg-white bg-opacity-20 rounded-lg">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">Otimizador de Perfil com IA</h2>
            <p className="text-blue-100">
              Utilize inteligência artificial para otimizar e ranquear seu perfil no Google
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-100">
          <span>Clique para acessar</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
}
