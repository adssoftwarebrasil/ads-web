import { useEffect, useState } from 'react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Conteúdo do texto */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-6 shadow-sm">
              <span className="text-sm font-semibold" style={{ color: '#074785' }}>
                🎓 Educação que Transforma Vidas
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ color: '#074785' }}
            >
              Forme-se em{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Direito</span>
                <span
                  className="absolute bottom-2 left-0 w-full h-3 -z-0 opacity-30"
                  style={{ backgroundColor: '#e4100f' }}
                ></span>
              </span>
              {' '}na FINAN
            </h1>

            <p
              className={`text-lg md:text-xl mb-10 text-gray-700 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ lineHeight: '1.8' }}
            >
              Bacharelado em Direito reconhecido pelo MEC, com excelência acadêmica, infraestrutura moderna e corpo docente especializado em Nova Andradina/MS.
            </p>

            {/* Badges de destaque */}
            <div className={`grid grid-cols-3 gap-4 mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <GraduationCap className="w-8 h-8 mb-2" style={{ color: '#074785' }} />
                <p className="text-sm font-semibold text-gray-800">Curso Reconhecido MEC</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <BookOpen className="w-8 h-8 mb-2" style={{ color: '#074785' }} />
                <p className="text-sm font-semibold text-gray-800">Ensino de Qualidade</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 mb-2" style={{ color: '#074785' }} />
                <p className="text-sm font-semibold text-gray-800">Comunidade Ativa</p>
              </div>
            </div>

            {/* Botões de ação */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
                <a href="https://wa.me/5567999780073?text=Olá! Gostaria de me inscrever no curso de Direito."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-xl text-center relative overflow-hidden"
                style={{ backgroundColor: '#e4100f' }}
              >
                <span className="relative z-10">Inscreva-se Agora</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <button
                onClick={() => scrollToSection('sobre')}
                className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 border-2 text-center bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl"
                style={{ borderColor: '#074785', color: '#074785' }}
              >
                Conheça o Curso
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Decoração atrás da imagem */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl opacity-20" style={{ backgroundColor: '#074785' }}></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl opacity-20" style={{ backgroundColor: '#e4100f' }}></div>
              
              {/* Imagem principal */}
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Estudantes universitários felizes"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
              />

              {/* Card flutuante de destaque */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#074785' }}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#074785' }}>+1000</p>
                    <p className="text-sm text-gray-600">Alunos Formados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}