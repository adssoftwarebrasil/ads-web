import {
  ArrowUpRight,
  Bath,
  Droplets,
  Hammer,
  Home,
  PaintRoller,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import tintasImage from "../assets/tintas-e-impermeabilizantes.jpeg";
import ferramentasImage from "../assets/linha-cortag.jpeg";
import loucasImage from "../assets/catalog/25-louca-onix-banheiro.jpeg";
import pisoImage from "../assets/assentamento-piso.jpeg";
import telhasImage from "../assets/telhas.jpeg";
import torneirasImage from "../assets/torneiras-kelly.jpeg";

const categories = [
  {
    title: "Tintas & proteção",
    text: "Cores, texturas e soluções para proteger cada superfície.",
    image: tintasImage,
    icon: PaintRoller,
    className: "category-card--wide",
    alt: "Prateleiras com tintas e impermeabilizantes na TJ Mix",
  },
  {
    title: "Ferramentas",
    text: "Equipamentos para trabalhar com precisão e produtividade.",
    image: ferramentasImage,
    icon: Hammer,
    className: "category-card--tall",
    alt: "Seleção de ferramentas para pedreiro",
  },
  {
    title: "Louças & metais",
    text: "Soluções práticas para banheiros, cozinhas e áreas de serviço.",
    image: loucasImage,
    icon: Bath,
    className: "category-card--standard",
    alt: "Banheiro com louça sanitária Onix",
  },
  {
    title: "Pisos & acabamentos",
    text: "Materiais para assentar, nivelar e finalizar com cuidado.",
    image: pisoImage,
    icon: Sparkles,
    className: "category-card--wide category-card--low",
    alt: "Profissional realizando assentamento de piso",
  },
  {
    title: "Cobertura",
    text: "Telhas e itens para proteger sua construção.",
    image: telhasImage,
    icon: Home,
    className: "category-card--standard",
    alt: "Modelos de telhas para construção",
  },
  {
    title: "Hidráulica & utilidades",
    text: "Os detalhes que deixam a casa pronta para o dia a dia.",
    image: torneirasImage,
    icon: Droplets,
    className: "category-card--standard",
    alt: "Linha de torneiras e metais sanitários",
  },
];

function ProductCategories() {
  return (
    <section className="section categories" id="categorias">
      <div className="container">
        <Reveal>
          <div className="categories__intro">
            <SectionHeading
              eyebrow="Encontre na TJ Mix"
              title="Uma loja, todas as etapas."
              text="Uma seleção completa para quem está construindo, reformando ou cuidando dos detalhes da casa."
            />
            <a className="text-link" href="#catalogo">
              Ver catálogo completo
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="categories__grid">
          {categories.map(({ icon: Icon, ...category }, index) => (
            <Reveal key={category.title} className={category.className} delay={index * 55}>
              <article className="category-card">
                <img src={category.image} alt={category.alt} loading="lazy" />
                <div className="category-card__overlay" />
                <div className="category-card__content">
                  <span className="category-card__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                  </div>
                  <span className="category-card__arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;
