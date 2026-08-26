import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, X, MessageCircle } from 'lucide-react';

export default function Locations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: 'Novo Progresso - PA',
      subtitle: 'Matriz',
      address: 'Av. Orival Prazeres, 3087 – Vista Alegre, CEP 68193-000',
      phone: '(93) 3528-2094',
      whatsapp: ['(93) 98400-6462', '(93) 98119-5811'],
      hours: 'Seg-Sex',
      isPrimary: true,
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lyon-trator-pecas%2Fnova%2FNovo%20Progresso.jpeg&version_id=null'
    },
    {
      name: 'Itaituba - PA',
      subtitle: 'Filial',
      address: 'Rod. Transamazônica, 48 – Bairro Comércio, CEP 68180-010',
      phone: null,
      whatsapp: ['(93) 99219-9688'],
      hours: 'Seg-Sex',
      isPrimary: false,
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lyon-trator-pecas%2Fnova%2FItaituba.jpeg&version_id=null'
    },
    {
      name: 'Boa Vista - RR',
      subtitle: 'Filial',
      address: 'Av. Centenário, 1876 – Cinturão Verde, CEP 69312-377',
      phone: null,
      whatsapp: ['(95) 98430-3773'],
      hours: 'Seg-Sex',
      isPrimary: false,
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lyon-trator-pecas%2Fnova%2FBoa%20Vista.jpeg&version_id=null'
    }
  ];

  const handleContact = (location) => {
    if (location.whatsapp.length > 1) {
      setSelectedLocation(location);
      setIsModalOpen(true);
    } else {
      window.open(`https://wa.me/${location.whatsapp[0].replace(/\D/g, '')}`, '_blank');
    }
  };

  return (
    <>
      <section id="unidades" className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#fbba00] font-semibold text-sm tracking-wider uppercase mb-2 block">
              Onde Estamos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a18] mb-4">
              Nossas Unidades
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Com sede estratégica no Pará e filiais expansivas, garantimos agilidade na entrega para todo o Norte do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col ${
                  location.isPrimary ? 'ring-2 ring-[#fbba00] scale-105 md:scale-105 z-10' : 'border border-gray-100'
                }`}
              >
                {location.isPrimary && (
                  <div className="bg-[#fbba00] text-[#1a1a18] text-center py-3 font-bold text-sm tracking-wide flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} />
                    MATRIZ
                  </div>
                )}

                <div className="h-56 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1a1a18] mb-1">{location.name}</h3>
                    <p className="text-[#fbba00] font-semibold">{location.subtitle}</p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-start gap-4 text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#fbba00]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Endereço</p>
                        <p className="text-sm">{location.address}</p>
                      </div>
                    </div>

                    {location.phone && (
                      <div className="flex items-start gap-4 text-gray-600">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#fbba00]">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Telefone Fixo</p>
                          <p className="text-sm">{location.phone}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-4 text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#fbba00]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                        {location.whatsapp.map((number, idx) => (
                          <p key={idx} className="text-sm">{number}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#fbba00]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Horário</p>
                        <p className="text-sm">{location.hours}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleContact(location)}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg ${
                      location.isPrimary 
                        ? 'bg-[#fbba00] text-[#1a1a18] hover:bg-[#ffd04d]' 
                        : 'bg-[#1a1a18] text-white hover:bg-[#333]'
                    }`}
                  >
                    <Navigation size={20} />
                    Entrar em Contato
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Seleção de WhatsApp */}
      {isModalOpen && selectedLocation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
            {/* Header do Modal */}
            <div className="bg-gradient-to-r from-[#fbba00] to-[#ffd04d] p-6 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#1a1a18] hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-[#1a1a18] mb-2">
                Escolha um WhatsApp
              </h3>
              <p className="text-[#1a1a18]/80 text-sm">
                {selectedLocation.name}
              </p>
            </div>

            {/* Corpo do Modal */}
            <div className="p-6 space-y-3">
              {selectedLocation.whatsapp.map((number, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${number.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#25D366] hover:text-white transition-all group border border-gray-200 hover:border-[#25D366]"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <MessageCircle size={24} className="text-[#25D366] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a18] group-hover:text-white">
                      WhatsApp {idx + 1}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-white/90">
                      {number}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer do Modal */}
            <div className="px-6 pb-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}