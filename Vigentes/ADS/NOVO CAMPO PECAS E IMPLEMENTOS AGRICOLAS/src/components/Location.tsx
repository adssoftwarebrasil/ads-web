import { MapPin, Clock, Instagram, Navigation } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const otherUnits = [
  {
    title: 'Matriz - Dourados',
    mapTitle: 'Mapa Matriz - Dourados',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7657305.260431205!2d-56.846845332927245!3d-20.427431338227628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94890785343a8c51%3A0x7b7e138d3ba21ed3!2sNOVO%20CAMPO%20PE%C3%87AS%20E%20IMPLEMENTOS%20AGRICOLAS!5e0!3m2!1spt-BR!2sbr!4v1765300667505!5m2!1spt-BR!2sbr',
    address: 'Av. Weimar Gonçalves Torres, N° 5435, Vila São Francisco',
    maps:
      'http://maps.google.com/?q=Av.%20Weimar%20Gon%C3%A7alves%20Torres%2C%20N%C2%B0%205435%2C%20Vila%20S%C3%A3o%20Francisco',
  },
  {
    title: 'São Gabriel do Oeste',
    mapTitle: 'Mapa São Gabriel do Oeste',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.562967218149!2d-54.572927199999995!3d-19.3880672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9481a7989dda5495%3A0x404de024c365e5bd!2sR.%20Elvino%20R.%20Nogueira%2C%201869%20-%20Centro%2C%20S%C3%A3o%20Gabriel%20do%20Oeste%20-%20MS%2C%2079490-000!5e0!3m2!1spt-BR!2sbr!4v1765301041468!5m2!1spt-BR!2sbr',
    address: 'R. Elvinio Ramos Nogueira, N° 1869, Centro',
    maps:
      'http://maps.google.com/?q=R.%20Elvinio%20Ramos%20Nogueira%2C%20N%C2%B0%201869%2C%20Centro',
  },
  {
    title: 'Chapadão do Sul',
    mapTitle: 'Mapa Chapadão do Sul',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7657305.260431205!2d-56.846845332927245!3d-20.427431338227628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949d33ef569ab8cf%3A0x995bfc84813850eb!2sNovo%20Campo%20Pe%C3%A7as%20e%20Implementos%20Agr%C3%ADcolas!5e0!3m2!1spt-BR!2sbr!4v1765300403561!5m2!1spt-BR!2sbr',
    address: 'Av. Brasil, 924 - Espatódea',
    maps: 'http://maps.google.com/?q=Av.%20Brasil%2C%20924%20-%20Espat%C3%B3dea',
  },
  {
    title: 'R8 Agro Peças',
    mapTitle: 'Mapa R8 Agro Peças',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.2859332372127!2d-54.82631112470957!3d-22.229227479737723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a9b68e5bfbf1%3A0x31bc7ac16a4cdb81!2sR8%20Agro%20Pe%C3%A7as%20e%20Equipamentos%20Agr%C3%ADcolas!5e0!3m2!1spt-BR!2sbr!4v1765300147896!5m2!1spt-BR!2sbr',
    address: 'Av. Marcelino Pires, N° 540, Jardim Climax',
    maps:
      'http://maps.google.com/?q=Av.%20Marcelino%20Pires%2C%20N%C2%B0%20540%2C%20Jardim%20Climax',
  },
  {
    title: 'AGRIMEC',
    mapTitle: 'Mapa AGRIMEC',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2219.4169076600533!2d-55.1464461030977!3d-21.621736438558006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94880d92e9499ebb%3A0x9ed4e0e2d983230!2sGreen%20Ville%20Residence!5e0!3m2!1spt-BR!2sbr!4v1765301521038!5m2!1spt-BR!2sbr',
    address: 'Av. Germano Ballan N° 825, Green Ville',
    maps:
      'http://maps.google.com/?q=Av.%20Germano%20Ballan%20N%C2%B0%20825%2C%20Green%20Ville',
  },
];

export default function Location() {
  return (
    <section
      id="localizacao"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8D617]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="text-[#001F7A] font-semibold text-sm uppercase tracking-wider bg-[#001F7A]/10 px-4 py-2 rounded-full">
            Nossa Localização
          </span>
          <h2 className="text-4xl font-bold text-[#1A385C] mt-4 mb-3">
            Onde Estamos
          </h2>
          <p className="text-xl text-[#424242] mb-4">
            Visite nossa unidade em Rio Brilhante - MS
          </p>
          <div className="w-20 h-1 bg-[#F8D617] mx-auto"></div>
        </div>
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#F8D617]">
            <div className="relative h-96 md:h-[500px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.5612741217676!2d-54.63080853035972!3d-20.45512409881593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e636399f21d5%3A0x1943b2a144264bed!2sR.%20Benjamin%20Constant%2C%2069%20-%20Vila%20Planalto%2C%20Campo%20Grande%20-%20MS%2C%2079009-460!5e0!3m2!1spt-BR!2sbr!4v1765303686597!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Mapa Rio Brilhante"
                className="w-full h-full"
                style={{ border: '0px' }}
              ></iframe>
            </div>
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F8D617] to-[#e6c615] rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin
                    width={32}
                    height={32}
                    className="lucide lucide-map-pin text-[#1A385C]"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1A385C] mb-2">
                    Novo Campo Rio Brilhante
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></span>
                    <span className="text-[#4CAF50] font-semibold">
                      Aberto agora
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#001F7A]/5 to-[#4CAF50]/5 rounded-xl p-4 mb-6 border border-[#001F7A]/10">
                <p className="text-[#424242] text-sm">
                  <span className="font-bold text-[#1A385C]">CNPJ:</span>{' '}
                  52.551.799/0004-50
                </p>
                <p className="text-[#424242] text-xs mt-1">
                  Comércio a Varejo de Peças e Implementos Agrícolas
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#001F7A]/10 rounded-lg flex items-center justify-center">
                      <MapPin
                        width={20}
                        height={20}
                        className="lucide lucide-map-pin text-[#001F7A]"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#1A385C] font-bold mb-1">Endereço</h4>
                      <p className="text-[#424242] text-sm">
                        Rua Benjamin Constant, N° 69, Centro - Rio Brilhante -
                        MS, CEP: 79130-000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center">
                      <Clock
                        width={20}
                        height={20}
                        className="lucide lucide-clock text-[#4CAF50]"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#1A385C] font-bold mb-1">Horário</h4>
                      <p className="text-[#424242] text-sm">
                        Seg a Sex: 7h às 11h e 13h às 17h | Sáb: 7h às 11h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1fb855] transition-all hover:shadow-lg hover:scale-105">
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </button>
                <a
                  href="https://instagram.com/novocampo.dourados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-br from-[#E1306C] to-[#C13584] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Instagram
                    width={20}
                    height={20}
                    className="lucide lucide-instagram "
                  />
                  Instagram
                </a>
                <a
                  href="http://maps.google.com/?q=Rua%20Benjamin%20Constant%2C%20N%C2%B0%2069%2C%20Centro%20-%20Rio%20Brilhante%20-%20MS%2C%20CEP%3A%2079130-000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-[#4CAF50] text-[#4CAF50] px-8 py-4 rounded-xl font-bold hover:bg-[#4CAF50] hover:text-white transition-all"
                >
                  <Navigation
                    width={20}
                    height={20}
                    className="lucide lucide-navigation "
                  />
                  Rota
                </a>
              </div>
            </div>
            <div className="h-2 bg-gradient-to-r from-[#4CAF50] via-[#F8D617] to-[#001F7A]"></div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#1A385C] text-center mb-8">
            Outras Unidades
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {otherUnits.map((u) => (
              <div
                key={u.title}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-[#4CAF50] hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className="h-48 bg-gray-100">
                  <iframe
                    src={u.iframe}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    title={u.mapTitle}
                    style={{ border: '0px' }}
                  ></iframe>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-[#1A385C] mb-3 flex items-center gap-2">
                    <MapPin
                      width={18}
                      height={18}
                      className="lucide lucide-map-pin text-[#F8D617]"
                    />
                    {u.title}
                  </h4>
                  <div className="space-y-2 mb-4 text-sm text-[#424242]">
                    <p className="flex items-start gap-2">
                      <span>📍</span>
                      <span>{u.address}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock
                        width={14}
                        height={14}
                        className="lucide lucide-clock mt-0.5"
                      />
                      <span className="text-xs">
                        Seg a Sex: 7h-11h e 13h-17h | Sáb: 7h-11h
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold text-sm hover:bg-[#1fb855] transition-all">
                      <WhatsAppIcon className="w-4 h-4" />
                      WhatsApp
                    </button>
                    <a
                      href={u.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border-2 border-[#4CAF50] text-[#4CAF50] px-4 py-3 rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all"
                    >
                      <Navigation
                        width={18}
                        height={18}
                        className="lucide lucide-navigation "
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center bg-gradient-to-r from-[#1A385C] via-[#001F7A] to-[#1A385C] rounded-2xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-3">Venha Nos Visitar!</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você com as melhores peças e
            implementos agrícolas
          </p>
          <button className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1fb855] transition-all hover:shadow-2xl hover:scale-105">
            <WhatsAppIcon className="w-6 h-6" />
            Escolher Unidade
          </button>
        </div>
      </div>
    </section>
  );
}
