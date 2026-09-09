import SectionHeading from '../components/SectionHeading.jsx'
import speakingImage from '../assets/images/estimulos-fala.jpg'
import therapyImage from '../assets/images/fonoterapia-infantil.jpg'
import evaluationImage from '../assets/images/avaliacao-orofacial.jpg'
import clinicImage from '../assets/images/consultorio.jpg'

const galleryItems = [
  {
    src: speakingImage,
    alt: 'Atividade lúdica para estimular fala e linguagem durante a fonoterapia',
    label: 'Aprender brincando',
  },
  {
    src: clinicImage,
    alt: 'Consultório preparado para o atendimento fonoaudiológico',
    label: 'Espaço acolhedor',
  },
  {
    src: evaluationImage,
    alt: 'Avaliação de motricidade orofacial realizada por Wanessa',
    label: 'Avaliação cuidadosa',
  },
  {
    src: therapyImage,
    alt: 'Fonoterapia infantil com materiais coloridos e atividades no chão',
    label: 'Recursos que aproximam',
  },
]

function Gallery() {
  return (
    <section className="gallery section" id="espaco" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery-heading-row">
          <SectionHeading
            eyebrow="Por dentro do cuidado"
            title="Um ambiente onde a comunicação ganha espaço"
            description="Atividades planejadas, recursos lúdicos e atenção aos detalhes tornam o atendimento mais próximo e participativo."
          />
          <div className="gallery-note" aria-hidden="true">
            <span>♥</span>
            <small>Cada conquista importa</small>
          </div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure className="gallery-item" key={item.label}>
              <div className="gallery-image">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
