import { CreditCard, Truck, Package2, Tag } from "lucide-react";

const Features = () => {
  const features = [
    { icon: CreditCard, title: "Até 6X", description: "Para pagamento no cartão de crédito" },
    { icon: Truck, title: "Envios Garantido", description: "Entrega ágil e segura em todo o Brasil" },
    { icon: Package2, title: "Peças para Atacado", description: "Entre em contato para ofertas especiais" },
    { icon: Tag, title: "5% OFF À VISTA", description: "Ganhe desconto em pagamentos à vista" },
  ];

  return (
    <section className="bg-[rgb(19,46,78)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-[rgb(242,169,0)]" size={40} />
                </div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
