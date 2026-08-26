import { Phone } from 'lucide-react';

interface Passo {
  num: string;
  title: string;
  text: string;
  img: string;
  alt: string;
  width: string;
  fraction: string;
}

const passos: Passo[] = [
  {
    num: '01',
    title: 'Abertura de empresa rápida e fácil',
    text: 'Solicite a abertura da sua empresa e saiba como vamos orientar você por um caminho mais estratégico! Entre em contato via WhatsApp, agende uma reunião gratuita e tire todas as suas dúvidas. Processo 100% digital para máxima agilidade e comodidade.',
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FAbertura%20de%20empresa%20ra%CC%81pida%20e%20fa%CC%81cil.png',
    alt: 'Abertura de empresa rápida e fácil',
    width: '20%',
    fraction: '1/5',
  },
  {
    num: '02',
    title: 'Pedido de viabilidade',
    text: 'Enviaremos um formulário completo de abertura da empresa. Nessa etapa, fazemos o pedido de viabilidade e FCN na Junta Comercial do Estado de Mato Grosso do Sul para verificar se é possível a implantação da sua empresa no município escolhido. Preparamos também o contrato social com todas as informações necessárias: CPF dos sócios, nome fantasia, razão social, endereço, atividades (CNAE) e valor do capital social.',
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FPedido%20de%20viabilidade.png',
    alt: 'Pedido de viabilidade',
    width: '40%',
    fraction: '2/5',
  },
  {
    num: '03',
    title: 'Recebimento e análise do contrato social',
    text: 'Nessa etapa do processo, disponibilizamos a taxa da Junta Comercial para abertura da empresa. Logo após o processamento do pagamento dessa taxa (que em geral acontece em até 24 horas), o processo já fica disponível para assinatura digital. A assinatura do contrato social é realizada por meio do Registro Digital na Junta Comercial do Estado de Mato Grosso do Sul, através do acesso dos sócios ao site gov.br com certificado digital ou conta gov.br nível prata ou ouro.',
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FRecebimento%20e%20ana%CC%81lise%20do%20contrato%20social.png',
    alt: 'Recebimento e análise do contrato social',
    width: '60%',
    fraction: '3/5',
  },
  {
    num: '04',
    title: 'Liberação do CNPJ',
    text: 'Depois do protocolo do passo anterior, o processo de abertura com o contrato social da empresa devidamente assinado digitalmente é encaminhado para análise da Junta Comercial. Assim que liberado da análise, a JUCEMS disponibiliza para download o Contrato Social devidamente registrado e o Cartão CNPJ já ativo e pronto para uso. Sua empresa está oficialmente aberta!',
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FLiberac%CC%A7a%CC%83%20do%20CNPJ%20-%20Cadastro%20Nacional%20de%20Pessoa%20Juri%CC%81dica.png',
    alt: 'Liberação do CNPJ',
    width: '80%',
    fraction: '4/5',
  },
  {
    num: '05',
    title: 'Emissão e liberação do Alvará de Funcionamento',
    text: 'Por fim, o último passo para abrir empresa é emitir a taxa do Alvará de Funcionamento na prefeitura do município. Depois da liberação do Alvará de funcionamento, sua empresa precisará se cadastrar e credenciar os dados fiscais na base da Nota Fiscal de Serviço de Campo Grande (ou do município de origem), para que possa emitir suas Notas Fiscais de Serviço Eletrônica (NFS-e). Pronto! Sua empresa está 100% regularizada e operacional.',
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FEmissa%CC%83o%20e%20liberac%CC%A7a%CC%83o%20do%20Alvara%CC%81%20de%20Funcionamento.png',
    alt: 'Emissão e liberação do Alvará de Funcionamento',
    width: '100%',
    fraction: '5/5',
  },
];

export default function Passos() {
  return (
    <section id="solucoes" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-block mb-4">
            <span className="bg-[#234783]/10 text-[#234783] px-4 py-2 rounded-full text-sm font-semibold">
              Processo Simplificado
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Abra sua Empresa em Apenas{' '}
            <span className="text-[#234783]">5 Passos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Nossos contadores e especialistas estão preparados para cuidar de
            tudo para você. Processo simplificado e transparente do início ao
            fim.
          </p>
        </div>
        <div className="space-y-12 md:space-y-20">
          {passos.map((p, i) => {
            const imgOrder = i % 2 === 0 ? 'lg:order-1' : 'lg:order-2';
            const textOrder = i % 2 === 0 ? 'lg:order-2' : 'lg:order-1';
            return (
              <div
                key={p.num}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              >
                <div className={`${imgOrder} w-full`}>
                  <div className="relative group">
                    <div className="bg-gradient-to-br from-[#234783]/5 to-[#5BA3E8]/5 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={p.img}
                        alt={p.alt}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#234783] to-[#5BA3E8] rounded-full opacity-10 blur-2xl -z-10"></div>
                  </div>
                </div>
                <div className={`${textOrder} flex flex-col justify-center space-y-4 md:space-y-6`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#234783] to-[#5BA3E8] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <span className="text-xl md:text-2xl font-bold text-white">
                        {p.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed pl-0 md:pl-20">
                    {p.text}
                  </p>
                  <div className="pl-0 md:pl-20">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#234783] to-[#5BA3E8]"
                          style={{ width: p.width }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-500">
                        {p.fraction}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 md:mt-20">
          <a
            href="https://wa.me/556733052146?text=Olá! Gostaria de abrir minha empresa com a Contix."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="lucide lucide-phone animate-pulse" width={24} height={24} />
            Gostaria de Abrir Minha Empresa
          </a>
        </div>
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl border-l-4 border-[#234783] shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#234783] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ℹ️</span>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Observação Importante:</strong>{' '}
                As informações necessárias para abertura de uma empresa podem
                variar de acordo com a atividade escolhida. Normalmente é
                necessário ter os dados de endereço de onde a empresa vai exercer
                suas atividades (comprovante de endereço), documentos dos sócios,
                informações como capital social de constituição e nome escolhido
                para o empreendimento. Para maiores informações e mais
                específicas para sua empresa,{' '}
                <a
                  href="https://wa.me/556733052146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#234783] font-semibold hover:underline"
                >
                  entre em contato pelo WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
