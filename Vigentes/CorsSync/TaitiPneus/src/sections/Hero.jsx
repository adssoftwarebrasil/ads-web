import { ArrowDown, ArrowUpRight, Check, MapPin } from 'lucide-react';
import carPhoto from '../assets/alinhamento-oficina.webp';
import { whatsappUrl } from '../data';
import { WhatsAppIcon } from '../components/Icons';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="yellow-line" /> SEU AUTO CENTER EM CUIABÁ</p>
          <h1 id="hero-title">Confiança para<br />seguir <span className="highlight-text">em frente.</span></h1>
          <p className="hero-description">Seu caminho começa com um carro bem cuidado. Há 26 anos, a Taiti Pneus cuida do seu veículo com a confiança e a qualidade que você procura.</p>
          <div className="hero-actions">
            <a className="button button--yellow" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Cuidar do meu carro <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#servicos">Explore os serviços <ArrowDown size={17} /></a>
          </div>
          <div className="hero-reassurance"><span><Check size={15} /> 26 anos de experiência</span><span><Check size={15} /> Atendimento próximo</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={carPhoto} width="680" height="510" fetchPriority="high" alt="Carro no elevador da Taiti Pneus durante serviço nas rodas e suspensão" />
            <div className="image-index"><span className="status-dot" /> AQUI, SEU CARRO TEM ATENÇÃO.</div>
            <div className="image-location"><MapPin size={14} /> TAITI PNEUS · CUIABÁ</div>
          </div>
          <div className="experience-tag"><span className="experience-number">26<span>anos</span></span><span className="experience-label">de confiança.<br />De verdade.</span><ArrowUpRight size={26} /></div>
          <span className="photo-caption">NOSSA OFICINA. COMPROMISSO COM VOCÊ.</span>
        </div>
      </div>
      <div className="service-ribbon" aria-hidden="true"><div className="container ribbon-inner"><span>PNEUS</span><i /><span>ALINHAMENTO</span><i /><span>BALANCEAMENTO</span><i /><span>MECÂNICA</span><i /><span>SUSPENSÃO</span><i /><span>FREIOS</span><i /><span>INJEÇÃO ELETRÔNICA</span></div></div>
    </section>
  );
}
