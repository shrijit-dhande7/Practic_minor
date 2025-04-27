import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About Placement Preparation</h1>
        
        {/* Intro Paragraph */}
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-12">
          Welcome to Placement Preparation — your one-stop platform designed to help you ace your dream job! 
          We empower students and job seekers with the right tools and resources needed for effective preparation.
        </p>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: to make placement preparation easy, accessible, and effective for everyone. 
            We focus on building your skills, boosting your confidence, and helping you land your ideal job roles with the right preparation strategies.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Placement Preparation?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Comprehensive quizzes to test your verbal, aptitude, and logical reasoning skills.</li>
            <li>Professional resume builder tailored for freshers and experienced candidates.</li>
            <li>Structured DSA Tracker to help you practice and master data structures and algorithms efficiently.</li>
            <li>Real-world interview preparation tips and mock interviews coming soon!</li>
          </ul>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-8 text-center">Our Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Resume Builder</h3>
              <p className="text-gray-600">
                Create a standout resume quickly with our easy-to-use resume builder designed for all career stages.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Quiz Section</h3>
              <p className="text-gray-600">
                Test your aptitude, reasoning, and verbal skills with topic-wise and full-length quizzes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">DSA Tracker</h3>
              <p className="text-gray-600">
                Practice important DSA questions and track your progress with our powerful tracker.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
