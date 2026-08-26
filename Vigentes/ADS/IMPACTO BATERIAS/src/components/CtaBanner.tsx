export default function CtaBanner() {
  return (
    <section className="py-16 bg-[#FFD700]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#333333] mb-4">
          Não espere a bateria te deixar na mão!
        </h2>
        <p className="text-xl text-[#333333] mb-8 max-w-2xl mx-auto">
          Fale agora com nossos especialistas e garanta a energia que seu veículo precisa para ir mais longe.
          Orçamento rápido e sem compromisso!
        </p>
        <a
          href="https://wa.me/5562992494418"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#333333] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
        >
          SOLICITAR ORÇAMENTO VIA WHATSAPP
        </a>
      </div>
    </section>
  );
}
