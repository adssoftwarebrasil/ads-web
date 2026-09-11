/*
 * SOLENE CABINETS & COUNTERTOPS — Luxury Marketing Site
 * Design: Deep Navy Luxury — Premium American Craftsmanship
 * Colors: Navy #0D2B5E | Orange #E8610A | Gold #C9A84C | Cream #F8F6F2
 * Typography: Playfair Display (headings) + DM Sans (body)
 */

import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Star, ChevronDown, Menu, X, ArrowRight, CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";

// ── Brand assets ──────────────────────────────────────────────────────────────
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336301441/P4acX9mSJjztQWaDTfoHnf/logo_cabinets_8b1b9596.png";

// ── Hero & lifestyle images ───────────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336301441/P4acX9mSJjztQWaDTfoHnf/hero_kitchen-VAqgx5Pd7VSxfQKHJq8Pof.webp";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336301441/P4acX9mSJjztQWaDTfoHnf/bathroom_luxury-oLkcXvvaevSwVjToRT6cwz.webp";
const WHITE_SHAKER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336301441/P4acX9mSJjztQWaDTfoHnf/kitchen_white_shaker-Cbm7F9uWpjcRt4AQrckega.webp";
const ESPRESSO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336301441/P4acX9mSJjztQWaDTfoHnf/kitchen_espresso-DwxjUZEXpcmQYChQYg8aqR.webp";
const COUNTERTOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336301441/P4acX9mSJjztQWaDTfoHnf/countertop_closeup-HMDF3mqhuCAvxgiyotqoRp.webp";

// ── Milestone cabinet product images ─────────────────────────────────────────
const MS = "https://shop.milestonecabinetry.com/media/catalog/category/";

const COLLECTIONS = [
  {
    id: "essential",
    label: "Essential Collection",
    subtitle: "Shaker Style",
    products: [
      { name: "Shaker White", img: `${MS}SW-SD-Front_2.jpg`, tag: "Best Seller" },
      { name: "Shaker Gray", img: `${MS}GR-SD-Front.jpg`, tag: "" },
      { name: "Shaker Espresso", img: `${MS}SE-SD-Front.jpg`, tag: "" },
    ],
  },
  {
    id: "charm",
    label: "Charm Collection",
    subtitle: "Shaker Style",
    products: [
      { name: "Navy Blue", img: `${MS}NB-SD-Front_1.jpg`, tag: "Popular" },
      { name: "Iron Black", img: `${MS}01_IB.jpg`, tag: "" },
      { name: "Treasure Chest", img: `${MS}07_TC.jpg`, tag: "" },
      { name: "Aston Green", img: `${MS}03_AG.jpg`, tag: "New" },
      { name: "Smokey Ash", img: `${MS}05_SA.jpg`, tag: "" },
      { name: "Luna Grey", img: `${MS}LG_-_Shaker_Luna_Grey_1.jpg`, tag: "" },
      { name: "Rustic Wood", img: `${MS}RW_-_Shaker_Rustic_Wood_1.jpg`, tag: "" },
      { name: "Sage Breeze", img: `${MS}SB_-_Shaker_Sage_Breeze_1_1.jpg`, tag: "New" },
    ],
  },
  {
    id: "slim",
    label: "Slim Shaker",
    subtitle: "Modern Profile",
    products: [
      { name: "Slim Dove White", img: `${MS}SDW-SD_3.jpg`, tag: "" },
      { name: "Slim White Oak", img: `${MS}SWO-SD_4.jpg`, tag: "Popular" },
      { name: "Slim Aston Green", img: `${MS}09_SAG.jpg`, tag: "" },
      { name: "Slim Amber Oak", img: `${MS}SAO_-_Slim_Amber_Oak_1.jpg`, tag: "New" },
      { name: "Slim Iron Black", img: `${MS}SIB_-_Slim_Iron_Black_1.jpg`, tag: "" },
    ],
  },
  {
    id: "double",
    label: "Double Shaker",
    subtitle: "Premium Profile",
    products: [
      { name: "Double Smokey Grey", img: `${MS}11_DSG.jpg`, tag: "" },
      { name: "Double Dove White", img: `${MS}13_DDW.jpg`, tag: "Popular" },
    ],
  },
  {
    id: "classic",
    label: "Classic Style",
    subtitle: "Timeless Elegance",
    products: [
      { name: "Aspen White", img: `${MS}AW-SD-Front_1_.jpg`, tag: "Best Seller" },
      { name: "Charleston White", img: `${MS}SW-SD-Front_2.jpg`, tag: "" },
      { name: "Aspen Charcoal Gray", img: `${MS}GR-SD-Front.jpg`, tag: "" },
    ],
  },
];

const SERVICES = [
  {
    icon: "🍳",
    title: "Kitchen Cabinets",
    desc: "Transform your kitchen with custom shaker, slim, or classic cabinet styles in 20+ finishes. Full installation included.",
  },
  {
    icon: "🛁",
    title: "Bathroom Vanities",
    desc: "Elegant floating and floor-mounted vanities for master baths, guest baths, and powder rooms.",
  },
  {
    icon: "🧺",
    title: "Laundry Rooms",
    desc: "Maximize your laundry space with purpose-built cabinetry designed for efficiency and style.",
  },
  {
    icon: "🪨",
    title: "Countertops",
    desc: "Premium quartz, granite, and marble countertops with professional measurement and installation.",
  },
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "1-Year", label: "Warranty Included" },
  { value: "20+", label: "Cabinet Styles" },
  { value: "100%", label: "Satisfaction Rate" },
];

const TESTIMONIALS = [
  {
    name: "Maria S.",
    location: "Orlando, FL",
    text: "Solene completely transformed our kitchen. The navy blue cabinets with quartz countertops look absolutely stunning. Professional team, on-time delivery.",
    stars: 5,
  },
  {
    name: "James R.",
    location: "Winter Park, FL",
    text: "From the first consultation to the final installation, everything was seamless. The quality of the cabinets exceeded our expectations.",
    stars: 5,
  },
  {
    name: "Ana P.",
    location: "Kissimmee, FL",
    text: "We renovated our master bathroom and laundry room. The results are breathtaking. Highly recommend Solene for any cabinet project.",
    stars: 5,
  },
];

// ── Intersection Observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCollection, setActiveCollection] = useState("essential");

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentCollection = COLLECTIONS.find(c => c.id === activeCollection)!;

  // Section refs for animation
  const statsSection = useInView();
  const servicesSection = useInView();
  const productsSection = useInView();
  const testimonialsSection = useInView();
  const ctaSection = useInView();

  return (
    <div className="min-h-screen" style={{ background: "#F8F6F2" }}>

      {/* ── NAVIGATION ──────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: navScrolled ? "rgba(13,43,94,0.97)" : "transparent",
          backdropFilter: navScrolled ? "blur(12px)" : "none",
          borderBottom: navScrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
          boxShadow: navScrolled ? "0 2px 30px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Solene Cabinets & Countertops" className="h-12 w-auto object-contain" />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: "Services", id: "services" },
                { label: "Collections", id: "collections" },
                { label: "Why Us", id: "why-us" },
                { label: "Contact", id: "contact" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+16893314029"
                className="btn-orange text-sm"
                style={{ borderRadius: "2px" }}
              >
                (689) 331-4029
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: "#0D2B5E", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {[
                { label: "Services", id: "services" },
                { label: "Collections", id: "collections" },
                { label: "Why Us", id: "why-us" },
                { label: "Contact", id: "contact" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white/90 text-left py-2 border-b border-white/10 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:+16893314029" className="btn-orange text-center mt-2" style={{ borderRadius: "2px" }}>
                Call (689) 331-4029
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0D2B5E" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(13,43,94,0.92) 0%, rgba(13,43,94,0.75) 50%, rgba(13,43,94,0.40) 100%)",
          }}
        />

        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />

        <div className="container relative z-10 mx-auto px-6 lg:px-10 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="h-px w-12" style={{ background: "#E8610A" }} />
              <span className="section-label" style={{ color: "#E8610A" }}>Orlando, Florida</span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-in-left"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
            >
              Luxury Cabinets &<br />
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Countertops</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Premium kitchen, bathroom, and laundry cabinet installation in Orlando.
              Over 20 styles. Professional installation. 1-year warranty.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="tel:+16893314029"
                className="btn-orange flex items-center gap-2"
                style={{ borderRadius: "2px" }}
              >
                <Phone size={16} />
                Get a Free Quote
              </a>
              <button
                onClick={() => scrollTo("collections")}
                className="btn-outline-white flex items-center gap-2"
                style={{ borderRadius: "2px" }}
              >
                View Collections
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-in-up delay-400">
              {["Licensed & Insured", "1-Year Warranty", "Free Estimates"].map(badge => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "#C9A84C" }} />
                  <span className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-white/50" />
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────── */}
      <section style={{ background: "#0D2B5E" }}>
        <div ref={statsSection.ref} className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 px-6 text-center ${statsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-3xl lg:text-4xl font-bold mb-1"
                  style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 lg:py-32" style={{ background: "#F8F6F2" }}>
        <div ref={servicesSection.ref} className="container mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label block mb-4">What We Do</span>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h2>
            <div className="mx-auto w-16 h-px mt-4" style={{ background: "#E8610A" }} />
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className={`p-8 bg-white border-t-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${servicesSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{
                  borderTopColor: "#E8610A",
                  animationDelay: `${i * 0.1}s`,
                  borderLeft: "1px solid #e8edf5",
                  borderRight: "1px solid #e8edf5",
                  borderBottom: "1px solid #e8edf5",
                }}
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE SPLIT ─────────────────────────────────────────────── */}
      <section style={{ background: "#0D2B5E" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-80 lg:h-auto overflow-hidden">
            <img
              src={BATHROOM_IMG}
              alt="Luxury bathroom vanity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "rgba(13,43,94,0.2)" }} />
          </div>
          {/* Text */}
          <div className="flex items-center px-10 lg:px-16 py-16 lg:py-24">
            <div>
              <span className="section-label block mb-4" style={{ color: "#C9A84C" }}>Craftsmanship</span>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
              >
                Every Detail<br />
                <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Perfected</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                From the first measurement to the final installation, we bring precision and passion to every project. Our team specializes in premium cabinet installation throughout the greater Orlando area.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {["Professional installation team", "Premium materials & hardware", "Custom sizing available", "Clean, on-time service"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#E8610A", flexShrink: 0 }} />
                    <span className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:+16893314029"
                className="btn-orange inline-flex items-center gap-2"
                style={{ borderRadius: "2px" }}
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ─────────────────────────────────────────────────── */}
      <section id="collections" className="py-24 lg:py-32" style={{ background: "#F8F6F2" }}>
        <div ref={productsSection.ref} className="container mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label block mb-4">Cabinet Styles</span>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif" }}
            >
              Our Collections
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Over 20 cabinet styles to match every taste and budget. From classic white shaker to bold navy blue.
            </p>
            <div className="mx-auto w-16 h-px mt-6" style={{ background: "#E8610A" }} />
          </div>

          {/* Collection tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {COLLECTIONS.map(col => (
              <button
                key={col.id}
                onClick={() => setActiveCollection(col.id)}
                className="px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.05em",
                  background: activeCollection === col.id ? "#0D2B5E" : "white",
                  color: activeCollection === col.id ? "white" : "#0D2B5E",
                  border: `1.5px solid ${activeCollection === col.id ? "#0D2B5E" : "#d0d8e8"}`,
                  borderRadius: "2px",
                }}
              >
                {col.label}
              </button>
            ))}
          </div>

          {/* Collection subtitle */}
          <div className="text-center mb-8">
            <span className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {currentCollection.subtitle} — {currentCollection.products.length} styles available
            </span>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {currentCollection.products.map((product, i) => (
              <div
                key={product.name}
                className={`product-card group ${productsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.07}s`, borderRadius: "2px" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "225/265" }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag */}
                  {product.tag && (
                    <div
                      className="absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white"
                      style={{
                        background: product.tag === "New" ? "#E8610A" : "#0D2B5E",
                        fontFamily: "'Montserrat', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {product.tag}
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div
                    className="product-card-overlay absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(13,43,94,0.75)" }}
                  >
                    <a
                      href="tel:+16893314029"
                      className="btn-orange text-xs px-4 py-2"
                      style={{ borderRadius: "2px" }}
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
                {/* Name */}
                <div className="p-4">
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "#0D2B5E", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {currentCollection.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below products */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Not sure which style is right for you? We offer free in-home consultations.
            </p>
            <a
              href="tel:+16893314029"
              className="btn-navy inline-flex items-center gap-2"
              style={{ borderRadius: "2px" }}
            >
              <Phone size={16} />
              Call for a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── COUNTERTOPS FEATURE ─────────────────────────────────────────── */}
      <section style={{ background: "white" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Text */}
          <div className="flex items-center px-10 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">
            <div>
              <span className="section-label block mb-4">Premium Surfaces</span>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
              >
                Countertops That<br />
                <span style={{ color: "#E8610A", fontStyle: "italic" }}>Define Luxury</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                We supply and install premium quartz, granite, and marble countertops. Each slab is carefully selected and precision-cut for a perfect fit.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Quartz", "Granite", "Marble", "Quartzite"].map(material => (
                  <div
                    key={material}
                    className="flex items-center gap-2 p-3 border"
                    style={{ borderColor: "#e8edf5", borderRadius: "2px" }}
                  >
                    <div className="w-2 h-2" style={{ background: "#C9A84C", flexShrink: 0 }} />
                    <span className="text-sm font-semibold" style={{ color: "#0D2B5E", fontFamily: "'Montserrat', sans-serif" }}>
                      {material}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="tel:+16893314029"
                className="btn-orange inline-flex items-center gap-2"
                style={{ borderRadius: "2px" }}
              >
                Get a Countertop Quote
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="relative h-80 lg:h-auto overflow-hidden order-1 lg:order-2">
            <img
              src={COUNTERTOP_IMG}
              alt="Premium quartz countertop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────────────── */}
      <section id="why-us" className="py-24 lg:py-32" style={{ background: "#F8F6F2" }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{ borderRadius: "2px" }}>
                <img src={WHITE_SHAKER_IMG} alt="White shaker kitchen" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden mt-8" style={{ borderRadius: "2px" }}>
                <img src={ESPRESSO_IMG} alt="Espresso kitchen" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            {/* Text */}
            <div>
              <span className="section-label block mb-4">Why Choose Solene</span>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
              >
                The Solene<br />
                <span style={{ color: "#E8610A", fontStyle: "italic" }}>Difference</span>
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { title: "Expert Installation", desc: "Our certified installers bring years of experience to every project, ensuring a flawless finish." },
                  { title: "Premium Materials", desc: "We work exclusively with top-tier cabinet brands and surface materials for lasting quality." },
                  { title: "Transparent Pricing", desc: "No hidden fees. You receive a detailed written estimate before any work begins." },
                  { title: "1-Year Warranty", desc: "Every installation comes with a full 1-year warranty on labor and materials." },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: "#E8610A", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: "#0D2B5E", fontFamily: "'Montserrat', sans-serif" }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section style={{ background: "#0D2B5E" }} className="py-24 lg:py-32">
        <div ref={testimonialsSection.ref} className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="section-label block mb-4" style={{ color: "#C9A84C" }}>Client Reviews</span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`p-8 ${testimonialsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "2px",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  "{t.text}"
                </p>
                <div>
                  <div className="font-bold text-white text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>{t.name}</div>
                  <div className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────────────── */}
      <section
        ref={ctaSection.ref}
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "#E8610A" }}
      >
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
        <div className="container relative mx-auto px-6 lg:px-10 text-center">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-white mb-4 ${ctaSection.inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Transform Your Space?
          </h2>
          <p
            className={`text-white/90 text-xl mb-10 max-w-xl mx-auto ${ctaSection.inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Call us today for a free in-home estimate. We serve Orlando and surrounding areas.
          </p>
          <div className={`flex flex-wrap justify-center gap-4 ${ctaSection.inView ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            <a
              href="tel:+16893314029"
              className="flex items-center gap-2 px-8 py-4 bg-white font-bold text-sm"
              style={{
                color: "#E8610A",
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "2px",
                transition: "all 0.25s ease",
              }}
            >
              <Phone size={18} />
              (689) 331-4029
            </a>
            <button
              onClick={() => scrollTo("collections")}
              className="btn-outline-white flex items-center gap-2"
              style={{ borderRadius: "2px" }}
            >
              Browse Collections
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32" style={{ background: "white" }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <span className="section-label block mb-4">Get In Touch</span>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
              >
                Contact<br />
                <span style={{ color: "#E8610A", fontStyle: "italic" }}>Solene</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                Ready to start your cabinet project? Contact us for a free in-home consultation and estimate. We serve Orlando, Winter Park, Kissimmee, and surrounding areas.
              </p>
              <div className="flex flex-col gap-6">
                <a href="tel:+16893314029" className="flex items-center gap-4 group">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0D2B5E" }}
                  >
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phone</div>
                    <div
                      className="text-xl font-bold group-hover:text-orange-600 transition-colors"
                      style={{ color: "#0D2B5E", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      (689) 331-4029
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0D2B5E" }}
                  >
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Service Area</div>
                    <div className="font-bold" style={{ color: "#0D2B5E", fontFamily: "'Montserrat', sans-serif" }}>
                      Orlando, FL & Surrounding Areas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick quote card */}
            <div
              className="p-10 lg:p-12"
              style={{
                background: "#F8F6F2",
                border: "1px solid #e8edf5",
                borderTop: "3px solid #E8610A",
                borderRadius: "2px",
              }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "#0D2B5E", fontFamily: "'Playfair Display', serif" }}
              >
                Request a Free Estimate
              </h3>
              <p className="text-gray-500 text-sm mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Call us or send a message. We respond within 24 hours.
              </p>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-white border border-gray-100 flex items-center gap-3">
                  <Phone size={18} style={{ color: "#E8610A" }} />
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>Call or Text</div>
                    <a
                      href="tel:+16893314029"
                      className="font-bold text-lg"
                      style={{ color: "#0D2B5E", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      (689) 331-4029
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+16893314029"
                  className="btn-orange text-center w-full"
                  style={{ borderRadius: "2px" }}
                >
                  Call Now — Free Estimate
                </a>
                <p className="text-center text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Available Mon–Sat, 8am–6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ───────────────────────────────────────────────────── */}
      <LeadForm />

      {/* ── WHATSAPP FLOATING BUTTON ────────────────────────────────── */}
      <a
        href="https://wa.me/16893314029?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20cabinet%20estimate!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#25D366",
          color: "white",
          borderRadius: "50px",
          padding: "14px 20px 14px 16px",
          boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
          textDecoration: "none",
          transition: "all 0.3s ease",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.05em",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.60)";
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px) scale(1.03)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(37,211,102,0.45)";
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0) scale(1)";
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0a1f45", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="container mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <img src={LOGO_URL} alt="Solene Cabinets & Countertops" className="h-12 w-auto object-contain mb-4" />
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Premium cabinet and countertop installation in Orlando, Florida. Quality you can see. Craftsmanship you can feel.
              </p>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Services
              </h4>
              <ul className="flex flex-col gap-2">
                {["Kitchen Cabinets", "Bathroom Vanities", "Laundry Rooms", "Countertops", "Free Estimates"].map(s => (
                  <li key={s}>
                    <span className="text-white/50 text-sm hover:text-white/80 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+16893314029" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                  <Phone size={14} style={{ color: "#E8610A" }} />
                  <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>(689) 331-4029</span>
                </a>
                <div className="flex items-center gap-2 text-white/50">
                  <MapPin size={14} style={{ color: "#E8610A" }} />
                  <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Orlando, FL</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                © {new Date().getFullYear()} Solene Cabinets & Countertops. All rights reserved.
              </p>
              <p className="text-white/30 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Orlando, Florida · Licensed & Insured
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
