export default function Map() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-gray-600">
            Visite nossa oficina em Feira de Santana - BA
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31191.67455263138!2d-38.97040503957902!3d-12.251032282111904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714379f6d72d8e9%3A0xd74ceaf13148048d!2sFeira%20Fios!5e0!3m2!1spt-BR!2sbr!4v1769665065643!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Feira Fios"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
