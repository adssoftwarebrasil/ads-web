import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Truck,
} from 'lucide-react';
import storefront from '../assets/fachada-principal.webp';
import WhatsAppLink from '../components/WhatsAppLink';
import { business, mapsUrl } from '../data/business';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="small-dot" /> GÁS E ÁGUA EM SINOP
          </span>
          <h1 id="hero-title">
            Seu dia não para.
            <br />
            <span>A gente entrega.</span>
          </h1>
          <p>
            Do almoço em família à água fresquinha.
            <br className="desktop-break" /> Conte com a Primavera Gás para o
            que faz parte do seu dia.
          </p>
          <div className="hero-actions">
            <WhatsAppLink arrow />
            <a href={`tel:${business.phone}`} className="phone-action">
              <Phone size={19} aria-hidden="true" />
              <span>
                Prefere ligar?<strong>{business.phoneDisplay}</strong>
              </span>
            </a>
          </div>
          <div className="hero-benefits">
            <span>
              <Truck size={18} aria-hidden="true" /> Entrega rápida em Sinop
            </span>
            <span>
              <Clock3 size={17} aria-hidden="true" /> Das {business.hours}
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-outline" aria-hidden="true" />
          <div className="hero-photo">
            <img
              src={storefront}
              alt="Fachada vermelha e veículos da Primavera Gás, em Sinop"
              width="1600"
              height="1200"
              fetchPriority="high"
            />
            <a
              className="photo-caption"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="caption-pin">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <span>
                Nossa casa, aqui em Sinop<strong>Jardim Azaleias</strong>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </div>
          <div className="anniversary-seal">
            <span>PERTINHO DE VOCÊ HÁ</span>
            <strong>
              30<span>anos</span>
            </strong>
            <span>PRIMAVERA GÁS • SINOP</span>
          </div>
          <div className="hero-spark" aria-hidden="true">
            ✳
          </div>
        </div>
      </div>
      <div className="container hero-footer">
        <span>O ESSENCIAL PARA A SUA ROTINA.</span>
        <a href="#produtos">
          Conheça nossos produtos <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
