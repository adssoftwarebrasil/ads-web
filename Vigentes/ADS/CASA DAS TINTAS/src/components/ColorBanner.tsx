export default function ColorBanner() {
  const colors = [
    'rgb(235,49,60)',
    'rgb(240,214,44)',
    'rgb(108,189,81)',
    'rgb(17,157,219)',
    'rgb(111,196,233)',
    'rgb(1,1,1)',
    'rgb(255,255,255)',
    'rgb(235,49,60)',
    'rgb(240,214,44)',
    'rgb(108,189,81)',
    'rgb(17,157,219)',
    'rgb(111,196,233)',
  ];

  return (
    <div className="relative overflow-hidden py-16 bg-white">
      <div className="absolute inset-0 flex">
        {colors.map((color, i) => (
          <div
            key={i}
            className="flex-1 opacity-10"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-2">
              Mais de <span style={{ color: 'rgb(17,157,219)' }}>1.000 cores</span> disponíveis
            </h2>
            <p className="text-gray-600 text-sm max-w-lg">
              Misturamos a cor exata que você imaginou. Tecnologia de colorimetria profissional para garantir a cor perfeita no seu projeto.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="http://wa.me/556697173455?text=Olá! Quero ver as opções de cores disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap"
              style={{ backgroundColor: 'rgb(17,157,219)' }}
            >
              Ver Catálogo de Cores
            </a>
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 whitespace-nowrap border-2 border-black/15 text-black hover:border-[rgb(17,157,219)] hover:text-[rgb(17,157,219)]"
            >
              Solicitar Amostra
            </a>
          </div>
        </div>

        <div className="flex gap-2 mt-10 overflow-x-auto pb-2 scrollbar-hide">
          {[
            'rgb(235,49,60)', 'rgb(240,100,50)', 'rgb(240,160,40)', 'rgb(240,214,44)',
            'rgb(180,210,50)', 'rgb(108,189,81)', 'rgb(50,180,120)', 'rgb(17,157,219)',
            'rgb(111,196,233)', 'rgb(50,100,200)', 'rgb(100,60,180)', 'rgb(180,60,120)',
            'rgb(200,100,100)', 'rgb(160,120,80)', 'rgb(120,100,80)', 'rgb(80,80,80)',
            'rgb(180,180,180)', 'rgb(230,230,230)', 'rgb(255,255,255)', 'rgb(1,1,1)',
          ].map((color, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
