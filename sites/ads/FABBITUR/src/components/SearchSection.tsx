import { useState } from 'react';

const DESTINATIONS: Record<string, string[]> = {
  Imperatriz: ['Araguaína', 'Colinas', 'Guaraí', 'Paraíso', 'Gurupi', 'Porangatu', 'Uruaçu', 'Goiânia'],
  'Goiânia': ['Imperatriz'],
};

const PinIcon = () => (
  <svg
    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-600)] pointer-events-none z-10"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z" />
  </svg>
);

export default function SearchSection() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  const destOptions = origem ? DESTINATIONS[origem] ?? [] : [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const o = (form.get('origem') as string)?.trim() || '';
    const d = (form.get('destino') as string)?.trim() || '';
    if (!o || !d) return;
    const data = form.get('data') as string;
    const text = encodeURIComponent(
      `Olá, vim pelo site da Fabbitur e gostaria de consultar horários e disponibilidade da rota ${o} para ${d}${
        data ? ' na data ' + data : ''
      }.`,
    );
    window.open(`https://wa.me/5599984741978?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className="bg-white border-b border-[var(--color-border)] shadow-[0_4px_20px_rgba(16,20,24,0.06)]"
      aria-labelledby="search-heading"
    >
      <div className="container-site py-8">
        <h2 id="search-heading" className="text-xl font-bold mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
          Consulte sua rota
        </h2>
        <form
          id="route-search-form"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
          aria-label="Formulário de consulta de rota"
          noValidate
        >
          {/* Origem */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="origem" className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-600)]">
              Origem
            </label>
            <div className="relative">
              <PinIcon />
              <select
                id="origem"
                name="origem"
                value={origem}
                onChange={(e) => {
                  setOrigem(e.target.value);
                  setDestino('');
                }}
                className="w-full pl-9 pr-3 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:border-[var(--color-green-700)] focus:ring-1 focus:ring-[var(--color-green-700)] outline-none transition-colors bg-white appearance-none"
                aria-required="true"
              >
                <option value="">Selecione a origem</option>
                <option value="Imperatriz">Imperatriz</option>
                <option value="Goiânia">Goiânia</option>
              </select>
            </div>
          </div>

          {/* Destino */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="destino" className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-600)]">
              Destino
            </label>
            <div className="relative">
              <PinIcon />
              <select
                id="destino"
                name="destino"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                disabled={destOptions.length === 0}
                className="w-full pl-9 pr-3 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:border-[var(--color-green-700)] focus:ring-1 focus:ring-[var(--color-green-700)] outline-none transition-colors bg-white appearance-none disabled:opacity-40"
                aria-required="true"
              >
                {destOptions.length ? (
                  <>
                    <option value="">Selecione o destino</option>
                    {destOptions.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">Selecione a origem primeiro</option>
                )}
              </select>
            </div>
          </div>

          {/* Data */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="data" className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-600)]">
              Data da viagem
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-600)]"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <input
                id="data"
                name="data"
                type="date"
                className="w-full pl-9 pr-3 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:border-[var(--color-green-700)] focus:ring-1 focus:ring-[var(--color-green-700)] outline-none transition-colors"
              />
            </div>
          </div>

          {/* Passageiros */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="passageiros" className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-600)]">
              Passageiros
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-600)]"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <select
                id="passageiros"
                name="passageiros"
                defaultValue="1"
                className="w-full pl-9 pr-3 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:border-[var(--color-green-700)] focus:ring-1 focus:ring-[var(--color-green-700)] outline-none transition-colors bg-white appearance-none"
              >
                <option value="1">1 passageiro</option>
                <option value="2">2 passageiros</option>
                <option value="3">3 passageiros</option>
                <option value="4">4 passageiros</option>
                <option value="5">5 passageiros</option>
                <option value="6">6 passageiros</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary justify-center bg-[var(--color-gold-500)] text-[var(--color-green-900)] hover:bg-yellow-400 py-3.5"
          >
            Consultar horários
          </button>
        </form>
      </div>
    </section>
  );
}
