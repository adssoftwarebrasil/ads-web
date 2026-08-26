import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-24"
      style={{
        background: 'linear-gradient(135deg, rgb(150, 1, 0), rgb(100, 0, 0))',
      }}
    >
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Contato
          </h2>
          <p className="text-[rgb(235,185,3)] text-lg">
            Entre em contato conosco
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="animate-on-scroll text-white space-y-8">
            <div className="bg-[rgba(235,185,3,0.2)] border-2 border-[rgb(235,185,3)] rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="inline-block bg-[rgb(235,185,3)] rounded-full p-4 mb-4">
                <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[rgb(150,1,0)]">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Trabalhamos Apenas com Delivery
              </h3>
              <p className="text-white text-lg mb-6">
                Entregamos pizza quentinha direto na sua casa!
              </p>
              <a
                href="https://wa.me/5534996450016"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-xl hover:scale-105 hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>
                Fazer Pedido pelo WhatsApp
              </a>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone
                    size={24}
                    className="text-[rgb(235,185,3)] flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/5534996450016"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[rgb(235,185,3)] transition-colors"
                    >
                      (34) 99645-0016
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail
                    size={24}
                    className="text-[rgb(235,185,3)] flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:roselicastro49@gmail.com"
                      className="hover:text-[rgb(235,185,3)] transition-colors"
                    >
                      roselicastro49@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin
                    size={24}
                    className="text-[rgb(235,185,3)] flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">Região de Entrega</h4>
                    <p>Tubalina e proximidades</p>
                    <p>Uberlândia - MG</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 backdrop-blur-sm text-center">
              <h4 className="font-semibold text-lg mb-3">
                Horário de Funcionamento
              </h4>
              <p className="text-[rgb(235,185,3)] text-xl font-bold">
                Segunda a Domingo
              </p>
              <p className="text-2xl font-bold mt-2">18:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
