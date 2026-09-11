import { Wrench, Cog, Gauge, Cpu, Wind, Zap, Battery } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MainService {
  img: string;
  alt: string;
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const mainServices: MainService[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/troca-de-oleo.webp',
    alt: 'Troca de Óleo',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench text-[#0a0a0a]',
    title: 'Troca de Óleo',
    desc: 'Serviço completo de troca de óleo motor e câmbio automático com produtos de qualidade premium.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/freio-abs.webp',
    alt: 'Freios e Sistema ABS',
    Icon: Cog,
    iconClass: 'lucide lucide-cog text-[#0a0a0a]',
    title: 'Freios e Sistema ABS',
    desc: 'Manutenção e reparo completo do sistema de freios, incluindo diagnóstico e calibração ABS.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/revisao-completa.webp',
    alt: 'Revisão Completa',
    Icon: Gauge,
    iconClass: 'lucide lucide-gauge text-[#0a0a0a]',
    title: 'Revisão Completa',
    desc: 'Revisão preventiva e corretiva com check-up completo do seu veículo para máxima segurança.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/remap.webp',
    alt: 'Remap e Reprogramação',
    Icon: Cpu,
    iconClass: 'lucide lucide-cpu text-[#0a0a0a]',
    title: 'Remap e Reprogramação',
    desc: 'Remap automotivo profissional e conserto de módulos eletrônicos para melhor performance.',
  },
];

interface OtherService {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const otherServices: OtherService[] = [
  { Icon: Cog, iconClass: 'lucide lucide-cog text-[#f0e92c]', title: 'Serviço de Motor', desc: 'Retífica, cabeçote e manutenção completa' },
  { Icon: Wrench, iconClass: 'lucide lucide-wrench text-[#f0e92c]', title: 'Suspensão', desc: 'Amortecedores, molas e bandejas' },
  { Icon: Wind, iconClass: 'lucide lucide-wind text-[#f0e92c]', title: 'Ar Condicionado', desc: 'Carga de gás e manutenção completa' },
  { Icon: Zap, iconClass: 'lucide lucide-zap text-[#f0e92c]', title: 'Sistema Elétrico', desc: 'Diagnóstico e reparo elétrico completo' },
  { Icon: Gauge, iconClass: 'lucide lucide-gauge text-[#f0e92c]', title: 'Alinhamento e Balanceamento', desc: 'Equipamentos de última geração' },
  { Icon: Battery, iconClass: 'lucide lucide-battery text-[#f0e92c]', title: 'Peças e Acessórios', desc: 'Venda de peças, baterias e pneus' },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#f0e92c] font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mt-2 mb-4">Soluções Completas para Seu Veículo</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Atendemos veículos leves, pesados e diesel com tecnologia de ponta e equipe altamente qualificada</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0e92c] p-3 rounded-lg">
                    <s.Icon className={s.iconClass} width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-gray-300">{s.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] mb-8 text-center">Outros Serviços Especializados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#f0e92c]">
                <div className="bg-[#f0e92c]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <s.Icon className={s.iconClass} width={24} height={24} />
                </div>
                <h4 className="font-bold text-[#0a0a0a] mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/5545998527494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f0e92c] text-[#0a0a0a] px-8 py-4 rounded-lg font-bold hover:bg-[#e0d91c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
