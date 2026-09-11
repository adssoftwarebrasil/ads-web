import { ArrowUpRight, Droplets, Flame } from 'lucide-react';
import ProductIllustration from '../components/ProductIllustration';
import { whatsappUrl } from '../data/business';

const products = [
  {
    type: 'gas',
    label: 'PARA A COZINHA NÃO PARAR',
    name: 'Gás de cozinha',
    description:
      'O gás do almoço de domingo, do café passado e de tantos bons momentos à mesa.',
    action: 'Pedir meu gás',
    icon: Flame,
    message:
      'Olá, Primavera Gás! Gostaria de pedir gás de cozinha em Sinop. Podem me informar o valor e a disponibilidade de entrega?',
  },
  {
    type: 'water',
    label: 'LEVEZA EM CADA GOLE',
    name: 'Água para o seu dia',
    description:
      'Na pausa do trabalho ou no aconchego de casa, tenha sempre água por perto.',
    action: 'Pedir minha água',
    icon: Droplets,
    message:
      'Olá, Primavera Gás! Gostaria de pedir água em Sinop. Podem me informar as opções, valores e a disponibilidade de entrega?',
  },
];

export default function Products() {
  return (
    <section
      className="products-section section-space"
      id="produtos"
      aria-labelledby="products-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DUAS NECESSIDADES. UM SÓ CONTATO.</span>
            <h2 id="products-title">O essencial, sem complicar.</h2>
          </div>
          <p>
            Precisou de gás ou de água?
            <br />É só chamar a Primavera.
          </p>
        </div>
        <div className="products-grid">
          {products.map(
            ({
              type,
              label,
              name,
              description,
              action,
              icon: Icon,
              message,
            }) => (
              <article className={`product-card product-${type}`} key={type}>
                <div className="product-copy">
                  <span className="product-icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className="product-kicker">{label}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a
                    className="product-link"
                    href={whatsappUrl(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {action}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                </div>
                <div className="product-art">
                  <div className="product-orbit" />
                  <ProductIllustration type={type} />
                  <span>Imagem ilustrativa</span>
                </div>
              </article>
            ),
          )}
        </div>
        <p className="products-note">
          Valores e disponibilidade? Nossa equipe te conta pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
