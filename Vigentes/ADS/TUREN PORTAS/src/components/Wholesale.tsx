import { Building2, Store, DoorOpen, CheckCircle2, MessageCircle } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Construtoras e Incorporadoras',
    text: 'Fornecimento para obras inteiras, com padronização de cores e medidas e volume programado por etapa do empreendimento.',
  },
  {
    icon: Store,
    title: 'Lojistas da Construção Civil',
    text: 'Material de acabamento com giro rápido para depósitos, home centers e lojas de materiais de construção.',
  },
  {
    icon: DoorOpen,
    title: 'Lojas de Portas Especializadas',
    text: 'Amplie o mix da sua loja com uma linha 100% WPC à prova d\u2019água, em cinco cores prontas para revenda.',
  },
];

const advantages = [
  'Condições especiais por volume',
  'Atendimento comercial dedicado',
  'Suporte técnico na especificação',
  'Linha padronizada em cinco cores',
];

const WHATSAPP_URL = `https://wa.me/5566999118484?text=${encodeURIComponent(
  'Olá! Gostaria de falar sobre compra no atacado / distribuição das portas WPC Premium da Turen.'
)}`;

export default function Wholesale() {
  return (
    <section id="atacado" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#DE8F52] font-semibold text-sm uppercase tracking-widest">
            Atacado e Distribuição
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005143] mt-3 mb-4">
            Também Vendemos no Atacado
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Além do cliente final, a Turen Portas atende engenharia e revenda com fornecimento em
            escala das portas WPC Premium.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {audiences.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-[#f8f5f1] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#005143] flex items-center justify-center mb-5">
                <Icon width={22} height={22} className="text-[#ECC4A4]" />
              </div>
              <h3 className="text-lg font-bold text-[#005143] mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#005143] rounded-2xl px-8 py-10 sm:px-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-white mb-5 leading-snug">
              Monte seu pedido com condições de distribuidor
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[#ECC4A4]/90 text-sm">
                  <CheckCircle2 width={16} height={16} className="text-[#DE8F52] mt-0.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 lg:text-right">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#DE8F52] hover:bg-[#c47a40] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle width={18} height={18} />
              Falar com o Comercial
            </a>
            <p className="text-[#ECC4A4]/70 text-xs mt-4 lg:text-right">
              Atendimento a construtoras, lojistas e revendedores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
