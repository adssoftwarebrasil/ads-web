import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="mt-12 space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="border border-brand-brown/10 rounded-xl bg-white overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 hover:bg-brand-beige/50 transition-colors"
            >
              <span className="font-display text-lg md:text-xl text-brand-brown font-semibold">{item.question}</span>
              <div
                className="flex-shrink-0 text-brand-brown/55 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
              >
                <ChevronDown size={22} className="lucide lucide-chevron-down " />
              </div>
            </button>
            {isOpen && (
              <div className="overflow-hidden">
                <div className="px-5 md:px-6 pb-6 text-brand-gray leading-relaxed">{item.answer}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
