import { useEffect, useRef, useState } from 'react';
import { Award, GraduationCap, Heart } from 'lucide-react';

export default function Equipe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const profissionais = [
    {
      nome: 'Dr. Marcus Werneck',
      especialidade: 'Estética do Sorriso',
      descricao: 'Especialista em reabilitação bucal com grande foco na estética do sorriso. Objetivando sempre resultados que alcancem a harmonia com naturalidade resgatando a autoestima do paciente .',
      cro: 'CRO-PE 1234',
      imagem: 'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Fdentista.webp',
    },
    {
      nome: 'Dra. Cássia Lira',
      especialidade: 'Endodontia ',
      descricao: 'Destaque no diagnóstico minucioso das lesões pulpares e periapicais que levam à necessidade do tratamento de canal. Precisão e a busca por tratamentos de canal de forma objetiva e eficiente são marcas desta profissional.',
      cro: 'CRO-PE 5678',
      imagem: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2Fatualizacao%2FC%C3%81SSIA%20LIRA.webp&version_id=null',
    },
    {
      nome: 'Dra. Leticia Almeida',
      especialidade: 'Cirurgia Bucomaxilofacial',
      descricao: 'Cirurgia bucomaxilofacial é a área de atuação desta especialista, que utiliza uma abordagem humanizada em suas atuações com os pacientes.',
      cro: 'CRO-PE 5678',
      imagem: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2Fatualizacao%2FLeticia%20Almeida.webp&version_id=null',
    },
    {
      nome: 'Dr. Leonardo Maciel',
      especialidade: 'Ortodontia',
      descricao: 'Nosso especialista sênior em ortodontia com forte domínio nas mais diversas modalidades de tratamentos ortodônticos convencionais, autoligados, cerâmicos e alinhadores invisíveis.',
      cro: 'CRO-PE 9101',
      imagem: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2Fatualizacao%2FLEONARDO%20MACIEL.webp&version_id=null',
    },
    {
      nome: 'Dra. Thaísa Spinelli',
      especialidade: 'Cirurgia Bucomaxilofacial',
      descricao: 'Cirurgia bucomaxilofacial é a área de atuação desta especialista, que utiliza uma abordagem humanizada em suas atuações com os pacientes.',
      cro: 'CRO-PE 1122',
      imagem: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2Fatualizacao%2FTha%C3%ADsa%20SPINELLI.webp&version_id=null',
    },
    {
      nome: 'Dra. Laila Warda',
      especialidade: 'Periodontia',
      descricao: 'A especialidade da Dra. Laila é cuidar da saúde das gengivas e dos tecidos ósseos que suportam os dentes. Esta profissional aplica um forte enfoque pedagógico para instruir os pacientes na higienização dental buscando uma saúde bucal plena.',
      cro: 'CRO-PE 3344',
      imagem: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2Fatualizacao%2FLAILA%20WARDA.webp&version_id=null',
    },
    {
      nome: 'Dr. Reinaldo Siqueira',
      especialidade: 'Implantodontia',
      descricao: 'Especialista em implantodontia com know how em resoluções específicas no manejo de tecidos ósseos e gengivais com maestria conferida por décadas de atuação clínica no Brasil e países Europeus.',
      cro: 'CRO-PE 5566',
      imagem: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2Fatualizacao%2FREINALDO%20SIQUEIRA.webp&version_id=null',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="equipe"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#f1f5f8] via-white to-[#f1f5f8] relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#003870]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="bg-[#003870]/10 text-[#003870] px-4 py-2 rounded-full text-sm font-semibold">
              Conheça nossa equipe
            </span>
          </div>
          <h2 className="text-[#003870] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Profissionais Especializados
          </h2>
          <p className="text-[#858789] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Especialistas dedicados a transformar seu sorriso com excelência e cuidado
          </p>
        </div>

        {/* Cards de diferenciais da equipe */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#003870]">
            <div className="flex items-start gap-4">
              <div className="bg-[#003870]/10 p-3 rounded-full">
                <Award className="text-[#003870]" size={24} />
              </div>
              <div>
                <h3 className="text-[#003870] font-bold text-lg mb-2">Expertise Comprovada</h3>
                <p className="text-gray-600 text-sm">Profissionais com ampla experiência e formação de excelência</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-full">
                <GraduationCap className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className="text-cyan-600 font-bold text-lg mb-2">Atualização Constante</h3>
                <p className="text-gray-600 text-sm">Cursos e especializações nas melhores instituições do Brasil</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#003870]">
            <div className="flex items-start gap-4">
              <div className="bg-[#003870]/10 p-3 rounded-full">
                <Heart className="text-[#003870]" size={24} />
              </div>
              <div>
                <h3 className="text-[#003870] font-bold text-lg mb-2">Atendimento Humanizado</h3>
                <p className="text-gray-600 text-sm">Cuidado personalizado e empático com cada paciente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Profissionais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {profissionais.map((profissional, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
              }}
            >
              {/* Imagem do profissional - CORRIGIDO PARA NÃO CORTAR */}
              <div className="relative h-80 sm:h-96 overflow-hidden bg-gradient-to-br from-[#f1f5f8] to-[#e1e9f0]">
                <img
                  src={profissional.imagem}
                  alt={profissional.nome}
                  className="w-full h-full object-contain object-top transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay gradiente suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge CRO */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#003870] shadow-lg">
                  {profissional.cro}
                </div>
              </div>

              {/* Informações */}
              <div className="p-6">
                <h3 className="text-[#003870] text-xl font-bold mb-2 group-hover:text-[#004a8f] transition-colors">
                  {profissional.nome}
                </h3>

                <div className="inline-block bg-[#003870]/10 text-[#003870] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {profissional.especialidade}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {profissional.descricao}
                </p>

                {/* Botão de contato */}
                <a
                  href={`https://wa.me/5581994073827?text=Olá! Gostaria de agendar uma consulta com ${profissional.nome}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#003870] font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Agendar Consulta
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Borda animada no hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#003870]/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-[#003870] to-[#004a8f] rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Pronto para conhecer nossa equipe?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Agende uma avaliação e conheça pessoalmente nossos especialistas
            </p>
            <a
              href="https://wa.me/5581994073827?text=Olá! Gostaria de agendar uma avaliação na Clínica Werneck."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#003870] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}