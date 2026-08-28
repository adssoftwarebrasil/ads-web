const ComoChegar = () => {
  return (
    <section className="bg-camamar-light-gray py-12">
      <h2 className="text-3xl font-bold text-center text-foreground mb-8 tracking-wider">COMO CHEGAR?</h2>
      <div className="max-w-5xl mx-auto px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d-49.2734!3d-16.7073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11a6740a9eb%3A0x34cda8cf58d75aeb!2sCAMAMAR%20Produtos%20de%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Camamar"
          className="rounded shadow-md"
        />
      </div>
    </section>
  );
};

export default ComoChegar;
