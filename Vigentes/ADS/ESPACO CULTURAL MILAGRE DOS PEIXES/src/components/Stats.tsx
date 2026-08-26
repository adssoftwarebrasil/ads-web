import { TrendingUp, BookOpen, Users, Calendar } from 'lucide-react';

const stats = [
  { Icon: TrendingUp, bg: 'bg-[#ED1B24]', value: '18', label: 'Anos de Tradição' },
  { Icon: BookOpen, bg: 'bg-[#145D3D]', value: '50+', label: 'Cursos Disponíveis' },
  { Icon: Users, bg: 'bg-[#B1D044]', value: '10.000+', label: 'Alunos Formados' },
  { Icon: Calendar, bg: 'bg-[#E1A89F]', value: '200+', label: 'Eventos Realizados' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ED1B24] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B1D044] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ Icon, bg, value, label }) => (
            <div
              key={label}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`${bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <Icon className="text-white" size={32} />
              </div>
              <div className="text-5xl font-bold text-white mb-2">{value}</div>
              <div className="text-lg text-gray-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
