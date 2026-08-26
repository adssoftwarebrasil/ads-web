const features: string[] = [
  'Análise de palavras-chave',
  'Geração automática de conteúdo',
  'Criação de posts com IA',
  'Otimização de ranqueamento',
];

interface Update {
  dot: string;
  title: string;
  description: string;
}

const updates: Update[] = [
  {
    dot: 'bg-green-500',
    title: 'Sistema atualizado',
    description: 'Novas funcionalidades de IA disponíveis',
  },
  {
    dot: 'bg-blue-500',
    title: 'Melhorias de performance',
    description: 'Interface mais rápida e responsiva',
  },
];

export default function InfoCards() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Recursos Principais</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Atualizações Recentes</h3>
        <div className="space-y-3 text-sm">
          {updates.map((update) => (
            <div key={update.title} className="flex items-start gap-3">
              <div className={`w-2 h-2 ${update.dot} rounded-full mt-1.5`}></div>
              <div>
                <p className="text-gray-900 font-medium">{update.title}</p>
                <p className="text-gray-500">{update.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
