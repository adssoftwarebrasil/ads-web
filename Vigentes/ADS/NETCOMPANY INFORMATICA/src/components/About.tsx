import { CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2009', text: 'Fundação como LAN House em Marabá – PA' },
  { year: '2012', text: 'Expansão para assistência técnica em computadores' },
  { year: '2016', text: 'Abertura da loja de produtos e suprimentos' },
  { year: '2020', text: 'Expansão do portfólio com linha Gamer e atendimento empresarial' },
  { year: '2024', text: '15 anos com mais de 5.000 clientes atendidos' },
];

const highlights = [
  'Atendimento residencial e empresarial',
  'Equipe técnica certificada e experiente',
  'Produtos originais e compatíveis',
  'Orçamento gratuito sem compromisso',
  'Atendimento via WhatsApp, telefone e presencial',
  'Parcelamento disponível',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#F58842] font-semibold text-sm uppercase tracking-widest">
              Nossa história
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A] leading-tight">
              De LAN House a Referência em Tecnologia em Marabá
            </h2>
            <p className="mt-5 text-gray-500 text-base leading-relaxed">
              A NetCompany Informática surgiu em 2009 como uma LAN House, prestando serviços de
              acesso à internet para a comunidade. Com a chegada dos smartphones e a evolução
              tecnológica, percebemos a oportunidade de crescer e nos tornamos uma completa
              assistência técnica e loja de informática.
            </p>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              Hoje, com mais de 15 anos de mercado em Marabá, atendemos residências e empresas com a
              mesma dedicação e compromisso de sempre. Nossa missão é oferecer soluções em tecnologia
              com qualidade, agilidade e preço justo.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-[#3069A3] mt-0.5 shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            <a
              href="http://wa.me/559491941919"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#3069A3] hover:bg-[#245a8e] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-200"
            >
              Conheça a Equipe
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/img/nossa-hiostoria.webp"
                alt="Equipe NetCompany"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 sm:h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#3069A3] rounded-2xl p-5 shadow-xl">
                <div className="text-white font-extrabold text-3xl">15+</div>
                <div className="text-blue-100 text-sm">Anos no mercado</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-[#F58842] rounded-2xl p-5 shadow-xl">
                <div className="text-white font-extrabold text-3xl">4.8</div>
                <div className="text-orange-100 text-sm">Google</div>
              </div>
            </div>

            <div className="mt-12 space-y-3">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-center gap-4 group">
                  <div className="w-14 h-8 bg-[#3069A3]/10 group-hover:bg-[#3069A3] rounded-lg flex items-center justify-center text-[#3069A3] group-hover:text-white font-bold text-xs transition-all duration-200">
                    {m.year}
                  </div>
                  <div className="text-gray-600 text-sm flex-1">{m.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
