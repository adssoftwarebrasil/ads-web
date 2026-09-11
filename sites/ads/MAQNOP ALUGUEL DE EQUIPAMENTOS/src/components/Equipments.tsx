import { MessageCircle } from 'lucide-react';

interface Equipment {
  name: string;
  image: string;
  description: string;
}

const equipments: Equipment[] = [
  {
    name: 'Alisadora de Concreto',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/alisadora-de-concreto-amarela-motor-azul_841x1280.webp',
    description:
      'Uma alisadora de concreto é usada para criar um acabamento nivelado e suave em uma grande área plana de concreto. Ideal para pisos internos, lajes e pátios. Utiliza lâminas simples ou múltiplas que giram em uma gaiola de segurança.',
  },
  {
    name: 'Andaime 1×1',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/andaime-metalico-laranja-cinza-externo_750x1280.webp',
    description:
      'O andaime tubular 1×1 é um equipamento fundamental para trabalhos em altura na construção civil, manutenção predial e industrial. Estrutura tubular de ferro com 1 metro de largura por 1 metro de altura, podendo ser montado em diferentes alturas.',
  },
  {
    name: 'Andaime 1×1,5',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/pilha-de-estruturas-metalicas-tubulares-cinzas_719x1280.webp',
    description:
      'Estrutura projetada para fornecer acesso a áreas elevadas, servindo como plataforma de trabalho com maior mobilidade e produtividade.',
  },
  {
    name: 'Aspirador de Pó',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/aspirador-po-vonder-40lt-inox-laranja_832x1280.webp',
    description:
      'Linha: Profissional | Potência: 1.200 W | Voltagem: 220V | Capacidade: 40L | Aspiração: sólidos e líquidos | Mangueira: 3m',
  },
  {
    name: 'Betoneira 400 Litros',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/betoneira-laranja-metalpama-400l-equipamento-construcao_791x1280.webp',
    description:
      'Utilizada para preparar concreto e massa para reboco, misturando cimento, areia, pedra e água até alcançar a consistência ideal.',
  },
  {
    name: 'Betoneira 200 Litros',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/betoneira-amarela-menegotti-galpao-aluguel_591x1280.webp',
    description: 'Betoneiras eficientes para mistura de concreto.',
  },
  {
    name: 'Bomba Submersa',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/bomba-submersa-azul-com-sensor-boia_591x1280.webp',
    description:
      'Indicada para drenagem de água em grandes profundidades, abastecimento e limpeza de reservatórios.',
  },
  {
    name: 'Compactador de Solo',
    image: 'https://storage.lucasmendes.dev/site-sp/maqnop/img/compactador-de-solo-vibratorio-amarelo-e-preto_808x1280.webp',
    description: 'Compactadores para diferentes tipos de terrenos.',
  },
];

const waHref = (name: string) =>
  `http://wa.me/556699111966?text=${encodeURIComponent(
    `Olá! Gostaria de alugar: ${name}. Podem me passar mais informações?`
  )}`;

const delays = ['0ms', '100ms', '200ms', '300ms'];

export default function Equipments() {
  return (
    <section id="equipamentos" className="py-20 sm:py-24 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Nosso Catálogo</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
            Equipamentos para<span className="text-brand-orange"> Toda Sua Obra</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base">
            Disponibilizamos uma linha completa de equipamentos revisados e prontos para uso. Clique em qualquer equipamento para solicitar um orçamento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {equipments.map((eq, i) => (
            <a
              key={eq.name}
              href={waHref(eq.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: delays[i % 4] }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-gray-900 font-bold text-lg sm:text-xl">{eq.name}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">{eq.description}</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="w-full flex items-center justify-center gap-2 bg-[#25D366] group-hover:bg-[#128C7E] text-white px-4 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Orçamento
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25">
            Ver Todos os Equipamentos (38)
          </button>
        </div>
      </div>
    </section>
  );
}
