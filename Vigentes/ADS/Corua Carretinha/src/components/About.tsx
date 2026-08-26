import { Award, Target, Users, TrendingUp, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Award, title: 'Qualidade Garantida', description: 'Produtos e serviços com os mais altos padrões' },
  { icon: Target, title: 'Atendimento Completo', description: 'Salvador e toda região metropolitana' },
  { icon: Users, title: 'Equipe Especializada', description: 'Profissionais experientes e dedicados' },
  { icon: TrendingUp, title: 'Pioneiros', description: 'Primeiros em aluguel de carretinha na região' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Floja-carretinha-azul-fachada.webp"
                alt="Fachada da Loja"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fhomens-oficina-jetski-carregando-carretinha.webp"
                alt="Equipe Trabalhando"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[rgb(242,150,1)]/10 rounded-2xl -z-10"></div>
          </div>
          <div>
            <div className="inline-block bg-[rgb(242,150,1)]/10 text-[rgb(242,150,1)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SOBRE NÓS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(25,47,79)] mb-6">
              Referência em Carretinhas desde 2021
            </h2>
            <p className="text-lg text-[rgb(25,47,79)]/70 mb-6 leading-relaxed">
              Somos uma empresa especializada no ramo de carretinhas, atuando como{' '}
              <strong>referência na cidade de Camaçari-BA</strong>. Estamos no mercado desde 2021, oferecendo soluções completas e de qualidade para nossos clientes.
            </p>
            <p className="text-lg text-[rgb(25,47,79)]/70 mb-8 leading-relaxed">
              Somos <strong>pioneiros quando se fala em aluguel de carretinha</strong> na região, oferecendo também venda de carretinhas novas e seminovas, manutenção especializada, peças originais e acessórios de qualidade.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[rgb(242,150,1)]/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[rgb(242,150,1)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[rgb(25,47,79)] mb-1">{feature.title}</h4>
                      <p className="text-sm text-[rgb(25,47,79)]/70">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://wa.me/5571986462034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(242,150,1)] text-[rgb(25,47,79)] px-8 py-4 rounded-full font-bold hover:bg-[rgb(242,150,1)]/90 transition-all duration-300 hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
