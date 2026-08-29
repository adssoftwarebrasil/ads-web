interface Service {
  img: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace%2FConsulte%20nossas%20ofertas%20para%20estadias.webp',
    title: 'Promoções Especiais',
    text: 'Consulte nossas ofertas exclusivas para estadias prolongadas e pacotes especiais',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace%2FIdeal%20para%20reunio%CC%83es%20e%20eventos%20sociais.webp',
    title: 'Eventos e Reuniões',
    text: 'Espaço ideal para reuniões corporativas e eventos sociais',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace%2FConexa%CC%83o%20sem%20custos%20durante%20toda%20a%20sua%20estadia.webp',
    title: 'Wi-Fi Gratuito',
    text: 'Conexão de alta velocidade em todos os ambientes do hotel',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace%2FEstacionamento%20seguro%20para%20nossos%20ho%CC%81spedes.webp',
    title: 'Estacionamento Seguro',
    text: 'Estacionamento privativo e monitorado para sua tranquilidade',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace%2FAtendimento%20ra%CC%81pido%20e%20pra%CC%81tico%20na%20sua%20estadia.webp',
    title: 'Recepção 24 Horas',
    text: 'Atendimento rápido e prático durante toda sua estadia',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace%2Fcafe-manha-buffet.webp',
    title: 'Café da Manhã Completo',
    text: 'Buffet variado com opções doces e salgadas para começar bem o dia',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px]">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#F09100] text-xs uppercase tracking-[2px] font-semibold mb-3">
            NOSSA ESTRUTURA
          </p>
          <h2 className="text-[#1A1A1A] text-3xl lg:text-5xl font-bold mb-4">
            Serviços de Qualidade para Sua Estadia
          </h2>
          <p className="text-[#4A4A4A] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            O Calderan Palace Hotel combina conforto, praticidade e excelente atendimento no centro
            de Jardim-MS desde 1999.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1A1A1A] text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
