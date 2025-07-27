import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Александр Петров',
      text: 'Отличная работа! Установили кондиционер в квартире быстро и качественно. Все объяснили, показали. Рекомендую!',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      text: 'Профессиональная команда. Даже штрабили стену под магистраль - сделали аккуратно, убрали за собой. Спасибо!',
      rating: 5
    },
    {
      name: 'Дмитрий Смирнов',
      text: 'Устанавливали кондиционер в офисе. Работали быстро, без лишнего шума. Персонал доволен комфортом!',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-xl text-gray-600">
            Наши клиенты оценивают нас на <span className="text-blue-600 font-semibold">5 баллов</span> за профессионализм и качество работы!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-200">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                </div>
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Хотите оставить отзыв?</h3>
            <p className="text-gray-600 mb-6">Мы будем рады услышать ваше мнение о нашей работе</p>
            <a
              href="tel:+79189042122"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;