import { Award, GraduationCap, CheckCircle, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const credentials: { Icon: LucideIcon; text: string }[] = [
  {
    Icon: Award,
    text: 'Residência Médica em Ortopedia e Traumatologia - Hospital do Mandaqui, São Paulo',
  },
  { Icon: GraduationCap, text: 'Residência Médica em Patologias da Coluna - UNIFESP' },
  { Icon: CheckCircle, text: 'Membro da Sociedade Brasileira de Ortopedia (SBOT)' },
  { Icon: CheckCircle, text: 'Membro da Sociedade Brasileira de Coluna (SBC)' },
  { Icon: Users, text: 'Preceptor do Curso de Endoscopia de Coluna Vertebral em Barretos' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2FAgende%20sua%20Consulta.jpg"
              alt="Dr. Vinícius Rezende Rios"
              className="rounded-lg shadow-xl w-full h-auto min-h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Dr. Vinícius Rezende Rios
            </h2>
            <p className="text-xl text-[#2563eb] font-semibold mb-6">
              Médico Ortopedista Especialista em Coluna Vertebral
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Dedicado ao tratamento de patologias da coluna com acompanhamento personalizado em
              todas as etapas - do diagnóstico ao pós-operatório, garantindo segurança e resultados
              excepcionais.
            </p>
            <div className="space-y-4">
              {credentials.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon size={24} className="text-[#2563eb] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
            <a
              href="#servicos"
              className="inline-block mt-8 border-2 border-[#2563eb] text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-[#2563eb] hover:text-white transition-all duration-300"
            >
              Conheça Mais Sobre Nosso Trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
