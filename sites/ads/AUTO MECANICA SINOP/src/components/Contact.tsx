import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from '../lib/whatsapp';

const serviceOptions = [
  'Alinhamento e Balanceamento',
  'Suspensão Geral',
  'Motor, Câmbio e Diferencial',
  'Injeção Eletrônica',
  'Troca de Óleo e Filtros',
  'Revisão Preventiva',
  'Outro serviço',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (service) text += ` Tenho interesse no serviço: ${service}.`;
    if (phone) text += ` Meu telefone: ${phone}.`;
    if (message) text += ` ${message}`;
    const url = `https://wa.me/556699163832?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="section-title mb-4">
            Entre em Contato e <span className="text-brand-blue">Agende seu Serviço</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp com seu orçamento sem compromisso.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form onSubmit={handleSubmit} className="bg-brand-gray rounded-2xl p-8 shadow-md">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="João da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(66) 99999-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-brand-dark mb-2">Serviço Desejado</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none"
                >
                  <option value="">Selecione um serviço...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-dark mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Descreva o problema ou serviço que você precisa..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                <WhatsAppIcon size={20} />
                Enviar pelo WhatsApp
                <Send size={18} />
              </button>
              <p className="text-xs text-center text-brand-dark-light mt-3">
                Você será redirecionado para o WhatsApp com sua mensagem já preenchida.
              </p>
            </form>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 p-5 bg-brand-gray rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm mb-1">Endereço</p>
                <p className="text-brand-dark-light text-sm">Av. dos Jacarandás, 165</p>
                <p className="text-brand-dark-light text-sm">Jardim Jacarandas, Sinop – MT</p>
                <p className="text-brand-dark-light text-sm">CEP: 78557-727</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-brand-gray rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm mb-1">Telefone / WhatsApp</p>
                <p className="text-brand-dark-light text-sm">(66) 99916-3832</p>
                <p className="text-brand-dark-light text-sm">(66) 99943-2606</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-brand-gray rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm mb-1">Horário de Funcionamento</p>
                <p className="text-brand-dark-light text-sm">Segunda a Sexta:</p>
                <p className="text-brand-dark-light text-sm">07h30 às 11h30 | 13h às 18h</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22085.773499072387!2d-55.52040718778802!3d-11.88766865789125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fce86f62fb9%3A0x1a47af23654b0bfe!2sAMS%20Auto%20Mec%C3%A2nica%20Sinop!5e0!3m2!1spt-BR!2sbr!4v1771606129005!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMS Auto Mecânica no Google Maps"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
