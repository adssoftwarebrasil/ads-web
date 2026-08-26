import { Award, Clock, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    gradient: 'from-[rgb(0,148,216)] to-[rgb(18,70,156)]',
    overlay: 'from-[rgb(0,148,216)] to-[rgb(18,70,156)]',
    title: '26 Anos de Tradição',
    text: 'Experiência que você pode confiar',
    delay: '0s',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    gradient: 'from-[rgb(18,70,156)] to-[rgb(45,52,142)]',
    overlay: 'from-[rgb(18,70,156)] to-[rgb(45,52,142)]',
    title: 'Segunda a Sábado',
    text: 'Sempre prontos para te atender',
    delay: '0.15s',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    gradient: 'from-[rgb(45,52,142)] to-[rgb(0,148,216)]',
    overlay: 'from-[rgb(45,52,142)] to-[rgb(0,148,216)]',
    title: 'Afogados - Recife',
    text: 'Estrada dos Remédios, 352',
    delay: '0.3s',
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 md:p-10 border border-gray-100 overflow-hidden"
                style={{ animationDelay: s.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.overlay} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                  <div
                    className={`bg-gradient-to-br ${s.gradient} p-6 rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon width={40} height={40} strokeWidth={2.5} className={`${s.iconClass} text-white`} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[rgb(45,52,142)] mb-3 group-hover:text-[rgb(0,148,216)] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{s.text}</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[rgb(0,148,216)]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
