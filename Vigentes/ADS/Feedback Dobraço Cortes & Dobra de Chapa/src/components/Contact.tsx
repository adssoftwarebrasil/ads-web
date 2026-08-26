import { useState } from 'react';
import { Send, Phone } from 'lucide-react';

const services = [
  'Corte a Laser',
  'Dobra de Chapas',
  'Estruturas Metálicas',
  'Telhas de Zinco',
  'Telhas Isotérmicas',
  'Perfis e Metalon',
  'Outro',
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `Nome: ${nome}%0A` +
      `Telefone: ${telefone}%0A` +
      `Serviço de Interesse: ${servico}`;
    window.open(`https://wa.me/556134886060?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-[rgb(139,0,2)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.03) 10px, rgba(255, 255, 255, 0.03) 20px)',
          }}
        ></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            PRONTO PARA INICIAR SEU PROJETO?
          </h2>
          <p className="text-lg sm:text-xl text-white text-opacity-90">
            Orçamento gratuito • Atendimento rápido • Qualidade garantida
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 md:p-10 mb-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Seu Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="px-4 py-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[rgb(139,0,2)] transition-all text-base"
            />
            <input
              type="tel"
              placeholder="Seu Telefone"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="px-4 py-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[rgb(139,0,2)] transition-all text-base"
            />
            <select
              required
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              className="px-4 py-4 rounded-lg bg-white text-black focus:outline-none focus:ring-4 focus:ring-[rgb(139,0,2)] transition-all text-base"
            >
              <option value="">Serviço de Interesse</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(139,0,2)] text-white px-6 py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(180,0,3)] transition-all flex items-center justify-center gap-3 transform hover:scale-105 shadow-xl"
          >
            <Send width={20} height={20} />
            ENVIAR SOLICITAÇÃO
          </button>
        </form>
        <div className="text-center">
          <p className="text-white text-xl sm:text-2xl font-bold mb-8">OU FALE CONOSCO AGORA:</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="https://wa.me/556134886060"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP
            </a>
            <a
              href="tel:6134886060"
              className="bg-[rgb(139,0,2)] text-white px-10 py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(180,0,3)] transition-all flex items-center justify-center gap-3 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              <Phone width={24} height={24} />
              LIGAR AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
