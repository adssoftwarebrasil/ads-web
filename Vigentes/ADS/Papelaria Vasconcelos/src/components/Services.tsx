import { Printer, Backpack, FileText, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Printer,
    iconClass: 'lucide lucide-printer',
    title: 'Impressão Profissional',
    text: 'Documentos, trabalhos escolares e materiais corporativos com qualidade superior. Diversos formatos e acabamentos disponíveis.',
  },
  {
    icon: Backpack,
    iconClass: 'lucide lucide-backpack',
    title: 'Material Escolar Completo',
    text: 'Tudo que você precisa para o ano letivo: cadernos, canetas, mochilas, materiais de arte e muito mais. Marcas de confiança e variedade.',
  },
  {
    icon: FileText,
    iconClass: 'lucide lucide-file-text',
    title: 'Xerox Rápido',
    text: 'Cópias de documentos com agilidade e preço justo. Atendimento rápido para suas necessidades urgentes.',
  },
  {
    icon: Smartphone,
    iconClass: 'lucide lucide-smartphone',
    title: 'Recargas VEM e Telefônica',
    text: 'Praticidade para suas recargas de transporte público e celular. Atendimento ágil e sem complicação.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(0,148,216)]/10 px-5 py-2 rounded-full mb-6">
            <p className="text-[rgb(0,148,216)] font-semibold text-sm tracking-wide">O QUE OFERECEMOS</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[rgb(45,52,142)] mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[rgb(0,148,216)]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-[rgb(0,148,216)] to-[rgb(18,70,156)] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon width={36} height={36} strokeWidth={2.5} className={`${s.iconClass} text-white`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[rgb(45,52,142)] mb-4 group-hover:text-[rgb(0,148,216)] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
