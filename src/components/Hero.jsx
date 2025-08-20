import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/pexels-aj-collins-artistry-1772576281-33232901.jpg';

const Hero = React.memo(() => {
  return (
    <section className="w-full relative bg-gradient-to-br from-white via-green-50 to-green-100 py-8 px-6 overflow-hidden">
      {/* Decorative blur background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 z-0"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 z-10">
        {/* Text content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold text-green-900 leading-tight tracking-tight">
            Открий своя <span className="text-green-600">стил</span>
          </h1>
          <p className="mt-6 text-lg text-green-700 max-w-md leading-relaxed">
            Най-новите модели кецове за твоето ежедневие.<br />
            Модерни, удобни и създадени да се открояват.
          </p>
          <motion.button
            className="mt-8 px-7 py-3 bg-green-700 text-white rounded-full hover:bg-green-600 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Разгледай моделите
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src={heroImage}
            alt="Модерен кец"
            loading="lazy"
            className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
