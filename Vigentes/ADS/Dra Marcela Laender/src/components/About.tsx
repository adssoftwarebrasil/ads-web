import { GraduationCap, Award, Sparkles, Heart } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';
const IMG = 'https://storage.lucasmendes.dev/site-sp/dra%20marcela%20laender%2Fimg%2Ffoto-dra-roupa-marrom-em-pe.webp';

const features = [
  {
    Icon: GraduationCap,
    title: 'Formação Completa',
    text: 'Residência e especializações em instituições renomadas',
  },
  {
    Icon: Award,
    title: 'Certificações',
    text: 'Especialista certificada pela Febrasgo',
  },
  {
    Icon: Sparkles,
    title: 'Tecnologia Avançada',
    text: 'Tratamentos com laser e técnicas modernas',
  },
  {
    Icon: Heart,
    title: 'Cuidado Humanizado',
    text: 'Atendimento acolhedor como médica e mãe',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative hidden lg:block">
            <img src={IMG} alt="Dra. Marcela Laender" className="rounded-3xl shadow-2xl w-full h-auto" />
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#613C45]/10 rounded-3xl -z-10"></div>
          </div>
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#D88B9B]/20 text-[#613C45] px-4 py-2 rounded-full text-sm font-medium">
                Conheça a Dra. Marcela
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#613C45]">
              Dedicação e Excelência em Cuidados Femininos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou Marcela Teixeira Laender Mourão, natural de Teófilo Otoni e especialista em
              ginecologia e obstetrícia. Quando me tornei mãe, pude vivenciar a medicina do outro
              lado e isso me trouxe ainda mais certeza do meu amor pela profissão e da necessidade de
              oferecer um atendimento humanizado e de excelência.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Me formei em Medicina pela FASEH em 2014, fiz residência médica em Ginecologia e
              Obstetrícia pela rede Mater Dei de Saúde e especialização em Cirurgia Ginecológica
              Videolaparoscópica. Nos últimos 5 anos, dediquei meus estudos à Ginecologia Endócrina e
              Regenerativa.
            </p>
            <div className="relative lg:hidden my-8">
              <img src={IMG} alt="Dra. Marcela Laender" className="rounded-3xl shadow-2xl w-full h-auto" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#613C45]/10 rounded-3xl -z-10"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D88B9B]/20 rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-[#613C45]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#613C45] mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#613C45] text-white px-8 py-4 rounded-full hover:bg-[#D88B9B] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Converse Comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
