import { Clock } from 'lucide-react';

const schedule = [
  { day: 'Segunda a Sexta', time: '08:30 - 18:30', closed: false },
  { day: 'Sábado', time: '08:30 - 13:30', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Hours() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Clock className="lucide lucide-clock w-10 h-10 text-[rgb(253,88,34)] mr-4" />
              <h2 className="text-3xl font-bold text-black">
                Horário de Atendimento
              </h2>
            </div>
            <div className="space-y-4">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-3 border-b border-gray-200"
                >
                  <span className="font-bold text-black">{item.day}</span>
                  <span className={item.closed ? 'text-red-600' : 'text-gray-700'}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-[rgb(245,245,245)] rounded-lg">
              <h3 className="font-bold text-black text-lg mb-2">
                Área de Atendimento
              </h3>
              <p className="text-gray-700">
                Atendemos Lauro de Freitas, Salvador, Camaçari e região
              </p>
            </div>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31352.847284548825!2d-38.35006!3d-12.89448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610d65e7f08f1%3A0x9f05465a9d5e9c7a!2sPort%C3%A3o%2C%20Lauro%20de%20Freitas%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização SJ Bike"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
