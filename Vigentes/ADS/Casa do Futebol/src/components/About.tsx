import { Trophy, Users, ShieldCheck, Clock } from 'lucide-react';

const DIFFERENTIALS = [
  {
    icon: Trophy,
    title: 'Excelência Esportiva',
    description: 'Metodologia profissional que desenvolve as habilidades técnicas, táticas e físicas dos atletas, promovendo evolução contínua em todas as faixas etárias.',
  },
  {
    icon: Users,
    title: 'Corpo Docente Qualificado',
    description: 'Professores experientes e capacitados, comprometidos com o desenvolvimento esportivo, disciplinar e pessoal de cada aluno dentro e fora de campo.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade no Ensino',
    description: 'Treinamentos modernos e personalizados, realizados em um ambiente seguro e estruturado para oferecer a melhor experiência de aprendizado e evolução.',
  },
  {
    icon: Clock,
    title: '+6 Anos de Experiência',
    description: 'Há mais de 6 anos formando atletas e transformando vidas em Mato Grosso, com dedicação, credibilidade e resultados que fazem a diferença.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#236E45]/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-[#236E45] rounded-full" />
              <span className="text-[#236E45] text-sm font-semibold tracking-wide uppercase">Sobre Nós</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#363434] leading-tight mb-6">
              Há mais de 6 anos formando atletas e{' '}
              <span className="text-[#236E45]">transformando vidas</span>{' '}
              através do futebol
            </h2>

            <p className="text-[#363434]/70 text-lg leading-relaxed mb-6">
              A <strong className="text-[#363434]">Casa do Futebol</strong> nasceu com o propósito de
              desenvolver talentos, incentivar a prática esportiva e contribuir para a formação de crianças,
              adolescentes e jovens por meio do esporte. Com uma metodologia focada em disciplina, respeito e
              evolução, oferecemos um ambiente seguro e preparado para o crescimento de nossos alunos.
            </p>

            <p className="text-[#363434]/70 text-base leading-relaxed mb-6">
              Nossa missão vai além das quatro linhas. Acreditamos que o futebol é uma ferramenta capaz de
              ensinar valores essenciais para a vida, como trabalho em equipe, comprometimento,
              responsabilidade e superação. Por isso, buscamos formar não apenas atletas, mas cidadãos
              preparados para os desafios dentro e fora de campo.
            </p>

            <p className="text-[#363434]/70 text-base leading-relaxed mb-8">
              Contamos com uma equipe qualificada e apaixonada pelo esporte, oferecendo treinamentos de
              qualidade, acompanhamento técnico e uma estrutura pensada para proporcionar a melhor
              experiência aos nossos alunos e suas famílias. Ao longo dos anos, temos orgulho de fazer parte
              da trajetória de centenas de atletas que encontraram na Casa do Futebol um espaço para
              aprender, evoluir e realizar seus sonhos.
            </p>

            <a
              href="http://wa.me/556581172880?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Grama%20Sintética%20Mato%20Grosso%20e%20a%20Casa%20do%20Futebol."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#236E45] hover:bg-[#2C4D39] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Fale com um especialista
            </a>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/criancas-treinador-futebol-gramado-estadio_1440x1080.webp"
                alt="Crianças treinando com treinador"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C4D39]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/logo-grama-sintetica-mato-grosso-verde_1563x1563.webp"
                      alt="Logo"
                      className="h-12 w-12 object-contain rounded-lg bg-[#236E45]/10 p-1"
                    />
                    <div>
                      <div className="font-bold text-[#363434] text-sm">Escolinha de Futebol</div>
                      <div className="text-[#236E45] text-xs font-medium">Cuiabá · Mato Grosso · 8h às 20h30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#236E45]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2C4D39]/20 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-[#363434]/4 hover:bg-[#236E45] rounded-2xl transition-all duration-300 border border-[#C8CAC9]/30 hover:border-[#236E45] hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-[#236E45]/15 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                <item.icon className="text-[#236E45] group-hover:text-white transition-colors duration-300" size={22} />
              </div>
              <h3 className="font-bold text-[#363434] group-hover:text-white text-base mb-2 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#363434]/65 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
