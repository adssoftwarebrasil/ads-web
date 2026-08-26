import { Plus } from 'lucide-react';
import { faqItems } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import { track } from '../lib/analytics';
import WhatsAppLink from './ui/WhatsAppLink';

export default function Faq() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <section
      id="duvidas"
      className="section-shell grid grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] items-start gap-[clamp(2rem,8vw,8rem)] pb-[clamp(5rem,9vw,9rem)] max-md:grid-cols-1 max-md:gap-8 max-md:pb-[4.5rem]"
    >
      <div ref={intro.ref} className={`${intro.className} sticky top-[110px] max-md:static`}>
        <p className="eyebrow">DÚVIDAS</p>
        <h2 className="heading-xl mb-4 mt-[.45rem]">Dúvidas frequentes</h2>
        <p className="max-w-[590px] text-ink-muted">
          Se preferir, converse diretamente com nossa equipe pelo WhatsApp.
        </p>
      </div>

      <div className="border-t border-[var(--line)]">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group border-b border-[var(--line)]"
            onToggle={(event) => {
              if (event.currentTarget.open) track('faq_open', { question: item.question });
            }}
          >
            <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-4 font-display text-[clamp(1.15rem,1.55vw,1.45rem)] font-light leading-[1.2] [&::-webkit-details-marker]:hidden max-md:min-h-[68px] max-md:text-[1.22rem]">
              {item.question}
              <Plus
                size={22}
                aria-hidden="true"
                className="flex-none text-blue-brand transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="m-0 max-w-[700px] pb-[1.3rem] pr-12 text-[.92rem] text-ink-muted max-md:pr-1 max-md:text-[.88rem]">
              {item.answer}{' '}
              {item.whatsappCta && (
                <WhatsAppLink
                  section="faq"
                  position="answer"
                  className="font-extrabold text-blue-brand underline underline-offset-[3px]"
                >
                  Falar pelo WhatsApp
                </WhatsAppLink>
              )}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
