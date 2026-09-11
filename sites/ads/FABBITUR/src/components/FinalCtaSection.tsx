import { WhatsAppIcon } from './icons';

const WA_PASSAGEM =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20consultar%20uma%20passagem.';

export default function FinalCtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="final-cta-heading">
      <div className="container-site text-center">
        <h2 id="final-cta-heading" className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Vai viajar ou enviar uma encomenda? Fale com a Fabbitur.
        </h2>
        <p className="text-[var(--color-text-600)] mb-8 max-w-xl mx-auto">
          Nossa equipe ajuda você a consultar horários, comprar passagens e tirar dúvidas sobre envio de encomendas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/comprar-passagem" className="btn-primary text-base px-8 py-4">
            Comprar passagem
          </a>
          <a href={WA_PASSAGEM} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            <WhatsAppIcon size={20} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
