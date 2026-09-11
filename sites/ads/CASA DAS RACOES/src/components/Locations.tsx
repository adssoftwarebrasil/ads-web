import { MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { stores } from '../data/stores';
import { whatsappLink } from '../lib/tracking';

export default function Locations() {
  return (
    <section id="unidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Nossas Unidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            3 locais para te atender
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Encontre a unidade mais próxima de você em Primavera do Leste - MT.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-r from-green-700 to-green-600 p-5 text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-green-200 text-xs font-semibold uppercase tracking-wide">
                    {store.id === 1 ? 'Matriz' : `Filial 0${store.id - 1}`}
                  </span>
                  {store.badge && (
                    <span className="bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {store.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg">{store.name}</h3>
              </div>

              {store.mapEmbed ? (
                <div className="relative h-48 bg-gray-100">
                  <iframe
                    src={store.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${store.name}`}
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin size={32} className="mx-auto mb-2 text-green-300" />
                    <p className="text-sm font-medium text-gray-500">Localização</p>
                  </div>
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={15} className="text-green-500 mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{store.address}</p>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  <Clock size={15} className="text-green-500 mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm">
                    {store.hours ?? 'Segunda a Sábado, 7h às 21h'}
                    <br />
                    Domingo, 7h às 12h
                  </p>
                </div>

                <div className="flex gap-2">
                  <a
                    {...whatsappLink(
                      'unidade_card',
                      `Olá! Gostaria de falar com a unidade *${store.name}*.`,
                      store
                    )}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                  {store.instagram && (
                    <a
                      href={store.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 hover:border-pink-300 hover:bg-pink-50 text-gray-500 hover:text-pink-600 transition-all"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 rounded-xl p-3">
                <Clock size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Horário de Atendimento</p>
                <p className="text-gray-500 text-sm">Segunda a Sábado — 7h às 21h • Domingo — 7h às 12h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 rounded-xl p-3">
                <MapPin size={20} className="text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Delivery em toda a cidade</p>
                <p className="text-gray-500 text-sm">Primavera do Leste - MT</p>
              </div>
            </div>
            <a
              {...whatsappLink(
                'unidades_horarios',
                'Olá! Gostaria de verificar os horários de atendimento e fazer um pedido.'
              )}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
