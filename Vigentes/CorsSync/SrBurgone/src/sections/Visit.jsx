import { ArrowUpRight, Clock3, MapPin, MessageCircle } from 'lucide-react';
import Instagram from '../components/InstagramIcon';
import { business } from '../data/site';
import WhatsAppLink from '../components/WhatsAppLink';
import Reveal from '../components/Reveal';

export default function Visit() {
  return (
    <section className="visit" id="contato" aria-labelledby="visit-title">
      <div className="container">
        <Reveal className="visit__grid">
          <div className="visit__intro">
            <p className="eyebrow">A PRÓXIMA MORDIDA TÁ TE ESPERANDO.</p>
            <h2 id="visit-title">
              BORA DE
              <br />
              <span>SR BURGONE?</span>
            </h2>
            <p>Chama a gente, escolhe seu lanche e deixa o resto com o capricho da casa.</p>
            <WhatsAppLink className="button button--dark">
              Pedir pelo WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
            </WhatsAppLink>
            <a className="visit__phone" href={`tel:+${business.phone}`}>
              {business.formattedPhone}
            </a>
          </div>
          <div className="visit__info">
            <div className="visit__info-block">
              <MapPin aria-hidden="true" />
              <div>
                <h3>O nosso lugar</h3>
                <address>
                  Rua 9, Qd. 15, Lt. 29
                  <br />
                  Residencial Triunfo 1
                </address>
                <a
                  className="text-link"
                  href={business.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir no Google Maps <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="visit__info-block">
              <Clock3 aria-hidden="true" />
              <div>
                <h3>Hora de matar a fome</h3>
                <p>{business.hours}</p>
                <small>Consulte os dias de abertura pelo WhatsApp.</small>
              </div>
            </div>
            <div className="visit__info-block">
              <MessageCircle aria-hidden="true" />
              <div>
                <h3>Pertinho de você</h3>
                <p>{business.serviceArea}.</p>
                <small>Confirme entrega, taxa e prazo para seu endereço.</small>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="visit__social">
          <Instagram size={20} aria-hidden="true" />
          <span>Mais sabor no seu feed.</span>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer">
            @srburgone <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
