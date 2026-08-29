import { MessageCircle, Settings, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const ABOUT_IMG =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=csamanaus%2Fimg%2Fimage_9.png&version_id=null';

interface Item {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const items: Item[] = [
  {
    Icon: MessageCircle,
    iconClass: 'lucide lucide-message-circle w-6 h-6 text-primary',
    title: 'Consultoria Especializada',
    text: 'Orientação sobre o melhor aparelho auditivo para você.',
  },
  {
    Icon: Settings,
    iconClass: 'lucide lucide-settings w-6 h-6 text-primary',
    title: 'Ajustes Rápidos e Eficazes',
    text: 'Personalizamos seu aparelho auditivo para máxima eficiência.',
  },
  {
    Icon: Package,
    iconClass: 'lucide lucide-package w-6 h-6 text-primary',
    title: 'Produtos para Surdez',
    text: 'Ampla variedade de produtos para atender suas necessidades.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <img
              src={ABOUT_IMG}
              alt="Quem somos"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Quem Somos
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CSA Centro de Soluções Auditivas
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A CSA Centro de Soluções Auditivas é uma empresa especializada em oferecer
              soluções personalizadas para pessoas com perda auditiva. Com mais de 33 anos de
              experiência no mercado, a CSA se destaca pelo atendimento humanizado e pela
              qualidade de seus produtos, que incluem aparelhos auditivos de alta tecnologia,
              acessórios e serviços de manutenção e acompanhamento. A empresa valoriza a saúde
              auditiva de seus clientes, proporcionando mais qualidade de vida.
            </p>
            <div className="space-y-6">
              {items.map(({ Icon, iconClass, title, text }) => (
                <div key={title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className={iconClass} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                    <p className="text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
