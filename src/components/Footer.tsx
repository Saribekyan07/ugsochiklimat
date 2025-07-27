import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">ЮгСочиКлимат</h3>
            <p className="text-gray-300 leading-relaxed">
              Профессиональная установка кондиционеров в Сочи. 
              Качество, надежность, гарантия.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+79189042122"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +7 (918) 904-21-22
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Пластунская ул., 151/1, Сочи
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">График работы</h4>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Пн-Вс: 09:00–18:00</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Установка кондиционеров</li>
              <li>Монтаж на фасады</li>
              <li>Штрабление стен</li>
              <li>Тестирование оборудования</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ЮгСочиКлимат. Все права защищены.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Установка кондиционеров в Сочи
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;