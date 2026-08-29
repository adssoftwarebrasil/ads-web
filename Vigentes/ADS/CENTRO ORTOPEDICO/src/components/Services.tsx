import { Activity, Wrench, BrainCircuit, Cpu } from 'lucide-react';

const servicos = [
  {
    icon: Activity,
    titulo: 'Baropodometria',
    texto:
      'Avaliação computadorizada da pisada, que mede a distribuição de pressão nos pés e fundamenta a prescrição das palmilhas.',
  },
  {
    icon: Wrench,
    titulo: 'Oficina técnica',
    texto:
      'Fabricação, adaptação, manutenção e reparo de próteses e órteses no local, sem depender de terceiros.',
  },
  {
    icon: BrainCircuit,
    titulo: 'Neuropróteses',
    texto:
      'Dispositivos voltados à reabilitação neuromotora, indicados em casos de sequelas neurológicas.',
  },
  {
    icon: Cpu,
    titulo: 'CAD CAM RODIN 4D',
    texto:
      'Modelagem e usinagem digital de dispositivos ortopédicos, com registro do modelo para refações futuras.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[#0e6d8f] font-bold text-sm uppercase tracking-[0.2em]">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3d5c] mt-3 mb-5 leading-tight">
            Avaliação, fabricação e acompanhamento
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            O paciente é avaliado, a peça é produzida e o ajuste continua depois da entrega — tudo
            sob o mesmo teto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {servicos.map(({ icon: Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="flex gap-5 border border-gray-100 rounded-2xl p-8 hover:border-[#0e6d8f]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#14a3c7]/10 flex items-center justify-center">
                <Icon size={24} className="text-[#0e6d8f]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0b3d5c] mb-3">{titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
