import { Award, Users } from 'lucide-react';

const especialidades = ['Odontologia Estética', 'Implantodontia', 'Reabilitação Oral'];

export default function Equipe() {
  return (
    <section id="equipe" className="py-24" style={{ backgroundColor: 'rgb(178, 155, 133)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conheça Nossa Equipe
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">
            Profissionais especializados e dedicados ao seu bem-estar
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fimg%2FTathiane%20Guimar%C3%A3es.webp"
                alt="Dra. Tathiane Guimarães"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-black" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Fundadora</div>
                  <div className="text-xs text-gray-600">Desde 2017</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Dra. Tathiane Guimarães</h3>
            <p className="text-lg font-semibold text-gray-900">Cirurgiã-Dentista e Fundadora</p>
            <p className="text-gray-800 leading-relaxed font-medium">
              Formada em Odontologia desde 2017, a Dra. Tathiane é reconhecida por sua dedicação à
              excelência e inovação. Investiu continuamente em cursos com os mais renomados
              profissionais da área, sempre buscando as técnicas mais avançadas para oferecer o
              melhor tratamento aos seus pacientes.
            </p>
            <p className="text-gray-800 leading-relaxed font-medium">
              Sua visão holística da saúde levou à criação de uma clínica multidisciplinar, onde cada
              profissional é cuidadosamente treinado para manter os mais altos padrões de qualidade e
              atendimento humanizado que a caracterizam.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {especialidades.map((esp) => (
                <span
                  key={esp}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                >
                  {esp}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fimg%2FUsar%20na%20aba%20quem%20somos%20ou%20profissionais%20capacitados.webp"
                alt="Equipe de Dentistas"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Dentistas Especialistas</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Equipe completa de cirurgiões-dentistas especializados em todas as áreas da
              odontologia, prontos para atender suas necessidades com excelência.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/atualizadas/footer-back-ground.webp"
                alt="Atendimento Multidisciplinar"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Equipe Multidisciplinar</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Psicólogos e nutricionistas trabalhando de forma integrada para garantir cuidados
              completos à sua saúde física e mental.
            </p>
          </div>
        </div>
        <div className="mt-20 bg-black rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>Treinamento Exclusivo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Profissionais Treinados Pessoalmente
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Cada membro da nossa equipe passa por treinamento rigoroso conduzido pessoalmente
                pela Dra. Tathiane Guimarães, garantindo que todos os tratamentos mantenham os mais
                altos padrões de qualidade e sigam os mesmos protocolos de excelência.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fimg%2FQuem%20somos%281%29.webp"
                alt="Equipe Tathiane Guimarães"
                className="rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
