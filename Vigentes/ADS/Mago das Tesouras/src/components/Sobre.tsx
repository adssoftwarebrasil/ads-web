import { Award, Users, Heart, CheckCircle2 } from 'lucide-react';

const features = [
  'Especialistas em prótese capilar masculina com fios 100% naturais',
  'Ambiente climatizado, moderno e acolhedor',
  'Atendimento personalizado e pontual',
  'Profissionais certificados e em constante atualização',
  'Ideal para noivos, ocasiões especiais e uso diário',
  'Referência em Uberlândia há mais de 8 anos',
];

const stats = [
  { icon: Award, iconName: 'award', value: '+8', label: 'Anos de mercado' },
  { icon: Users, iconName: 'users', value: '+500', label: 'Clientes ativos' },
  { icon: Heart, iconName: 'heart', value: '4.8', label: 'Avaliação Google' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[rgb(247,246,247)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden shadow-xl row-span-2">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-cabeleireiro-aplicando-spray-no-menino_828x1472.webp"
                    alt="Barbeiro profissional atendendo cliente"
                    className="w-full h-full object-cover"
                    style={{ minHeight: '380px' }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-corte-cabelo-barbearia-capa-preta_828x1472.webp"
                    alt="Corte na barbearia"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-grisalho-barba-aparada-barbearia-cadeira_1080x1440.webp"
                    alt="Barba cuidada"
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-[rgb(254,197,52)]/15 rounded-full blur-3xl -z-0 pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[rgb(245,133,79)]/10 rounded-full blur-2xl -z-0 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 bg-[rgb(32,29,30)] text-white rounded-xl px-4 py-3 shadow-xl z-20 flex items-center gap-3">
              <div className="bg-[rgb(254,197,52)] rounded-lg p-2">
                <Award
                  className="lucide lucide-award text-[rgb(32,29,30)]"
                  width={18}
                  height={18}
                />
              </div>
              <div>
                <p className="font-bold text-sm">Prótese Capilar</p>
                <p className="text-white/50 text-xs">com fios naturais</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[rgb(245,133,79)] font-semibold uppercase tracking-widest text-sm mb-3">
              Quem somos
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-[rgb(32,29,30)] leading-tight mb-6">
              Mais que uma Barbearia.
              <span className="block text-[rgb(245,133,79)]">Um espaço de confiança.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              A <strong className="text-[rgb(32,29,30)]">Mago das Tesouras</strong> nasceu com um
              propósito claro: oferecer ao homem moderno um espaço onde ele possa se cuidar com
              qualidade, conforto e discrição. Localizada em Uberlândia, no bairro Tibery, somos
              referência em prótese capilar masculina e em serviços de barbearia de alto padrão.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Nossa equipe de profissionais altamente capacitados utiliza técnicas avançadas e
              produtos premium para garantir que cada cliente saia satisfeito — seja com um corte
              clássico, uma barba impecável ou uma prótese capilar que devolve a autoestima e a
              confiança.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-[rgb(254,197,52)] flex-shrink-0 mt-0.5"
                    width={18}
                    height={18}
                    fill="rgb(254,197,52)"
                    stroke="rgb(32,29,30)"
                    strokeWidth={1.5}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-6 flex-wrap">
              {stats.map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.label} className="flex items-center gap-3">
                    <div className="bg-[rgb(32,29,30)] text-[rgb(254,197,52)] p-2.5 rounded-xl">
                      <Icon
                        className={`lucide lucide-${st.iconName}`}
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-black text-[rgb(32,29,30)]">
                        {st.value}
                      </p>
                      <p className="text-gray-400 text-xs">{st.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
