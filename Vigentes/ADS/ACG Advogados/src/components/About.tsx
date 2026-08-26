import { Users, Building2, TrendingUp, Heart } from 'lucide-react';

const highlights = [
  { Icon: Users, title: 'Equipe Experiente', text: '6 advogados especializados' },
  { Icon: Building2, title: '4 Cidades', text: 'Presença em todo Tocantins' },
  { Icon: TrendingUp, title: 'Advocacia Preventiva', text: 'Evitamos problemas futuros' },
  { Icon: Heart, title: 'Atendimento Humanizado', text: 'Transparência e confiança' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Equipe ACG Advogados"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(16,17,12)]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[rgb(175,145,93)] text-[rgb(16,17,12)] p-8 rounded-xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold mb-2">+9 Anos</p>
              <p className="text-lg font-semibold">de excelência jurídica</p>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-[rgb(175,145,93)] font-bold text-sm tracking-widest uppercase">
                Sobre o ACG Advogados
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[rgb(16,17,12)] mt-4 mb-6 leading-tight">
                Comprometidos com a Justiça e Seus Direitos
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              O escritório <strong>ABREU, CARDOSO &amp; GOMES ADVOGADOS S/S</strong> foi fundado em maio de 2015 com um
              objetivo claro: oferecer assessoria jurídica de excelência, baseada na confiança, transparência e
              compromisso com resultados.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Somos um escritório técnico e dinâmico, sediado em Palmas-TO, formado pelos sócios{' '}
              <strong>Abel Cardoso de Souza Neto, Bernardino de Abreu Neto e Rogério Gomes Coelho</strong>, advogados
              inscritos na OAB/TO.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa equipe é composta por profissionais de alta qualidade técnica, com larga experiência e
              especializações nas mais diversas áreas do Direito, garantindo atendimento especializado e humanizado para
              cada cliente.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {highlights.map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start space-x-4">
                  <div className="bg-[rgb(175,145,93)]/10 p-3 rounded-lg">
                    <Icon size={28} className="text-[rgb(175,145,93)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(16,17,12)] text-lg mb-1">{title}</h4>
                    <p className="text-gray-600 text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/556399974853"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-8 py-4 rounded-lg hover:bg-[rgb(16,17,12)] hover:text-[rgb(175,145,93)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agende Sua Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
