import { Package, Handshake } from "lucide-react";

const QuemSomos = () => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Olá! Vim através do site da AgroPG e gostaria de mais informações."
    );
    window.open(`https://wa.me/554233230147?text=${text}`, "_blank");
  };

  return (
    <section id="quem-somos" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/assets/img/pronto-para-levar.jpg"
              alt="Pronto para levar"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-[rgb(19,46,78)] text-3xl md:text-4xl font-bold leading-tight">
                Expertise técnica especializada
              </h2>
              <p className="text-[rgb(45,156,219)] text-xl font-semibold">
                Prontos para levar a solução certa ao seu campo
              </p>
              <p className="text-[rgb(107,114,128)] text-lg leading-relaxed">
                Possuímos um estoque robusto e expertise técnica para manter suas
                máquinas e operações sempre ativas no campo, com agilidade e
                segurança.
              </p>
            </div>
            <button
              onClick={openWhatsApp}
              className="bg-[rgb(45,156,219)] text-white px-8 py-3 rounded-lg font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300"
            >
              ENVIAR WHATSAPP
            </button>
          </div>
          <div className="order-3 space-y-4">
            <div className="bg-[rgb(245,247,250)] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Package className="text-[rgb(45,156,219)]" size={32} />
                </div>
                <div>
                  <h3 className="text-[rgb(19,46,78)] font-bold text-lg mb-2">
                    Estoque completo e diversificado
                  </h3>
                  <p className="text-[rgb(107,114,128)]">
                    Mais de 12.000 itens em estoque, sempre prontos para entrega
                    imediata no Brasil.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(245,247,250)] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Handshake className="text-[rgb(45,156,219)]" size={32} />
                </div>
                <div>
                  <h3 className="text-[rgb(19,46,78)] font-bold text-lg mb-2">
                    Parcerias com grandes marcas
                  </h3>
                  <p className="text-[rgb(107,114,128)]">
                    Trabalhamos com fornecedores confiáveis para garantir
                    segurança e durabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
