import { Clock, Phone } from 'lucide-react';

export default function Hours() {
  return (
    <section id="horario" className="bg-[rgb(246,234,9)] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[rgb(32,29,30)]">
            Horário de Funcionamento
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock width={36} height={36} className="text-[rgb(234,29,34)]" />
                <h3 className="text-2xl font-bold text-[rgb(32,29,30)]">Segunda a Sexta</h3>
              </div>
              <p className="text-4xl font-bold text-[rgb(32,29,30)] mb-4">07:00 às 17:30</p>
              <div className="bg-[rgb(234,29,34)] text-white px-4 py-3 rounded-lg inline-block">
                <p className="font-semibold">Atendimento contínuo - Não fechamos para almoço</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock width={36} height={36} className="text-[rgb(234,29,34)]" />
                <h3 className="text-2xl font-bold text-[rgb(32,29,30)]">Sábado</h3>
              </div>
              <p className="text-4xl font-bold text-[rgb(32,29,30)] mb-6">07:00 às 11:00</p>
              <div className="border-t-2 border-gray-200 pt-4">
                <div className="flex items-center gap-3">
                  <Phone width={24} height={24} className="text-[rgb(234,29,34)]" />
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Plantão Bateria</p>
                    <a
                      href="https://wa.me/5566999146648"
                      className="text-2xl font-bold text-[rgb(234,29,34)] hover:underline"
                    >
                      (66) 99914-6648
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Fhorario-funcionamento-bateria.webp"
              alt="Horário de Funcionamento"
              className="rounded-2xl shadow-2xl max-w-full md:max-w-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
