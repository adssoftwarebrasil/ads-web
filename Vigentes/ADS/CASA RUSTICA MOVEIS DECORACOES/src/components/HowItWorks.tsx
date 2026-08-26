import { Store, PenTool, FileText, Truck, CreditCard, MapPin, Package, Check } from 'lucide-react';
import { WHATSAPP_SEND, WhatsAppIcon } from '../shared';

const steps = [
  {
    icon: Store,
    number: '1',
    gradient: 'from-[rgb(5,86,77)] to-[rgb(4,70,63)]',
    badge: 'bg-[rgb(248,177,1)]',
    line: 'from-[rgb(5,86,77)]',
    title: 'Visite Nossa Loja',
    text: 'Conheça nossa loja física em Uberlândia ou fale conosco pelo WhatsApp para conhecer nossos móveis.',
  },
  {
    icon: PenTool,
    number: '2',
    gradient: 'from-[rgb(248,177,1)] to-[rgb(228,157,0)]',
    badge: 'bg-[rgb(5,86,77)]',
    line: 'from-[rgb(248,177,1)]',
    title: 'Escolha ou Personalize',
    text: 'Escolha entre nossos móveis prontos ou solicite uma peça sob medida, criada especialmente para o seu espaço.',
  },
  {
    icon: FileText,
    number: '3',
    gradient: 'from-[rgb(5,86,77)] to-[rgb(4,70,63)]',
    badge: 'bg-[rgb(248,177,1)]',
    line: 'from-[rgb(5,86,77)]',
    title: 'Receba seu Orçamento',
    text: 'Nossa equipe preparará um orçamento personalizado com todas as especificações e condições de pagamento.',
  },
  {
    icon: Truck,
    number: '4',
    gradient: 'from-[rgb(248,177,1)] to-[rgb(228,157,0)]',
    badge: 'bg-[rgb(5,86,77)]',
    line: 'from-[rgb(248,177,1)]',
    title: 'Receba em Casa',
    text: 'Frete grátis em Uberlândia e condições especiais para a região. Pagamento em até 10x no cartão ou boleto.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[rgb(248,177,1)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[rgb(5,86,77)]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[rgb(248,177,1)] font-semibold text-sm tracking-widest uppercase">Processo Simples</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(5,86,77)] mb-6">Como Funciona</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[rgb(248,177,1)]"></div>
            <div className="w-3 h-3 bg-[rgb(248,177,1)] rounded-full"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[rgb(248,177,1)]"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Do primeiro contato até a entrega, facilitamos cada etapa</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative">
          <div className="hidden lg:block absolute top-24 left-0 w-full h-1 -z-10">
            <div className="flex justify-between items-center h-full max-w-6xl mx-auto px-16">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[rgb(5,86,77)]/30 to-[rgb(248,177,1)]/30"></div>
              <div className="w-8"></div>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[rgb(248,177,1)]/30 to-[rgb(5,86,77)]/30"></div>
              <div className="w-8"></div>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[rgb(5,86,77)]/30 to-[rgb(248,177,1)]/30"></div>
            </div>
          </div>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-br ${s.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${s.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-10 h-10 ${s.badge} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {s.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(5,86,77)] mb-3 text-center">{s.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">{s.text}</p>
                  <div className="flex justify-center">
                    <div className={`h-1 w-16 bg-gradient-to-r ${s.line} to-transparent rounded-full`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(5,86,77)] to-[rgb(4,70,63)] rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="relative p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-[rgb(248,177,1)]" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Condições de Pagamento</h3>
              </div>
              <p className="text-white/80 text-lg">Facilidades para você realizar seu sonho</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform group-hover:scale-105 transition duration-300"></div>
                <div className="relative p-6 text-center border border-white/20 rounded-2xl">
                  <div className="w-16 h-16 bg-[rgb(248,177,1)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[rgb(248,177,1)] mb-2">10x</div>
                  <p className="text-white font-semibold mb-1">Sem juros</p>
                  <p className="text-white/70 text-sm">No cartão de crédito</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform group-hover:scale-105 transition duration-300"></div>
                <div className="relative p-6 text-center border border-white/20 rounded-2xl">
                  <div className="w-16 h-16 bg-[rgb(248,177,1)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[rgb(248,177,1)] mb-2">10x</div>
                  <p className="text-white font-semibold mb-1">No boleto</p>
                  <p className="text-white/70 text-sm">Sujeito à aprovação*</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform group-hover:scale-105 transition duration-300"></div>
                <div className="relative p-6 text-center border border-white/20 rounded-2xl">
                  <div className="w-16 h-16 bg-[rgb(248,177,1)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[rgb(248,177,1)] mb-2">
                    <Check className="w-10 h-10 mx-auto" />
                  </div>
                  <p className="text-white font-semibold mb-1">Frete Grátis</p>
                  <p className="text-white/70 text-sm">Em Uberlândia</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform group-hover:scale-105 transition duration-300"></div>
                <div className="relative p-6 text-center border border-white/20 rounded-2xl">
                  <div className="w-16 h-16 bg-[rgb(248,177,1)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[rgb(248,177,1)] mb-2">
                    <Package className="w-10 h-10 mx-auto" />
                  </div>
                  <p className="text-white font-semibold mb-1">Região</p>
                  <p className="text-white/70 text-sm">Condições especiais</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Check className="w-5 h-5 text-[rgb(248,177,1)]" />
                <span className="text-white/90 text-sm">Parcelamento sem juros</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Check className="w-5 h-5 text-[rgb(248,177,1)]" />
                <span className="text-white/90 text-sm">Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Check className="w-5 h-5 text-[rgb(248,177,1)]" />
                <span className="text-white/90 text-sm">Atendimento personalizado</span>
              </div>
            </div>
            <p className="text-center text-white/60 text-sm">*Sujeito à aprovação de crédito</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">Pronto para começar?</p>
          <a
            href={WHATSAPP_SEND}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[rgb(248,177,1)] to-[rgb(255,197,51)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-[rgb(248,177,1)]/50 transform hover:scale-105 transition-all duration-300"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
