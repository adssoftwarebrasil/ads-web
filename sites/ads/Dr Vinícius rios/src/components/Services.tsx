import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas para o cuidado da sua coluna vertebral
          </p>
        </div>
        <div className="space-y-24">
          {/* Serviço 1 - Sem Cirurgia */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2FTratamento%20de%20dor%20na%20coluna%20sem%20cirurgia.jpg"
                alt="Tratamento Conservador"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Sem Cirurgia
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Tratamento de Dor na Coluna Sem Cirurgia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                A maioria das hérnias de disco e dores na coluna podem ser tratadas sem cirurgia.
                Utilizamos medicamentos, fisioterapia, pilates, acupuntura e infiltrações para
                alívio efetivo da dor.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Medicamentos para controle da dor',
                  'Fisioterapia e reabilitação',
                  'Infiltrações guiadas',
                  'Terapias complementares',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={24} className="text-[#10b981] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5562999220030&text=Olá, gostaria de saber mais sobre tratamento conservador"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2563eb] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-all duration-300 hover:shadow-xl"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Serviço 2 - Cirurgia Minimamente Invasiva */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block bg-blue-100 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Tecnologia Avançada
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Cirurgia Minimamente Invasiva
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Quando a cirurgia é necessária, utilizamos técnicas minimamente invasivas que
                reduzem riscos, diminuem dor pós-operatória e aceleram sua recuperação.
              </p>
              <div className="mb-8">
                <p className="font-bold text-gray-800 mb-3 text-lg">Indicações:</p>
                <ul className="space-y-2">
                  {[
                    'Dor intratável resistente a medicamentos',
                    'Déficit neurológico (perda de força/sensibilidade)',
                    'Dor persistente após 4-6 meses de tratamento conservador',
                  ].map((item, i) => (
                    <li key={i} className="text-gray-700 text-lg flex items-start gap-2">
                      <span className="text-[#2563eb] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5562999220030&text=Olá, gostaria de consultar sobre cirurgia minimamente invasiva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2563eb] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-all duration-300 hover:shadow-xl"
              >
                Consulte o Especialista
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2FCirurgia%20minimamente%20invasiva.jpg"
                alt="Cirurgia Minimamente Invasiva"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Serviço 3 - Tratamento Regenerativo */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2FTratamento%20regenerativo.jpg"
                alt="Tratamento Regenerativo"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Inovação
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Tratamento Regenerativo
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Terapias avançadas que estimulam a regeneração natural dos tecidos, promovendo
                recuperação acelerada e alívio duradouro. Utilizamos as técnicas mais modernas para
                acelerar o processo de cicatrização e restauração da função da coluna vertebral.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5562999220030&text=Olá, gostaria de conhecer o tratamento regenerativo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2563eb] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-all duration-300 hover:shadow-xl"
              >
                Conheça a Técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
