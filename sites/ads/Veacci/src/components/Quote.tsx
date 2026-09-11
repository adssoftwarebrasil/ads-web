import { PointInCircle } from './icons';

export default function Quote() {
  return (
    <section className="bg-paper py-16 text-ink md:py-24">
      <div className="container-page">
        <figure className="mx-auto max-w-3xl text-center" data-reveal>
          <PointInCircle className="mx-auto size-7 text-moss" />
          <blockquote className="mt-7 font-serif text-2xl leading-snug tracking-tight text-ink md:text-[2rem]">
            “A Veacci não entregou só campanhas. Organizou nossa operação digital de ponta a ponta e passou a falar a língua da diretoria: receita.”
          </blockquote>
          <figcaption className="mt-7 text-sm text-mist">
            Diretor de Marketing · rede varejista nacional
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
