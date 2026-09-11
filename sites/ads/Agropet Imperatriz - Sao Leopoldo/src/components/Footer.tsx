import { MapPin, Phone } from 'lucide-react';

const units = [
  {
    name: 'Unidade São Leopoldo',
    address: 'Av. Imperatriz Leopoldina, 2121 - Pinheiro, São Leopoldo - RS',
    phone: '(51) 3589-1271 / (51) 98996-3719',
  },
  {
    name: 'Unidade Ivoti',
    address: 'Av. Capivara, 1465 - Jardim Buhler, Ivoti - RS',
    phone: '(51) 3563-3838 / (51) 93505-5810',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#005098] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Agropet%20Imperatriz%2Flogo.png"
              alt="Agropet Imperatriz"
              className="h-16 w-auto mb-4 bg-white p-2 rounded-lg"
            />
            <p className="text-gray-200 leading-relaxed">
              Referência em produtos e serviços para pets desde 2009. Cuidando do bem-estar do seu
              animal de estimação com qualidade e carinho.
            </p>
          </div>
          {units.map((u) => (
            <div key={u.name}>
              <h3 className="text-xl font-bold mb-4">{u.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin width={20} height={20} className="text-[#FD7500] flex-shrink-0 mt-1" />
                  <p className="text-gray-200 text-sm">{u.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone width={20} height={20} className="text-[#FD7500] flex-shrink-0" />
                  <p className="text-gray-200 text-sm">{u.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-200 text-sm">
            © 2026 Agropet Imperatriz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
