import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ЮгСочиКлимат</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Контакты
            </button>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex">
            <a
              href="tel:+79189042122"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Позвонить</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Контакты
              </button>
              <a
                href="tel:+79189042122"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 w-fit"
              >
                <Phone size={20} />
                <span>Позвонить</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;