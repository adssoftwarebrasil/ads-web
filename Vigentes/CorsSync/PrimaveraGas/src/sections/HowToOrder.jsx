import { ArrowUpRight, MapPin, MessageCircle, Truck } from 'lucide-react';
import WhatsAppLink from '../components/WhatsAppLink';

const steps = [
  {
    number: '01',
    title: 'Chame a Primavera',
    text: 'Mande uma mensagem e diga se precisa de gás, água ou dos dois.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Combine seu pedido',
    text: 'Informe seu endereço em Sinop e confirme os detalhes com a equipe.',
    icon: MapPin,
  },
  {
    number: '03',
    title: 'Pronto. É com a gente!',
    text: 'Depois da confirmação, é só aguardar a entrega no endereço combinado.',
    icon: Truck,
  },
];

export default function HowToOrder() {
  return (
    <section className="order-section" aria-labelledby="order-title">
      <div className="container order-inner">
        <div className="order-intro">
          <span className="eyebrow">PODE CHAMAR.</span>
          <h2 id="order-title">
            Seu pedido começa
            <br />
            com um “oi”. <ArrowUpRight aria-hidden="true" />
          </h2>
          <WhatsAppLink className="button-light">Vamos conversar</WhatsAppLink>
        </div>
        <div className="order-steps">
          {steps.map(({ number, title, text, icon: Icon }) => (
            <div className="order-step" key={number}>
              <div className="step-heading">
                <span>{number}</span>
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
