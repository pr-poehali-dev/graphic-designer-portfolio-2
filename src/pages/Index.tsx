import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Брендинг для стартапа",
      category: "Брендинг",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      description: "Полная разработка фирменного стиля для IT-стартапа",
    },
    {
      id: 2,
      title: "Дизайн мобильного приложения",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      description: "Современный интерфейс для фитнес-приложения",
    },
    {
      id: 3,
      title: "Упаковка эко-продуктов",
      category: "Упаковка",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      description: "Экологичный дизайн упаковки для органических продуктов",
    },
    {
      id: 4,
      title: "Веб-дизайн агентства",
      category: "Веб-дизайн",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      description: "Корпоративный сайт для маркетингового агентства",
    },
    {
      id: 5,
      title: "Логотип ресторана",
      category: "Логотип",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
      description: "Элегантный логотип для премиум ресторана",
    },
    {
      id: 6,
      title: "Социальные сети",
      category: "SMM",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Креативы для социальных сетей модного бренда",
    },
  ];

  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Adobe InDesign",
    "Sketch",
    "Adobe After Effects",
    "Principle",
    "Branding",
    "UI/UX Design",
    "Print Design",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Анна Смирнова
          </h1>
          <p className="text-2xl text-gray-600 mb-8 font-light">
            Графический дизайнер и креативный директор
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Создаю яркие визуальные решения, которые помогают брендам выделиться
            и найти свою аудиторию. Специализируюсь на брендинге, веб-дизайне и
            упаковке.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
            >
              Посмотреть работы
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8"
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Мои работы
            </h2>
            <p className="text-xl text-gray-600">
              Избранные проекты за последние годы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="text-purple-600 bg-purple-100"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Обо мне</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Привет! Я графический дизайнер с 7-летним опытом создания
                визуальных решений для бизнеса. Моя страсть — превращать идеи в
                красивые и функциональные дизайны.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Работала с компаниями разного масштаба: от стартапов до крупных
                корпораций. Верю, что хороший дизайн должен не только красиво
                выглядеть, но и решать бизнес-задачи.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Навыки и инструменты
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-gray-700 border-gray-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c056c7d4?w=400&h=400&fit=crop&crop=face"
                  alt="Анна Смирнова"
                  className="w-80 h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной, чтобы обсудить ваш проект. Я всегда рада новым
            интересным задачам!
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8"
            >
              Написать в Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8"
            >
              Отправить email
            </Button>
          </div>
          <div className="mt-12 text-purple-100">
            <p className="mb-2">📧 anna.smirnova.design@gmail.com</p>
            <p>📱 +7 (999) 123-45-67</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
