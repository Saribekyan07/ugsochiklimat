import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              ЮгСочиКлимат — <span className="text-blue-600">ваш комфорт</span> в Сочи!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональная установка кондиционеров в Сочи для квартир, офисов, магазинов и других помещений. 
              Гарантия качества, проверка оборудования и индивидуальный подход.
            </p>
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">Оценка клиентов — 5 звезд!</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('contacts')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Заказать установку</span>
                <ArrowRight size={20} />
              </button>
              <a
                href="tel:+79189042122"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 text-lg font-semibold text-center"
              >
                Позвонить сейчас
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/src/assets/заглушка.webp"
              alt="Современный кондиционер в интерьере"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;