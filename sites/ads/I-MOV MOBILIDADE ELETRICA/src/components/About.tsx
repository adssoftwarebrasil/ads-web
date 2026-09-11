import { Factory, Shield, Heart, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; label: string }[] = [
  { icon: Factory, label: 'Fábrica Própria' },
  { icon: Shield, label: 'Produção 100% Nacional' },
  { icon: Heart, label: 'Feito com Paixão' },
  { icon: Zap, label: 'Inovação Sustentável' },
];

export default function About() {
  return (
    <section id="quem-somos" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23035772\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
      </div>
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#e0fd2c]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#035772]/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 animate-fade-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#035772]/20 to-[#e0fd2c]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#035772] via-[#024a5f] to-[#e0fd2c] p-1">
                <div className="bg-white rounded-[22px] p-8 lg:p-12">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/i-move%2FLOGO.webp"
                    alt="I-MOV Mobilidade Elétrica"
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#035772] to-[#024a5f] text-white px-6 py-2 rounded-full shadow-xl border-2 border-white">
                <p className="text-sm font-bold whitespace-nowrap">🇧🇷 Desde 2024</p>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-3 mt-12">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Icon width={18} height={18} className="text-[#035772] flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <div className="inline-block bg-gradient-to-r from-[#035772] to-[#024a5f] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                Nossa História
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                QUEM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#035772] to-[#e0fd2c]">
                  SOMOS
                </span>
              </h2>
              <p className="text-xl font-semibold text-gray-700">Luciano e Fernanda - CEO</p>
            </div>
            <div className="space-y-4 text-gray-700 text-base lg:text-lg leading-relaxed">
              <p className="text-lg font-medium text-[#035772]">Olá, que bom ter você aqui.</p>
              <p>
                Muito prazer, Nós somos a{' '}
                <span className="font-bold text-[#035772]">I-MOV Mobilidade Elétrica</span>, uma
                empresa especializada em inovação, sustentabilidade, mobilidade inteligente e um
                jeito leve e moderno de se locomover.
              </p>
              <p>
                O nosso sonho surgiu de um desejo imenso de mudança e evolução. E nesse propósito
                nasceu <span className="font-bold text-[#035772]">I-MOV Mobilidade Elétrica</span>,
                especialista em bicicletas elétricas de verdade.
              </p>
              <p>
                Eu te convido a conhecer nossas bikes, cheias de identidade, charme e um jeito único
                como você.
              </p>
              <p className="font-semibold text-gray-800 text-lg">
                Faça um test rider, você vai se surpreender.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2.5 rounded-xl shadow-md border border-gray-100"
                >
                  <Icon width={16} height={16} className="text-[#035772] flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{label}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#035772] to-[#e0fd2c] blur-2xl opacity-30 animate-pulse-slow"></div>
                <h3 className="relative text-3xl sm:text-4xl lg:text-5xl font-black">
                  <span className="text-[#035772]">I-MOV</span>
                  <span className="text-gray-400 mx-2">–</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035772] via-[#024a5f] to-[#e0fd2c]">
                    VOCÊ EM MOVIMENTO
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
