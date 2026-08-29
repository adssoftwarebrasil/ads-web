import { Car, Settings, Truck, Cog, Gauge, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../utils';

interface ServiceItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
}

const services: ServiceItem[] = [
  {
    Icon: Car,
    title: 'Retífica de Motores Linha Leve',
    desc: 'Serviço especializado para automóveis de passeio, incluindo retífica completa de bloco, cabeçote, virabrequim e muito mais.',
    items: ['Retífica de Bloco', 'Retífica de Cabeçote', 'Retífica de Virabrequim', 'Brunimento de Cilindros'],
  },
  {
    Icon: Settings,
    title: 'Retífica de Motores Linha Média',
    desc: 'Atendimento completo para veículos comerciais médios, com precisão técnica e equipamentos de última geração.',
    items: ['Motores Diesel', 'Retífica Completa', 'Balanceamento', 'Testes de Qualidade'],
  },
  {
    Icon: Truck,
    title: 'Retífica de Motores Linha Pesada',
    desc: 'Especialistas em motores de caminhões e veículos pesados, garantindo máximo desempenho e durabilidade.',
    items: ['Caminhões e Ônibus', 'Motores de Grande Porte', 'Serviço Industrial', 'Garantia Estendida'],
  },
  {
    Icon: Cog,
    title: 'Centro Automotivo Completo',
    desc: 'Além da retífica, oferecemos serviços automotivos diversos para manter seu veículo em perfeito estado.',
    items: ['Manutenção Preventiva', 'Diagnóstico Eletrônico', 'Reparos Gerais', 'Consultoria Técnica'],
  },
  {
    Icon: Gauge,
    title: 'Diagnóstico e Avaliação',
    desc: 'Análise completa do motor com equipamentos modernos para identificar problemas e recomendar soluções.',
    items: ['Inspeção Técnica', 'Relatório Detalhado', 'Orçamento Transparente', 'Análise de Desempenho'],
  },
  {
    Icon: FileCheck,
    title: 'Garantia e Suporte',
    desc: 'Todos os serviços com garantia e acompanhamento pós-serviço para sua total tranquilidade.',
    items: ['Garantia Certificada', 'Suporte Técnico', 'Acompanhamento', 'Satisfação Garantida'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-[rgb(167,20,42)]">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(167,20,42)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluções completas em retífica de motores e serviços automotivos para todas as
            necessidades do seu veículo, seja ele leve, médio ou pesado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, desc, items }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(167,20,42)] group"
            >
              <div className="bg-gradient-to-br from-[rgb(167,20,42)] to-red-700 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[rgb(167,20,42)] transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[rgb(167,20,42)] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(167,20,42)] font-semibold hover:text-[rgb(147,15,37)] transition-colors inline-flex items-center group/link"
                >
                  Solicitar Orçamento
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-[rgb(167,20,42)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Precisando de um Orçamento Personalizado?
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco e receba um atendimento especializado. Nossa equipe está
                pronta para avaliar as necessidades do seu motor e oferecer a melhor solução.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[rgb(167,20,42)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(147,15,37)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:+556235584336"
                  className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold border-2 border-gray-200"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Serviços de Retífica"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
