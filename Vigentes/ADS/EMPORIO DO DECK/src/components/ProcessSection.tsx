import { MessageCircle, FileText, CheckCircle, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contato Inicial',
    description: 'Entre em contato pelo WhatsApp ou formulário',
    detail: 'Resposta em até 24 horas',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Orçamento Personalizado',
    description: 'Receba orçamento detalhado sem compromisso',
    detail: 'Valores transparentes e competitivos',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Confirmação e Produção',
    description: 'Aprovação do orçamento e início da separação',
    detail: 'Madeiras selecionadas especialmente para você',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Entrega Ágil',
    description: 'Entrega rápida e segura no local combinado',
    detail: 'Logística eficiente em toda a região',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle">Simples, rápido e transparente</p>
        </div>

        <div className="hidden lg:flex items-center justify-center mb-8">
          <div className="flex-1 h-1 border-t-4 border-dashed border-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="process-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="process-number">{step.number}</div>
              <div className="flex justify-center mb-6">
                <step.icon size={48} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">{step.title}</h3>
              <p className="text-primaryMedium text-center mb-2">{step.description}</p>
              <p className="text-sm text-accent text-center font-semibold">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
