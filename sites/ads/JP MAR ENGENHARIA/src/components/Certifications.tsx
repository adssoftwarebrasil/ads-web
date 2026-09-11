import { Award } from 'lucide-react';

const certs = ['CTBC', 'OCP 0073', 'ALI', 'CNPq', 'SEBRAE'];

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="animate-slide-left  md:w-1/3">
            <div className="flex items-center gap-3 mb-2">
              <Award width={22} height={22} className="lucide lucide-award text-[#013413]" aria-hidden="true" />
              <span className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest">Certificações</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#013413]">
              Certificados e Associações
            </h2>
          </div>
          <div className="animate-slide-right  md:w-2/3 flex flex-wrap gap-4 md:justify-end">
            {certs.map((cert) => (
              <div
                key={cert}
                className="animate-fade-in  px-6 py-3 border border-[#013413]/15 rounded-full text-[#013413] font-medium text-sm tracking-wide hover:bg-[#013413] hover:text-white transition-all duration-300"
                style={{ transitionDelay: '0s' }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
