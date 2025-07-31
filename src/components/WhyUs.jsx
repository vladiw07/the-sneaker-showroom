import React from 'react';
import { FaBolt, FaCrown, FaUsers } from 'react-icons/fa';

const WhyUs = () => {
  const features = [
    {
      icon: <FaBolt className="text-indigo-600 text-3xl mb-4" />,
      title: 'Енергия и израз',
      description: 'Дизайни, вдъхновени от уличната култура и индивидуалността на всяко движение.',
    },
    {
      icon: <FaCrown className="text-indigo-600 text-3xl mb-4" />,
      title: 'Ограничени серии',
      description: 'Всеки модел е част от селектирана серия, за да подчертае твоята уникалност.',
    },
    {
      icon: <FaUsers className="text-indigo-600 text-3xl mb-4" />,
      title: 'Общност от стил',
      description: 'Свързваме хора с визия и отношение към градската култура.',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          Стил с мисия
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
