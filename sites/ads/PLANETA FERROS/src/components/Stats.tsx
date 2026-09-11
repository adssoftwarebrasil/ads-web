interface Stat {
  value: string;
  label: string;
  cellClass: string;
}

const stats: Stat[] = [
  { value: '6+', label: 'Anos de experiência', cellClass: 'text-center p-6 md:p-10 border-r border-gray-100 ' },
  { value: '4', label: 'Cidades atendidas', cellClass: 'text-center p-6 md:p-10 border-r border-gray-100 ' },
  {
    value: '5+',
    label: 'Linhas de produtos',
    cellClass: 'text-center p-6 md:p-10 border-r border-gray-100 border-t border-gray-100 lg:border-t-0',
  },
  {
    value: '100%',
    label: 'Foco na construção civil',
    cellClass: 'text-center p-6 md:p-10  border-t border-gray-100 lg:border-t-0',
  },
];

export default function Stats() {
  return (
    <div className="w-full py-10 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className={stat.cellClass}>
                <div className="font-display text-3xl md:text-5xl font-bold text-accent mb-2">
                  <span>{stat.value}</span>
                </div>
                <div className="text-primary text-xs md:text-sm font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
