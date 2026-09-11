import { useState } from 'react';
import { Mail, Clock, Send, MapPin, ChevronDown } from 'lucide-react';
import { COMPANY, BRANCHES } from '../data/constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  // Inicia com a primeira filial selecionada (Matriz)
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Olá! Me chamo *${form.name}*.\nTelefone: ${form.phone}\nE-mail: ${form.email}\n\n${form.message}`;
    
    // Usa o WhatsApp da filial selecionada dinamicamente
    const url = `https://wa.me/${selectedBranch.whatsapp}?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
    setSent(true);
    setForm({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-brand-orange font-bold text-sm tracking-widest uppercase mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Nossa equipe está pronta para ajudar você a encontrar as peças certas para o seu equipamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{COMPANY.hours}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Contato geral:{' '}
                    <a href={`mailto:${COMPANY.email.contact}`} className="text-brand-green font-medium hover:underline">
                      {COMPANY.email.contact}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    Currículos:{' '}
                    <a href={`mailto:${COMPANY.email.jobs}`} className="text-brand-green font-medium hover:underline">
                      {COMPANY.email.jobs}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-green-dark rounded-3xl p-8 text-white">
              <h3 className="font-bold text-lg mb-3">Redes Sociais</h3>
              <p className="text-white/70 text-sm mb-5">Siga a Só Agrícola e fique por dentro das novidades.</p>
              <div className="flex gap-3">
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Facebook
                </a>
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
            {sent && (
              <div className="mb-6 bg-brand-green/10 border border-brand-green/30 text-brand-green-dark font-semibold text-sm rounded-xl px-4 py-3">
                Mensagem enviada via WhatsApp!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Campo para escolher a filial */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Para qual unidade deseja enviar?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <select
                    value={selectedBranch.name}
                    onChange={(e) => {
                      const branch = BRANCHES.find(b => b.name === e.target.value);
                      if (branch) setSelectedBranch(branch);
                    }}
                    className="w-full appearance-none bg-white border border-gray-200 text-gray-800 py-3 pl-11 pr-10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all cursor-pointer"
                  >
                    {BRANCHES.map(branch => (
                      <option key={branch.name} value={branch.name}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <ChevronDown size={18} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(65) 99999-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Descreva o que você precisa..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg text-base"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}