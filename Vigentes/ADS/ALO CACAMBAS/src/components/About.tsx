import { Award, Users, MapPin } from 'lucide-react';

const stats = [
  { Icon: Award, iconClass: 'lucide lucide-award text-[#ec8f2b]', value: '7+', label: 'Anos de mercado' },
  { Icon: Users, iconClass: 'lucide lucide-users text-[#ec8f2b]', value: '500+', label: 'Clientes atendidos' },
  { Icon: MapPin, iconClass: 'lucide lucide-map-pin text-[#ec8f2b]', value: '100%', label: 'Uberlândia - MG' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#fefefe] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-3">
              <img
                src="https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/caminhoes-amarelos-cacambas-estacionados-luz-do-dia_680x510.webp"
                alt="Frota Alô Caçambas"
                className="w-full h-56 object-cover rounded-2xl shadow-lg col-span-2"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/caminhoes-usados-amarelo-e-branco-patio_680x510.webp"
                alt="Pátio Alô Caçambas"
                className="w-full h-44 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/tres-caminhoes-estacionados-ceu-azul_680x510.webp"
                alt="Frota completa"
                className="w-full h-44 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#ffaf24]/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-4 -right-4 w-48 h-48 bg-[#ec8f2b]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-4 right-4 bg-[#343434] text-[#fefefe] rounded-2xl px-5 py-4 shadow-2xl z-20">
              <div className="text-3xl font-extrabold text-[#ffaf24]">2018</div>
              <div className="text-xs text-white/70 mt-0.5">Fundação da empresa</div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffaf24]/15 text-[#ec8f2b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Nossa história
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343434] mb-6 leading-tight">
              Uma família que veio para <span className="text-[#ffaf24]">transformar Uberlândia</span>
            </h2>
            <div className="space-y-4 text-[#343434]/70 text-base leading-relaxed mb-8">
              <p>
                A <strong className="text-[#343434]">Alô Caçambas</strong> nasceu em 2018, quando o
                engenheiro Wesley veio morar em Uberlândia e identificou uma grande oportunidade no
                setor. Em seguida, seu pai, <strong className="text-[#343434]">Sr. Amador</strong>,
                veio sondar o mercado e decidiu investir — e o resultado não poderia ser melhor.
              </p>
              <p>
                De uma ideia familiar, construímos um negócio sólido baseado em valores que não
                abrem mão:{' '}
                <strong className="text-[#343434]">
                  pontualidade, honestidade e respeito ao cliente
                </strong>
                . Cada caçamba entregue carrega o compromisso de quem trata cada obra como se fosse a
                própria.
              </p>
              <p>
                Hoje, atendemos Uberlândia e região com uma frota moderna, equipe treinada e um
                propósito claro: fazer sua obra avançar sem preocupações.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map(({ Icon, iconClass, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <div className="w-9 h-9 bg-[#ffaf24]/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className={iconClass} width={18} height={18} />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-[#343434]">{value}</div>
                    <div className="text-xs text-[#343434]/55">{label}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/553491233322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#343434] hover:bg-[#ffaf24] text-[#fefefe] hover:text-[#343434] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
