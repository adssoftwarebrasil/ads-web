import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs: { q: string; a: string }[] = [
  {
    q: 'Qual o tamanho de empresa que a Argelis atende?',
    a: 'Atendemos principalmente empresas com faturamento de até R$ 30 milhões/ano, de diversos segmentos como indústria, comércio e serviços. Nossa experiência abrange desde pequenas empresas em crescimento até médias empresas consolidadas.',
  },
  {
    q: 'Como funciona a consultoria online?',
    a: 'A consultoria online mantém a mesma qualidade do atendimento presencial. Realizamos reuniões por videoconferência, compartilhamos documentos em tempo real e oferecemos suporte contínuo via WhatsApp e e-mail. É ideal para empresas que buscam custo-benefício sem perder qualidade.',
  },
  {
    q: 'Qual a diferença entre consultoria financeira presencial e online?',
    a: 'A principal diferença está na forma de atendimento. Presencial: visitas in loco, reuniões face a face, imersão total no ambiente da empresa. Online: reuniões por videoconferência, análises remotas, melhor custo-benefício. Ambas entregam resultados de alta qualidade.',
  },
  {
    q: 'Os treinamentos emitem certificado?',
    a: 'Sim! Todos os nossos treinamentos incluem certificado de participação. Os treinamentos são ministrados por professores mestres com experiência prática de mercado e possuem carga horária adequada para capacitação efetiva.',
  },
  {
    q: 'Quanto tempo dura um projeto de consultoria?',
    a: 'Varia conforme o escopo e necessidade. Projetos de implantação de controladoria: 3 a 6 meses. Reestruturação financeira: 4 a 8 meses. Valuation: 2 a 4 semanas. Acompanhamento estratégico: contínuo (mensal). Definimos prazos realistas no diagnóstico inicial.',
  },
  {
    q: 'Como é feito o diagnóstico inicial?',
    a: 'O diagnóstico inicial é gratuito e sem compromisso. Agendamos uma reunião para entender seu negócio, analisamos documentos básicos, identificamos oportunidades de melhoria e apresentamos uma proposta personalizada com escopo, investimento e prazos.',
  },
  {
    q: 'A Argelis atende empresas de quais segmentos?',
    a: 'Atendemos diversos segmentos: indústria (moveleira, alimentícia, metal-mecânica), comércio (varejo, distribuidoras), serviços (clínicas, escritórios, tecnologia), agronegócio e outros. Nossa metodologia se adapta às particularidades de cada setor.',
  },
  {
    q: 'Qual o investimento necessário para contratar a consultoria?',
    a: 'O investimento varia conforme o tipo de serviço, escopo e duração do projeto. Oferecemos propostas personalizadas após o diagnóstico inicial gratuito. Trabalhamos com valores mensais fixos ou por projeto, sempre com transparência e custo-benefício competitivo.',
  },
  {
    q: 'Vocês têm garantia de resultados?',
    a: 'Trabalhamos com metodologias comprovadas e temos histórico de sucesso com mais de 100 empresas. Embora resultados dependam também do comprometimento da empresa, estabelecemos metas claras, indicadores de acompanhamento e fazemos ajustes contínuos para maximizar os resultados.',
  },
  {
    q: 'Como faço para agendar uma reunião?',
    a: 'É muito simples! Entre em contato pelo WhatsApp (16) 99193-1444, preencha o formulário em nosso site ou envie e-mail para contato@argelis.com.br. Respondemos em até 24 horas e agendamos uma conversa sem compromisso para entender suas necessidades.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-xl text-gray-600">Esclarecemos as principais questões sobre nossos serviços</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <HelpCircle width={24} height={24} className="text-[rgb(64,102,215)] flex-shrink-0 mt-1" />
                    <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                  </div>
                  <ChevronDown
                    width={24}
                    height={24}
                    className={`text-[rgb(64,102,215)] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">Não encontrou sua resposta?</p>
          <a
            href="http://wa.me/5516991931444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] text-white rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
