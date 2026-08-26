import { useState } from 'react';
import { Send } from 'lucide-react';

const cityOptions = [
  'Acará', 'Ananindeua', 'Barcarena', 'Belém', 'Benevides', 'Capitão Poço',
  'Castanhal', 'Icoaraci', 'Ilha do Marajó', 'Mãe do Rio', 'Marituba',
  'Mosqueiro', 'Outeiro', 'Paragominas', 'Quatro Bocas', 'Salinas', 'Santa Maria', 'Outra',
];

const equipmentOptions = [
  'Caminhão Munck', 'Guindaste 30t', 'Guindaste 70t', 'Guindaste 80t', 'Guindaste 100t',
  'Guindaste 160t', 'Guindaste 220t', 'Guindaste 250t', 'Guindaste 300t',
  'Carreta 3 Eixos', 'Carreta 4 Eixos', 'Não sei / Preciso de orientação',
];

const referralOptions = ['Google', 'Instagram', 'Facebook', 'Indicação', 'Outro'];

export default function Quote() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '', equipment: '',
    date: '', description: '', referral: '', acceptTerms: false,
  });

  const update = (field: string, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      '*Solicitação de Orçamento - Force Locações*',
      '',
      `*Nome:* ${form.name}`,
      `*Telefone/WhatsApp:* ${form.phone}`,
      `*E-mail:* ${form.email}`,
      `*Cidade:* ${form.city}`,
      `*Equipamento:* ${form.equipment}`,
      `*Data Necessária:* ${form.date}`,
      `*Descrição:* ${form.description}`,
    ];
    if (form.referral) lines.push(`*Como nos conheceu:* ${form.referral}`);
    const url = `https://wa.me/5591985785150?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="orcamento" className="py-20 bg-force-blue">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Solicite Seu Orçamento Gratuito
        </h2>
        <p className="text-xl text-center text-force-yellow mb-12">
          Resposta rápida via WhatsApp | Vistoria técnica sem custo
        </p>
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-force-blue font-semibold mb-2">Nome Completo *</label>
              <input type="text" id="name" name="name" placeholder="Seu nome completo" value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-force-blue font-semibold mb-2">Telefone/WhatsApp *</label>
              <input type="tel" id="phone" name="phone" placeholder="(91) 98578-5150" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow" />
            </div>
            <div>
              <label htmlFor="email" className="block text-force-blue font-semibold mb-2">E-mail *</label>
              <input type="email" id="email" name="email" placeholder="seu@email.com.br" value={form.email} onChange={(e) => update('email', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow" />
            </div>
            <div>
              <label htmlFor="city" className="block text-force-blue font-semibold mb-2">Cidade *</label>
              <select id="city" name="city" value={form.city} onChange={(e) => update('city', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow">
                <option value="">Selecione sua cidade</option>
                {cityOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="equipment" className="block text-force-blue font-semibold mb-2">Tipo de Equipamento *</label>
              <select id="equipment" name="equipment" value={form.equipment} onChange={(e) => update('equipment', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow">
                <option value="">Selecione o equipamento</option>
                {equipmentOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-force-blue font-semibold mb-2">Data Necessária *</label>
              <input type="date" id="date" name="date" value={form.date} onChange={(e) => update('date', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow" />
            </div>
            <div>
              <label htmlFor="description" className="block text-force-blue font-semibold mb-2">Descrição do Serviço * (mínimo 50 caracteres)</label>
              <textarea id="description" name="description" rows={5} placeholder="Descreva o tipo de carga, local, altura, peso aproximado e outras informações importantes..." value={form.description} onChange={(e) => update('description', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow"></textarea>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500 ml-auto">{form.description.length} caracteres</p>
              </div>
            </div>
            <div>
              <label htmlFor="referral" className="block text-force-blue font-semibold mb-2">Como nos conheceu? (opcional)</label>
              <select id="referral" name="referral" value={form.referral} onChange={(e) => update('referral', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-force-yellow">
                <option value="">Selecione uma opção</option>
                {referralOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="flex items-start space-x-3">
                <input type="checkbox" name="acceptTerms" checked={form.acceptTerms} onChange={(e) => update('acceptTerms', e.target.checked)} className="mt-1 w-5 h-5 text-force-blue" />
                <span className="text-force-gray text-sm">Li e aceito a política de privacidade *</span>
              </label>
            </div>
            <button type="submit" className="w-full bg-force-yellow text-force-blue py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <Send className="w-6 h-6" />
              <span>ENVIAR ORÇAMENTO VIA WHATSAPP</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
