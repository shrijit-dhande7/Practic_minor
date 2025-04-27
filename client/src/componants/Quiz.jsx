import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar2';
const Quiz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">Practice Quiz</h1>

      <div className="flex flex-col items-center gap-8 w-full">

        <Link
          to="/quiz/numerical-ability"
          className="w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-3">Numerical Ability</h2>
          <p className="text-gray-600 text-lg">Sharpen your math and number skills.</p>
        </Link>

        <Link
          to="/quiz/reasoning"
          className="w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-3">Reasoning</h2>
          <p className="text-gray-600 text-lg">Challenge your logical thinking.</p>
        </Link>

        <Link
          to="/quiz/verbal-ability"
          className="w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-3">Verbal Ability</h2>
          <p className="text-gray-600 text-lg">Improve your communication and language skills.</p>
        </Link>

        <Link
          to="/quiz/technical"
          className="w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-3">Technical</h2>
          <p className="text-gray-600 text-lg">Test your technical and engineering knowledge.</p>
        </Link>

        <Link
          to="/quiz/mathematics"
          className="w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-red-600 mb-3">Mathematics</h2>
          <p className="text-gray-600 text-lg">Deep dive into mathematical concepts and problem-solving.</p>
        </Link>

      </div>
    </div>
  );
};

export default Quiz;
