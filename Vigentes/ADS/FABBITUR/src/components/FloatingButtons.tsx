import { WhatsAppIcon, TicketIcon } from './icons';

const WA_INFO =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.';
const WA_PASSAGEM =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20consultar%20uma%20passagem.';

export default function FloatingButtons() {
  return (
    <>
      {/* Floating circular WhatsApp button */}
      <a
        href={WA_INFO}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 lg:bottom-8 lg:right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        aria-label="Conversar com a Fabbitur pelo WhatsApp"
      >
        <WhatsAppIcon size={28} fill="white" />
      </a>

      {/* Mobile floating CTA bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[var(--color-border)] shadow-[0_-4px_20px_rgba(16,20,24,0.10)]"
        role="complementary"
        aria-label="Ações rápidas"
      >
        <div className="flex items-stretch gap-0 h-16">
          <a
            href={WA_PASSAGEM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold transition-colors hover:bg-[#1ebe5a]"
            aria-label="Abrir WhatsApp da Fabbitur"
          >
            <WhatsAppIcon size={20} />
            WhatsApp
          </a>
          <div className="w-px bg-[var(--color-border)]" />
          <a
            href="/comprar-passagem"
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-green-900)] text-white text-sm font-semibold transition-colors hover:bg-[var(--color-green-700)]"
          >
            <TicketIcon size={18} />
            Comprar passagem
          </a>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind the fixed bar */}
      <div className="lg:hidden h-16" aria-hidden="true" />
    </>
  );
}
