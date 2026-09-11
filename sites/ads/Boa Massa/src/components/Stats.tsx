import { Award, Users, Package, CheckCircle } from 'lucide-react';

const stats = [
  { Icon: Award, value: '10+', label: 'Anos de experiência' },
  { Icon: Users, value: '1.067+', label: 'Clientes satisfeitos' },
  { Icon: Package, value: '20+', label: 'Produtos disponíveis' },
  { Icon: CheckCircle, value: '5+', label: 'Certificações de qualidade' },
];

export default function Stats() {
  return (
    <div className="animate-on-scroll">
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: 'rgb(255, 220, 2)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {stats.map(({ Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={40} color="rgb(0, 0, 0)" strokeWidth={2.5} />
                </div>
                <div
                  className="text-4xl lg:text-5xl font-extrabold mb-3"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  {value}
                </div>
                <div
                  className="text-base lg:text-lg font-medium"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 lg:mt-16">
            <p
              className="text-xl lg:text-2xl font-semibold"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              Mais de 10 Anos no Mercado
            </p>
            <p
              className="text-xl lg:text-2xl font-semibold mt-2"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              Transparência e Confiança
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
