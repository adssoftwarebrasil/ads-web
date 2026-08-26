const faqs = [
  {
    q: 'Como faço para consultar horários?',
    a: 'Você pode consultar horários pelo site ou falar diretamente com a equipe da Fabbitur pelo WhatsApp (99) 98474-1978.',
  },
  {
    q: 'A Fabbitur transporta encomendas?',
    a: 'Sim. A Fabbitur realiza transporte de encomendas, objetos, volumes e cargas em rotas atendidas pela empresa.',
  },
  {
    q: 'Quais cidades a Fabbitur atende?',
    a: 'A Fabbitur atende rotas entre Imperatriz e cidades como Araguaína, Colinas, Guaraí, Paraíso, Gurupi, Porangatu, Uruaçu e Goiânia.',
  },
  {
    q: 'O atendimento é somente presencial?',
    a: 'Não. Além do atendimento presencial em horário comercial (08h às 18h), a Fabbitur oferece atendimento online 24h pelo WhatsApp.',
  },
  {
    q: 'Posso falar pelo WhatsApp?',
    a: 'Sim. O WhatsApp da Fabbitur é (99) 98474-1978.',
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--color-green-100)]" aria-labelledby="faq-heading">
      <div className="container-site">
        <div className="max-w-2xl mx-auto">
          <h2 id="faq-heading" className="section-title text-center mb-2">
            Perguntas frequentes
          </h2>
          <p className="section-subtitle text-center mx-auto mb-10">
            Tire suas dúvidas sobre viagens e encomendas com a Fabbitur.
          </p>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="card overflow-hidden group">
                <summary
                  className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-sm text-[var(--color-text-900)] hover:text-[var(--color-green-700)] transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {f.q}
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-[var(--color-green-700)] transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-[var(--color-text-600)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
