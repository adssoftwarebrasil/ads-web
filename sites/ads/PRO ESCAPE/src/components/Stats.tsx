import { useState, useEffect } from 'react'

interface StatsProps {
  statsRef: React.RefObject<HTMLDivElement>
  statsVisible: boolean
}

export const Stats = ({ statsRef, statsVisible }: StatsProps) => {
  const stats = [
    { number: 37, label: 'Anos de Experiência', prefix: '+' },
    { number: 1000, label: 'Modelos de Escapamento', prefix: '+' },
    { number: 200, label: 'Produtos Diferentes', prefix: '+' },
    { number: 45, label: 'Serviços Realizados por Dia', prefix: '+' },
  ]

  return (
    <section ref={statsRef} className="bg-black py-24 border-t-4 border-[rgb(254,182,32)]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-6xl lg:text-7xl font-extrabold text-[rgb(254,182,32)] mb-4 group-hover:text-white transition-colors">
                {statsVisible ? (
                  <Counter end={stat.number} prefix={stat.prefix} />
                ) : (
                  '0'
                )}
              </div>
              <div className="text-lg text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Counter = ({ end, prefix }: { end: number; prefix: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return <>{prefix}{count}</>
}
