import { Armchair, PersonStanding, Footprints, CalendarClock } from 'lucide-react';
import { whatsapp } from '../lib/contato';

const itens = [
  { icon: Armchair, titulo: 'Cadeiras de rodas' },
  { icon: PersonStanding, titulo: 'Andadores' },
  { icon: Footprints, titulo: 'Muletas' },
  { icon: CalendarClock, titulo: 'Bota imobilizadora' },
];

export default function Rentals() {
  return (
    <section id="locacao" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#0e6d8f] font-bold text-sm uppercase tracking-[0.2em]">
              Locação
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3d5c] mt-3 mb-5 leading-tight">
              Alugue o que você vai usar por pouco tempo
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Recuperação de cirurgia, fratura ou pós-operatório raramente exigem a compra do
              equipamento. Trabalhamos com locação para que o custo acompanhe o tempo real de uso.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Consulte prazos, condições e disponibilidade — entregamos o equipamento já regulado
              para a altura e o peso do paciente.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {itens.map(({ icon: Icon, titulo }) => (
              <a
                key={titulo}
                href={whatsapp(`Olá! Gostaria de consultar a locação de: ${titulo}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#f59e0b] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-4 group-hover:bg-[#f59e0b] transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-[#d97706] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0b3d5c] mb-1">{titulo}</h3>
                <span className="text-sm text-[#0e6d8f] font-semibold">Consultar →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
