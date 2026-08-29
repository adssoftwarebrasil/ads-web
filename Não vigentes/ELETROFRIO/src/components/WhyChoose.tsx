import { CheckCircle, Clock, Headphones, Zap, Settings, Lightbulb } from 'lucide-react';

const reasons = [
  { icon: CheckCircle, title: 'Excelência em Serviços', desc: 'Apoio completo na manutenção e revenda.' },
  { icon: Clock, title: 'Suporte Técnico Ágil', desc: 'Respostas rápidas e soluções eficazes.' },
  {
    icon: Headphones,
    title: 'Assistência Técnica Autorizada',
    desc: 'Oferecemos assistência técnica para motores WEG e Franklin.',
  },
  {
    icon: Zap,
    title: 'Mais de 20 anos de experiência',
    desc: 'Atendimento de qualidade e soluções eficientes para sua empresa.',
  },
  { icon: Settings, title: 'Serviços Personalizados', desc: 'Adaptamos nossos serviços às necessidades de cada cliente.' },
  {
    icon: Lightbulb,
    title: 'Soluções Inovadoras',
    desc: 'Oferecemos tecnologia e inovação na manutenção de equipamentos.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img
          src="https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Findustria-4-0.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-[rgb(16,130,201)] font-semibold text-lg mb-3">Porque Contratar</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por Que Escolher Nossos Serviços?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja razões convincentes para optar pela MINEIROS ELETRO FRIO LTDA em suas soluções elétricas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-[rgb(28,85,163)] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-[rgb(28,85,163)] group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <r.icon size={32} className="text-white group-hover:text-[rgb(28,85,163)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                {r.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fporque-escolher-imagem-1.webp"
              alt="Revenda de peças e materiais com qualidade garantida"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fporque-escolher-imagem-2.webp"
              alt="Assistência técnica especializada"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/5564999368011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(28,85,163)] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[rgb(16,130,201)] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Entre em Contato!
          </a>
          <p className="text-gray-600 mt-4">Fale conosco e receba uma solução rápida.</p>
        </div>
      </div>
    </section>
  );
}
