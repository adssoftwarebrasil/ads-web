import { Clock } from 'lucide-react';

interface Schedule {
  day: string;
  hours: string;
  closed?: boolean;
}

const schedule: Schedule[] = [
  { day: 'Segunda a Sexta', hours: '8:30 - 12:00 | 13:30 - 18:00' },
  { day: 'Sábado', hours: '8:30 - 12:00' },
  { day: 'Domingo', hours: 'FECHADO', closed: true },
];

export default function Hours() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#363435] mb-4">Horário de Funcionamento</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#FDF341] hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-6">
              <Clock size={48} className="text-[#363435]" />
            </div>
            <div className="text-center mb-6">
              <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                ABERTO AGORA
              </span>
            </div>
            <div className="space-y-4 text-center">
              {schedule.map((item) => (
                <div key={item.day} className="text-lg">
                  <div className="font-bold text-[#363435] mb-2">{item.day}</div>
                  <div className={item.closed ? 'text-red-600 font-semibold' : 'text-gray-600'}>{item.hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
