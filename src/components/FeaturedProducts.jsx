import React from 'react';
import { motion } from 'framer-motion';
import urbanImage from '../assets/images/urban-1.jpg';
import chillImage from '../assets/images/urban-2.png';
import streetImage from '../assets/images/urban-3.jpg';

const FeaturedProducts = () => {
  const features = [
    {
      title: 'Urban Flow',
      description: 'Когато стилът срещне улицата.',
      image: urbanImage,
    },
    {
      title: 'City Rhythm',
      description: 'Изрази себе си с всяка крачка.',
      image: chillImage,
    },
    {
      title: 'Street Freedom',
      description: 'Комфорт и характер за ежедневието.',
      image: streetImage,
    },
  ];

  return (
    <section className="w-full px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
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
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-72 md:h-64 object-cover rounded-t-xl transform hover:scale-105 transition-transform duration-500 ${
                    index === 0
                      ? 'object-[center_60%] md:object-center'
                      : index === 1
                      ? 'object-[center_40%] md:object-center'
                      : 'object-center'
                  }`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
