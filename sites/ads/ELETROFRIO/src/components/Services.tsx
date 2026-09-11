import { ShoppingCart } from 'lucide-react';

const services = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Frevenda-e-assistencia-tecnica.webp',
    title: 'Assistência Técnica WEG',
    desc: 'Revenda e assistência técnica em motores elétricos Weg, motores monofásico e trifásico, diversas potências cv, alta e baixa rotação.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Findustria-4-0.webp',
    title: 'Industria 4.0',
    desc: 'Sistema de monitoramento de ativos, prevenção de falhas, não deixe sua produção parar com o sistema de monitoramento e possível programar as paradas, não acarretando prejuízos financeiros e na sua produção, faça uma simulação entre em contato conosco.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fconsultoria-tecnica.webp',
    title: 'Consultoria Técnica',
    desc: 'Orientação técnica para melhor uso de equipamentos.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fmanutencao-de-bombas.webp',
    title: "Qualidade em Bombas D'água",
    desc: 'Manutenção e revenda em bombas d’água. Assistência técnica e revenda autorizada Franklin motobombas.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fmanutencao-em-geradores.webp',
    title: 'Manutenção em Gerador',
    desc: 'Manutenção preventiva, preditiva e corretiva',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fmaterial-eletrico.webp',
    title: 'Venda de Peças Elétricas',
    desc: 'Linha completa, disjuntores, contatores, Chaves pdw, reles, inversores, softstarter CLP, botões sinaleiros, bobinas, tomdas industriais.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[rgb(16,130,201)] font-semibold text-lg mb-3">Nossos serviços</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Conheça Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços especializados em manutenção e revenda de equipamentos elétricos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(28,85,163)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                <a
                  href="http://wa.me/5564999368011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[rgb(28,85,163)] font-semibold hover:text-[rgb(16,130,201)] transition-colors mt-auto"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-[rgb(28,85,163)] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Agende uma Visita!</h3>
            <p className="text-lg mb-6">Solicite agendamento para nossa equipe visitar sua empresa.</p>
            <a
              href="http://wa.me/5564999368011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[rgb(28,85,163)] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
