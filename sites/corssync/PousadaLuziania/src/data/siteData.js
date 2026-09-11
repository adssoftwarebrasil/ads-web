import suiteCasal from "../assets/images/suite-casal.webp";
import suiteCasalDetalhe from "../assets/images/suite-casal-detalhe.webp";
import quartoTriplo from "../assets/images/quarto-triplo.webp";
import quartoFamilia from "../assets/images/quarto-familia.webp";
import quartoGrupo from "../assets/images/quarto-grupo.webp";
import quartoGrupoDois from "../assets/images/quarto-grupo-2.webp";
import apartamentoSala from "../assets/images/apartamento-sala.webp";
import apartamentoSalaDetalhe from "../assets/images/apartamento-sala-detalhe.webp";
import apartamentoCozinha from "../assets/images/apartamento-cozinha.webp";
import cozinhaCompleta from "../assets/images/cozinha-completa.webp";
import apartamentoQuarto from "../assets/images/apartamento-quarto.webp";
import acomodacaoMista from "../assets/images/acomodacao-mista.webp";
import quartoIluminacao from "../assets/images/quarto-iluminacao.webp";
import banheiro from "../assets/images/banheiro.webp";
import varandaCozinha from "../assets/images/varanda-cozinha.webp";
import tvEstrutura from "../assets/images/tv-estrutura.webp";
import quartoArmario from "../assets/images/quarto-armario.webp";
import fachada from "../assets/images/fachada.webp";

const whatsappNumber = "556198087053";
const defaultWhatsAppMessage =
  "Olá! Encontrei o site da Pousada Luziânia e gostaria de consultar a disponibilidade para uma hospedagem.";

export const createWhatsAppLink = (message = defaultWhatsAppMessage) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const contact = {
  email: "ederreis.er@outlook.com",
  phone: "+55 61 9808-7053",
  whatsappHref: createWhatsAppLink(),
  address: "Travessa Aloísio Gonçalves, Qd. C, Lt. 12, nº 45 — Centro, Luziânia - GO, 72800-100",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Travessa%20Alo%C3%ADsio%20Gon%C3%A7alves%20Qd.%20C%20Lt.%2012%20n%C2%BA%2045%20Centro%20Luzi%C3%A2nia%20GO%2072800-100",
  instagram: "https://www.instagram.com/pousadaluziania/",
  facebook: "https://www.facebook.com/share/1B1fdXvu2p/?mibextid=wwXIfr",
};

export const galleryItems = [
  { src: suiteCasal, alt: "Quarto de casal da Pousada Luziânia", category: "Quartos", featured: true },
  { src: apartamentoSala, alt: "Sala mobiliada com sofá e iluminação acolhedora", category: "Apartamentos", featured: true },
  { src: fachada, alt: "Fachada da Pousada Luziânia", category: "Ambientes" },
  { src: quartoFamilia, alt: "Acomodação com camas e mezanino", category: "Quartos" },
  { src: apartamentoCozinha, alt: "Cozinha e sala do apartamento mobiliado", category: "Apartamentos", featured: true },
  { src: quartoGrupo, alt: "Quarto com beliches e camas preparadas", category: "Quartos", featured: true },
  { src: apartamentoSalaDetalhe, alt: "Sala mobiliada com sofá, armário e televisão", category: "Apartamentos" },
  { src: quartoTriplo, alt: "Acomodação com cama de casal e beliche", category: "Quartos" },
  { src: cozinhaCompleta, alt: "Cozinha equipada da acomodação", category: "Apartamentos" },
  { src: suiteCasalDetalhe, alt: "Cama de casal preparada com enxoval", category: "Quartos", featured: true },
  { src: apartamentoQuarto, alt: "Quarto mobiliado com duas camas e mezanino", category: "Apartamentos" },
  { src: quartoGrupoDois, alt: "Quarto amplo com beliches e ar-condicionado", category: "Quartos" },
  { src: quartoIluminacao, alt: "Ambiente com televisão e iluminação quente", category: "Ambientes" },
  { src: acomodacaoMista, alt: "Quarto com cama de casal e beliche", category: "Quartos" },
  { src: banheiro, alt: "Banheiro da acomodação", category: "Ambientes" },
  { src: varandaCozinha, alt: "Cozinha com acesso à varanda", category: "Apartamentos" },
  { src: tvEstrutura, alt: "Quarto com televisão, ar-condicionado e mobiliário", category: "Ambientes" },
  { src: quartoArmario, alt: "Arara e armário disponíveis na acomodação", category: "Ambientes" },
];
