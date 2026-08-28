import { Award, Handshake, Headphones, Truck } from "lucide-react";
import fachada from "@/assets/loja-fachada.jpg";
import atendimento from "@/assets/loja-atendimento.jpg";
import exposicao from "@/assets/loja-exposicao.jpg";

const fotos = [
  { src: fachada, label: "FACHADA" },
  { src: atendimento, label: "ATENDIMENTO" },
  { src: exposicao, label: "EXPOSIÇÃO DE PRODUTOS" },
];

const beneficios = [
  { icon: Award, title: "QUALIDADE", desc: "Materiais de alta performance e durabilidade." },
  { icon: Handshake, title: "CONFIANÇA", desc: "Mais de 25 anos de experiência no mercado." },
  { icon: Headphones, title: "ATENDIMENTO", desc: "Equipe especializada pronta para te ajudar." },
  { icon: Truck, title: "AGILIDADE", desc: "Entrega rápida e soluções sob medida." },
];

const ConhecaLojaSection = () => {
  return (
    <>
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-widest mb-3">
              CONHEÇA NOSSA LOJA
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="h-px w-12 bg-primary" />
            </div>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Visite nossa loja e conheça de perto nossos produtos e soluções.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fotos.map((foto) => (
              <div key={foto.label} className="flex flex-col">
                <img
                  src={foto.src}
                  alt={foto.label}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="text-center mt-4">
                  <p className="text-foreground font-bold tracking-widest text-sm">{foto.label}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="h-px w-8 bg-primary" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="h-px w-8 bg-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {beneficios.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 text-primary-foreground">
              <Icon className="w-10 h-10 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-bold tracking-wider text-sm mb-1">{title}</p>
                <p className="text-xs leading-relaxed text-primary-foreground/90">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ConhecaLojaSection;
