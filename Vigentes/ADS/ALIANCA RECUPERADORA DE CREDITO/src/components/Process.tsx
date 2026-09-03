import { IconCheck, IconDoc, IconDollar, IconSearch } from './icons';

const etapas = [
  {
    num: '01',
    icon: <IconDoc />,
    name: 'Análise de Contrato',
    desc: 'Identificamos taxas abusivas, juros irregulares e cobranças indevidas no seu contrato de financiamento.',
  },
  {
    num: '02',
    icon: <IconSearch />,
    name: 'Revisão de Contrato',
    desc: 'Readequamos ou invalidamos as cláusulas ilegais e questionamos com o credor os valores cobrados a mais.',
  },
  {
    num: '03',
    icon: <IconDollar />,
    name: 'Quitação',
    desc: 'Negociamos com o credor e buscamos a quitação do financiamento nas melhores condições para você.',
  },
  {
    num: '04',
    icon: <IconCheck />,
    name: 'Baixa da Alienação',
    desc: 'Com o contrato quitado, é feita a baixa da alienação e o veículo passa a ficar no seu nome.',
  },
];

export default function Process() {
  return (
    <section className="process" id="como-funciona">
      <div className="process-inner">
        <div className="process-header">
          <div className="section-label">Como Funciona</div>
          <h2 className="section-title">4 etapas para em fim ter o veículo no seu nome</h2>
        </div>
        <div className="process-grid">
          {etapas.map((e) => (
            <div className="process-card" key={e.num}>
              <div className="process-num">{e.num}</div>
              <div className="process-icon">{e.icon}</div>
              <div className="process-name">{e.name}</div>
              <div className="process-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
