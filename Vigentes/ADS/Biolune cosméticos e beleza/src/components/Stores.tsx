import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Stores = () => {
  const stores = [
    {
      name: 'Loja Negrão de Lima',
      address: 'Rua Roberto Valadares esq. com Senador Pericles, Qd 32, Lote 13, nº 508',
      neighborhood: 'Setor Negrão de Lima',
      city: 'Goiânia - GO',
      cep: 'CEP 74650-270',
      phone: '(62) 3223-1069',
      whatsapp: '(62) 99959-7617',
      whatsappLink: 'https://wa.me/5562999597617',
      hours: 'Seg-Sex: 09h às 19h | Sáb: 09h às 15h',
      mapLink: 'https://maps.google.com/?q=Rua+Roberto+Valadares+508+Negrão+de+Lima+Goiania',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Ffachada-loja-beleza-uma-das-lojas.webp&version_id=null',
      opened: 'Desde 2024'
    },
    {
      name: 'Loja Vera Cruz II',
      address: 'Av. Frei Confalone, Qd 112, Lote 14A',
      neighborhood: 'Conjunto Vera Cruz II',
      city: 'Goiânia - GO',
      cep: 'CEP 74495-060',
      phone: '(62) 3639-1570',
      whatsapp: '(62) 98173-3003',
      whatsappLink: 'https://wa.me/5562981733003',
      hours: 'Seg-Sex: 09h às 19h | Sáb: 09h às 15h',
      mapLink: 'https://maps.google.com/?q=Avenida+Frei+Confalone+Vera+Cruz+II+Goiania',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Floja-rosa-cosmeticos-fachada-uma-das-lojas.webp&version_id=null',
      opened: 'Inauguração 2025'
    }
  ];

  return (
    <section id="lojas" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f4ccd4]/10 via-transparent to-[#f4ccd4]/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c40278] font-bold text-sm uppercase tracking-wider bg-[#f4ccd4]/30 px-4 py-2 rounded-full inline-block mb-4">
            Nossas Lojas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#230015] mb-6">
            Visite nossas unidades em{' '}
            <span className="text-[#c40278]">Goiânia</span>
          </h2>
          <p className="text-lg text-[#350020]/80">
            Duas lojas estrategicamente localizadas para melhor atendê-lo. Venha nos conhecer!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {stores.map((store, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-[#f4ccd4]/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#f4ccd4]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#230015]/80 via-[#230015]/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{store.name}</h3>
                  <p className="text-[#f4ccd4] text-sm font-semibold">{store.opened}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#c40278] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#230015] font-medium leading-relaxed">{store.address}</p>
                    <p className="text-[#350020]/70 text-sm">{store.neighborhood}</p>
                    <p className="text-[#350020]/70 text-sm">{store.city} - {store.cep}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#c40278] flex-shrink-0" />
                  <p className="text-[#230015] font-medium">{store.hours}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#c40278] flex-shrink-0" />
                  <div>
                    <p className="text-[#230015] font-medium">{store.phone}</p>
                    <p className="text-[#350020]/70 text-sm">WhatsApp: {store.whatsapp}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <a
                    href={store.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#c40278] to-[#851756] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={store.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white text-[#c40278] px-4 py-3 rounded-xl font-semibold border-2 border-[#c40278] hover:bg-[#f4ccd4] transition-all duration-300 text-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#c40278] to-[#851756] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Atendimento e Entrega a Domicílio</h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Não pode vir até nossas lojas? Sem problema! Fazemos entregas em toda região de Goiânia. Entre em contato e faça seu pedido pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5562999597617?text=Olá! Gostaria de solicitar entrega a domicílio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#c40278] px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Solicitar Entrega</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stores;
