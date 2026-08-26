import { MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Location() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FVisite%20Nossa%20Loja.jpg"
              alt="Visite Nossa Loja"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-[#e8221a]" />
              <span className="text-[#253579] font-semibold text-sm uppercase tracking-wider">
                Localização
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Visite Nossa <span className="text-[#e8221a]">Loja</span>
            </h2>
            <div className="w-20 h-1 bg-[#e8221a]"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Conheça de perto a variedade de nossos produtos.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Localização Privilegiada
              </h3>
              <p className="text-gray-700 mb-4">
                Fácil acesso para todos os moradores de Camaçari.
              </p>
              <p className="text-gray-600">
                Rodovia da BA-531 - Via Abrantes - Cascalheira, S/N, Loteamento Montenegro
                - Camaçari/BA/42.812-168
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#253579] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1d2958] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
