import React from 'react';
import { Shield, Users, Award, Settings } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Тестируем оборудование перед установкой'
    },
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Профессиональные специалисты с многолетним опытом'
    },
    {
      icon: Award,
      title: 'Высокий рейтинг',
      description: 'Клиенты оценивают нашу работу на 5 баллов'
    },
    {
      icon: Settings,
      title: 'Сложные работы',
      description: 'Выполняем монтаж любой сложности'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">О нас</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>ЮгСочиКлимат</strong> предоставляет услуги по установке кондиционеров жителям Сочи. 
              Мы работаем с офисами, магазинами, квартирами и другими помещениями.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Наши специалисты тестируют оборудование перед установкой, а при необходимости выполняют 
              сложные работы: монтаж наружного блока на утепленный фасад, штрабление стен под фреоновую 
              магистраль, разбор подвесных потолков и другие задачи.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы всегда заранее информируем клиентов о специфике работ. 
              <span className="text-blue-600 font-semibold"> Наши клиенты единодушно оценивают нашу работу на 5 баллов!</span>
            </p>
          </div>
          <div>
            <img
              src="\src\assets\заглушка.webp"
              alt="Процесс установки кондиционера"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;