import { Clock, Calendar } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    { day: 'Segunda', hours: '16:00 - 23:00', highlight: false },
    { day: 'Terça a Sexta', hours: '08:00 - 23:00', highlight: true },
    { day: 'Sábado', hours: '08:00 - 22:00', highlight: false },
    { day: 'Domingo', hours: '08:00 - 23:00', highlight: false },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Horários de Funcionamento
            </h2>
            <p className="text-xl text-neutral-dark">
              Estamos prontos para receber você
            </p>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-up">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-6 rounded-xl transition-all ${
                    item.highlight
                      ? 'bg-accent-green-vibrant text-primary-dark'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-6 h-6" />
                    <span className="text-xl font-semibold">{item.day}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-medium">{item.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
