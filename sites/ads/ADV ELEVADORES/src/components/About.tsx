import { CheckCircle, Instagram, Linkedin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const highlights = [
  'Fundada em 2004, com mais de 20 anos de expertise no setor',
  'Equipe técnica altamente qualificada e certificada',
  'Atendimento em todo o Estado de Goiás e Distrito Federal',
  'Plantão emergencial 24 horas — fins de semana e feriados',
  'Contratos de manutenção preventiva personalizados',
  'Clientes de renome nacional: Crea-GO, Procon e mais',
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-[rgb(219,38,27)] text-sm font-bold tracking-widest uppercase">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[rgb(42,30,75)] mt-3 mb-6">
              Mais de 20 Anos Elevando Padrões de Qualidade e Segurança
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Desde 2004, a Advence System Elevadores nasceu da experiência acumulada e da paixão
              pelo setor. Após mais de 25 anos de atuação em outra empresa do ramo, surgiu o sonho
              de empreender e oferecer um serviço verdadeiramente diferenciado — pautado em
              qualidade, segurança e excelência no atendimento.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Atuamos com venda de elevadores e plataformas de acessibilidade, além de serviços
              completos de manutenção preventiva e corretiva, modernização de equipamentos e
              reparos especializados. Nosso compromisso é garantir o perfeito funcionamento dos
              equipamentos e a tranquilidade dos nossos clientes.
            </p>
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    width={20}
                    height={20}
                    className="text-[rgb(219,38,27)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/advencesystemelevadores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[rgb(42,30,75)] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[rgb(42,30,75)]/80 transition-colors"
              >
                <Instagram width={18} height={18} className="lucide lucide-instagram " />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/advance-system-elevadores-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[rgb(42,30,75)] text-[rgb(42,30,75)] px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[rgb(42,30,75)] hover:text-white transition-colors"
              >
                <Linkedin width={18} height={18} className="lucide lucide-linkedin " />
                LinkedIn
              </a>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[rgb(219,38,27)]/10 rounded-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[rgb(42,30,75)]/10 rounded-3xl"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/advence-elevadores/servicos-produtos/elevador-inox-emoldurado-granito-predio-externo_960x1280.webp"
                alt="Elevador instalado pela Advence System"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl aspect-[4/5]"
              />
              <div className="absolute z-20 bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/advence-elevadores/img/logo-sem-fundo.webp"
                    alt="Advence System Elevadores"
                    className="h-10 w-auto"
                  />
                  <div>
                    <p className="text-[rgb(42,30,75)] font-bold text-sm">
                      Advence System Elevadores
                    </p>
                    <p className="text-gray-500 text-xs">CNPJ: 07.296.500/0001-61</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
