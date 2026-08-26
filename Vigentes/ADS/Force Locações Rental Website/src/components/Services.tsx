import {
  Anchor,
  Wrench,
  Box,
  Building2,
  Truck,
  Factory,
  Container,
  ArrowLeftRight,
  PackageOpen,
  Building,
  Construction,
  FileText,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Anchor, title: 'Carga, Descarga e Içamentos', text: 'Movimentação segura de equipamentos e materiais com técnicas especializadas' },
  { icon: Wrench, title: 'Montagem e Desmontagem de Máquinas e Equipamentos', text: 'Equipe técnica para instalação e remoção de maquinário industrial' },
  { icon: Box, title: 'Montagem de Estrutura Pré-Fabricada de Concreto', text: 'Içamento e posicionamento de vigas, lajes e elementos pré-fabricados' },
  { icon: Building2, title: 'Montagem de Estrutura Metálica', text: 'Instalação de estruturas metálicas com precisão e segurança' },
  { icon: Truck, title: 'Transporte de Máquinas', text: 'Logística especializada para equipamentos pesados e delicados' },
  { icon: Truck, title: 'Transporte Pesado e de Tamanho Excedente', text: 'Soluções para cargas fora de padrão, com documentação e planejamento de rota' },
  { icon: Factory, title: 'Remoções Técnicas Industriais', text: 'Desmobilização e relocação de equipamentos fabris' },
  { icon: Container, title: 'Conteinerização e Desconteinerização', text: 'Carregamento e descarregamento de containers com segurança' },
  { icon: ArrowLeftRight, title: 'Movimentação Interna e Mudança de Layout', text: 'Reorganização de equipamentos dentro de instalações industriais' },
  { icon: PackageOpen, title: 'Container 20″ e 40″', text: 'Locação de containers para almoxarifados, escritórios temporários e alojamentos' },
  { icon: Building, title: 'Mudanças Industriais Completas', text: 'Relocação total de empresas e fábricas, do A ao Z' },
  { icon: Construction, title: 'Movimentação em Obras', text: 'Suporte contínuo para construções e montagens' },
  { icon: FileText, title: 'Plano de Rigging', text: 'Planejamento técnico detalhado de cada movimentação com engenheiro responsável' },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-force-blue text-center mb-4">
          Serviços Especializados em Movimentação de Cargas
        </h2>
        <p className="text-xl text-center text-force-gray mb-16">
          Soluções completas para sua operação, do planejamento à execução
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, text }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md hover:border-2 hover:border-force-blue transition-all duration-300 flex items-start space-x-4"
            >
              <Icon className="w-10 h-10 text-force-yellow flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-force-blue mb-2">{title}</h3>
                <p className="text-force-gray">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#orcamento"
            className="inline-block bg-force-yellow text-force-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
          >
            SOLICITAR SERVIÇO PERSONALIZADO
          </a>
        </div>
      </div>
    </section>
  );
}
