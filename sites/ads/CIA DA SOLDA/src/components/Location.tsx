import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const info = [
  {
    icon: <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />,
    label: 'Endereço',
    value: 'R. Monsenhor Messías, 378 – Flamengo, Contagem – MG, 32241-030',
    href: 'https://maps.google.com/?q=Cia+da+Solda+Contagem',
  },
  {
    icon: <Clock size={18} className="text-brand-red shrink-0 mt-0.5" />,
    label: 'Horário de Funcionamento',
    value: 'Segunda a Sexta: até 18h',
    href: null,
  },
  {
    icon: <Phone size={18} className="text-brand-red shrink-0 mt-0.5" />,
    label: 'Telefone',
    value: '(31) 3565-4833',
    href: 'tel:3135654833',
  },
  {
    icon: <Mail size={18} className="text-brand-red shrink-0 mt-0.5" />,
    label: 'E-mail',
    value: 'vendas@ciasolda.com.br',
    href: 'mailto:vendas@ciasolda.com.br',
  },
];

const socials = [
  {
    icon: <Instagram size={20} />,
    label: '@ciadasoldacia',
    href: 'https://www.instagram.com/ciadasoldacia/',
  },
  {
    icon: <Facebook size={20} />,
    label: 'Cia da Solda',
    href: 'https://www.facebook.com/ciasolda',
  },
];

export default function Location() {
  const { ref, inView } = useInView();

  return (
    <section id="localizacao" className="bg-[#0D0D0D] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 block">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Venha nos visitar em
            <span className="text-brand-red block">Contagem – MG</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Loja física com estoque completo e equipe especializada para atender você pessoalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm hover:text-brand-red transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#161616] border border-white/5 rounded-2xl p-6">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">
                Redes Sociais
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-brand-red/20 flex items-center justify-center transition-colors">
                      {s.icon}
                    </span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/5 shadow-2xl min-h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.1208576339914!2d-44.05870362477214!3d-19.96141898143413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6be3304a060ef%3A0x233bd3b7ee97d6ed!2sCia%20da%20Solda!5e0!3m2!1spt-BR!2sbr!4v1775158927321!5m2!1spt-BR!2sbr"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Cia da Solda"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
