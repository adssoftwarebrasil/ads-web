import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const perguntas = [
  {
    pergunta: 'Preciso de receita ou pedido médico para encomendar uma órtese?',
    resposta:
      'Para dispositivos de tratamento, o ideal é trazer a prescrição do seu médico ou fisioterapeuta — ela orienta o tipo, o material e o grau de rigidez da peça. Se você ainda não tem, fale conosco: nossa equipe técnica orienta sobre o próximo passo.',
  },
  {
    pergunta: 'Como funciona a fabricação sob medida?',
    resposta:
      'A anatomia é capturada por escaneamento 3D, o modelo é ajustado em software e a peça é usinada em fresadora CNC. O modelo digital fica registrado, o que permite refazer a peça depois com a mesma precisão, sem repetir todo o processo.',
  },
  {
    pergunta: 'Qual o prazo para ficar pronto?',
    resposta:
      'O prazo varia conforme o tipo de dispositivo, o material e a complexidade do caso. Consulte a equipe pelo WhatsApp ou telefone com a sua prescrição em mãos para receber uma estimativa.',
  },
  {
    pergunta: 'Vocês fazem ajustes depois da entrega?',
    resposta:
      'Sim. A oficina é própria, então adaptações, manutenções e reparos são feitos aqui mesmo ao longo do tratamento, à medida que o paciente evolui.',
  },
  {
    pergunta: 'É possível alugar equipamentos em vez de comprar?',
    resposta:
      'Sim. Trabalhamos com locação de cadeiras de rodas, andadores, muletas e botas imobilizadoras — a opção mais adequada para pós-operatório e recuperação de fraturas. Consulte prazos e condições.',
  },
  {
    pergunta: 'Quais formas de pagamento e convênios vocês aceitam?',
    resposta:
      'As condições variam conforme o produto e o tipo de atendimento. Entre em contato pelo WhatsApp ou telefone para confirmar as opções disponíveis para o seu caso.',
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[#0e6d8f] font-bold text-sm uppercase tracking-[0.2em]">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3d5c] mt-3 leading-tight">
            Perguntas que sempre recebemos
          </h2>
        </div>

        <div className="space-y-3">
          {perguntas.map(({ pergunta, resposta }, i) => (
            <div
              key={pergunta}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setAberta(aberta === i ? null : i)}
                aria-expanded={aberta === i}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0b3d5c]">{pergunta}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#0e6d8f] transition-transform duration-300 ${
                    aberta === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {aberta === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{resposta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
