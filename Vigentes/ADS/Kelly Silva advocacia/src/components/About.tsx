const paragraphs = [
  'Advogada especialista em Direito Previdenciário, com mais de 10 anos de atuação e inscrição na OAB/GO 39.151. Minha trajetória é marcada pela dedicação em garantir benefícios por incapacidade e BPC (Benefício de Prestação Continuada) para quem mais precisa — em especial, para crianças com autismo e pessoas em situação de vulnerabilidade.',
  'Minha missão vai além da advocacia: oriento famílias de forma humanizada, com foco na etapa mais decisiva do processo — a perícia médica e a avaliação social. Ao longos dos anos, desenvolvi um método de orientação estratégica para periciais, ajudando meus clientes a evitarem indeferimentos e conquistarem seus direitos de forma mais rápida e segura.',
  'Essa paixão nasceu da minha própria história. Sou mãe de uma menina diagnosticada com autismo nível 1 aos 2 anos, e vivi na pele os desafios, medos e incertezas que tantas outras mães enfrentam. Por isso, minha atuação é guiada por empatia, conhecimento técnico e um forte propósito: cuidar de quem cuida.',
];

export default function About() {
  return (
    <section id="sobre" className="bg-off-white py-16 lg:py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 transition-all duration-1000 opacity-100 translate-x-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2FAdvogada%20Kelly%20Silva.webp"
              alt="Advogada Kelly Silva"
              className="w-full rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-3 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <p className="text-gold font-medium text-sm uppercase tracking-widest mb-3">Prazer, eu sou</p>
            <h2 className="font-bold text-4xl lg:text-5xl text-navy mb-6">Kelly Silva</h2>
            <div className="space-y-5 font-serif text-lg text-gray-700 leading-relaxed mb-10">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gold/20">
              <h3 className="text-navy font-bold text-xl mb-2">Conquiste o seu benefício com confiança</h3>
              <p className="text-gray-600 text-base mb-6">
                Aprenda o passo a passo para se preparar corretamente, organizar sua documentação, se posicionar na frente do perito e finalmente conquistar o seu benefício.
              </p>
              <a
                href="https://kellysilva.adv.br/periciaorientada/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center bg-gold hover:bg-gold/90 text-white font-bold py-4 px-8 rounded-lg transition-transform hover:scale-105 shadow-md uppercase text-sm tracking-wider"
              >
                Passo a passo completo para perícia
              </a>
              <p className="mt-4 text-xs text-gray-400 font-sans uppercase tracking-tighter">
                Documentos, Laudos, Avaliação Social e muito mais!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
