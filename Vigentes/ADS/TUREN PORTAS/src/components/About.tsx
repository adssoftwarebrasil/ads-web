import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Fundada em agosto de 2020 em Sinop – MT',
  'Pioneiros em portas 100% WPC no Centro-Oeste',
  'Especialistas em projetos residenciais e comerciais',
  'Atendimento personalizado e consultivo',
  'Produtos com tecnologia de ponta e sustentabilidade',
  'Nota máxima (5.0) nas avaliações do Google',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#005143]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-[#DE8F52]/20 -z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#ECC4A4]/15 -z-0"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Showroom Turen Portas"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005143]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-[#DE8F52] text-white rounded-xl px-5 py-4 shadow-xl">
                <p className="text-3xl font-bold leading-none">5+</p>
                <p className="text-sm font-medium mt-1 text-white/90">Anos de Excelência</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[#ECC4A4] font-semibold text-sm uppercase tracking-widest">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              Referência em Portas de <span className="text-[#ECC4A4]">Alto Padrão</span> no
              Centro-Oeste
            </h2>
            <p className="text-[#ECC4A4]/80 text-base leading-relaxed mb-5">
              A Turen Portas nasceu em agosto de 2020 com uma missão clara: levar tecnologia e
              sofisticação ao mercado de portas internas em Sinop e região. Desde o início,
              apostamos na inovação sendo{' '}
              <strong className="text-[#ECC4A4]">
                pioneiros no Centro-Oeste na oferta de portas 100% WPC à prova d'água
              </strong>
              .
            </p>
            <p className="text-[#ECC4A4]/80 text-base leading-relaxed mb-8">
              Nossos produtos são desenvolvidos com tecnologia avançada, unindo estética premium e
              funcionalidade máxima. Atendemos projetos residenciais e comerciais que exigem
              durabilidade, beleza e baixíssima manutenção. Cada porta que sai da Turen é um
              compromisso com a qualidade e a valorização do seu imóvel.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[#ECC4A4]/90 text-sm">
                  <CheckCircle2 width={16} height={16} className="text-[#DE8F52] mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5566999118484?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Turen%20Portas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#DE8F52] hover:bg-[#c47a40] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Fale Com Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
