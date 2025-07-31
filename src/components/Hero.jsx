import React from 'react';
import heroImage from '../assets/images/pexels-aj-collins-artistry-1772576281-33232901.jpg';

function Hero() {
  return (
    <section className="w-full relative bg-gradient-to-br from-white via-slate-50 to-gray-100 py-24 px-6 overflow-hidden">
  {/* Decorative blur background */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 z-0"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 z-10">
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Открий своя <span className="text-indigo-600">стил</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
        Най-новите модели кецове за твоето ежедневие.<br />
        Модерни, удобни и създадени да се открояват.
      </p>
      <button className="mt-8 px-7 py-3 bg-gray-900 text-white rounded-full hover:bg-indigo-600 hover:shadow-lg transition-all duration-300">
        Разгледай моделите
      </button>
    </div>

    <div className="md:w-1/2">
      <img
        src={heroImage}
        alt="Модерен кец"
        className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</section>

  );
}

export default Hero;
