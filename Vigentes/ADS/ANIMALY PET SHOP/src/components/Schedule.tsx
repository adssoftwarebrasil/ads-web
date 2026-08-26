import { Clock, Calendar } from 'lucide-react';

export default function Schedule() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#b900ba] to-[#38d060]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Horários e Agendamento
            </h2>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <Clock className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-white/90">
                    <p className="text-lg">Segunda à Sexta: 8h às 17h</p>
                    <p className="text-lg">Sábado: 8h às 16h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <Calendar className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Agendamentos
                  </h3>
                  <p className="text-lg text-white/90">
                    Os agendamentos precisam ser feitos com antecedência. Entre
                    em contato conosco pelo WhatsApp para garantir o melhor
                    horário para seu pet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/animalyp%2FHora%CC%81rios%20e%20agendamento.jpg"
              alt="Horários e agendamento"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
