import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0072BA] font-bold text-sm tracking-widest uppercase mb-4">Newsletter</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#004688] mb-6">
              Fique Por Dentro das Novidades
            </h2>

            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#0072BA] to-transparent mx-auto mb-6"></div>

            <p className="text-xl text-gray-600 font-medium">
              Cadastre seu e-mail e receba informações sobre ofertas, lançamentos e novidades em equipamentos.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-8 py-5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0072BA] text-lg transition-colors bg-gray-50 focus:bg-white"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0072BA] to-[#004E9C] text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 whitespace-nowrap"
              >
                <Send size={22} />
                Cadastrar
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                <p className="text-green-700 font-bold text-center">
                  E-mail cadastrado com sucesso! Obrigado.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
