import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  title: string;
  description: string;
  price: string;
}

const services: Service[] = [
  { title: 'Corte Masculino Profissional', description: 'Corte moderno, acabamento impecável e atendimento premium.', price: 'R$ 50,00' },
  { title: 'Barba com Barboterapia', description: 'Tratamento completo com toalha quente e produtos profissionais.', price: 'R$ 50,00' },
  { title: 'Corte Infantil Especializado', description: 'Atendimento acolhedor e especializado para crianças.', price: 'R$ 45,00' },
  { title: 'Acabamento Pezinho', description: 'Finalização perfeita para manter o visual alinhado.', price: 'R$ 22,00' },
  { title: 'Design de Sobrancelhas', description: 'Harmonia facial e acabamento preciso.', price: 'R$ 25,00' },
  { title: 'Epilação Nasal', description: 'Procedimento rápido, seguro e higiênico.', price: 'R$ 20,00' },
  { title: 'Alisamento Masculino', description: 'Redução de volume e fios alinhados com produtos premium.', price: 'A partir de R$ 40,00' },
  { title: 'Descoloração Profissional', description: 'Mudança de visual com técnica e segurança.', price: 'A partir de R$ 100,00' },
];

const combos: { name: string; price: string }[] = [
  { name: 'Cabelo + Barba', price: 'R$ 95,00' },
  { name: 'Cabelo + Barba + Sobrancelha', price: 'R$ 115,00' },
  { name: 'Cabelo ou Barba + Sobrancelha', price: 'R$ 70,00' },
  { name: 'Cabelo + Alisamento', price: 'R$ 85,00' },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden text-zinc-900">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-premium-red/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-premium-red/5 blur-[120px] rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4 animate-fade-in-up">
            Serviços <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-premium-red">Essenciais</span>
          </h2>
          <p className="text-zinc-600 font-light tracking-widest uppercase text-sm">Qualidade Premium no Jardim Aurélia com Preços Justos</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-white border border-zinc-200 shadow-xl p-6 rounded-2xl hover:border-premium-red/30 hover:shadow-2xl transition-all group animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-outfit font-bold text-lg text-zinc-900 group-hover:text-premium-red transition-colors">{service.title}</h3>
              </div>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{service.description}</p>
              <div className="text-xl font-outfit font-bold text-zinc-900">{service.price}</div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-300 shadow-xl rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <div>
                <h3 className="text-3xl font-outfit font-bold mb-2 text-zinc-900">
                  <span aria-hidden="true">🔥 </span>Combos Promocionais
                </h3>
                <p className="text-zinc-600">Mais Estilo, Mais Economia</p>
              </div>
              <a
                href={WHATSAPP_URL}
                className="btn-whatsapp inline-flex items-center gap-3 bg-premium-red text-white px-8 py-4 rounded-xl font-outfit font-bold btn-hover shadow-xl shadow-premium-red/20 group whitespace-nowrap"
              >
                AGENDAR COMBO AGORA
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {combos.map((combo, i) => (
                <div
                  key={combo.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-premium-red/20 transition-all animate-fade-in-left"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="font-medium text-zinc-800">{combo.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-zinc-300 hidden sm:block"></div>
                    <span className="text-premium-red font-outfit font-bold">{combo.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
