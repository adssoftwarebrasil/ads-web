export type Lang = "pt" | "en";

export const content = {
  nav: {
    home: { pt: "Início", en: "Home" },
    courses: { pt: "Cursos", en: "Courses" },
    rental: { pt: "Aluguel", en: "Rental" },
    reviews: { pt: "Depoimentos", en: "Reviews" },
    contact: { pt: "Contato", en: "Contact" },
    cta: { pt: "Fale no WhatsApp", en: "Chat on WhatsApp" },
  },
  hero: {
    eyebrow: { pt: "Praia do Futuro · Fortaleza · CE", en: "Praia do Futuro · Fortaleza · Brazil" },
    title1: { pt: "Aprenda a Voar", en: "Learn to Fly" },
    title2: { pt: "sobre as Ondas", en: "Above the Waves" },
    subtitle: {
      pt: "A escola de kitesurf mais completa de Fortaleza, na Praia do Futuro.",
      en: "The most complete kitesurf school in Fortaleza, at Praia do Futuro.",
    },
    ctaPrimary: { pt: "Conhecer Cursos", en: "Explore Courses" },
    ctaSecondary: { pt: "Falar no WhatsApp", en: "Chat on WhatsApp" },
    scroll: { pt: "Role para descobrir", en: "Scroll to discover" },
  },
  about: {
    eyebrow: { pt: "Sobre nós", en: "About us" },
    title: { pt: "Onde o vento vira liberdade", en: "Where the wind becomes freedom" },
    p1: {
      pt: "Fundado por Pedro Guilherme e seu pai, o Clube do Kite PF nasceu da paixão pelo mar e pelo vento da Praia do Futuro. Há mais de 10 anos formando kitesurfistas com aulas personalizadas, metodologia focada em segurança e estrutura completa à beira-mar.",
      en: "Founded by Pedro Guilherme and his father, Clube do Kite PF was born from a passion for the ocean and the steady wind of Praia do Futuro. For over 10 years we've been training kiters with personalized lessons, a safety-first methodology and a full beachfront base.",
    },
    p2: {
      pt: "Mais do que uma escola, somos um clube — uma comunidade de pessoas apaixonadas por adrenalina, natureza e progressão.",
      en: "More than a school, we are a club — a community of people in love with adrenaline, nature and progression.",
    },
    stats: [
      { value: "10+", label: { pt: "Anos de experiência", en: "Years of experience" } },
      { value: "500+", label: { pt: "Alunos formados", en: "Students trained" } },
      { value: "3", label: { pt: "Modalidades", en: "Disciplines" } },
      { value: "7", label: { pt: "Dias/semana", en: "Days/week" } },
    ],
  },
  courses: {
    eyebrow: { pt: "Nossos cursos", en: "Our courses" },
    title: { pt: "Escolha sua jornada", en: "Choose your journey" },
    subtitle: {
      pt: "Do primeiro contato com o vento aos saltos mais altos — temos a aula certa para você.",
      en: "From the first wind contact to the highest jumps — we have the right lesson for you.",
    },
    cta: { pt: "Saiba mais", en: "Learn more" },
    items: [
      {
        icon: "🟡",
        name: { pt: "Curso Iniciante", en: "Beginner Course" },
        desc: {
          pt: "Para quem nunca teve contato com o kite. Metodologia segura, progressiva e divertida.",
          en: "For those who never tried kiting. Safe, progressive and fun methodology.",
        },
      },
      {
        icon: "🟠",
        name: { pt: "Curso Avançado", en: "Advanced Course" },
        desc: {
          pt: "Evolua suas manobras com instrutores experientes e equipamentos de ponta.",
          en: "Level up your tricks with experienced instructors and top-tier gear.",
        },
      },
      {
        icon: "⚡",
        name: { pt: "Downwind", en: "Downwind" },
        desc: {
          pt: "A aventura de navegar com o vento. Experiência única na Praia do Futuro.",
          en: "The adventure of riding with the wind. A one-of-a-kind Praia do Futuro experience.",
        },
      },
    ],
  },
  pricing: {
    eyebrow: { pt: "Valores", en: "Pricing" },
    title: { pt: "Nossos pacotes", en: "Our packages" },
    subtitle: {
      pt: "Quanto maior o pacote, menor o valor por aula.",
      en: "The bigger the package, the lower the price per lesson.",
    },
    cta: { pt: "Reservar no WhatsApp", en: "Book on WhatsApp" },
    note: {
      pt: "Fale com a gente no WhatsApp para agendar sua aula e tirar dúvidas.",
      en: "Message us on WhatsApp to book your lesson or ask any questions.",
    },
    items: [
      {
        name: { pt: "Aula avulsa", en: "Single lesson" },
        detail: { pt: "1 aula", en: "1 lesson" },
        price: "250",
        per: { pt: "Valor por aula", en: "Price per lesson" },
        badge: null,
        highlight: false,
      },
      {
        name: { pt: "Pacote 5 aulas", en: "5-lesson package" },
        detail: { pt: "5 aulas de 2h cada", en: "5 lessons, 2h each" },
        price: "1.200",
        per: { pt: "R$ 240 por aula · economize R$ 50", en: "R$ 240 per lesson · save R$ 50" },
        badge: null,
        highlight: false,
      },
      {
        name: { pt: "Pacote 10 aulas", en: "10-lesson package" },
        detail: { pt: "10 aulas de 2h cada", en: "10 lessons, 2h each" },
        price: "2.200",
        per: { pt: "R$ 220 por aula · economize R$ 300", en: "R$ 220 per lesson · save R$ 300" },
        badge: { pt: "Melhor custo-benefício", en: "Best value" },
        highlight: true,
      },
    ],
  },

  reviews: {
    eyebrow: { pt: "Avaliações Google", en: "Google Reviews" },
    title: { pt: "O que nossos alunos dizem", en: "What our students say" },
    items: [
      {
        tag: { pt: "Curso Iniciante", en: "Beginner" },
        text: {
          pt: "Comecei do zero e em poucos dias já estava pilotando! Equipe incrível e muito paciente.",
          en: "I started from zero and in a few days I was already riding! Incredible and patient team.",
        },
        author: "João M.",
      },
      {
        tag: { pt: "Curso Avançado", en: "Advanced" },
        text: {
          pt: "Evoluí muito com o Pedro e a equipe. Estrutura top e localização perfeita na Praia do Futuro.",
          en: "I leveled up a lot with Pedro and the team. Great structure and perfect spot at Praia do Futuro.",
        },
        author: "Camila R.",
      },
      {
        tag: { pt: "Downwind", en: "Downwind" },
        text: {
          pt: "O downwind foi uma experiência inesquecível. Recomendo demais o Clube do Kite!",
          en: "The downwind was an unforgettable experience. I highly recommend Clube do Kite!",
        },
        author: "Rafael S.",
      },
    ],
  },
  rental: {
    eyebrow: { pt: "Aluguel", en: "Rental" },
    title: { pt: "Aluguel de Kite", en: "Kite Rental" },
    desc: {
      pt: "Alugue equipamentos de qualidade para sua próxima sessão na Praia do Futuro.",
      en: "Rent quality gear for your next session at Praia do Futuro.",
    },
    items: [
      { pt: "Kite completo", en: "Full kite" },
      { pt: "Prancha", en: "Board" },
      { pt: "Barra", en: "Bar" },
      { pt: "Equipamento completo", en: "Full set" },
    ],
    cta: { pt: "Consultar disponibilidade", en: "Check availability" },
  },
  gallery: {
    eyebrow: { pt: "Galeria", en: "Gallery" },
    title: { pt: "Momentos no Clube", en: "Moments at the Club" },
    quotes: [
      {
        text: {
          pt: "Sensação de liberdade indescritível. O Clube virou minha segunda casa.",
          en: "An indescribable feeling of freedom. The Club became my second home.",
        },
        author: "Marina S.",
      },
      {
        text: {
          pt: "Profissionais de altíssimo nível. Saí pilotando sozinho no segundo dia.",
          en: "Top-level pros. I was riding alone by day two.",
        },
        author: "Lucas A.",
      },
      {
        text: {
          pt: "Vibração única, ambiente acolhedor e o melhor vento do Brasil.",
          en: "Unique vibe, welcoming crew and the best wind in Brazil.",
        },
        author: "Beatriz O.",
      },
    ],
  },
  shop: {
    eyebrow: { pt: "Loja", en: "Shop" },
    title: { pt: "Em Breve — Nossa Loja", en: "Coming Soon — Our Shop" },
    desc: {
      pt: "Equipamentos selecionados, lifestyle e acessórios oficiais do Clube do Kite.",
      en: "Curated gear, lifestyle and official Clube do Kite accessories.",
    },
    soon: { pt: "Em breve", en: "Coming soon" },
    cta: { pt: "Cadastre-se para ser avisado primeiro", en: "Sign up to be notified first" },
    products: [
      { pt: "Kite Pro 12m", en: "Pro Kite 12m" },
      { pt: "Prancha Carbon", en: "Carbon Board" },
      { pt: "Trapézio Premium", en: "Premium Harness" },
    ],
  },
  lead: {
    eyebrow: { pt: "Comece agora", en: "Get started" },
    title: { pt: "Comece sua jornada no kitesurf", en: "Start your kitesurf journey" },
    name: { pt: "Nome", en: "Name" },
    email: { pt: "E-mail", en: "Email" },
    phone: { pt: "Telefone", en: "Phone" },
    submit: { pt: "Quero Começar!", en: "I'm in!" },
    or: { pt: "ou", en: "or" },
    whatsapp: { pt: "📲 Prefiro falar pelo WhatsApp", en: "📲 I prefer WhatsApp" },
    success: { pt: "Recebido! Entraremos em contato em breve.", en: "Got it! We'll reach out soon." },
  },
  contact: {
    eyebrow: { pt: "Contato", en: "Contact" },
    title: { pt: "Venha aprender kite surf com a gente!", en: "Come learn kitesurf with us!" },
    hours: { pt: "Todos os dias, 8h às 17h", en: "Every day, 8am to 5pm" },
    address: { pt: "Praia do Futuro, Fortaleza – CE, Brasil", en: "Praia do Futuro, Fortaleza – CE, Brazil" },
  },
  footer: {
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  },
};

export const WHATSAPP =
  "https://wa.me/5585981011262?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site do Clube do Kite PF e gostaria de saber mais sobre as aulas de kitesurf na Praia do Futuro."
  );