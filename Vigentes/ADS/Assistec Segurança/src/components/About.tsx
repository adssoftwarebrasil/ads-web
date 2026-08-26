import { CheckCircle2, MapPin, Clock } from 'lucide-react';

const bullets = [
  'Mais de 20 anos de experiência no mercado de segurança eletrônica',
  'Equipe técnica especializada e certificada pelas fabricantes',
  'Atendimento personalizado com foco na realidade de cada cliente',
  'Suporte pós-venda e manutenção preventiva garantida',
  'Produtos originais das melhores marcas do mercado',
  'Cobertura em Pará de Minas e toda região Central de Minas',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-10"
                style={{ background: 'linear-gradient(135deg, rgb(18, 39, 89), rgb(5, 77, 162))' }}
              ></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/homem-idoso-camisa-azul-tablet-assistec_566x734.webp"
                alt="Atendimento personalizado Assistec"
                className="relative w-full h-auto max-h-[560px] object-cover rounded-3xl shadow-brand-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/interfone-branco-pedindo-manutencao-em-muro_499x583.webp"
                  alt="Manutenção de interfone"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute top-8 -right-4 sm:-right-6 bg-brand-dark text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-2xl font-extrabold">20+</div>
              <div className="text-xs text-white/70 font-medium">Anos de Expertise</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="badge bg-brand-50 text-brand mb-4">Sobre Nós</div>
            <h2 className="section-title mb-4">
              Referência em <span className="text-gradient">Segurança Eletrônica</span>
              <br />
              desde 2005
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              A <strong className="text-brand-dark">Assistec Sistema de Segurança Ltda</strong> é uma empresa de Pará de
              Minas especializada na venda, instalação e manutenção de equipamentos de segurança eletrônica. Fundada em
              2005, construímos nossa trajetória com atendimento personalizado e foco absoluto na satisfação de cada
              cliente.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Utilizamos tecnologias de ponta em sistemas de câmeras, alarmes, portões eletrônicos e controle de acesso —
              oferecendo soluções completas tanto para residências quanto para comércios e empresas de todos os portes.
            </p>
            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="lucide lucide-check-circle2 h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin h-5 w-5 text-brand" />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm mb-1">Localização</div>
                  <div className="text-xs text-neutral-600">R. Nova Serrana, Centro</div>
                  <div className="text-xs text-neutral-600">Pará de Minas - MG, 35660-418</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="lucide lucide-clock h-5 w-5 text-brand" />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm mb-1">Horário de Atendimento</div>
                  <div className="text-xs text-neutral-600">Seg a Sex: 08h às 18h</div>
                  <div className="text-xs text-neutral-600">Sábado: 08h às 12h</div>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Assistec."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
