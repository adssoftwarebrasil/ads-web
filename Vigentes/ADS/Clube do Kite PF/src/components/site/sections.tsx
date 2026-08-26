import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Star,
  Wind,
  Waves,
  Zap,
  Anchor,
  Compass,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Quote,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { content, WHATSAPP } from "@/i18n/content";
import { Particles } from "./Particles";

import hero from "@/assets/hero.jpg";
import team from "@/assets/equipe.jpg";
import lesson from "@/assets/lesson.jpg";
import instructor from "@/assets/instructor.jpeg";
import kite4 from "@/assets/kite-4.webp";
import kiteDuotone from "@/assets/kite-duotone.jpg";
import kitesGrass from "@/assets/kites-grass.jpg";
import kitePump from "@/assets/kite-pump.png";
import student1 from "@/assets/student-1.webp";
import student2 from "@/assets/student-2.webp";
import logo from "@/assets/logo.png";
import foto1 from "@/assets/foto1.jpg";
import foto3 from "@/assets/foto3.jpeg";
import foto4 from "@/assets/foto4.jpeg";
import foto5 from "@/assets/foto5.jpeg";
import foto6 from "@/assets/foto6.jpeg";
import foto7 from "@/assets/foto7.jpeg";
import foto8 from "@/assets/foto8.jpeg";
import foto9 from "@/assets/foto9.jpeg";
import foto10 from "@/assets/foto10.jpeg";
import foto11 from "@/assets/foto11.jpeg";
import foto12 from "@/assets/foto12.jpeg";
import foto13 from "@/assets/foto13.jpeg";
import foto14 from "@/assets/foto14.jpeg";
import foto15 from "@/assets/foto15.jpeg";
import foto16 from "@/assets/foto16.jpeg";
import foto17 from "@/assets/foto17.jpeg";
import foto18 from "@/assets/foto18.jpeg";
import foto19 from "@/assets/foto19.jpeg";
import foto20 from "@/assets/foto20.jpeg";
import foto21 from "@/assets/foto21.jpeg";
import foto22 from "@/assets/foto22.jpeg";
import foto23 from "@/assets/foto23.jpeg";

/* ───── HERO ───── */
export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
      >
        <img src={hero} alt="Kitesurf jumping over waves at Praia do Futuro" className="h-full w-full object-cover" width={1920} height={1080} />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-kite-black/70 via-transparent to-transparent" style={{ background: "linear-gradient(90deg, oklch(0.05 0.003 60 / 0.7), transparent 60%)" }} />
      <Particles />

      <div className="relative z-10 container mx-auto px-4 md:px-8 min-h-screen flex flex-col justify-center pt-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-primary/30 mb-6">
            <Wind className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-primary/90 font-semibold">
              {t(content.hero.eyebrow)}
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-6">
            <span className="block text-foreground">{t(content.hero.title1)}</span>
            <span className="block text-gradient-fire">{t(content.hero.title2)}</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-10">
            {t(content.hero.subtitle)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-fire text-primary-foreground font-bold shadow-lg shadow-primary/30 hover:scale-105 hover:glow-fire transition-all"
            >
              {t(content.hero.ctaPrimary)}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-foreground/20 backdrop-blur text-foreground font-bold hover:border-primary hover:text-primary transition-all"
            >
              {t(content.hero.ctaSecondary)}
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 md:bottom-32 left-1/2 -translate-x-1/2 text-foreground/70 flex flex-col items-center gap-2 animate-bounce-down z-20"
        >
          <span className="text-xs uppercase tracking-widest">{t(content.hero.scroll)}</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>

      {/* wave divider */}
      <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-background z-10" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,40 C240,120 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}

/* ───── ABOUT ───── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setVal(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.about.eyebrow)}</div>
          <h2 className="text-5xl md:text-6xl font-black leading-[0.95] mb-8">
            <span className="text-gradient-fire">{t(content.about.title)}</span>
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-5">{t(content.about.p1)}</p>
          <p className="text-foreground/70 leading-relaxed mb-10">{t(content.about.p2)}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {content.about.stats.map((s, i) => {
              const num = parseInt(s.value);
              const suf = s.value.replace(String(num), "");
              return (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-4xl md:text-5xl font-black text-gradient-fire">
                    <Counter to={num} suffix={suf} />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t(s.label)}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-2 bg-gradient-fire rounded-3xl opacity-70 blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-fire">
            <img src={team} alt="Equipe Clube do Kite na Praia do Futuro" className="rounded-3xl w-full h-[480px] md:h-[560px] object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <img src={instructor} alt="Instrutor" className="h-32 w-32 rounded-2xl object-cover ring-4 ring-background" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── COURSES ───── */
export function Courses() {
  const { t } = useLang();
  const icons = [Waves, Zap, Compass];
  return (
    <section id="courses" className="relative py-24 md:py-32 bg-card/30 diagonal-cut-top diagonal-cut-bottom">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.courses.eyebrow)}</div>
          <h2 className="text-5xl md:text-6xl font-black mb-5">
            <span className="text-gradient-fire">{t(content.courses.title)}</span>
          </h2>
          <p className="text-foreground/70">{t(content.courses.subtitle)}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {content.courses.items.map((c, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="reveal group relative rounded-3xl border border-border bg-card/60 backdrop-blur p-8 overflow-hidden hover:border-primary/60 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_60px_-10px_oklch(0.86_0.19_95/0.4)] transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-fire opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-fire flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-black mb-3 text-foreground">{t(c.name)}</h3>
                  <p className="text-foreground/70 mb-8 leading-relaxed">{t(c.desc)}</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all"
                  >
                    {t(content.courses.cta)}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ───── VALORES ───── */}
        <div id="pricing" className="mt-24 md:mt-32 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.pricing.eyebrow)}</div>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-gradient-fire">{t(content.pricing.title)}</span>
            </h2>
            <p className="text-foreground/70">{t(content.pricing.subtitle)}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {content.pricing.items.map((p, i) => (
              <div
                key={i}
                className={`reveal relative flex flex-col rounded-3xl border p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 ${
                  p.highlight
                    ? "border-primary/60 bg-card/80 shadow-[0_0_60px_-10px_oklch(0.86_0.19_95/0.35)]"
                    : "border-border bg-card/60 hover:border-primary/40"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-8 rounded-full bg-gradient-fire px-3 py-1 text-[11px] font-black uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30">
                    {t(p.badge)}
                  </div>
                )}
                <h3 className="text-2xl font-black text-foreground mb-1">{t(p.name)}</h3>
                <p className="text-sm text-foreground/60 mb-6">{t(p.detail)}</p>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-base font-bold text-foreground/60">R$</span>
                  <span className="text-5xl font-black leading-none text-gradient-fire">{p.price}</span>
                </div>
                <p className="text-sm text-foreground/60 mb-8">{t(p.per)}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-all ${
                    p.highlight
                      ? "bg-gradient-fire text-primary-foreground shadow-lg shadow-primary/30 hover:gap-3"
                      : "border border-border text-foreground hover:border-primary hover:text-primary hover:gap-3"
                  }`}
                >
                  {t(content.pricing.cta)}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-foreground/50 reveal">{t(content.pricing.note)}</p>
        </div>
      </div>
    </section>
  );
}

/* ───── REVIEWS ───── */
export function Reviews() {
  const { t } = useLang();
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border mb-4">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.66-2.83z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z" />
            </svg>
            <span className="text-xs font-bold text-foreground">Google Reviews · 5.0</span>
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-primary text-primary" />)}</div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="text-gradient-fire">{t(content.reviews.title)}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.items.map((r, i) => (
            <div
              key={i}
              className="reveal rounded-2xl bg-card/70 border border-border p-7 hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">{t(r.tag)}</span>
              </div>
              <p className="text-foreground/85 leading-relaxed mb-5">"{t(r.text)}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-gradient-fire flex items-center justify-center font-black text-primary-foreground">
                  {r.author[0]}
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{r.author}</div>
                  <div className="text-xs text-muted-foreground">Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── RENTAL ───── */
export function Rental() {
  const { t } = useLang();
  const icons = [Wind, Waves, Anchor, Sparkles];
  return (
    <section id="rental" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={kiteDuotone} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.rental.eyebrow)}</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-fire">{t(content.rental.title)}</span>
            </h2>
            <p className="text-foreground/80 text-lg mb-10">{t(content.rental.desc)}</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-fire text-primary-foreground font-bold shadow-lg shadow-primary/30 hover:scale-105 hover:glow-fire transition-all">
              {t(content.rental.cta)} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal">
            {content.rental.items.map((it, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-6 hover:border-primary/60 hover:scale-105 transition-all">
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <div className="font-bold text-foreground">{t(it)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── GALLERY ───── */
export function Gallery() {
  const { t } = useLang();
  const imgs = [
    { src: kite4, span: "md:col-span-2 md:row-span-2", alt: "Aula de kitesurf" },
    { src: lesson, span: "", alt: "Instrutor com aluna" },
    { src: kitesGrass, span: "", alt: "Kites no jardim" },
    { src: kitePump, span: "", alt: "Inflando kite" },
    { src: student1, span: "", alt: "Aluno e instrutor" },
    { src: student2, span: "", alt: "Aluna feliz com kite" },
    { src: foto1, span: "", alt: "Kite no céu" },
    { src: foto3, span: "", alt: "Pôr do sol com kite" },
    { src: foto4, span: "", alt: "Aula de kitesurf" },
    { src: foto5, span: "", alt: "Kite sobre as ondas" },
    { src: foto6, span: "", alt: "Kite e palmeiras" },
    { src: foto7, span: "", alt: "Kite e céu azul" },
    { src: foto8, span: "", alt: "Kite e mar" },
    { src: foto9, span: "", alt: "Aula de kitesurf" },
    { src: foto10, span: "", alt: "Kite no pôr do sol" },
    { src: foto11, span: "", alt: "Kite e nuvens" },
    { src: foto12, span: "", alt: "Kite e areia" },
    { src: foto13, span: "", alt: "Kite e pessoas" },
    { src: foto14, span: "", alt: "Kite e ondas" },
    { src: foto15, span: "", alt: "Kite e céu laranja" },
    { src: foto16, span: "", alt: "Kite e mar calmo" },
    { src: foto17, span: "", alt: "Kite e palmeiras ao fundo" },
    { src: foto18, span: "", alt: "Kite e pessoas na praia" },
    { src: foto19, span: "", alt: "Kite e céu nublado" },
    { src: foto20, span: "", alt: "Kite e mar agitado" },
    { src: foto21, span: "", alt: "Kite e pôr do sol vermelho" },
    { src: foto22, span: "", alt: "Kite e areia branca" },
  ];
  return (
    <section className="relative py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.gallery.eyebrow)}</div>
          <h2 className="text-5xl md:text-6xl font-black"><span className="text-gradient-fire">{t(content.gallery.title)}</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px] reveal">
          {imgs.map((g, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${g.span}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-kite-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {content.gallery.quotes.map((q, i) => (
            <figure key={i} className="reveal relative rounded-2xl border border-border bg-card/60 p-7">
              <Quote className="h-8 w-8 text-primary mb-3" />
              <blockquote className="text-foreground/85 leading-relaxed">"{t(q.text)}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-fire flex items-center justify-center text-primary-foreground font-black text-sm">{q.author[0]}</div>
                <div className="text-sm font-bold text-foreground">{q.author}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── SHOP ───── */
export function Shop() {
  const { t } = useLang();
  const imgs = [kiteDuotone, kitesGrass, kite4];
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.shop.eyebrow)}</div>
          <h2 className="text-5xl md:text-6xl font-black mb-5"><span className="text-gradient-fire">{t(content.shop.title)}</span></h2>
          <p className="text-foreground/70">{t(content.shop.desc)}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.shop.products.map((p, i) => (
            <div key={i} className="reveal relative overflow-hidden rounded-3xl border border-border bg-card/60 group">
              <div className="relative h-64 overflow-hidden">
                <img src={imgs[i]} alt={t(p)} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-kite-black/80 via-kite-black/20 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-fire text-primary-foreground text-[10px] font-black uppercase tracking-widest">
                  {t(content.shop.soon)}
                </span>
              </div>
              <div className="p-6">
                <div className="font-black text-xl text-foreground">{t(p)}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">Clube do Kite Store</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10 reveal">{t(content.shop.cta)}</p>
      </div>
    </section>
  );
}

/* ───── LEAD FORM ───── */
export function LeadForm() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-24 md:py-32 bg-card/40">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="reveal text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.lead.eyebrow)}</div>
          <h2 className="text-5xl md:text-6xl font-black"><span className="text-gradient-fire">{t(content.lead.title)}</span></h2>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-1 bg-gradient-fire rounded-3xl opacity-40 blur-xl" />
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="relative rounded-3xl bg-background border border-primary/30 p-8 md:p-10 space-y-5"
          >
            <input required placeholder={t(content.lead.name)} className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground" />
            <input required type="email" placeholder={t(content.lead.email)} className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground" />
            <input required type="tel" placeholder={t(content.lead.phone)} className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground" />
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-fire text-primary-foreground font-black uppercase tracking-wider shadow-lg shadow-primary/30 hover:scale-[1.02] transition">
              {t(content.lead.submit)}
            </button>
            {submitted && <p className="text-center text-primary text-sm font-semibold">{t(content.lead.success)}</p>}
            <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-widest"><div className="flex-1 h-px bg-border" />{t(content.lead.or)}<div className="flex-1 h-px bg-border" /></div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl border-2 border-[#25D366] text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition">
              {t(content.lead.whatsapp)}
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ───── CONTACT + FOOTER ───── */
export function ContactFooter() {
  const { t } = useLang();
  return (
    <footer id="contact" className="relative pt-24 md:pt-32 pb-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{t(content.contact.eyebrow)}</div>
            <h2 className="text-5xl md:text-6xl font-black mb-8"><span className="text-gradient-fire">{t(content.contact.title)}</span></h2>
            <ul className="space-y-4 text-foreground/85">
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><a href={WHATSAPP} className="hover:text-primary">(85) 98101-1262</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><a href="mailto:clubedokitehouse@gmail.com" className="hover:text-primary">clubedokitehouse@gmail.com</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />{t(content.contact.address)}</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" />{t(content.contact.hours)}</li>
            </ul>
            <div className="flex gap-3 mt-8">
              <a href="https://instagram.com/clubedokite" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition"><Instagram className="h-5 w-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="reveal rounded-3xl overflow-hidden border border-border h-[360px] lg:h-auto">
            <iframe
              title="Mapa Praia do Futuro"
              src="https://www.google.com/maps?q=Clube+do+Kite&ll=-3.7318675,-38.4570442&z=17&output=embed"
              className="w-full h-full min-h-[360px] grayscale-[60%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Clube do Kite PF" className="h-10 w-10 rounded-full bg-white/90 p-0.5" />
            <div>
              <div className="font-black text-foreground">Clube do Kite PF</div>
              <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} · {t(content.footer.rights)}</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Praia do Futuro · Fortaleza · Brasil</div>
        </div>
      </div>
    </footer>
  );
}