import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Package, Award } from "lucide-react";

const Stats = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: TrendingUp, value: 3, suffix: "+", label: "anos de experiência no agronegócio" },
    { icon: Users, value: 2500, suffix: "+", label: "clientes rurais atendidos" },
    { icon: Package, value: 12e3, suffix: "+", label: "peças entregues ao campo" },
    { icon: Award, value: 200, suffix: "+", label: "marcas e fabricantes disponíveis" },
  ];

  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!visible) return;
      const duration = 2e3;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, [visible, end]);
    return (
      <span>
        {count.toLocaleString("pt-BR")}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="bg-[rgb(19,46,78)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div className="text-center" key={index}>
                <div className="flex justify-center mb-3">
                  <Icon className="text-[rgb(45,156,219)]" size={40} />
                </div>
                <div className="text-white text-3xl md:text-4xl font-bold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
