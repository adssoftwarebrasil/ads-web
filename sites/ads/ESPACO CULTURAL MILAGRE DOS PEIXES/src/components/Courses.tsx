import { useState } from 'react';
import { Filter, Palette, Music, Heart, Globe, LucideIcon } from 'lucide-react';

type Category = 'Artes' | 'Música' | 'Corpo e Mente' | 'Idiomas';

interface Course {
  title: string;
  category: Category;
  audience: string;
  description: string;
}

const categoryStyle: Record<Category, { bg: string; Icon: LucideIcon }> = {
  Artes: { bg: 'bg-[#ED1B24]', Icon: Palette },
  'Música': { bg: 'bg-[#145D3D]', Icon: Music },
  'Corpo e Mente': { bg: 'bg-[#B1D044]', Icon: Heart },
  Idiomas: { bg: 'bg-[#E1A89F]', Icon: Globe },
};

const courses: Course[] = [
  { title: 'Bordado', category: 'Artes', audience: 'Adultos', description: 'Domine a arte de decorar tecidos com desenhos intrincados de agulha e linha.' },
  { title: 'Corte e Costura', category: 'Artes', audience: 'Adultos', description: 'Desenvolva habilidades em costura, desde pontos básicos até a confecção avançada de roupas.' },
  { title: 'Desenho e Pintura', category: 'Artes', audience: 'Adultos', description: 'Explore diversas técnicas de desenho e pintura com diferentes meios.' },
  { title: 'Esmaltação em Cerâmica', category: 'Artes', audience: 'Adultos', description: 'Aplique esmaltes em peças de cerâmica para fins estéticos e funcionais.' },
  { title: 'Cerâmica – Modelagem e Torno', category: 'Artes', audience: 'Adultos', description: 'Aprenda técnicas de construção manual e torno para criar peças de cerâmica.' },
  { title: 'Mosaico', category: 'Artes', audience: 'Adultos', description: 'Crie belos designs usando pequenas peças de vidro, pedra ou outros materiais.' },
  { title: 'Traços e Cores', category: 'Artes', audience: 'Crianças e Adolescentes', description: 'Aprenda os fundamentos do desenho e da teoria das cores por meio de projetos divertidos.' },
  { title: 'Práticas Artísticas', category: 'Artes', audience: 'Crianças e Adolescentes', description: 'Engaje-se em atividades criativas que fomentam a expressão artística.' },
  { title: 'Violão', category: 'Música', audience: 'Aulas Individuais', description: 'Domine os fundamentos ou aperfeiçoe suas habilidades no violão.' },
  { title: 'Piano', category: 'Música', audience: 'Aulas Individuais', description: 'Aprenda a tocar piano, desde o nível básico até o avançado.' },
  { title: 'Guitarra', category: 'Música', audience: 'Aulas Individuais', description: 'Explore as técnicas e estilos específicos da guitarra elétrica.' },
  { title: 'Bateria', category: 'Música', audience: 'Aulas Individuais', description: 'Desenvolva ritmo e coordenação através de aulas de bateria.' },
  { title: 'Violino', category: 'Música', audience: 'Aulas Individuais', description: 'Adquira habilidades no violino, focando em técnica e musicalidade.' },
  { title: 'Canto', category: 'Música', audience: 'Aulas Individuais', description: 'Melhore suas técnicas vocais e habilidades de performance.' },
  { title: 'Saxofone', category: 'Música', audience: 'Aulas Individuais', description: 'Aprenda a tocar o saxofone, conhecido por seu som rico e expressivo.' },
  { title: 'Flauta', category: 'Música', audience: 'Aulas Individuais', description: 'Domine a flauta, um instrumento de sopro com timbre distinto.' },
  { title: 'Musicalização Infantil', category: 'Música', audience: 'Modalidades em Grupo', description: 'Engaje-se em atividades musicais projetadas para crianças.' },
  { title: 'Prática em Conjunto (Bandas)', category: 'Música', audience: 'Modalidades em Grupo', description: 'Junte-se a uma banda e pratique tocar música em grupo.' },
  { title: 'Yoga', category: 'Corpo e Mente', audience: 'Todos', description: 'Pratique yoga para melhorar a flexibilidade, força e mindfulness.' },
  { title: 'Dança de Salão', category: 'Corpo e Mente', audience: 'Todos', description: 'Domine vários estilos de dança de salão e aproveite a dança social.' },
  { title: 'Balé (adulto)', category: 'Corpo e Mente', audience: 'Adultos', description: 'Aprenda técnicas de balé e melhore sua aptidão física e graça.' },
  { title: 'Dança Conexão', category: 'Corpo e Mente', audience: 'Todos', description: 'Experimente a alegria do movimento e da conexão através da dança.' },
  { title: 'Inglês (iniciante e avançado)', category: 'Idiomas', audience: 'Todos', description: 'Desenvolva suas habilidades no idioma inglês, desde o nível básico até o avançado.' },
  { title: 'Mandarim', category: 'Idiomas', audience: 'Todos', description: 'Aprenda mandarim, focando em habilidades de fala, escuta, leitura e escrita.' },
];

const categories: Array<'Todos' | Category> = ['Todos', 'Artes', 'Música', 'Corpo e Mente', 'Idiomas'];
const audiences = ['Todos', 'Adultos', 'Crianças e Adolescentes', 'Aulas Individuais', 'Modalidades em Grupo'];

export default function Courses() {
  const [category, setCategory] = useState<'Todos' | Category>('Todos');
  const [audience, setAudience] = useState('Todos');

  const filtered = courses.filter(
    (c) =>
      (category === 'Todos' || c.category === category) &&
      (audience === 'Todos' || c.audience === audience)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Cursos
          </h1>
          <p className="text-xl text-gray-600">
            Descubra cursos que inspiram e transformam
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filtrar Cursos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      category === cat
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Público-Alvo
              </label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                {audiences.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filtered.length} cursos
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((course) => {
            const { bg, Icon } = categoryStyle[course.category];
            return (
              <div
                key={course.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`${bg} p-4 flex items-center gap-3`}>
                  <Icon className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="font-bold text-white text-lg">{course.title}</h3>
                    <p className="text-white/90 text-sm">{course.audience}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            Inscreva-se Já
          </button>
        </div>
      </div>
    </div>
  );
}
