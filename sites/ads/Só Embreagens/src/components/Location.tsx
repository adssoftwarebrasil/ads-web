import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const INFO = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'R. João Pedro Moreira de Carvalho, 5886 — Jardim Vila Rica, Sinop - MT',
  },
  {
    icon: Clock,
    label: 'Horário de Funcionamento',
    value: 'Seg–Sex: 07:00–11:30 / 13:00–18:00\nSábado: 07:00–13:00',
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(66) 9 9659-5500',
    href: 'tel:5566996595500',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'advalinenarzzetti@gmail.com',
    href: 'mailto:advalinenarzzetti@gmail.com',
  },
];

export default function Location() {
  return (
    <section
      id="localizacao"
      className="py-20 md:py-28"
      style={{ background: 'rgb(18, 14, 17)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(234,34,37,0.12)',
              color: 'rgb(234, 34, 37)',
              border: '1px solid rgba(234,34,37,0.25)',
            }}
          >
            Onde Estamos
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black"
            style={{ color: '#fff' }}
          >
            Localização &{' '}
            <span style={{ color: 'rgb(234, 34, 37)' }}>Contato</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden" style={{ minHeight: 380 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.152112988751!2d-55.48773602494249!3d-11.824618188395167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93082b8d837abe07%3A0xd0a0182b04068228!2sSO%20EMBREAGENS!5e0!3m2!1spt-BR!2sbr!4v1775583075635!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Só Embreagens"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {INFO.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-2xl transition-all duration-200 hover:scale-[1.01]"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(234,34,37,0.12)' }}
                >
                  <Icon size={18} style={{ color: 'rgb(234, 34, 37)' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'rgb(102, 97, 96)' }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium leading-snug transition-colors duration-200"
                      style={{ color: 'rgb(210, 210, 208)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(234, 34, 37)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgb(210, 210, 208)')}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium leading-snug whitespace-pre-line" style={{ color: 'rgb(210, 210, 208)' }}>
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/5566996595500?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgb(234, 34, 37)',
                color: '#fff',
                boxShadow: '0 4px 24px rgba(234,34,37,0.3)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L0 24l6.335-1.507C8.056 23.451 9.993 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.688-.525-5.218-1.431l-.374-.221-3.882.924.979-3.784-.242-.384C2.525 15.578 2 13.845 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
