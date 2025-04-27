import { Link } from "react-router-dom";
import React from "react";

const Home_2 = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center mb-16 px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Your Placement Journey, <span className="text-blue-600">Simplified!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore a powerful suite of tools tailored to help you prepare, track, and succeed in your placement journey.
          </p>
        </div>

        <div className="container mx-auto flex flex-col gap-24 px-4 max-w-5xl">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 md:w-1/2 flex flex-col items-center text-center 
            transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl text-blue-600 mb-6">📚</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Aptitude & Technical Prep</h4>
              <p className="text-gray-600 text-base mb-6">
                Master quantitative aptitude and core technical subjects with structured learning paths.
              </p>
              <Link 
                to="/quiz" 
                className="text-blue-600 font-medium hover:text-blue-500 transition"
              >
                Explore Modules →
              </Link>
            </div>
            <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
              <p>
                Our <span className="font-semibold text-blue-600">Aptitude & Technical Preparation</span> feature offers curated quizzes, video tutorials,
                and mock tests to strengthen your fundamentals. Ideal for both freshers and experienced professionals.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-24">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 md:w-1/2 flex flex-col items-center text-center
            transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl text-green-600 mb-6">📈</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">DSA Tracker</h4>
              <p className="text-gray-600 text-base mb-6">
                Track your Data Structures & Algorithms progress with detailed analytics.
              </p>
              <Link 
                to="/dsatracker" 
                className="text-green-600 font-medium hover:text-green-500 transition"
              >
                Track Progress →
              </Link>
            </div>
            <div className="md:w-1/2 text-gray-700 text-lg text-right leading-relaxed">
              <p>
                Visualize your <span className="font-semibold text-green-600">DSA practice</span> with charts, streak counters, and milestone badges.
                Get insights into weak areas and build smarter routines.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 md:w-1/2 flex flex-col items-center text-center 
            transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl text-purple-600 mb-6">📄</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Resume Builder</h4>
              <p className="text-gray-600 text-base mb-6">
                Create professional resumes with AI-powered suggestions and elegant templates.
              </p>
              <Link 
                to="/resume" 
                className="text-purple-600 font-medium hover:text-purple-500 transition"
              >
                Build Resume →
              </Link>
            </div>
            <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
              <p>
                The <span className="font-semibold text-purple-600">Resume Builder</span> helps you craft ATS-friendly resumes in minutes.
                Choose from modern templates, get keyword tips, and export with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home_2;
