import React from 'react';
import { motion } from 'framer-motion';
import urbanImage from '../assets/images/urban-1.jpg';
import chillImage from '../assets/images/urban-2.png';
import streetImage from '../assets/images/urban-3.jpg';

const features = [
  {
    title: 'Urban Flow',
    description: 'Стил, който отразява динамиката на градските улици.',
    image: urbanImage,
    objectPosition: '10% 90%',
  },
  {
    title: 'City Rhythm',
    description: 'Нека всяка твоя крачка бъде израз на твоя стил.',
    image: chillImage,
    objectPosition: '80% 30%',
  },
  {
    title: 'Street Freedom',
    description: 'Комфорт и индивидуалност за твоето ежедневие.',
    image: streetImage,
    objectPosition: '80% 30%',
  },
];

const FeaturedProducts = React.memo(() => {
  return (
    <section className="w-full px-6 py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 text-center mb-12">
          Избрани визии
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ objectPosition: item.objectPosition }}
                  className="w-full h-72 md:h-64 object-cover rounded-t-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-indigo-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturedProducts;
