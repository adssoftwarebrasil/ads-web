import { Shield, GraduationCap, Award } from 'lucide-react';

const formacao = [
  'Medicina pela UFG - Universidade Federal de Goiás',
  'Residência Médica em Cirurgia Geral - Hospital Santa Casa de Misericórdia',
  'Especialização em Cirurgia Vascular Periférica - Hospital Santa Casa de Misericórdia',
];

const sociedades = [
  'Sociedade Brasileira de Angiologia e Cirurgia Vascular',
  'Sociedade Brasileira de Linfologia e Flebologia',
  'Sociedade Brasileira de Laser',
];

const gallery = [
  { src: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fconsultorio-moderno-elegante.webp', alt: 'Consultório Moderno' },
  { src: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Frecepcao-clinica-moderna.webp', alt: 'Recepção Clínica' },
  { src: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fsala-equipamento-medico.webp', alt: 'Equipamento Médico' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5 text-[#024074]" />
            <span className="text-[#024074] font-semibold">Qualificação Profissional</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#024074] mb-6">Dr. Hugo da Cunha</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">CRM-GO 8972 | RQE 5327 - Cirurgião Vascular com formação sólida e compromisso com a excelência no cuidado vascular</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#024074] p-4 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#024074]">Formação</h3>
            </div>
            <ul className="space-y-4">
              {formacao.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#024074] p-4 rounded-2xl">
                <Award className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#024074]">Sociedades Médicas</h3>
            </div>
            <ul className="space-y-4">
              {sociedades.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map((img) => (
            <div key={img.alt} className="relative rounded-3xl overflow-hidden shadow-xl h-80">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
