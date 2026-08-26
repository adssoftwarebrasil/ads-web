import { useState } from 'react';
import {
  Calendar,
  Baby,
  User,
  Phone,
  Clock,
  Users,
  MessageSquare,
} from 'lucide-react';

const timeOptions = [
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
];

export default function Reservation() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [observations, setObservations] = useState('');

  const handleSubmit = () => {
    const message =
      `Olá! Gostaria de fazer uma reserva no Himitsu Restaurante.\n\n` +
      `*Nome:* ${name}\n` +
      `*Telefone:* ${phone}\n` +
      `*Data:* ${date}\n` +
      `*Horário:* ${time}\n` +
      `*Número de Pessoas:* ${people}` +
      (observations ? `\n*Observações:* ${observations}` : '');
    const url = `https://wa.me/556232513597?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="reservation"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="ken-burns-reservation absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://storage.lucasmendes.dev/site-sp/himitsu%2Fhero1.png")',
            width: '120%',
            height: '120%',
            left: '-10%',
            top: '-10%',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-[#E02023]/5"></div>
      </div>
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block animate-float mb-4">
            <div className="bg-[#E02023] p-4 rounded-full">
              <Calendar className="lucide lucide-calendar w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Faça sua Reserva
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Reserve sua mesa e garanta uma experiência inesquecível
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/20">
            <div className="bg-gradient-to-r from-[#E02023]/10 to-[#E02023]/5 rounded-2xl p-5 mb-8 flex items-start gap-4 border-l-4 border-[#E02023] hover:shadow-lg transition-shadow">
              <div className="bg-white p-2 rounded-full shadow-md">
                <Baby className="lucide lucide-baby w-6 h-6 text-[#E02023]" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1 text-lg">
                  Espaço Kids Disponível
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Temos brinquedoteca! Perfeito para famílias com crianças se
                  divertirem enquanto você aproveita sua refeição.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 font-semibold text-black mb-2"
                >
                  <User className="lucide lucide-user w-4 h-4 text-[#E02023]" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border-2 border-gray-300 focus:border-[#E02023] focus:outline-none transition-all text-black"
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 font-semibold text-black mb-2"
                >
                  <Phone className="lucide lucide-phone w-4 h-4 text-[#E02023]" />
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border-2 border-gray-300 focus:border-[#E02023] focus:outline-none transition-all text-black"
                  placeholder="(62) 99999-9999"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label
                    htmlFor="date"
                    className="flex items-center gap-2 font-semibold text-black mb-2"
                  >
                    <Calendar className="lucide lucide-calendar w-4 h-4 text-[#E02023]" />
                    Data *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-14 px-4 rounded-xl border-2 border-gray-300 focus:border-[#E02023] focus:outline-none transition-all text-black"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="time"
                    className="flex items-center gap-2 font-semibold text-black mb-2"
                  >
                    <Clock className="lucide lucide-clock w-4 h-4 text-[#E02023]" />
                    Horário *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full h-14 px-4 rounded-xl border-2 border-gray-300 focus:border-[#E02023] focus:outline-none transition-all text-black appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Selecione o horário</option>
                    {timeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="group">
                <label
                  htmlFor="people"
                  className="flex items-center gap-2 font-semibold text-black mb-2"
                >
                  <Users className="lucide lucide-users w-4 h-4 text-[#E02023]" />
                  Número de Pessoas *
                </label>
                <input
                  type="number"
                  id="people"
                  name="people"
                  required
                  min="1"
                  max="20"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border-2 border-gray-300 focus:border-[#E02023] focus:outline-none transition-all text-black"
                  placeholder="Quantas pessoas?"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="observations"
                  className="flex items-center gap-2 font-semibold text-black mb-2"
                >
                  <MessageSquare className="lucide lucide-message-square w-4 h-4 text-[#E02023]" />
                  Observações
                </label>
                <textarea
                  id="observations"
                  name="observations"
                  rows={4}
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#E02023] focus:outline-none transition-all resize-none text-black"
                  placeholder="Alguma preferência? Alergia alimentar? Aniversário?"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#E02023] text-white py-5 rounded-xl hover:bg-[#c01a1e] transition-all hover:scale-[1.02] hover:shadow-2xl font-bold text-lg flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="shimmer absolute inset-0 z-0"></span>
                <span className="relative z-10">
                  Confirmar Reserva via WhatsApp
                </span>
              </button>
              <p className="text-center text-gray-600 text-sm mt-4">
                Você será redirecionado para o WhatsApp para finalizar sua
                reserva
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
              <Clock className="lucide lucide-clock w-8 h-8 text-[#E02023] mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Seg a Sáb</p>
              <p className="text-white/80 text-xs">19h às 00h</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
              <Phone className="lucide lucide-phone w-8 h-8 text-[#E02023] mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Telefone</p>
              <p className="text-white/80 text-xs">(62) 3251-3597</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
              <Baby className="lucide lucide-baby w-8 h-8 text-[#E02023] mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Brinquedoteca</p>
              <p className="text-white/80 text-xs">Para sua família</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
