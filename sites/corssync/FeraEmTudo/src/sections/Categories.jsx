import { useState } from 'react'
import {
  Cable,
  CarFront,
  CookingPot,
  Drill,
  FileText,
  House,
  PackageOpen,
  PaintBucket,
  PawPrint,
  Wrench,
} from 'lucide-react'
import { photo } from '../data/storeData.js'

const categories = [
  {
    id: 'ferragens',
    title: 'Ferragens e ferramentas',
    shortTitle: 'Ferragens',
    description: 'Ferragens e ferramentas para manutenção, reparos e serviços do dia a dia.',
    image: 'ferramentas-manuais.jpeg',
    Icon: Wrench,
  },
  {
    id: 'materiais-escritorio',
    title: 'Materiais de escritório',
    shortTitle: 'Materiais de escritório',
    description: 'Itens de papelaria e materiais para organizar as tarefas do trabalho e dos estudos.',
    image: 'aviamentos-e-papelaria.jpeg',
    Icon: FileText,
  },
  {
    id: 'automotiva',
    title: 'Limpeza automotiva',
    shortTitle: 'Automotiva',
    description: 'Produtos para cuidar da limpeza e do acabamento do seu veículo, incluindo opções Vonixx.',
    image: 'limpeza-automotiva-01.jpeg',
    Icon: CarFront,
  },
  {
    id: 'casa',
    title: 'Utilidades para casa',
    shortTitle: 'Para casa',
    description: 'Soluções práticas para cozinha, organização, limpeza e rotina da casa.',
    image: 'utilidades-domesticas.jpeg',
    Icon: House,
  },
  {
    id: 'eletronicos',
    title: 'Materiais eletrônicos',
    shortTitle: 'Eletrônicos',
    description: 'Cabos, controles, acessórios e itens eletrônicos para facilitar a rotina.',
    image: 'eletronicos.jpeg',
    Icon: Cable,
  },
  {
    id: 'tintas',
    title: 'Tintas e complementos',
    shortTitle: 'Tintas',
    description: 'Tintas, sprays e complementos para renovar, reparar e dar acabamento.',
    image: 'sprays-e-tintas.jpeg',
    Icon: PaintBucket,
  },
  {
    id: 'embalagens',
    title: 'Embalagens',
    shortTitle: 'Embalagens',
    description: 'Embalagens e itens para servir, organizar e proteger no dia a dia.',
    image: 'embalagens.jpeg',
    Icon: PackageOpen,
  },
  {
    id: 'pet',
    title: 'Ração para pet',
    shortTitle: 'Pet',
    description: 'Ração e itens para ajudar nos cuidados diários com o seu pet.',
    image: 'pet-e-cabos.jpeg',
    Icon: PawPrint,
  },
  {
    id: 'panelas-utensilios',
    title: 'Panelas e utensílios',
    shortTitle: 'Panelas e utensílios',
    description: 'Panelas e utensílios práticos para preparar, servir e organizar a cozinha.',
    image: 'utilidades-cozinha.jpeg',
    Icon: CookingPot,
  },
  {
    id: 'maquinas',
    title: 'Máquinas profissionais',
    shortTitle: 'Máquinas',
    description: 'Máquinas e equipamentos para quem leva o serviço a sério.',
    image: 'ferramentas-eletricas.jpeg',
    Icon: Drill,
  },
]

export default function Categories() {
  const [activeId, setActiveId] = useState(categories[0].id)
  const active = categories.find((category) => category.id === activeId) ?? categories[0]

  return (
    <section className="section categories" id="categorias">
      <div className="container">
        <div className="section-heading section-heading--split reveal">
          <div>
            <span className="eyebrow">O que você veio resolver hoje?</span>
            <h2>Um lugar. Muitas soluções.</h2>
          </div>
          <p>
            Da manutenção da casa ao cuidado com o carro, encontre variedade para sair com tudo
            resolvido.
          </p>
        </div>

        <div className="category-explorer reveal">
          <div className="category-explorer__selector" role="tablist" aria-label="Departamentos">
            {categories.map(({ id, shortTitle, Icon }, index) => (
              <button
                key={id}
                className={activeId === id ? 'is-active' : ''}
                type="button"
                role="tab"
                aria-selected={activeId === id}
                aria-controls="category-panel"
                onClick={() => setActiveId(id)}
              >
                <span className="category-explorer__number">{String(index + 1).padStart(2, '0')}</span>
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                <span>{shortTitle}</span>
              </button>
            ))}
          </div>

          <article className="category-feature" id="category-panel" role="tabpanel" key={active.id}>
            <img src={photo(active.image)} alt={`Setor de ${active.title.toLowerCase()} da loja`} />
            <div className="category-feature__shade" aria-hidden="true" />
            <div className="category-feature__content">
              <span>Departamento em destaque</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>
            <div className="category-feature__corner" aria-hidden="true">
              FERA
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
