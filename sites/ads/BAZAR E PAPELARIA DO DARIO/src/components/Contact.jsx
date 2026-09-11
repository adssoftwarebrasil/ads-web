import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const hours = [
  { day: 'Segunda a Sexta', time: '08:00 – 18:00', open: true },
  { day: 'Sábado', time: '08:00 – 13:00', open: true },
  { day: 'Domingo', time: 'Fechado', open: false },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(`Olá! Meu nome é ${name}.\n${message}`)
    window.open(`https://wa.me/5562984256606?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black leading-tight">
            Entre em contato
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Estamos prontos para atender você. Envie uma mensagem ou visite nossa loja em Rialma -
            GO.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-bold text-brand-black text-base mb-1">Endereço</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Avenida Bernardo Sayão, N° 420
                  <br />
                  Quadra 05 Lote 08, Centro
                  <br />
                  Rialma – GO, CEP: 76310-000
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-bold text-brand-black text-base mb-1">Telefone / WhatsApp</p>
                <a
                  href="tel:6233972829"
                  className="text-gray-500 text-sm hover:text-brand-blue transition-colors block"
                >
                  (62) 3397-2829
                </a>
                <a
                  href="https://wa.me/5562984256606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-brand-blue transition-colors block"
                >
                  (62) 98425-6606
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-bold text-brand-black text-base mb-1">E-mail</p>
                <a
                  href="mailto:papelariadodario@outlook.com"
                  className="text-gray-500 text-sm hover:text-brand-blue transition-colors"
                >
                  papelariadodario@outlook.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
                <Clock size={22} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-brand-black text-base mb-3">Horários de Funcionamento</p>
                <div className="flex flex-col gap-2">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-600">{item.day}</span>
                      <span
                        className={`font-semibold ${
                          item.open ? 'text-brand-black' : 'text-gray-400'
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Cidades Atendidas
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rialma, Ceres, Rianápolis, Carmo do Rio Verde, Nova Glória, Ipiranga, Uruana,
                Itapaci, Rubiataba, Goianésia e São Luiz – GO.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-black mb-2">Envie uma mensagem</h3>
            <p className="text-gray-500 text-sm mb-6">
              Preencha os campos abaixo e você será redirecionado ao nosso WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Seu nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-black placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Qual produto ou serviço você procura?"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-black placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30 hover:scale-[1.02] text-base"
              >
                <Send size={18} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
