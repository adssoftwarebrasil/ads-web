const WA_ENCOMENDA =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20envio%20de%20encomendas.';

interface Service {
  title: string;
  text: string;
  cta: string;
  href: string;
  external?: boolean;
}

const services: Service[] = [
  {
    title: 'Passagens interestaduais',
    text: 'Compre ou consulte passagens para rotas entre Imperatriz, Tocantins e Goiânia.',
    cta: 'Comprar passagem',
    href: '/comprar-passagem',
  },
  {
    title: 'Encomendas e objetos',
    text: 'Envie objetos e volumes pelas cidades atendidas com orientação direta pelo WhatsApp.',
    cta: 'Enviar encomenda',
    href: WA_ENCOMENDA,
    external: true,
  },
  {
    title: 'Cargas e volumes',
    text: 'Precisa transportar volumes maiores? Fale com a equipe para verificar atendimento e disponibilidade.',
    cta: 'Solicitar atendimento',
    href: WA_ENCOMENDA,
    external: true,
  },
  {
    title: 'Frota confortável',
    text: 'Viaje em ônibus conservados, com poltronas confortáveis e cuidado em cada detalhe.',
    cta: 'Conhecer a frota',
    href: '/frota',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="services-heading">
      <div className="container-site">
        <div className="mb-12">
          <h2 id="services-heading" className="section-title">
            Passageiros, encomendas e soluções para sua viagem
          </h2>
          <p className="section-subtitle">
            Atendemos passageiros, encomendas e cargas nas rotas entre Imperatriz e Goiânia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="card p-6 flex flex-col">
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.title}
              </h3>
              <p className="text-sm text-[var(--color-text-600)] mb-5 flex-1">{s.text}</p>
              <a
                href={s.href}
                className="btn-secondary text-sm justify-center"
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
