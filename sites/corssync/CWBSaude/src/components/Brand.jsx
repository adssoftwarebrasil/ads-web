import brandImage from '../assets/marca-cwb.jpg'

function Brand({ light = false }) {
  return (
    <span className={`brand ${light ? 'brand--light' : ''}`} aria-label="CWB Corretora de Plano de Saúde">
      <span className="brand__crop" aria-hidden="true">
        <img src={brandImage} alt="" />
      </span>
      <span className="brand__fallback">
        <strong>CWB Saúde</strong>
        <small>Planos de Saúde</small>
      </span>
    </span>
  )
}

export default Brand
