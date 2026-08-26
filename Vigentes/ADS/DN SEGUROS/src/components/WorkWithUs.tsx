import { useState } from 'react';
import { Briefcase, User, GraduationCap, MessageSquare, Send } from 'lucide-react';

const areas = [
  'Comercial / Vendas',
  'Administrativo',
  'Atendimento ao Cliente',
  'Sinistro',
  'Outros',
];

export default function WorkWithUs() {
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de trabalhar na DN Seguros.%0A%0A` +
      `*Nome:* ${name}%0A` +
      `*Área de Interesse:* ${area}%0A` +
      `*Resumo de Experiência:* ${experience}`;
    window.open(`http://wa.me/5584991089072?text=${message}`, '_blank');
  };

  return (
    <section id="trabalhe-conosco" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <div className="inline-flex p-3 rounded-2xl bg-brand-red/10 text-brand-red mb-4">
              <Briefcase size={28} className="lucide lucide-briefcase " />
            </div>
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Trabalhe Conosco</h2>
            <p className="text-gray-600">
              Quer fazer parte do nosso time? Preencha os dados abaixo e envie seu currículo via WhatsApp.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <User size={16} className="lucide lucide-user text-brand-red" /> Nome Completo
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <GraduationCap size={16} className="lucide lucide-graduation-cap text-brand-red" /> Área de
                  Interesse
                </label>
                <select
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Selecione uma área</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <MessageSquare size={16} className="lucide lucide-message-square text-brand-red" /> Resumo de
                Experiência
              </label>
              <textarea
                required
                rows={4}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                placeholder="Conte um pouco sobre sua trajetória profissional..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group"
            >
              Enviar Currículo via WhatsApp
              <Send
                size={18}
                className="lucide lucide-send group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              * Ao clicar, você será redirecionado para o WhatsApp para anexar seu arquivo de currículo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
