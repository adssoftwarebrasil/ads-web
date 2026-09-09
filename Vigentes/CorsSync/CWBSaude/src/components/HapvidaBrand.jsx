import hapvidaLogo from '../assets/logo-hapvida.png'

function HapvidaBrand() {
  return (
    <span className="hapvida-brand" role="img" aria-label="Hapvida — saúde pra valer">
      <span className="hapvida-brand__crop" aria-hidden="true">
        <img src={hapvidaLogo} alt="" />
      </span>
    </span>
  )
}

export default HapvidaBrand
