import { CheckCircle, MapPin, Clock, Users } from 'lucide-react';

const bullets = [
  'Financiamento facilitado e aprovação rápida',
  'Troca de veículos com avaliação na hora',
  'Suporte no translado para clientes de outras cidades',
  'Documentação e transferência sem complicações',
  'Atendimento por WhatsApp e telefone',
  'Estoque variado: sedan, SUV, caminhonetes e utilitários',
];

const differentials = [
  { num: '01', title: 'Qualidade', text: 'Veículos rigorosamente selecionados e inspecionados antes de cada venda.' },
  { num: '02', title: 'Preço Justo', text: 'Os melhores preços do mercado de Mato Grosso, sem surpresas.' },
  { num: '03', title: 'Transparência', text: 'Negociação honesta do início ao fim, com toda a documentação garantida.' },
  { num: '04', title: 'Atendimento', text: 'Equipe dedicada a oferecer a melhor experiência de compra da sua vida.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#f8c102]"></div>
              <span className="text-[#f8c102] text-sm font-semibold tracking-widest uppercase">Sobre a Empresa</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#fefefe] leading-tight mb-6">
              6 anos conectando <span className="text-[#f8c102]">pessoas</span> aos melhores veículos
            </h2>
            <p className="text-[#fefefe]/60 text-lg leading-relaxed mb-6">
              Fundada em 2013, a XC Motors nasceu com um propósito claro: oferecer veículos seminovos de qualidade com transparência e preço justo no coração de Mato Grosso.
            </p>
            <p className="text-[#fefefe]/60 text-lg leading-relaxed mb-10">
              Localizada em Várzea Grande, atendemos clientes de toda a região, incluindo quem vem de Cuiabá e do interior do estado. Cada carro do nosso estoque passa por uma seleção criteriosa para garantir que você faça o melhor negócio da sua vida.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="lucide lucide-check-circle text-[#f8c102] flex-shrink-0 mt-0.5" width={18} height={18} />
                  <span className="text-[#fefefe]/70 text-sm">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#fefefe]/50">
              <div className="flex items-center gap-2">
                <MapPin className="lucide lucide-map-pin text-[#f8c102]" width={15} height={15} />
                Av. Dom Orlando Chaves, 614 – Várzea Grande
              </div>
              <div className="flex items-center gap-2">
                <Clock className="lucide lucide-clock text-[#f8c102]" width={15} height={15} />
                Seg–Sex 07:30–18:00 · Sáb 07:30–13:00
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {differentials.map((d, i) => (
              <div
                key={d.num}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  i % 2 === 0 ? 'bg-[#1a1a1a] border-white/5 mt-0' : 'bg-[#f8c102]/5 border-[#f8c102]/20 mt-6'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#f8c102]/10 flex items-center justify-center mb-4">
                  <span className="text-[#f8c102] font-black text-lg">{d.num}</span>
                </div>
                <h3 className="text-[#fefefe] font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-[#fefefe]/50 text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
            <div className="col-span-2 bg-[#f8c102] rounded-2xl p-6 flex items-center gap-4">
              <Users className="lucide lucide-users text-[#0c0c0c] flex-shrink-0" width={32} height={32} />
              <div>
                <div className="text-[#0c0c0c] font-black text-xl">+500 clientes satisfeitos</div>
                <div className="text-[#0c0c0c]/70 text-sm">em todo o Mato Grosso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
