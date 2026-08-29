import { HeartHandshake, Users, Award } from 'lucide-react';
import { ANOS_DE_TRADICAO } from '../lib/contato';

const pilares = [
  {
    icon: Award,
    titulo: 'Tradição comprovada',
    texto: `${ANOS_DE_TRADICAO} anos atendendo Fortaleza e todo o Ceará, com reconhecimento na fabricação de coletes ortopédicos 3D.`,
  },
  {
    icon: Users,
    titulo: 'Equipe técnica qualificada',
    texto: 'Técnico ortopédico e fisioterapeutas acompanham cada etapa, da avaliação à entrega da peça.',
  },
  {
    icon: HeartHandshake,
    titulo: 'Atendimento humanizado',
    texto: 'Compromisso com o bem-estar do paciente e excelência em cada produto que sai da oficina.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[#0e6d8f] font-bold text-sm uppercase tracking-[0.2em]">
            Quem somos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3d5c] mt-3 mb-5 leading-tight">
            Referência em ortopedia técnica no Ceará
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            O Centro Ortopédico nasceu para resolver um problema simples de enunciar e difícil de
            executar: cada corpo é diferente, e um dispositivo ortopédico só funciona quando respeita
            essa diferença. Por isso trabalhamos sob medida, com produção própria e matéria-prima de
            alta qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pilares.map(({ icon: Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-[#0e6d8f]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0e6d8f]/10 flex items-center justify-center mb-5">
                <Icon size={24} className="text-[#0e6d8f]" />
              </div>
              <h3 className="text-xl font-bold text-[#0b3d5c] mb-3">{titulo}</h3>
              <p className="text-gray-600 leading-relaxed">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
