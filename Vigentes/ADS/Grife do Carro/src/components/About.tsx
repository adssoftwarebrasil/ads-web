import { CheckCircle2 } from 'lucide-react';
import { IMG, WHATSAPP_URL } from '../data';

const BENEFITS = [
  'Mais de 10 anos de experiência no mercado automotivo',
  'Avaliação justa e transparente do seu veículo',
  'Financiamento facilitado para todos os perfis',
  'Veículos rigorosamente inspecionados',
];

export default function About() {
  return (
    <section id="sobre" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={IMG.showroom}
              alt="Showroom Grife do Carro"
              className="w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-gold px-6 py-4 shadow-xl max-w-[15rem]">
              <div className="font-heading text-3xl font-extrabold text-black">
                10+
              </div>
              <div className="mt-1 text-xs font-semibold text-black/80">
                Anos transformando a forma como Sinop compra e vende veículos
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
              QUEM SOMOS
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
              A <span className="text-gold">Grife do Carro</span> é referência
              em Sinop
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Fundada há mais de 10 anos, somos especialistas na compra, venda e
              troca de automóveis usados e seminovos. Com portfólio diversificado
              e revisões rigorosas em cada veículo, garantimos qualidade e
              segurança. Nossa reputação é consolidada pela transparência em cada
              negociação.
            </p>
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block rounded-full bg-gold px-7 py-3.5 text-sm font-bold tracking-wider text-black hover:bg-gold-light transition-colors"
            >
              FALAR COM UM CONSULTOR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
