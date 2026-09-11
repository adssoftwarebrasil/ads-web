import { CheckCircle2, Building2, Users, Award } from 'lucide-react';
import { WHATSAPP_ACCENTED } from '../constants';

const checks = [
  'Atendimento Especializado',
  'Estoque Pronta Entrega',
  'Produtos Certificados',
  'Logística Ágil',
];

const cards = [
  {
    Icon: Building2,
    title: 'Estrutura Completa',
    text: 'Sede própria preparada para atender demandas de pequeno a grande porte.',
  },
  {
    Icon: Users,
    title: 'DNA Familiar',
    text: 'Relações próximas e duradouras, baseadas na ética e transparência total.',
  },
  {
    Icon: Award,
    title: 'Excelência Técnica',
    text: 'Seleção rigorosa de fornecedores para garantir a máxima durabilidade.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lojadasconexoes%2Fimgi_32_AF1QipPVQ4z-TNcvTTmfMjLYhfu2zGXF5xBiNFc_RJwW%3Ds1289-k-no.jpg&version_id=null"
                alt="Fachada e interior da RA Loja das Conexões"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(45,48,145)]/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-20 bg-[rgb(248,232,48)] text-[rgb(45,48,145)] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center">
              <span className="text-4xl font-black">12+</span>
              <span className="text-sm font-bold uppercase tracking-tighter">Anos de Mercado</span>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[rgb(45,48,145)]/5 rounded-full blur-3xl"></div>
          </div>
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-[rgb(45,48,145)] font-bold tracking-widest uppercase text-sm mb-2 block">
                Nossa História
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[rgb(45,48,145)] mb-6 leading-tight">
                Tradição e Confiança em <span className="text-blue-600">Cada Conexão</span>
              </h2>
              <div className="w-20 h-1.5 bg-[rgb(248,232,48)] rounded-full mb-8"></div>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                A <strong className="text-[rgb(45,48,145)]">RA Loja das Conexões</strong> nasceu em 2014, fruto de uma parceria sólida entre pai e filha. O que começou como um sonho familiar transformou-se em uma referência no setor industrial.
              </p>
              <p>
                Nossa trajetória é pautada na{' '}
                <span className="text-[rgb(45,48,145)] font-semibold">honestidade e no compromisso técnico</span>. Não vendemos apenas peças; entregamos soluções que garantem a continuidade e a segurança da sua linha de produção.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checks.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-[rgb(248,232,48)]" />
                  <span className="font-semibold text-gray-700">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a
                href={WHATSAPP_ACCENTED}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(45,48,145)] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                Falar com a Nossa Equipe
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {cards.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[rgb(248,232,48)] hover:bg-white transition-all duration-300"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-[rgb(45,48,145)] transition-colors">
                <Icon size={30} className="text-[rgb(45,48,145)] group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-[rgb(45,48,145)] mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
