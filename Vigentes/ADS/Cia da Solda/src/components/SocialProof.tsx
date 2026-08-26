import { ShieldCheck, Truck, Headphones as HeadphonesIcon, Award } from 'lucide-react';

const items = [
  {
    icon: <Award size={22} className="text-brand-red" />,
    title: '+8 Anos no Mercado',
    desc: 'Expertise comprovada atendendo soldadores profissionais.',
  },
  {
    icon: <ShieldCheck size={22} className="text-brand-red" />,
    title: 'Produtos de Qualidade',
    desc: 'Marcas confiáveis e consumíveis homologados.',
  },
  {
    icon: <HeadphonesIcon size={22} className="text-brand-red" />,
    title: 'Atendimento Especializado',
    desc: 'Equipe técnica que realmente entende de soldagem.',
  },
  {
    icon: <Truck size={22} className="text-brand-red" />,
    title: 'Loja Física Estratégica',
    desc: 'Venha pessoalmente ou compre por WhatsApp.',
  },
];

export default function SocialProof() {
  return (
    <section className="bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#111111] hover:bg-[#161616] transition-colors p-6 flex flex-col gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
