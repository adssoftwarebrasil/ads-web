import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'Quais tipos de máquinas de solda vocês vendem?',
    a: 'Trabalhamos com máquinas para solda MIG/MAG, TIG, eletrodo revestido (MMA) e plasma corte. Temos opções para uso doméstico, profissional e industrial, de diversas potências e marcas.',
  },
  {
    q: 'Vocês vendem consumíveis avulsos, como arames e eletrodos?',
    a: 'Sim! Temos arames MIG/MAG (aço, inox, alumínio), eletrodos revestidos, fios tubulares e bobinas metálicas. Nosso preço de arame é um dos mais competitivos da região.',
  },
  {
    q: 'Preciso de EPI para solda. O que vocês têm disponível?',
    a: 'Temos máscara de solda automática e tradicional, luvas de raspa e vaqueta, avental de couro, óculos de proteção, mangas e demais EPIs exigidos pela NR-10. Todos os produtos são certificados pelo INMETRO.',
  },
  {
    q: 'Vocês atendem empresas e serralherias com compras em volume?',
    a: 'Sim! Atendemos desde o profissional autônomo até grandes serralherias e indústrias. Para compras em volume temos condições especiais. Entre em contato pelo WhatsApp para conhecer.',
  },
  {
    q: 'Qual o horário de funcionamento da loja?',
    a: 'Atendemos de segunda a sexta-feira até as 18h. Você também pode entrar em contato pelo WhatsApp (31) 9 8463-1447 a qualquer momento.',
  },
  {
    q: 'Vocês fazem entrega ou envio de produtos?',
    a: 'Entre em contato pelo WhatsApp para consultar sobre disponibilidade de entrega ou envio para sua localidade. Nossa loja fica em Contagem-MG e atendemos toda a região metropolitana de BH.',
  },
  {
    q: 'Como posso saber se um produto está disponível em estoque?',
    a: 'A forma mais rápida é nos mandar uma mensagem pelo WhatsApp. Nossa equipe verifica a disponibilidade e te responde rapidamente com informações e preços.',
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-[#161616] hover:bg-[#1A1A1A] transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-brand-red text-xs font-bold w-5 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white font-semibold text-sm sm:text-base">{item.q}</span>
        </span>
        <span className="shrink-0 w-6 h-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <p className="px-5 pb-5 pt-3 text-gray-400 text-sm leading-relaxed border-t border-white/5">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView();

  return (
    <section id="faq" className="bg-[#111111] py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Perguntas
            <span className="text-brand-red block">frequentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Não encontrou sua resposta? Fale conosco pelo WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="http://wa.me/553184631447?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-red hover:text-brand-orange font-semibold text-sm transition-colors underline underline-offset-4"
          >
            Tem mais dúvidas? Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
