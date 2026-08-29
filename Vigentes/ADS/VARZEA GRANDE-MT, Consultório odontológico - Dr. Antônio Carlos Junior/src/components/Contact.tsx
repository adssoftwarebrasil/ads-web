import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5565996610607?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

const INFO = [
  {
    icon: MapPin,
    label: 'Endereço',
    lines: ['Av. Couto Magalhães, Nº 2277', 'Edifício Edenever, 4º Andar — Sala 402', 'Centro, Várzea Grande — MT'],
  },
  {
    icon: Phone,
    label: 'Telefones',
    lines: ['(65) 3026-3254', '(65) 99661-0607 (WhatsApp)'],
  },
  {
    icon: Mail,
    label: 'E-mail',
    lines: ['juniormassarioli@hotmail.com'],
  },
  {
    icon: Clock,
    label: 'Horário de Funcionamento',
    lines: ['Segunda a Sexta', '08h00 às 11h30 | 14h00 às 17h30'],
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#f0f7f6]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-animate">
          <span className="inline-block text-[#32A19A] text-sm font-semibold tracking-widest uppercase mb-3">
            Fale Conosco
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Agende sua Consulta
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Estamos prontos para cuidar do seu sorriso. Entre em contato e marque sua avaliação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5 section-animate">
            {INFO.map(({ icon: Icon, label, lines }) => (
              <div
                key={label}
                className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-[#32A19A]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#32A19A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#32A19A] uppercase tracking-wide mb-1">
                    {label}
                  </div>
                  {lines.map((line) => (
                    <div key={line} className="text-gray-700 text-sm">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#32A19A] hover:bg-[#217a74] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-2"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 section-animate rounded-3xl overflow-hidden shadow-xl border border-gray-200 min-h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.9331610560125!2d-56.1402283!3d-15.648547299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dad95902ebfcb%3A0xb686d6a181ff0a3!2sConsult%C3%B3rio%20odontol%C3%B3gico%20-%20Dr.%20Ant%C3%B4nio%20Carlos%20Junior!5e0!3m2!1spt-BR!2sbr!4v1775670720307!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
