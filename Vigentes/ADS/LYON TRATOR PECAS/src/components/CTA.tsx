import { MessageCircle, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  // CONFIGURAÇÃO DAS FILIAIS
  // Pode manter os números iguais para teste, agora vai funcionar a seleção visual.
  const branches = [
    { id: 'novo-progresso', name: 'Novo Progresso - PA (Principal)', number: '5595984303773' },
    { id: 'boa-vista', name: 'Boa Vista - RR', number: '5595984303773' },
    { id: 'itaituba', name: 'Itaituba - PA', number: '5595984303773' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '', 
    branchId: branches[0].id, // Agora controlamos pelo ID e não pelo número
    product: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Busca a filial selecionada baseada no ID
    const selectedBranch = branches.find(b => b.id === formData.branchId);
    
    // Se por algum motivo não achar, usa a primeira como fallback
    const targetBranch = selectedBranch || branches[0];

    const message = `Olá! Meu nome é *${formData.name}*.\nMeu WhatsApp é: ${formData.whatsapp}\nGostaria de um orçamento para a unidade de *${targetBranch.name}*.\n\n*Item de interesse:* ${formData.product}`;
    
    window.open(
      `https://wa.me/${targetBranch.number}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#fbba00] via-[#ffd04d] to-[#ff9500] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1a1a18 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a18] mb-4">
              Precisa de Peças para Máquinas Pesadas?
            </h2>
            <p className="text-[#1a1a18] text-lg font-medium">
              Selecione a unidade mais próxima e receba atendimento especializado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cartão do Formulário */}
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1a1a18] mb-6">Solicitar Cotação</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Seleção de Filial */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-[#fbba00]" />
                    Selecione a Unidade
                  </label>
                  <div className="relative">
                    <select
                      value={formData.branchId}
                      onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fbba00] focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                    >
                      {branches.map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {branch.name}
                        </option>
                      ))}
                    </select>
                    {/* Seta customizada para o select */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Seu Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fbba00] focus:outline-none transition-colors"
                    placeholder="Nome completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Seu WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fbba00] focus:outline-none transition-colors"
                    placeholder="(DD) 90000-0000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Peça / Máquina</label>
                  <textarea
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fbba00] focus:outline-none transition-colors resize-none"
                    rows={3}
                    placeholder="Descreva a peça ou equipamento..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1a18] text-white py-4 rounded-lg font-bold hover:bg-[#2a2a28] transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Solicitação
                </button>
              </form>
            </div>

            {/* Cartão Lateral (Info) */}
            <div className="flex flex-col justify-center items-center text-center bg-[#1a1a18] rounded-xl shadow-2xl p-8">
              <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mb-6 animate-pulse">
                <MessageCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Atendimento Ágil</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nossa equipe está pronta para identificar a peça correta e enviar sua cotação em poucos minutos.
              </p>
              
              <div className="w-full bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                <p className="text-[#fbba00] font-bold text-sm uppercase tracking-wider mb-2">Horário de Atendimento</p>
                <p className="text-white text-lg font-semibold">Segunda a Sexta</p>
                <p className="text-gray-300">07:30 às 18:00</p>
              </div>

              <div className="mt-8 text-gray-400 text-sm">
                Envie o formulário ao lado e você será redirecionado automaticamente para o WhatsApp da unidade escolhida.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}