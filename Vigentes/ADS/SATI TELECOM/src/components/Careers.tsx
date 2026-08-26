import { useState } from 'react';
import {
  Star,
  Users,
  Award,
  Rocket,
  TrendingUp,
  Heart,
  CheckCircle2,
  MessageSquare,
  User,
  Mail,
  Phone,
  Briefcase,
  Upload,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_NUMBER = '554933613600';

type Reason = { Icon: LucideIcon; iconClass: string; grad: string; title: string; text: string };
const reasons: Reason[] = [
  {
    Icon: Award,
    iconClass: 'lucide-award',
    grad: 'from-amber-500 to-yellow-600',
    title: 'Empresa Sólida',
    text: 'Quase 40 anos de mercado e crescimento constante',
  },
  {
    Icon: Rocket,
    iconClass: 'lucide-rocket',
    grad: 'from-blue-500 to-indigo-600',
    title: 'Ambiente Inovador',
    text: 'Tecnologia de ponta e projetos desafiadores',
  },
  {
    Icon: TrendingUp,
    iconClass: 'lucide-trending-up',
    grad: 'from-green-500 to-emerald-600',
    title: 'Crescimento Profissional',
    text: 'Oportunidades reais de desenvolvimento de carreira',
  },
  {
    Icon: Heart,
    iconClass: 'lucide-heart',
    grad: 'from-[#bc0000] to-red-600',
    title: 'Cultura de Respeito',
    text: 'Transparência, ética e valorização das pessoas',
  },
];

const benefits = ['Vale alimentação/refeição', 'Treinamentos e capacitações', 'Ambiente colaborativo'];

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      [
        '*Candidatura - Sati Telecom*',
        `Nome: ${form.name}`,
        `E-mail: ${form.email}`,
        `Telefone: ${form.phone}`,
        `Área de Interesse: ${form.area}`,
      ].join('\n')
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="careers"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#3d009e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#bc0000] rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#3d009e]/10 to-[#bc0000]/10 px-4 py-2 rounded-full mb-6">
            <Star className="lucide lucide-star w-5 h-5 text-[#3d009e] mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#3d009e] to-[#bc0000] text-transparent bg-clip-text">
              Carreiras
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Faça Parte da Nossa Equipe
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Valorizamos profissionais comprometidos e apaixonados por tecnologia
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                    <Users className="lucide lucide-users w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">Por que trabalhar na Sati?</h3>
                    <p className="text-white/80 text-sm">Faça a diferença conosco</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Junte-se a um time que faz a diferença no setor de telecomunicações há quase 40 anos
                </p>
                <div className="h-1 w-24 bg-white/30 rounded-full"></div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${r.grad} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${r.grad} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <r.Icon className={`lucide ${r.iconClass} w-6 h-6 text-white`} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{r.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-green-500 mr-2" />
                Benefícios e Vantagens
              </h4>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center text-sm text-gray-700 bg-gradient-to-r from-gray-50 to-transparent p-3 rounded-lg border-l-4 border-[#3d009e]"
                  >
                    <div className="w-2 h-2 bg-[#3d009e] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="lucide lucide-message-square w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-3 leading-relaxed">
                    "Trabalhar na Sati é fazer parte de uma equipe que valoriza a inovação, o crescimento profissional e a qualidade de vida."
                  </p>
                  <p className="text-sm font-semibold text-[#3d009e]">Equipe Sati Telecom</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 lg:sticky lg:top-24">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Candidate-se Agora</h3>
              <p className="text-gray-600">Preencha o formulário e dê o primeiro passo para sua nova carreira</p>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="career-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="lucide lucide-user absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="career-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="career-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="lucide lucide-mail absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="career-email"
                      name="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="career-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="lucide lucide-phone absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="career-phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                  Área de Interesse *
                </label>
                <div className="relative">
                  <Briefcase className="lucide lucide-briefcase absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                  <select
                    id="area"
                    name="area"
                    required
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full pl-12 pr-10 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Selecione uma área</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Suporte Técnico">Suporte Técnico</option>
                    <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                    <option value="Atendimento">Atendimento</option>
                    <option value="Administrativo">Administrativo</option>
                    <option value="Outra">Outra</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Upload className="lucide lucide-upload w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-blue-900 mb-1">Anexar Currículo</p>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Após enviar o formulário, você poderá enviar seu currículo diretamente via WhatsApp
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-[#3d009e] to-[#5a1abd] text-white py-4 rounded-xl font-bold text-lg hover:from-[#2a0070] hover:to-[#3d009e] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Enviar Candidatura
                  <MessageSquare className="lucide lucide-message-square w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#bc0000] to-[#d10000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Ao enviar, você será redirecionado para o WhatsApp da Sati
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
