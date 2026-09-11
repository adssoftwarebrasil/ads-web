import { useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import carrinhoImage from "../assets/carrinho-reforcado.png";
import tintaImage from "../assets/tinta-davila.png";
import sanitarioImage from "../assets/kit-sanitario-onix.png";
import cortagImage from "../assets/linha-cortag.jpeg";
import texturaImage from "../assets/texturas-davila.jpeg";
import { whatsappHref } from "../siteData";

const recommendations = [
  {
    id: "carrinho",
    tab: "Obra",
    title: "Carrinho reforçado",
    label: "Força para o dia a dia",
    text: "Estrutura robusta, praticidade no transporte e resistência para acompanhar os serviços mais exigentes.",
    image: carrinhoImage,
    alt: "Carrinho de mão reforçado recomendado pela TJ Mix",
    benefits: ["Estrutura reforçada", "Boa capacidade", "Uso intenso"],
  },
  {
    id: "tinta",
    tab: "Pintura",
    title: "Tinta acrílica D’Ávila",
    label: "Cor, cobertura e proteção",
    text: "Uma solução para transformar ambientes internos e externos com acabamento uniforme.",
    image: tintaImage,
    alt: "Aplicação de tinta acrílica D’Ávila",
    benefits: ["Boa cobertura", "Cores duráveis", "Fácil aplicação"],
  },
  {
    id: "sanitario",
    tab: "Banheiro",
    title: "Kit sanitário completo",
    label: "Pronto para o seu banheiro",
    text: "Uma composição prática que reúne os itens essenciais para completar o ambiente.",
    image: sanitarioImage,
    alt: "Kit sanitário completo vendido pela TJ Mix",
    benefits: ["Solução completa", "Instalação prática", "Acabamento moderno"],
  },
  {
    id: "cortag",
    tab: "Ferramentas",
    title: "Linha profissional Cortag",
    label: "Precisão em cada corte",
    text: "Ferramentas pensadas para quem busca produtividade, segurança e um acabamento bem executado.",
    image: cortagImage,
    alt: "Linha de ferramentas Cortag recomendada pela TJ Mix",
    benefits: ["Corte preciso", "Alta durabilidade", "Uso profissional"],
  },
  {
    id: "textura",
    tab: "Acabamento",
    title: "Texturas D’Ávila",
    label: "Personalidade para a parede",
    text: "Cores e relevos que valorizam áreas internas e externas com um acabamento marcante.",
    image: texturaImage,
    alt: "Opções de texturas D’Ávila",
    benefits: ["Efeito decorativo", "Áreas internas e externas", "Variedade de cores"],
  },
];

function RecommendationGallery() {
  const [activeId, setActiveId] = useState(recommendations[0].id);
  const activeItem =
    recommendations.find((item) => item.id === activeId) ?? recommendations[0];

  return (
    <section className="section recommendations" id="recomenda">
      <div className="container">
        <Reveal>
          <div className="recommendations__top">
            <SectionHeading
              eyebrow="TJ Mix recomenda"
              title="Escolhas que fazem a obra avançar."
              text="Navegue por algumas das soluções selecionadas para diferentes momentos do seu projeto."
              light
            />
            <div className="recommendations__tabs" role="tablist" aria-label="Recomendações">
              {recommendations.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === item.id}
                  className={activeId === item.id ? "is-active" : ""}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.tab}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="recommendations__stage">
            <div className="recommendations__image">
              <img src={activeItem.image} alt={activeItem.alt} />
              <span>{activeItem.tab}</span>
            </div>
            <div className="recommendations__copy" aria-live="polite">
              <span className="eyebrow">{activeItem.label}</span>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.text}</p>
              <ul>
                {activeItem.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={17} strokeWidth={3} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                className="button button--gold button--large"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Consultar disponibilidade
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <small>Consulte modelos e disponibilidade com nossa equipe.</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default RecommendationGallery;
