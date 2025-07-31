import React from 'react';

function Contact() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Свържи се с нас
        </h2>
        <form className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-3 text-lg">
              Име
            </label>
            <input
              type="text"
              id="name"
              placeholder="Вашето име"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-3 text-lg">
              Имейл
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-3 text-lg">
              Съобщение
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Напишете вашето съобщение..."
              className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 shadow-lg transition"
          >
            Изпрати
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
