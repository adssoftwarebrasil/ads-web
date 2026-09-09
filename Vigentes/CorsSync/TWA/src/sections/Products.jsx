import {
  AudioLines,
  Cable,
  Cctv,
  Flame,
  KeyRound,
  Lightbulb,
  MoveRight,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import goldBadge from '../assets/images/twa-revenda-ouro.png'
import greenPartnerBadge from '../assets/images/intelbras-parceiro-verde.jpg'
import frahmLogo from '../assets/images/partners/frahm.png'
import intelbrasLogo from '../assets/images/partners/intelbras.png'
import jblLogo from '../assets/images/partners/jbl.png'
import mikrotikLogo from '../assets/images/partners/mikrotik.png'
import nexansLogo from '../assets/images/partners/nexans.png'
import omadaLogo from '../assets/images/partners/omada.png'
import ubiquitiLogo from '../assets/images/partners/ubiquiti.png'
import { createWhatsAppUrl } from '../data/siteData'

const productFamilies = [
  { label: 'Câmeras e CFTV', icon: Cctv },
  { label: 'Controle de acesso', icon: KeyRound },
  { label: 'Automação e iluminação', icon: Lightbulb },
  { label: 'Redes e conectividade', icon: Cable },
  { label: 'Áudio e TV coletiva', icon: AudioLines },
  { label: 'Detecção de incêndio', icon: Flame },
]

const partnerBrands = [
  { name: 'Intelbras', logo: intelbrasLogo, format: 'wide' },
  { name: 'JBL', logo: jblLogo, format: 'compact' },
  { name: 'Frahm', logo: frahmLogo, format: 'wide' },
  { name: 'Nexans', logo: nexansLogo, format: 'wide' },
  { name: 'MikroTik', logo: mikrotikLogo, format: 'wide' },
  { name: 'Omada', logo: omadaLogo, format: 'wide' },
  { name: 'Ubiquiti Networks', logo: ubiquitiLogo, format: 'compact' },
]

function Products() {
  return (
    <section className="section products-section" id="produtos">
      <div className="products-lines" aria-hidden="true" />
      <div className="container products-layout">
        <div className="products-copy" data-reveal>
          <SectionHeading
            eyebrow="Produtos e equipamentos"
            title="Tecnologia selecionada para funcionar como um só sistema."
            text="Especificamos os equipamentos de acordo com cada ambiente, combinando desempenho, segurança e compatibilidade para uma entrega confiável."
            light
          />

          <div className="product-families">
            {productFamilies.map(({ label, icon: Icon }) => (
              <div className="product-family" key={label}>
                <Icon size={19} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a
            className="text-link text-link--light"
            href={createWhatsAppUrl(
              'Olá! Gostaria de orientação para escolher os equipamentos do meu projeto.',
            )}
            target="_blank"
            rel="noreferrer"
          >
            Encontre a solução ideal para o seu projeto
            <MoveRight aria-hidden="true" />
          </a>
        </div>

        <div className="partner-stage" data-reveal>
          <div className="partner-halo" aria-hidden="true" />
          <img
            className="gold-partner-seal"
            src={goldBadge}
            alt="Selo TWA Tecnologia Revenda Ouro Intelbras"
            loading="lazy"
          />
          <div className="partner-card">
            <img src={greenPartnerBadge} alt="Parceiro credenciado Intelbras" loading="lazy" />
            <div>
              <span>Parceria de confiança</span>
              <strong>Revenda Ouro Intelbras</strong>
              <p>Equipamentos de referência, garantia e suporte para projetos completos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container partners-showcase" data-reveal>
        <div className="partners-showcase-heading">
          <div>
            <span>Marcas parceiras</span>
            <h3>Tecnologia de referência em cada projeto.</h3>
          </div>
          <p>
            Integramos equipamentos de fabricantes reconhecidos para entregar soluções confiáveis,
            compatíveis e preparadas para cada ambiente.
          </p>
        </div>

        <div className="partner-logos" aria-label="Marcas parceiras da TWA Tecnologia">
          {partnerBrands.map(({ name, logo, format }) => (
            <div className={`partner-logo partner-logo--${format}`} key={name}>
              <img src={logo} alt={`Logo ${name}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
