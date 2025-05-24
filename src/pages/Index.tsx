import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      tagline: "Титан. Мощный. Pro.",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
      price: "от 99 990 ₽",
      colors: ["#1f2937", "#6b7280", "#f3f4f6", "#3b82f6"],
    },
    {
      id: 2,
      name: "MacBook Air",
      tagline: "Впечатляюще тонкий. Невероятно мощный.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
      price: "от 124 990 ₽",
      colors: ["#e5e7eb", "#374151", "#fbbf24", "#ec4899"],
    },
    {
      id: 3,
      name: "iPad Pro",
      tagline: "Твой следующий компьютер — не компьютер.",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop",
      price: "от 89 990 ₽",
      colors: ["#e5e7eb", "#374151"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-gray-900">🍎</div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Mac
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                iPad
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                iPhone
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Watch
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                AirPods
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Поддержка
              </a>
            </div>
            <div className="text-gray-600">🔍</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold mb-4 tracking-tight">
            iPhone 15 Pro
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Титан. Мощный. Pro.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Титановый корпус. Чип A17 Pro. Кнопка «Действие». Самый продвинутый
            iPhone в истории.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
              Купить
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg"
            >
              Подробнее
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop"
              alt="iPhone 15 Pro"
              className="mx-auto max-w-lg w-full animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Исследуйте линейку
            </h2>
            <p className="text-xl text-gray-600">
              Выберите идеальное устройство для себя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {product.tagline}
                  </p>

                  <div className="mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex justify-center gap-2 mb-6">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <p className="text-lg font-semibold text-gray-900 mb-6">
                    {product.price}
                  </p>

                  <div className="flex flex-col gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      Купить
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Экосистема, которая работает на вас
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Все устройства Apple созданы для совместной работы. Начните на
                одном устройстве, продолжите на другом.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Apple Ecosystem"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Магазин</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Apple Music</li>
                <li>Apple TV+</li>
                <li>iCloud</li>
                <li>Apple Arcade</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Техподдержка</li>
                <li>Гарантия</li>
                <li>Сервисные центры</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">О Apple</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Карьера</li>
                <li>Инвесторам</li>
                <li>Пресс-релизы</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 Apple Inc. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
