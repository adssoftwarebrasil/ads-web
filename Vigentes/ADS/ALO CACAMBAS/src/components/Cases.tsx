import { CheckCircle2, ArrowRight } from 'lucide-react';

const cases = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/cacambas-amarelas-empilhadas-terreno-de-construcao_382x510.webp',
    alt: 'Urgência',
    tag: 'Urgência',
    tagClass: 'bg-[#a9312e]/15 text-[#a9312e]',
    situation:
      'Cliente precisava de uma caçamba com urgência para uma obra que não podia parar.',
    action:
      'Acionamos nossa equipe e entregamos a caçamba no mesmo dia, no horário solicitado.',
    result:
      'A obra não atrasou, o cliente ficou satisfeito e nos indicou para outros projetos.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/caminhao-branco-cacambas-amarelas-estacionado_680x510.webp',
    alt: 'Confiança',
    tag: 'Confiança',
    tagClass: 'bg-[#ffaf24]/15 text-[#ec8f2b]',
    situation:
      'Cliente foi prejudicado por outra empresa que atrasou a entrega e não dava retorno.',
    action: 'Assumimos o serviço com agilidade, transparência e comunicação constante.',
    result:
      'O cliente ganhou confiança na Alô Caçambas, virou parceiro fixo e segue conosco até hoje.',
  },
];

export default function Cases() {
  return (
    <section className="py-24 bg-[#fefefe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffaf24]/15 text-[#ec8f2b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Resultados reais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343434] mb-4">
            Clientes que confiam no nosso trabalho
          </h2>
          <p className="text-[#343434]/60 text-lg max-w-xl mx-auto">
            Histórias de quem escolheu a Alô Caçambas e não ficou na mão.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {cases.map((c) => (
            <div
              key={c.tag}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={c.image} alt={c.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#343434]/70 to-transparent"></div>
                <span
                  className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${c.tagClass}`}
                >
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#343434]/40 block mb-1">
                      Situação
                    </span>
                    <p className="text-[#343434]/80 text-sm leading-relaxed">{c.situation}</p>
                  </div>
                  <div className="border-l-2 border-[#ffaf24] pl-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#343434]/40 block mb-1">
                      Nossa ação
                    </span>
                    <p className="text-[#343434]/80 text-sm leading-relaxed">{c.action}</p>
                  </div>
                  <div className="bg-[#ffaf24]/10 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2
                      className="lucide lucide-check-circle2 text-[#ec8f2b] mt-0.5 shrink-0"
                      width={18}
                      height={18}
                    />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ec8f2b] block mb-1">
                        Resultado
                      </span>
                      <p className="text-[#343434]/80 text-sm leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="http://wa.me/553491233322"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ffaf24] hover:bg-[#ec8f2b] text-[#343434] font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            Quero ser o próximo case de sucesso
            <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
