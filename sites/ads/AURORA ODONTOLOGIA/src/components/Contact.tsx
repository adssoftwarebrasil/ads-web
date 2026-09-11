import useInView from '../hooks/useInView';

type ContactItem = {
  icon: string;
  title: string;
  lines?: string[];
  links?: { href: string; text: string }[];
};

const ITEMS: ContactItem[] = [
  {
    icon: '📍',
    title: 'Endereço',
    lines: ['Av. Tiradentes, 2164 - Centro', 'Rondonópolis - MT, 78700-028'],
  },
  {
    icon: '📱',
    title: 'WhatsApp / Telefone',
    links: [
      { href: 'https://wa.me/5566996456124', text: '(66) 99645-6124' },
      { href: 'https://wa.me/5566996074925', text: '(66) 99607-4925' },
    ],
  },
  {
    icon: '📧',
    title: 'E-mail',
    links: [
      { href: 'mailto:auroraodontologia8@gmail.com', text: 'auroraodontologia8@gmail.com' },
    ],
  },
  {
    icon: '🕐',
    title: 'Horários',
    lines: ['Segunda a Sexta: 08:00 – 18:00', 'Sábado: 08:00 – 12:00'],
  },
];

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1942518897663!2d-54.6323534!3d-16.4656988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9cbb0e319f1%3A0x7404756057b343ed!2sAurora%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1776995889977!5m2!1spt-BR!2sbr';

export default function Contact() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="contato" className="section contact" ref={ref}>
      <div className="section__inner contact__inner">
        <div className={`contact__info${inView ? ' animate-slide-left' : ''}`}>
          <span className="badge badge--blue">Fale Conosco</span>
          <h2>Entre em Contato</h2>
          <p className="contact__intro">
            Estamos prontos para cuidar do seu sorriso. Agende sua consulta ou avaliação agora mesmo!
          </p>

          <div className="contact__items">
            {ITEMS.map((item, i) => (
              <div key={i} className="contact__item">
                <div className="contact__item-icon">{item.icon}</div>
                <div className="contact__item-body">
                  <strong>{item.title}</strong>
                  {item.lines?.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                  {item.links?.map((link, j) => (
                    <a key={j} href={link.href} target="_blank" rel="noreferrer">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="contact__socials">
            <a
              href="https://instagram.com/aurora.odontoroo"
              target="_blank"
              rel="noreferrer"
              className="social-btn social-btn--insta"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @aurora.odontoroo
            </a>

            <a
              href="https://facebook.com/aurora.odontoroo"
              target="_blank"
              rel="noreferrer"
              className="social-btn social-btn--fb"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              aurora.odontoroo
            </a>
          </div>
        </div>

        <div className={`contact__map${inView ? ' animate-slide-right' : ''}`}>
          <iframe
            title="Localização Aurora Odontologia"
            src={MAP_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
