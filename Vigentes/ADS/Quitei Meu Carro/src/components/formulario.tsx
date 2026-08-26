import { useState } from 'react';
import { Car, Bike, Truck, Package, ChevronRight, ChevronLeft, TrendingDown, Shield, Clock, DollarSign, CreditCard, Hash, User, Phone, Mail, Check, Sparkles } from 'lucide-react';

type FormData = {
  vehicleType: string;
  goal: string;
  bank: string;
  installmentValue: string;
  remainingInstallments: string;
  name: string;
  phone: string;
  email: string;
};

const vehicleOptions = [
  { value: 'car', label: 'Tenho um Carro Financiado', icon: Car, color: 'from-emerald-500 to-teal-500' },
  { value: 'motorcycle', label: 'Tenho uma Moto Financiada', icon: Bike, color: 'from-teal-500 to-cyan-500' },
  { value: 'truck', label: 'Tenho um Caminhão Financiado', icon: Truck, color: 'from-cyan-500 to-blue-500' },
  { value: 'other', label: 'Tenho Outro Veículo Financiado', icon: Package, color: 'from-blue-500 to-indigo-500' }
];

const goalOptions = [
  { value: 'reduce', label: 'Reduzir o Valor das Parcelas', icon: TrendingDown, color: 'emerald' },
  { value: 'payoff', label: 'Quitação com até 80% de desconto', icon: DollarSign, color: 'teal' },
  { value: 'avoid', label: 'Evitar a Busca e Apreensão', icon: Shield, color: 'cyan' },
  { value: 'all', label: 'Todas as anteriores', icon: Check, color: 'blue' }
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    vehicleType: '',
    goal: '',
    bank: '',
    installmentValue: '',
    remainingInstallments: '',
    name: '',
    phone: '',
    email: ''
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
    }
    return value;
  };

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const amount = parseFloat(numbers) / 100;
    return amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.vehicleType !== '';
      case 2:
        return formData.goal !== '';
      case 3:
        return formData.bank !== '' && formData.installmentValue !== '' && formData.remainingInstallments !== '';
      case 4:
        return formData.name !== '' && formData.phone !== '' && formData.email !== '';
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    const goalLabels: { [key: string]: string } = {
      reduce: 'Reduzir o Valor das Parcelas',
      payoff: 'Quitação com até 80% de desconto',
      avoid: 'Evitar a Busca e Apreensão',
      all: 'Todas as anteriores'
    };

    const vehicleLabels: { [key: string]: string } = {
      car: 'Carro',
      motorcycle: 'Moto',
      truck: 'Caminhão',
      other: 'Outro Veículo'
    };

    const messageParts = [
      '🚗 *Nova Simulação - Quite Meu Carro*',
      '',
      '━━━━━━━━━━━━━━━━━━━━',
      '📋 *DADOS DO FINANCIAMENTO*',
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      `🚙 *Tipo de Veículo:*`,
      `${vehicleLabels[formData.vehicleType]}`,
      '',
      `🎯 *Objetivo:*`,
      `${goalLabels[formData.goal]}`,
      '',
      `🏦 *Banco:*`,
      `${formData.bank}`,
      '',
      `💰 *Valor da Parcela:*`,
      `R$ ${formData.installmentValue}`,
      '',
      `📊 *Parcelas Restantes:*`,
      `${formData.remainingInstallments} parcelas`,
      '',
      '━━━━━━━━━━━━━━━━━━━━',
      '👤 *DADOS PESSOAIS*',
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      `📝 *Nome:*`,
      `${formData.name}`,
      '',
      `📱 *Telefone:*`,
      `${formData.phone}`,
      '',
      `📧 *E-mail:*`,
      `${formData.email}`,
      '',
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      '✅ Aguardo retorno para análise detalhada!',
      '',
      '_Mensagem enviada via site Quite Meu Carro_ 🎯'
    ];

    const message = messageParts.join('%0A');
    window.open(`https://wa.me/5508005552569?text=${message}`, '_blank');

    setTimeout(() => {
      setFormData({
        vehicleType: '',
        goal: '',
        bank: '',
        installmentValue: '',
        remainingInstallments: '',
        name: '',
        phone: '',
        email: ''
      });
      setStep(1);
    }, 1000);
  };

  return (
    <section id="simulador" className="relative py-12 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-emerald-200 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
            <Sparkles size={14} className="text-emerald-600 md:w-4 md:h-4" />
            <span className="text-slate-700">Simulação em {totalSteps} Passos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-4">
            Faça sua simulação
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              gratuita
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base lg:text-lg px-4">
            Reduza suas parcelas e quite seu veículo com desconto!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs md:text-sm font-semibold text-slate-700">
              Passo {step} de {totalSteps}
            </span>
            <span className="text-xs md:text-sm font-bold text-emerald-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 md:h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
          <div className="p-6 md:p-10">
            {/* Step 1: Vehicle Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                    1. QUAL O SEU FINANCIAMENTO?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {vehicleOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = formData.vehicleType === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => setFormData({ ...formData, vehicleType: option.value })}
                        className={`group relative p-4 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all duration-300 text-left ${
                          isSelected
                            ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg scale-[1.02]'
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center transition-transform ${
                            isSelected ? 'scale-110' : 'group-hover:scale-105'
                          }`}>
                            <Icon size={20} className="text-white md:w-6 md:h-6" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <span className={`block text-sm md:text-base font-semibold ${
                              isSelected ? 'text-emerald-700' : 'text-slate-900'
                            }`}>
                              {option.label}
                            </span>
                          </div>
                          {isSelected && (
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                              <Check size={14} className="text-white" strokeWidth={3} />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Goal */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                    2. O QUE VOCÊ PROCURA?
                  </h3>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {goalOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = formData.goal === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => setFormData({ ...formData, goal: option.value })}
                        className={`group w-full p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all duration-300 text-left ${
                          isSelected
                            ? 'border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg scale-[1.01]'
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${option.color}-100 flex items-center justify-center transition-transform ${
                            isSelected ? 'scale-110' : 'group-hover:scale-105'
                          }`}>
                            <Icon size={20} className={`text-${option.color}-600 md:w-6 md:h-6`} strokeWidth={2.5} />
                          </div>
                          <span className={`flex-1 text-sm md:text-base font-semibold ${
                            isSelected ? 'text-emerald-700' : 'text-slate-900'
                          }`}>
                            {option.label}
                          </span>
                          {isSelected && (
                            <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-emerald-500 flex items-center justify-center">
                              <Check size={14} className="text-white md:w-4 md:h-4" strokeWidth={3} />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Financial Details */}
            {step === 3 && (
              <div className="space-y-5 md:space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                    3. DETALHES DO FINANCIAMENTO
                  </h3>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <CreditCard size={14} className="text-emerald-600 md:w-4 md:h-4" />
                    Qual banco de financiamento?
                  </label>
                  <input
                    type="text"
                    value={formData.bank}
                    onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                    placeholder="Nome do banco"
                    className="w-full px-3.5 md:px-4 py-2.5 md:py-3.5 bg-slate-50 border-2 border-slate-200 rounded-lg md:rounded-xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <DollarSign size={14} className="text-emerald-600 md:w-4 md:h-4" />
                    Valor da parcela?
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 md:left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold text-sm md:text-base">
                      R$
                    </span>
                    <input
                      type="text"
                      value={formData.installmentValue}
                      onChange={(e) => setFormData({ ...formData, installmentValue: formatCurrency(e.target.value) })}
                      placeholder="0,00"
                      className="w-full pl-10 md:pl-12 pr-3.5 md:pr-4 py-2.5 md:py-3.5 bg-slate-50 border-2 border-slate-200 rounded-lg md:rounded-xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Hash size={14} className="text-emerald-600 md:w-4 md:h-4" />
                    Quantidade de parcelas restantes?
                  </label>
                  <input
                    type="number"
                    value={formData.remainingInstallments}
                    onChange={(e) => setFormData({ ...formData, remainingInstallments: e.target.value })}
                    placeholder="Ex: 24"
                    className="w-full px-3.5 md:px-4 py-2.5 md:py-3.5 bg-slate-50 border-2 border-slate-200 rounded-lg md:rounded-xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Personal Info */}
            {step === 4 && (
              <div className="space-y-5 md:space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                    4. SEUS DADOS PESSOAIS
                  </h3>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <User size={14} className="text-emerald-600 md:w-4 md:h-4" />
                    Qual seu nome?
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nome completo"
                    className="w-full px-3.5 md:px-4 py-2.5 md:py-3.5 bg-slate-50 border-2 border-slate-200 rounded-lg md:rounded-xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Phone size={14} className="text-emerald-600 md:w-4 md:h-4" />
                    Número de telefone (WhatsApp com DDD)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                    placeholder="(XX) XXXXX-XXXX"
                    maxLength={15}
                    className="w-full px-3.5 md:px-4 py-2.5 md:py-3.5 bg-slate-50 border-2 border-slate-200 rounded-lg md:rounded-xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Mail size={14} className="text-emerald-600 md:w-4 md:h-4" />
                    Informe seu e-mail:
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full px-3.5 md:px-4 py-2.5 md:py-3.5 bg-slate-50 border-2 border-slate-200 rounded-lg md:rounded-xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
                  />
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 md:p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-emerald-800 leading-relaxed">
                    🔒 Seus dados estão seguros e protegidos. Utilizamos criptografia de ponta a ponta.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="bg-slate-50 p-5 md:p-6 border-t-2 border-slate-200">
            <div className="flex gap-3 md:gap-4">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 px-5 py-2.5 md:py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={18} className="md:w-5 md:h-5" />
                  Anterior
                </button>
              )}
              
              {step < totalSteps ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 px-5 py-2.5 md:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:from-emerald-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                >
                  Próximo
                  <ChevronRight size={18} className="md:w-5 md:h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="flex-1 px-5 py-2.5 md:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:from-emerald-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                >
                  Enviar Simulação
                  <Check size={18} className="md:w-5 md:h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-emerald-600 md:w-4 md:h-4" />
            <span>Resposta em 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-emerald-600 md:w-4 md:h-4" />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={14} className="text-emerald-600 md:w-4 md:h-4" />
            <span>Sem compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
}

