import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const WHATSAPP_URL = 'https://wa.me/5562982972917';
const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d-49.2734!3d-16.7073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11a6740a9eb%3A0x34cda8cf58d75aeb!2sCAMAMAR%20Produtos%20de%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Localização &amp; Contato</p>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
            Venha nos <span className="text-primary">visitar</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="reveal rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] min-h-[380px]">
            <iframe
              src={MAP_SRC}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Camamar"
              style={{ border: '0px', minHeight: '380px' }}
            ></iframe>
          </div>
          <div className="reveal bg-camamar-dark text-white rounded-xl p-8 md:p-10 flex flex-col">
            <h3 className="font-display font-bold text-3xl uppercase mb-2">Fale com a gente</h3>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <div className="space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" width={24} height={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-wider uppercase mb-1">Endereço</p>
                  <p className="text-white/75 text-sm">Av. C-104 Qd 259 Lt 04 Nº 531</p>
                  <p className="text-white/75 text-sm">Jardim América, Goiânia - GO • 74250-030</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" width={24} height={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-wider uppercase mb-1">Telefone</p>
                  <p className="text-white/75 text-sm">(62) 3275-1030</p>
                  <p className="text-white/75 text-sm">(62) 98297-2917 • (62) 98537-4315</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" width={24} height={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-wider uppercase mb-1">E-mail</p>
                  <p className="text-white/75 text-sm">comercial3@camamar.com.br</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" width={24} height={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-wider uppercase mb-1">Funcionamento</p>
                  <p className="text-white/75 text-sm">Seg a Sex: 08h às 18h</p>
                </div>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-whatsapp text-white px-6 py-4 rounded-md font-bold tracking-wide hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--whatsapp)/0.6)] transition-all"
            >
              <WhatsAppIcon height={22} width={22} />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
