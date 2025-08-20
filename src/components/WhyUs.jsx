import React from 'react';
import { FaBolt, FaCrown, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const features = [
  {
    icon: <FaBolt className="text-green-600 text-4xl mb-6" />,
    title: 'Енергия и израз',
    description: 'Дизайни, вдъхновени от уличната култура и индивидуалността на всяко движение.',
  },
  {
    icon: <FaCrown className="text-green-600 text-4xl mb-6" />,
    title: 'Ограничени серии',
    description: 'Всеки модел е част от селектирана серия, за да подчертае твоята уникалност.',
  },
  {
    icon: <FaUsers className="text-green-600 text-4xl mb-6" />,
    title: 'Общност от стил',
    description: 'Свързваме хора с визия и отношение към градската култура.',
  },
];

const WhyUs = React.memo(() => {
  return (
    <section className="bg-green-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-12">
          Стил с мисия
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{item.title}</h3>
              <p className="text-green-700 max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default WhyUs;
