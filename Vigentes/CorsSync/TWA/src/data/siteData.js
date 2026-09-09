import automationImage from '../assets/images/automacao-residencial.webp'
import securityImage from '../assets/images/seguranca-integrada.webp'
import fireImage from '../assets/images/prevencao-incendio.webp'
import audioImage from '../assets/images/som-ambiente.webp'
import networkImage from '../assets/images/redes-corporativas.webp'
import maintenanceImage from '../assets/images/manutencao-tecnica.webp'
import constructionImage from '../assets/images/construcao-civil.webp'
import chargerImage from '../assets/images/carregador-veicular.webp'

export const CONTACT = {
  phoneDisplay: '(47) 3081-1183',
  phoneHref: 'tel:+554730811183',
  email: 'contato@twatecnologia.com.br',
  address: 'Rua 1926, nº 102 — Balneário Camboriú/SC',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua%201926%2C%20102%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20SC',
  instagram: 'https://www.instagram.com/twatecnologia/',
  facebook: 'https://www.facebook.com/twasc',
}

export function createWhatsAppUrl(
  message = 'Olá! Gostaria de conversar com um especialista da TWA Tecnologia.',
) {
  return `https://wa.me/554730811183?text=${encodeURIComponent(message)}`
}

export const services = [
  {
    title: 'Automação',
    short: 'Rotinas inteligentes para residências, empresas e condomínios.',
    description:
      'Controle iluminação, motores e rotinas de segurança com mais praticidade e uma gestão integrada do dia a dia.',
    image: automationImage,
    alt: 'Painel de automação residencial sendo controlado por tablet',
    icon: 'automation',
  },
  {
    title: 'Segurança eletrônica',
    short: 'Proteção inteligente, monitoramento e controle de acesso.',
    description:
      'CFTV, reconhecimento facial, detecção por linhas virtuais, alarmes e soluções antifurto reunidos em um projeto personalizado.',
    image: securityImage,
    alt: 'Central de monitoramento com câmeras e reconhecimento facial',
    icon: 'security',
  },
  {
    title: 'Prevenção de incêndio',
    short: 'Soluções completas para proteger vidas e patrimônio.',
    description:
      'Centrais de detecção, alarmes, iluminação de emergência e sistemas de aspiração projetados conforme as normas vigentes.',
    image: fireImage,
    alt: 'Sistema de detecção e alarme de incêndio em ambiente corporativo',
    icon: 'fire',
  },
  {
    title: 'Som ambiente',
    short: 'Conforto acústico e comunicação por setores.',
    description:
      'Projetos de áudio sob medida para empresas, lojas, residências e condomínios, com distribuição clara e equilibrada.',
    image: audioImage,
    alt: 'Caixa de som instalada em ambiente corporativo',
    icon: 'audio',
  },
  {
    title: 'Comunicação e redes',
    short: 'Conexões estáveis, rápidas e prontas para crescer.',
    description:
      'Cabeamento estruturado, fibra óptica, telefonia, Wi-Fi corporativo e TV coletiva com infraestrutura organizada e segura.',
    image: networkImage,
    alt: 'Rack de rede e infraestrutura Wi-Fi em escritório',
    icon: 'network',
  },
  {
    title: 'Contratos de manutenção',
    short: 'Continuidade para sistemas essenciais.',
    description:
      'Manutenção preventiva e corretiva, vistorias periódicas e atendimento técnico para reduzir falhas e paradas inesperadas.',
    image: maintenanceImage,
    alt: 'Técnico realizando manutenção em sistema eletrônico predial',
    icon: 'maintenance',
  },
  {
    title: 'Construção civil',
    short: 'Integração técnica da infraestrutura à entrega.',
    description:
      'Projetos e execução de sistemas eletrônicos complexos para empreendimentos, com acompanhamento em todas as etapas da obra.',
    image: constructionImage,
    alt: 'Edifício em construção com infraestrutura em execução',
    icon: 'construction',
  },
  {
    title: 'Carregadores veiculares',
    short: 'Mobilidade elétrica com controle e segurança.',
    description:
      'Projeto e instalação de estações de recarga para condomínios, empresas e novos empreendimentos.',
    image: chargerImage,
    alt: 'Veículo elétrico conectado a uma estação de recarga',
    icon: 'charger',
  },
]

export const differentiators = [
  {
    title: 'Projetos personalizados',
    text: 'Cada solução nasce das necessidades e da estrutura real de cada ambiente.',
    icon: 'project',
  },
  {
    title: 'Experiência em obras',
    text: 'Acompanhamento desde a infraestrutura básica até a configuração final dos sistemas.',
    icon: 'building',
  },
  {
    title: 'Conformidade técnica',
    text: 'Execução rigorosa conforme as normas vigentes, com foco em segurança e confiabilidade.',
    icon: 'compliance',
  },
  {
    title: 'Equipe qualificada',
    text: 'Profissionais treinados para instalar, configurar e orientar com alto padrão técnico.',
    icon: 'team',
  },
  {
    title: 'Suporte pós-entrega',
    text: 'Manutenção preventiva e apoio contínuo para preservar o desempenho dos sistemas.',
    icon: 'support',
  },
  {
    title: 'Compromisso com prazos',
    text: 'Organização técnica alinhada ao cronograma de empresas, condomínios e obras.',
    icon: 'schedule',
  },
]

export const faqs = [
  {
    question: 'Quais tipos de clientes a TWA atende?',
    answer:
      'A TWA desenvolve soluções para empresas, condomínios e construção civil, adaptando cada projeto à estrutura e às necessidades do cliente.',
  },
  {
    question: 'Em quais cidades a equipe realiza atendimentos?',
    answer:
      'A área de atendimento inclui Balneário Camboriú, Itajaí, Itapema e Camboriú.',
  },
  {
    question: 'A TWA oferece manutenção depois da instalação?',
    answer:
      'Sim. Há contratos de manutenção preventiva e corretiva, com vistorias periódicas e suporte técnico especializado.',
  },
  {
    question: 'Como solicitar uma avaliação para o meu projeto?',
    answer:
      'Entre em contato pelo WhatsApp ou telefone. A equipe entende a necessidade e orienta os próximos passos para a solução mais adequada.',
  },
]
