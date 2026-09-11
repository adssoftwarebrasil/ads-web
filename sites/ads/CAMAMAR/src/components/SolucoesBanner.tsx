import { Anchor, Layers, Thermometer, Lock, Wrench, Award, Handshake, Headphones, Truck, MapPin, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo-camamar-banner.png";
import chumbadores from "@/assets/banner-chumbadores.jpg";
import telhas from "@/assets/banner-telhas.jpg";
import isolamento from "@/assets/banner-isolamento.jpg";
import vedacao from "@/assets/banner-vedacao.jpg";
import ferramentas from "@/assets/banner-ferramentas.jpg";

const produtos = [
  { icon: Anchor, image: chumbadores, title: "CHUMBADORES\nQUÍMICOS E\nMECÂNICOS", desc: "Fixação segura e de alta resistência para as mais diversas aplicações." },
  { icon: Layers, image: telhas, title: "TELHAS\nTRANSLÚCIDAS\nE ECOLÓGICAS", desc: "Iluminação natural, durabilidade e sustentabilidade para seu projeto." },
  { icon: Thermometer, image: isolamento, title: "ISOLAMENTO\nTÉRMICO E\nACÚSTICO", desc: "Conforto térmico e acústico para ambientes mais eficientes e agradáveis." },
  { icon: Lock, image: vedacao, title: "SOLUÇÕES EM\nVEDAÇÃO E\nFIXAÇÃO", desc: "Acessórios e produtos que garantem vedação perfeita e alta performance." },
  { icon: Wrench, image: ferramentas, title: "FERRAMENTAS\nE ACESSÓRIOS", desc: "Ferramentas e acessórios para facilitar o dia a dia da sua obra." },
];

const beneficios = [
  { icon: Award, title: "QUALIDADE", desc: "Materiais de alta performance e durabilidade." },
  { icon: Handshake, title: "CONFIANÇA", desc: "Mais de 25 anos de experiência no mercado." },
  { icon: Headphones, title: "ATENDIMENTO", desc: "Equipe especializada pronta para te ajudar." },
  { icon: Truck, title: "AGILIDADE", desc: "Entrega rápida e soluções sob medida." },
];

const SolucoesBanner = () => {
  return (
    <section className="bg-[#f2f2f2] py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Topo: Logo + Tagline */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="flex-1 flex justify-center md:justify-end">
            <img src={logo} alt="Camamar Produtos de Construção" className="h-20 md:h-24 w-auto" />
          </div>
          <div className="hidden md:block w-px h-20 bg-primary" />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight tracking-wide">
              SOLUÇÕES COMPLETAS<br />PARA CONSTRUÇÃO CIVIL
            </h2>
            <p className="text-foreground text-sm md:text-base mt-2">
              Materiais de alta qualidade e tecnologia<br />para obras mais seguras, duráveis e eficientes.
            </p>
          </div>
        </div>

        {/* Cards de produtos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {produtos.map(({ icon: Icon, image, title, desc }) => (
            <div key={title} className="flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img src={image} alt={title.replace(/\n/g, " ")} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
              </div>
              <div className="bg-[#1a1a1a] p-3 flex items-center gap-2 min-h-[80px]">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
                </div>
                <p className="text-primary-foreground text-[11px] font-bold tracking-wider leading-tight whitespace-pre-line">
                  {title}
                </p>
              </div>
              <p className="text-foreground text-xs leading-snug mt-3 px-1">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Faixa benefícios */}
        <div className="bg-primary rounded-md py-5 px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {beneficios.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 text-primary-foreground">
              <Icon className="w-10 h-10 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-bold tracking-wider text-sm mb-1">{title}</p>
                <p className="text-xs leading-snug text-primary-foreground/95">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faixa contato escura */}
      <div className="bg-[#0d0d0d] py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="flex items-start gap-3 text-primary-foreground">
            <MapPin className="w-7 h-7 text-primary shrink-0" />
            <div className="text-xs">
              <p className="font-bold tracking-wider mb-1">VISITE NOSSA LOJA</p>
              <p className="text-primary-foreground/80">Av. C-104 Qd 259 Lt 04 Nº 531</p>
              <p className="text-primary-foreground/80">Jardim América, Goiânia - GO</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-primary-foreground">
            <Phone className="w-7 h-7 text-primary shrink-0" />
            <div className="text-xs">
              <p className="font-bold tracking-wider mb-1">ENTRE EM CONTATO</p>
              <p className="text-primary-foreground/80">(62) 3275-1030</p>
              <p className="text-primary-foreground/80">comercial3@camamar.com.br</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-primary-foreground">
            <Globe className="w-7 h-7 text-primary shrink-0" />
            <div className="text-xs">
              <p className="font-bold tracking-wider mb-1">SAIBA MAIS</p>
              <p className="text-primary-foreground/80">www.camamar.com.br</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={logo} alt="Camamar" className="h-14 w-auto brightness-0 invert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucoesBanner;