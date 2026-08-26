import { ArrowRight, Radio, CheckCircle, Award, Wrench, Package, HeartHandshake } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const services = [
  {
    icon: Radio,
    title: 'Aparelhos para Implantes Cocleares',
    description:
      'Processadores de som de última geração compatíveis com os sistemas de implante coclear MED-EL, proporcionando qualidade sonora excepcional e conectividade moderna.',
  },
  {
    icon: Package,
    title: 'Peças e Acessórios MED-EL',
    description:
      'Linha completa de peças originais e acessórios MED-EL, incluindo baterias, bobinas, cabos e demais componentes para manutenção e upgrade do sistema auditivo.',
  },
  {
    icon: Award,
    title: 'Aparelhos de Condução Óssea',
    description:
      'Soluções auditivas por condução óssea para pacientes com perda auditiva condutiva ou mista, que não podem ou não se beneficiam de aparelhos convencionais.',
  },
  {
    icon: HeartHandshake,
    title: 'Acompanhamento e Suporte',
    description:
      'Acompanhamento personalizado pós-implante, suporte contínuo para garantir a melhor experiência auditiva ao longo do tempo.',
  },
  {
    icon: Wrench,
    title: 'Assistência Técnica Especializada',
    description:
      'Equipe treinada e autorizada para manutenção e suporte técnico de aparelhos auditivos MED-EL.',
  },
];

export default function ImplantesAuditivos() {
  return (
    <ServicePageLayout>
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(246,182,31)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[rgb(246,182,31)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-[rgb(246,182,31)] text-black font-bold px-5 py-1.5 rounded-full text-sm uppercase tracking-wider">
            Representante Oficial MED-EL
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Implantes <span className="text-[rgb(246,182,31)]">Auditivos</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A BEEVOX é Representante Oficial da MED-EL do Brasil em Cuiabá e Várzea Grande, oferecendo tecnologia de ponta e suporte especializado para pacientes com implante coclear.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 mt-4"
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Parceria oficial com a <span className="text-[rgb(246,182,31)]">MED-EL</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A MED-EL é líder mundial em tecnologia de implantes auditivos, presente em mais de 120 países. Como representante oficial em Cuiabá e Várzea Grande, a BEEVOX oferece acesso direto aos produtos mais avançados e ao suporte técnico especializado da marca.
              </p>
              <ul className="space-y-3">
                {[
                  'Representante autorizada em Cuiabá e Várzea Grande',
                  'Acesso a toda a linha de produtos MED-EL',
                  'Suporte técnico certificado pela fabricante',
                  'Atendimento personalizado pós-implante',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[rgb(246,182,31)] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FGroup%20178%20(1).png&version_id=null"
                alt="Implante auditivo"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-[rgb(246,182,31)]">Serviços</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Suporte completo para pacientes com implante coclear, do fornecimento de equipamentos ao acompanhamento contínuo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[rgb(246,182,31)]/30 transition-all duration-300 space-y-4">
                <div className="w-12 h-12 bg-[rgb(246,182,31)] rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-3xl p-10 sm:p-14 text-white text-center space-y-6">
            <Award className="w-12 h-12 text-[rgb(246,182,31)] mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              A tecnologia MED-EL mais próxima de <span className="text-[rgb(246,182,31)]">você</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Se você ou um familiar tem implante coclear ou está considerando a cirurgia, a BEEVOX está pronta para oferecer o melhor suporte em Cuiabá e Várzea Grande.
            </p>
            <a
              href="http://wa.me/5565999818250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-10 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 text-lg"
            >
              Entrar em Contato
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
