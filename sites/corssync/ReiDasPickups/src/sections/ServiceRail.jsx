import { Gauge, RotateCcw, ShieldCheck, Truck } from 'lucide-react'

const items = [
  { icon: Gauge, label: 'Motores novos e usados' },
  { icon: RotateCcw, label: 'Reparo de transmissões' },
  { icon: Truck, label: 'Especialistas em pick-ups' },
  { icon: ShieldCheck, label: 'Qualidade e procedência' },
]

function ServiceRail() {
  return (
    <div className="service-rail" aria-label="Diferenciais de atendimento">
      <div className="container service-rail__grid">
        {items.map(({ icon: Icon, label }) => (
          <div className="service-rail__item" key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceRail
