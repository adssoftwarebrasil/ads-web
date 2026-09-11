const STORE_URL = 'https://www.lojamodrali.com.br';

export function VantagensBanner() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
        >
          <img
            src="https://storage.lucasmendes.dev/site-sp/lojamodrali/banner%20de%20vantagens%20-%20nao%20colocar%20no%20hero.webp"
            alt="Vantagens exclusivas MODRALI"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>
    </section>
  );
}
