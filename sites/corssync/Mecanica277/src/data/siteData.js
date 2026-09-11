import fachadaPrincipal from '../assets/fachada-principal.jpeg'
import fachadaFrontal from '../assets/fachada-frontal.jpeg'
import fachadaEntrada from '../assets/fachada-entrada.jpeg'
import fachadaLateral from '../assets/fachada-lateral.jpeg'
import fachadaRua from '../assets/fachada-rua.jpeg'
import fachadaPanorama from '../assets/fachada-panorama.jpeg'
import fachadaCeu from '../assets/fachada-ceu.jpeg'
import oficinaGeral from '../assets/oficina-geral.jpeg'
import oficinaAmpla from '../assets/oficina-ampla.jpeg'
import oficinaElevadores from '../assets/oficina-elevadores.jpeg'
import oficinaPickups from '../assets/oficina-pickups.jpeg'
import oficinaServico from '../assets/oficina-servico.jpeg'
import manutencaoPickup from '../assets/manutencao-pickup.jpeg'
import boxesOficina from '../assets/boxes-oficina.jpeg'
import oficinaRecepcao from '../assets/oficina-recepcao.jpeg'
import recepcao from '../assets/recepcao.jpeg'
import atendimento from '../assets/atendimento.jpeg'
import salaEspera from '../assets/sala-espera.jpeg'

export const contact = {
  whatsapp: 'https://wa.me/5545998527494?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Mec%C3%A2nica%20277%20e%20gostaria%20de%20solicitar%20um%20atendimento.',
  fleetWhatsapp: 'https://wa.me/5545998527494?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Mec%C3%A2nica%20277%20e%20gostaria%20de%20consultar%20o%20atendimento%20para%20frotas.',
  whatsappLabel: '(45) 99852-7494',
  phone: 'tel:+554535253044',
  phoneLabel: '(45) 3525-3044',
  email: 'mailto:mecanica_277@hotmail.com',
  emailLabel: 'mecanica_277@hotmail.com',
  instagram: 'https://www.instagram.com/mecanica277foz?igsh=MWR1MzFqcTc2dDBsMg%3D%3D&utm_source=qr',
}

export const heroImage = fachadaPrincipal
export const facadeImage = fachadaFrontal
export const careImages = { salaEspera, recepcao, atendimento }

export const services = [
  {
    title: 'Mecânica e elétrica',
    description: 'Manutenção e reparos completos para devolver segurança e desempenho ao veículo.',
    category: 'manutencao',
    icon: 'wrench',
  },
  {
    title: 'Ar-condicionado',
    description: 'Diagnóstico e manutenção do sistema para uma condução confortável em qualquer estação.',
    category: 'conforto',
    icon: 'snowflake',
  },
  {
    title: 'Suspensão e pneumática',
    description: 'Avaliação de ruídos, estabilidade e componentes do conjunto de suspensão.',
    category: 'seguranca',
    icon: 'activity',
  },
  {
    title: 'Alinhamento e balanceamento',
    description: 'Mais estabilidade, direção uniforme e melhor aproveitamento dos pneus.',
    category: 'seguranca',
    icon: 'gauge',
  },
  {
    title: 'Módulos e remapeamento',
    description: 'Programação e diagnóstico eletrônico com equipamentos modernos.',
    category: 'diagnostico',
    icon: 'cpu',
  },
  {
    title: 'Freios e ABS',
    description: 'Inspeção e manutenção de componentes essenciais para uma frenagem segura.',
    category: 'seguranca',
    icon: 'circleStop',
  },
  {
    title: 'Óleo e filtros',
    description: 'Troca preventiva com produtos de procedência e atenção às especificações do veículo.',
    category: 'manutencao',
    icon: 'droplets',
  },
  {
    title: 'Cabeçote e motor',
    description: 'Serviços especializados para o conjunto que move o seu veículo.',
    category: 'manutencao',
    icon: 'settings',
  },
  {
    title: 'Injeção eletrônica',
    description: 'Leitura e correção de falhas para funcionamento eficiente e respostas precisas.',
    category: 'diagnostico',
    icon: 'scanLine',
  },
  {
    title: 'Chapeação e pintura',
    description: 'Cuidados para recuperar a apresentação e o acabamento do veículo.',
    category: 'estetica',
    icon: 'paintbrush',
  },
]

export const serviceFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'manutencao', label: 'Manutenção' },
  { id: 'seguranca', label: 'Segurança' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'conforto', label: 'Conforto' },
  { id: 'estetica', label: 'Estética' },
]

export const gallery = [
  { src: oficinaGeral, alt: 'Veículos em manutenção na área principal da Mecânica 277', label: 'Estrutura completa' },
  { src: oficinaElevadores, alt: 'Veículo no elevador dentro da oficina', label: 'Manutenção em andamento' },
  { src: oficinaPickups, alt: 'Pick-ups e SUV em manutenção na oficina', label: 'Leves, SUVs e pick-ups' },
  { src: oficinaAmpla, alt: 'Visão ampla dos boxes e veículos da Mecânica 277', label: 'Capacidade de atendimento' },
  { src: oficinaServico, alt: 'Área de serviços com vários elevadores automotivos', label: 'Boxes equipados' },
  { src: manutencaoPickup, alt: 'Mecânico trabalhando em veículo elevado', label: 'Execução especializada' },
  { src: boxesOficina, alt: 'Boxes de serviço e área interna da oficina', label: 'Rotina de oficina' },
  { src: oficinaRecepcao, alt: 'Área interna próxima à recepção e aos boxes', label: 'Organização e suporte' },
  { src: fachadaEntrada, alt: 'Entrada da Mecânica 277 com escudo da marca', label: 'Mecânica 277' },
  { src: fachadaLateral, alt: 'Fachada amarela e grafite da Mecânica 277', label: 'Fachada' },
  { src: fachadaRua, alt: 'Mecânica 277 vista da rua', label: 'Foz do Iguaçu' },
  { src: fachadaPanorama, alt: 'Vista panorâmica da fachada da Mecânica 277', label: 'Atendimento multimarcas' },
  { src: fachadaCeu, alt: 'Fachada da Mecânica 277 sob céu azul', label: 'Há 8 anos em atividade' },
]
