import { ArrowUpRight, Check } from 'lucide-react';
import teamPhoto from '../assets/equipe-taiti.webp';
import { whatsappUrl } from '../data';

export default function About() {
  return (
    <section id="a-taiti" className="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-visual"><img src={teamPhoto} alt="Equipe da Taiti Pneus trabalhando na manutenção de veículos na oficina" width="680" height="510" loading="lazy" /><div className="about-photo-label"><span>GENTE QUE CUIDA.</span><span>CARROS QUE SEGUEM.</span></div></div>
        <div className="about-copy"><p className="eyebrow"><span className="section-number">02 /</span> QUEM ESTÁ COM VOCÊ</p><h2 id="about-title">A confiança se constrói.<br /><span>Há 26 anos.</span></h2><p>Tem coisa que a gente conquista com o tempo. A confiança de quem entrega as chaves do carro é uma delas.</p><p>Na Taiti Pneus, são 26 anos de mercado com foco na qualidade dos serviços prestados. Aqui em Cuiabá, reunimos pneus e cuidados automotivos para fazer parte do seu dia a dia.</p><div className="about-values"><span><Check size={17} /> Experiência que acompanha você</span><span><Check size={17} /> Qualidade em cada serviço</span></div><a className="text-link text-link--light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Conte com a Taiti <ArrowUpRight size={19} /></a></div>
      </div>
    </section>
  );
}
