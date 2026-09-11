import { Plus, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "../data/company.js";

const questions = [
  {
    question: "Como saber qual sistema solar é ideal para o meu imóvel?",
    answer:
      "O ponto de partida é o seu consumo de energia. A Premium avalia também as características do imóvel, a área disponível e os objetivos do projeto. Com essas informações, desenvolvemos um estudo de viabilidade e uma proposta personalizada.",
  },
  {
    question: "É possível instalar carregadores em condomínios?",
    answer:
      "A Premium desenvolve soluções de recarga para condomínios residenciais e comerciais. O projeto considera a infraestrutura elétrica existente, os espaços disponíveis e as necessidades do empreendimento. A viabilidade e as condições de instalação são avaliadas com os responsáveis pelo condomínio.",
  },
  {
    question: "Posso integrar energia solar e recarga veicular?",
    answer:
      "Sim. A integração entre sistemas fotovoltaicos e infraestrutura de recarga faz parte das soluções da Premium. Nossa equipe avalia o consumo, a demanda dos carregadores e as características do local para planejar o conjunto.",
  },
  {
    question: "A Premium oferece acompanhamento após a instalação?",
    answer:
      "Oferecemos monitoramento, manutenção de sistemas fotovoltaicos e suporte. Os serviços e as condições de acompanhamento são definidos de acordo com o projeto e a proposta contratada.",
  },
  {
    question: "Quais regiões a Premium atende?",
    answer:
      "Atuamos em Brasília e nas demais regiões do Distrito Federal. O atendimento a cidades do Entorno depende da dimensão e da viabilidade de cada projeto. Converse com nossa equipe para consultar seu endereço.",
  },
  {
    question: "O que preciso para solicitar um orçamento?",
    answer:
      "Conte para a equipe qual solução você procura e onde pretende instalar. Se possível, tenha uma conta de energia recente e informações sobre o imóvel. Esses dados ajudam a iniciar a avaliação. O valor e o prazo são apresentados conforme as necessidades do projeto.",
  },
];

export default function Faq() {
  return (
    <section
      className="section container faq-section"
      id="duvidas"
      aria-labelledby="faq-title"
    >
      <div className="faq-intro">
        <p className="eyebrow">PODE PERGUNTAR.</p>
        <h2 id="faq-title">
          Boas decisões
          <br />
          <span className="text-muted">começam com clareza.</span>
        </h2>
        <p>
          Algumas respostas para você dar o próximo passo com mais confiança.
        </p>
        <a
          className="text-link"
          href={whatsappUrl(
            "Olá! Gostaria de tirar uma dúvida sobre as soluções da Premium.",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tire sua dúvida com a equipe <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="faq-list">
        {questions.map((item, index) => (
          <details
            key={item.question}
            name="premium-faq"
            open={index === 0 ? true : undefined}
          >
            <summary>
              {item.question}
              <Plus size={21} />
            </summary>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
