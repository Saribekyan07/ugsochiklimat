import React from 'react';
import { Home, Building, ShoppingBag, Wrench, Layers, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Установка в квартирах',
      description: 'Профессиональная установка кондиционеров в жилых помещениях с учетом особенностей интерьера'
    },
    {
      icon: Building,
      title: 'Установка в офисах',
      description: 'Климатические системы для офисных помещений любой площади и конфигурации'
    },
    {
      icon: ShoppingBag,
      title: 'Установка в магазинах',
      description: 'Обеспечиваем комфортный микроклимат в торговых и коммерческих помещениях'
    },
    {
      icon: Wrench,
      title: 'Тестирование оборудования',
      description: 'Полная проверка работоспособности перед установкой и после монтажа'
    },
    {
      icon: Layers,
      title: 'Монтаж на утепленные фасады',
      description: 'Специализированный монтаж наружных блоков на сложные поверхности'
    },
    {
      icon: Wrench,
      title: 'Штрабление и специальные работы',
      description: 'Штрабление стен, работы с подвесными потолками и другие сложные задачи'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр услуг по установке и обслуживанию кондиционеров в Сочи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('contacts')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 mx-auto"
          >
            <span>Узнать стоимость</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;