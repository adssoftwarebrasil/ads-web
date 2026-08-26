const stats = [
  { value: '+30', label: 'Anos de atuação' },
  { value: '24h', label: 'Atendimento online' },
  { value: '9+', label: 'Cidades atendidas' },
  { value: '100%', label: 'Frota própria' },
];

export default function SobreSection() {
  return (
    <section className="py-12 border-t border-[var(--color-border)]" aria-labelledby="sobre-heading">
      <div className="container-site">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1">
            <h2 id="sobre-heading" className="section-title">
              Mais de 30 anos ligando pessoas, cidades e histórias
            </h2>
            <p className="text-[var(--color-text-600)] leading-relaxed mb-5">
              A Fabbitur Turismo nasceu em 1989 e construiu sua trajetória com responsabilidade, compromisso com o passageiro e atenção às rotas que conectam Maranhão, Tocantins e Goiás. Com frota própria, motoristas treinados e atendimento direto, a empresa segue transportando pessoas, encomendas e histórias com segurança e pontualidade.
            </p>
            <a href="/sobre" className="btn-secondary">
              Conheça nossa história
            </a>
          </div>
          <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full md:w-auto">
            {stats.map((s) => (
              <div key={s.label} className="card p-5 text-center min-w-[120px]">
                <div
                  className="text-2xl font-bold text-[var(--color-green-700)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-[var(--color-text-600)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
