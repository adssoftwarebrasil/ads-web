import { useState, useEffect } from "react";

const Produtos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 12;
  const products = [
    {
      name: "Filtro Ar Externo Trator New Holland E4NN9601",
      image:
        "/assets/img/filtro-ar-externo-trator-new-holland-e4nn9601-mc-filtros.webp",
      category: "Filtros",
    },
    {
      name: "Filtro Ar Interno Trator Massey 6223615",
      image:
        "/assets/img/filtro-ar-interno-trator-massey-6223615-inpeca.webp",
      category: "Filtros",
    },
    {
      name: "Filtro Combustível Longo Trator Valtra 81248200",
      image:
        "/assets/img/filtro-combustivel-longo-trator-valtra-81248200-delphi.webp",
      category: "Filtros",
    },
    {
      name: "Filtro Hidráulico John Deere AL169573",
      image:
        "/assets/img/filtro-hidraulico-para-trator-john-deere-al169573.webp",
      category: "Filtros",
    },
    {
      name: "Filtro de Ar Cabine John Deere RE199681",
      image:
        "/assets/img/filtro-de-ar-cabine-para-trator-john-deere-re199681.webp",
      category: "Filtros",
    },
    {
      name: "Filtro de Combustível Colheitadeira John Deere DQ24057",
      image:
        "/assets/img/filtro-de-combustivel-para-colheitadeira-john-deere-dq24057.webp",
      category: "Filtros",
    },
    {
      name: "Filtro de Combustível Colheitadeira John Deere RE62424",
      image:
        "/assets/img/filtro-de-combustivel-para-colheitadeira-john-deere-re62424.webp",
      category: "Filtros",
    },
    {
      name: "Filtro Óleo Hidráulico Trator Massey 6207974",
      image:
        "/assets/img/filtro-oleo-hidraulico-trator-massey-6207974-mc-filtros.webp",
      category: "Filtros",
    },
    {
      name: "Pneu Aro 15 Superguider 29X12.50-15 8 Lonas",
      image:
        "/assets/img/pneu-aro-15-superguider-29x12-50-15-8-lonas-tl-hf-1-qh645-agricola.webp",
      category: "Pneus",
    },
    {
      name: "Pneu Aro 24 Astroay 380",
      image: "/assets/img/pneu-aro-24-astroay-380.webp",
      category: "Pneus",
    },
    {
      name: "Pneu Aro 38 Superguider 12.4-38 12 Lonas",
      image:
        "/assets/img/pneu-aro-38-superguider-12-4-38-12-lonas-r-1-tt-qh666.webp",
      category: "Pneus",
    },
    {
      name: "Rolamento Duplo Valtra",
      image:
        "/assets/img/rolamento-duplo-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento Excêntrico Valtra",
      image:
        "/assets/img/rolamento-excentrico-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento Radial de Esferas Fixo GTOP-GBR",
      image:
        "/assets/img/rolamento-radial-de-esferas-fixo-gtop-gbr-gbr.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento Radial de Rolos Cônicos FAG AUT 30304A",
      image:
        "/assets/img/rolamento-radial-de-rolos-conicos-fag-fag-aut-30304a-unitario.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento da Embreagem Valtra",
      image:
        "/assets/img/rolamento-da-embreagem-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento de Esferas 4 Pistas Valtra",
      image:
        "/assets/img/rolamento-de-esferas-4-pistas-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento de Esferas Valtra",
      image:
        "/assets/img/rolamento-de-esferas-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento de Rolos Cilíndricos Valtra",
      image:
        "/assets/img/rolamento-de-rolos-cilindricos-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento do Pinhão Valtra",
      image:
        "/assets/img/rolamento-do-pinhao-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Rolamento Valtra",
      image: "/assets/img/rolamento-valtra.webp",
      category: "Rolamentos",
    },
    {
      name: "Sensor Posição Angular Valtra",
      image:
        "/assets/img/sensor-posicao-angular-valtra.webp",
      category: "Sensores",
    },
    {
      name: "Sensor de Pressão de Combustível Valtra",
      image:
        "/assets/img/sensor-de-pressao-de-combustivel-valtra.webp",
      category: "Sensores",
    },
    {
      name: "Sensor de Pressão de Óleo Valtra",
      image:
        "/assets/img/sensor-de-pressao-de-oleo-valtra.webp",
      category: "Sensores",
    },
    {
      name: "Sensor de Velocidade Valtra",
      image:
        "/assets/img/sensor-de-velocidade-valtra.webp",
      category: "Sensores",
    },
    {
      name: "Sensor de Ângulo Valtra",
      image:
        "/assets/img/sensor-de-angulo-valtra.webp",
      category: "Sensores",
    },
    {
      name: "Solenoide da Bomba Injetora Valtra",
      image:
        "/assets/img/solenoide-da-bomba-injetora-valtra.webp",
      category: "Sensores",
    },
    {
      name: "Bomba Hidráulica Dupla Trator Valtra 9022102505",
      image:
        "/assets/img/bomba-hidraulica-dupla-trator-valtra-9022102505-indisa.webp",
      category: "Hidráulica",
    },
    {
      name: "Apoio 770594",
      image: "/assets/img/770594-apoio.webp",
      category: "Peças",
    },
    {
      name: "Cilindro Hidráulico AH162514",
      image: "/assets/img/ah162514-cilindro-hidraulico.webp",
      category: "Hidráulica",
    },
    {
      name: "Tensionador AL157593",
      image: "/assets/img/al157593-tensionador.webp",
      category: "Peças",
    },
    {
      name: "Colar AZ10045",
      image: "/assets/img/az10045-colar.webp",
      category: "Peças",
    },
    {
      name: "Retentor H169912",
      image: "/assets/img/h169912-retentor.webp",
      category: "Peças",
    },
    {
      name: "Vedação Valtra",
      image:
        "/assets/img/vedacao-valtra.webp",
      category: "Peças",
    },
    {
      name: "ZF Coroa e Pinhão 7X39Z 81009100",
      image:
        "/assets/img/0070214060-zf-cj-coroa-e-pinhao-dif-traseiro-7x39z-81009100.webp",
      category: "ZF",
    },
    {
      name: "ZF Coroa e Pinhão 8X41Z 80006400",
      image:
        "/assets/img/0070214064-zf-cj-coroa-e-pinhao-dif-traseiro-8x41z-80006400.webp",
      category: "ZF",
    },
    {
      name: "ZF Engrenagem Baixa 57X16Z 80034400",
      image:
        "/assets/img/0070314157-zf-engrenagem-baixa-57x16z-80034400.webp",
      category: "ZF",
    },
    {
      name: "ZF Pinhão Redução 11Z Reto TC55",
      image:
        "/assets/img/0092302029-zf-pinhao-reducao-11z-reto-tc55.webp",
      category: "ZF",
    },
    {
      name: "ZF Eixo Acionamento 29X36Z 050639",
      image:
        "/assets/img/0092302036-zf-eixo-acionamento-29x36z-050639.webp",
      category: "ZF",
    },
    {
      name: "ZF Anel Sincronizado 42Z 021874",
      image:
        "/assets/img/0092304001-zf-anel-sincronizado-42z-021874.webp",
      category: "ZF",
    },
    {
      name: "ZF Barra Direção Reta APL345",
      image:
        "/assets/img/0095205067-barra-direcao-reta-zf-apl345.webp",
      category: "ZF",
    },
    {
      name: "ZF Coroa e Pinhão Tração 13X34Z",
      image:
        "/assets/img/0095253026-zf-cj-coroa-e-pinhao-tracao-zf-13x34z.webp",
      category: "ZF",
    },
    {
      name: "ZF Flange Acionamento Tração APL350",
      image:
        "/assets/img/0095352010-zf-flange-acionamento-tracao-apl350.webp",
      category: "ZF",
    },
    {
      name: "ZF Carcaça Articulação LD 033555",
      image:
        "/assets/img/0095353244-zf-carcaca-articulacao-ld-033555.webp",
      category: "ZF",
    },
    {
      name: "ZF Porta Planetárias 3603350",
      image:
        "/assets/img/0095353275-zf-porta-planetarias-3603350.webp",
      category: "ZF",
    },
    {
      name: "ZF Carcaça Cavalete Traseiro APL350",
      image:
        "/assets/img/0095353340-zf-carcaca-cavalete-traseiro-apl350.webp",
      category: "ZF",
    },
    {
      name: "ZF Anel Vedação 3585571",
      image:
        "/assets/img/0501396678-zf-anel-vedacao-3585571.webp",
      category: "ZF",
    },
    {
      name: "ZF Retentor Pinhão 80569500",
      image:
        "/assets/img/0501398051-zf-retentor-pinhao-80569500.webp",
      category: "ZF",
    },
    {
      name: "ZF Bucha Cavalete 3603232",
      image:
        "/assets/img/0501398081-zf-bucha-cavalete-3603232.webp",
      category: "ZF",
    },
    {
      name: "ZF Bucha CX Acionamento APL335",
      image:
        "/assets/img/0501398085-bucha-cx-acionamento-apl335.webp",
      category: "ZF",
    },
    {
      name: "ZF Anel O-Ring Vedação Carcaça Cavalete",
      image:
        "/assets/img/0634303974-zf-anel-oring-vedacao-carcaca-cavalete.webp",
      category: "ZF",
    },
    {
      name: "ZF Rolamento Pinhão 88649",
      image:
        "/assets/img/0750117205-zf-rolamento-pinhao-zf-88649.webp",
      category: "ZF",
    },
    {
      name: "ZF Rolamento Pinhão HM803149",
      image:
        "/assets/img/0750117354-zf-rolamento-pinhao-zf-hm803149.webp",
      category: "ZF",
    },
    {
      name: "ZF Eixo Solar 3176336",
      image:
        "/assets/img/4472353157-zf-eixo-solar-3176336.webp",
      category: "ZF",
    },
    {
      name: "Vidro da Porta Esquerda Valtra",
      image:
        "/assets/img/vidro-da-porta-esquerda-valtra.webp",
      category: "Outros",
    },
    {
      name: "Válvula Solenoide Montada Valtra",
      image:
        "/assets/img/valvula-solenoide-montada-valtra.webp",
      category: "Outros",
    },
  ];
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const handleSaibaMais = (name) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o produto "${name}" que vi no site.`,
    );
    window.open(`https://wa.me/554233230147?text=${text}`, "_blank");
  };
  const goToPage = (page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      const section = document.getElementById("produtos");
      if (section) {
        const top =
          section.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  useEffect(() => {
    setIsTransitioning(false);
  }, [currentPage]);

  return (
    <section id="produtos" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[rgb(19,46,78)] text-3xl md:text-4xl font-bold mb-4">
            Peças Agrícolas em Destaque
          </h2>
          <p className="text-[rgb(107,114,128)] text-lg mb-2">
            Soluções premium para sua máquina render mais no campo
          </p>
          <p className="text-[rgb(45,156,219)] font-semibold">
            Total de {products.length} produtos disponíveis
          </p>
        </div>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 transition-all duration-300 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
          {currentProducts.map((product, index) => (
            <div
              key={`${currentPage}-${index}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square bg-[rgb(245,247,250)] flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-3">
                <span className="text-xs text-[rgb(45,156,219)] font-semibold uppercase">
                  {product.category}
                </span>
                <h3 className="text-[rgb(19,46,78)] font-semibold text-sm line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <button
                  onClick={() => handleSaibaMais(product.name)}
                  className="w-full border-2 border-[rgb(45,156,219)] text-[rgb(45,156,219)] py-2 rounded-lg font-semibold hover:bg-[rgb(45,156,219)] hover:text-white transition-all duration-300"
                >
                  SAIBA MAIS
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1 || isTransitioning}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${currentPage === 1 || isTransitioning ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[rgb(245,247,250)] text-[rgb(19,46,78)] hover:bg-[rgb(45,156,219)] hover:text-white hover:scale-105"}`}
          >
            ← Anterior
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                disabled={isTransitioning}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${currentPage === page ? "bg-[rgb(45,156,219)] text-white scale-110 shadow-lg" : isTransitioning ? "bg-[rgb(245,247,250)] text-[rgb(107,114,128)] cursor-not-allowed" : "bg-[rgb(245,247,250)] text-[rgb(19,46,78)] hover:bg-[rgb(19,46,78)] hover:text-white hover:scale-105"}`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages || isTransitioning}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${currentPage === totalPages || isTransitioning ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[rgb(245,247,250)] text-[rgb(19,46,78)] hover:bg-[rgb(45,156,219)] hover:text-white hover:scale-105"}`}
          >
            Próximo →
          </button>
        </div>
        <div className="text-center mt-6 text-[rgb(107,114,128)]">
          Página {currentPage} de {totalPages} | Mostrando {indexOfFirst + 1} -{" "}
          {Math.min(indexOfLast, products.length)} de {products.length} produtos
        </div>
      </div>
    </section>
  );
};

export default Produtos;
