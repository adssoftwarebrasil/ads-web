import { AlertCircle, Clock, Stethoscope } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { Phone } from 'lucide-react';

const emergencies = ['Dor de dente intensa', 'Trauma dental', 'Quebra de dentes', 'Sangramento oral'];

export default function Emergency() {
  return (
    <section
      id="emergencias"
      className="py-20 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-red-100 p-4 rounded-2xl mb-6 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-alert-circle text-red-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Emergência{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Odontológica?
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Atendemos urgências e emergências 24 horas. Quando você mais precisar, estamos aqui
              para cuidar do seu sorriso.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {emergencies.map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <AlertCircle size={24} className="lucide lucide-alert-circle text-red-600" />
                  </div>
                  <p className="text-slate-700 font-semibold text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Clock size={20} className="lucide lucide-clock " />
                <span className="font-semibold">Atendimento 24 Horas</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ligue Agora para Emergência</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="text-white/90 mb-4 text-sm font-semibold uppercase tracking-wide">
                  Telefone de Emergência
                </p>
                <a
                  href="tel:+5514996933360"
                  className="text-4xl md:text-5xl font-bold text-white hover:text-red-100 transition-colors block"
                >
                  (14) 99693-3360
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+5514996933360"
                  className="group flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Phone size={24} className="lucide lucide-phone group-hover:animate-bounce" />
                  Ligar Agora
                </a>
                <a
                  href="https://wa.me/5514996933360?text=Olá!%20Preciso%20de%20atendimento%20de%20emergência%20odontológica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-red-700/50 backdrop-blur-sm p-4 text-center">
              <p className="text-white/90 text-sm">
                ⚠️ Em casos de emergência grave, procure imediatamente um hospital ou ligue para 192
                (SAMU)
              </p>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Clock size={28} className="lucide lucide-clock text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Horário de Atendimento</h4>
                  <p className="text-slate-600 text-sm">
                    <strong>Segunda a Sexta:</strong> 08:30 - 18:30
                    <br />
                    <strong>Sábado:</strong> 08:30 - 13:30
                    <br />
                    <strong>Emergências:</strong> 24h (mediante contato)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Stethoscope size={28} className="lucide lucide-stethoscope text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Como Proceder</h4>
                  <p className="text-slate-600 text-sm">
                    Entre em contato imediatamente pelo telefone ou WhatsApp. Nossa equipe irá
                    avaliar a situação e fornecer as orientações necessárias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
