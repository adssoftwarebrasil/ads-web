import { MapPin, Store } from 'lucide-react';

const areas = ['Piedade', 'Candeias', 'Barra de Jangada', 'Pontezinha', 'Comportas'];

export default function Coverage() {
  return (
    <section id="coverage">
      <section id="cobertura" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">Conectamos você a</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#FA6F2C] mb-16">comunidades e ideias!</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#FA6F2C] to-[#E85E1B] rounded-3xl p-8 shadow-2xl text-white">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Área de Cobertura</h3>
              <div className="text-xl mb-6 leading-relaxed space-y-2">
                {areas.map((a) => (
                  <p key={a}>
                    <strong>{a}</strong>
                  </p>
                ))}
              </div>
              <p className="text-lg opacity-90">Levando internet de qualidade para toda a região!</p>
            </div>
            <div className="bg-white border-4 border-[#FA6F2C] rounded-3xl p-8 shadow-2xl">
              <Store className="w-12 h-12 text-[#FA6F2C] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Loja</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Multi Shopping Sul</strong>
                <br />
                Loja 236
                <br />
                Barra de Jangada
              </p>
            </div>
          </div>
          <div className="text-center bg-gray-50 rounded-3xl p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Entre em contato conosco</h3>
            <a
              href="https://wa.me/5581971078555?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20You%20Connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FA6F2C] hover:bg-[#E85E1B] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              FALAR COM A GENTE
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
