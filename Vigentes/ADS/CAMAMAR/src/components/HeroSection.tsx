import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Hammer, Truck, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" className="relative">
      <div className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        >
          <img
            src={heroImg}
            alt="Obra Camamar"
            className="w-full h-[120%] object-cover"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center pt-20 md:pt-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
            <div className="max-w-2xl">
              <p className="animate-hero-title text-primary font-display font-bold tracking-[0.25em] text-sm md:text-base mb-4 uppercase text-shadow-hero">
                No mercado há mais de 30 anos
              </p>
              <h1 className="animate-hero-title font-display font-black text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase mb-6 text-shadow-hero">
                Construindo <br />
                <span className="text-primary">soluções sólidas</span> <br />
                para sua obra
              </h1>
              <p className="animate-hero-subtitle text-white/90 text-lg md:text-xl max-w-xl mb-10 leading-relaxed text-shadow-hero">
                Fundada em 1995, a <strong className="font-bold text-white">CAMAMAR</strong> oferece
                materiais de alta performance e atendimento especializado para obras
                mais seguras, duráveis e eficientes.
              </p>
              <div className="animate-hero-cta flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5562982972917"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-whatsapp text-white px-7 py-4 rounded-md font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--whatsapp)/0.7)] transition-all duration-300"
                >
                  <FaWhatsapp size={24} className="group-hover:rotate-12 transition-transform" />
                  Fale pelo WhatsApp
                </a>
                <a
                  href="#produtos"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/40 text-white px-7 py-4 rounded-md font-bold tracking-wide hover:bg-white hover:text-foreground transition-all duration-300"
                >
                  Ver produtos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight bar */}
      <div className="bg-camamar-dark text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { Icon: Hammer, title: "Qualidade", desc: "Materiais de alta performance" },
            { Icon: Truck, title: "Entrega Rápida", desc: "Logística eficiente em toda a região" },
            { Icon: DollarSign, title: "Melhor Atendimento", desc: "Equipe pronta para te ajudar" },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 px-6 py-6">
              <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
              </div>
              <div>
                <p className="font-display font-bold text-xl uppercase tracking-wide">{title}</p>
                <p className="text-white/70 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
