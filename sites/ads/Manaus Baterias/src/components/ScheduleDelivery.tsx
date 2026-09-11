import { Calendar, Truck, CreditCard, Wrench } from 'lucide-react';

export function ScheduleDelivery() {
  const badges = [
    { icon: Truck, text: 'Entrega Rápida' },
    { icon: CreditCard, text: 'Pagamento Facilitado' },
    { icon: Wrench, text: 'Instalação Inclusa' },
  ];

  return (
    <section className="py-20 bg-[#1E3A8A]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Agende uma Entrega</h2>
        <p className="text-xl text-white mb-4">Receba sua bateria no conforto de sua casa</p>
        <p className="text-2xl text-[#FCD34D] mb-10 font-semibold">
          Qualidade com o melhor preço da região
        </p>

        <a
          href="https://wa.me/5592981059681?text=Olá!%20Gostaria%20de%20agendar%20uma%20entrega."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-[#059669] text-white px-10 py-5 rounded-xl hover:brightness-110 transition-all transform hover:scale-105 text-lg font-bold shadow-2xl mb-12"
        >
          <Calendar className="w-6 h-6" />
          <span>AGENDAR PELO WHATSAPP</span>
        </a>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="glassmorphism px-6 py-4 rounded-lg flex items-center space-x-3"
            >
              <badge.icon className="w-6 h-6 text-[#FCD34D]" />
              <span className="text-white font-semibold">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
