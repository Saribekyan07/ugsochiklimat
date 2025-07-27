import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами для консультации и заказа услуг
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Адрес</h3>
                <p className="text-gray-600">Россия, Сочи, Пластунская улица, 151/1</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Телефон</h3>
                <a
                  href="tel:+79189042122"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-lg font-medium"
                >
                  +7 (918) 904-21-22
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">График работы</h3>
                <p className="text-gray-600">Пн-Вс: 09:00–18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Закажите установку сегодня!</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Профессиональная установка кондиционеров с гарантией качества
            </p>
            <a
              href="tel:+79189042122"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block text-lg font-semibold"
            >
              Позвонить сейчас
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;