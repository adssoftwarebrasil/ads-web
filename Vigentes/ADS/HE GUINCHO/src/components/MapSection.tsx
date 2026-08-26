export default function MapSection() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.234567890123!2d-49.4647!3d-18.9847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU5JzA1LjAiUyA0OcKwMjcnNTMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização HE Guincho"
        className="w-full h-96 lg:h-[450px]"
        style={{ border: '0px' }}
      ></iframe>
    </section>
  );
}
