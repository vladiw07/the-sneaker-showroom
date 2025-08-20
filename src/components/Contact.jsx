import React from 'react';

const Contact = React.memo(() => {
  return (
    <section className="w-full bg-green-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-8 text-center">
          Свържи се с нас
        </h2>
        <form className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-green-800 font-semibold mb-2 text-lg">
              Име
            </label>
            <input
              type="text"
              id="name"
              placeholder="Вашето име"
              autoComplete="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-green-300 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-green-800 font-semibold mb-2 text-lg">
              Имейл
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-green-300 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-green-800 font-semibold mb-2 text-lg">
              Съобщение
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Напишете вашето съобщение..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-4 focus:ring-green-300 transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 shadow-lg transition"
          >
            Изпрати
          </button>
        </form>
      </div>
    </section>
  );
});

export default Contact;
