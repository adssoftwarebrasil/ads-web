const WHATSAPP_NUMBER = '556231239052';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20veicular.`;

const steps = [
  {
    number: '01',
    title: 'Entre em Contato',
    description: 'Fale conosco pelo WhatsApp ou venha pessoalmente. Tire todas as suas dúvidas e agende sua vistoria no horário mais conveniente.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fvolante-painel-carro.webp',
  },
  {
    number: '02',
    title: 'Leve seu Veículo',
    description: 'Compareça à nossa unidade com seu veículo e os documentos necessários: CNH, RG/CPF do proprietário e CRV/CRLV do veículo.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcarro-preto-estacionamento.webp',
  },
  {
    number: '03',
    title: 'Realizamos a Vistoria',
    description: 'Nossa equipe realiza uma vistoria completa e detalhada: verificação de chassi, motor, documentos e itens de segurança.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcarro-laranja-estacionado.webp',
  },
  {
    number: '04',
    title: 'Receba o Laudo',
    description: 'Após a vistoria, emitimos o laudo oficial para você dar continuidade ao processo de transferência ou regularização.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcarro-branco-estacionado.webp',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#efcf05]/10 text-[#efcf05] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Processo Simples
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Como funciona nossa{' '}
            <span className="text-[#efcf05]">vistoria?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Tornamos o processo simples e descomplicado. Em poucos passos, seu veículo estará regularizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#efcf05]/20 via-[#efcf05] to-[#efcf05]/20 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#efcf05]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#efcf05] text-black font-black text-2xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-black text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#efcf05] text-black font-black px-10 py-4 rounded-full text-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            Quero Agendar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
