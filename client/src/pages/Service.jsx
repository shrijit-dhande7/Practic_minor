
// import React from 'react'

// const Service = () => {
//   return (
//     <div>
//       <h1>service</h1>
//     </div>
//   )
// }

// export default Service

import React from 'react';

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Services</h1>

        {/* Intro Paragraph */}
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-12">
          At Placement Preparation, we offer a range of services to help you succeed in your placement journey.
          Whether you're just starting out or getting ready for interviews, our services are built to match every step of your career growth.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Resume Builder</h3>
            <p className="text-gray-600">
              Build a professional resume in minutes using our easy templates designed for placements and job applications.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Aptitude & Verbal Quiz</h3>
            <p className="text-gray-600">
              Sharpen your aptitude and verbal reasoning with our topic-wise and full-length quizzes for competitive exams.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">DSA Practice Tracker</h3>
            <p className="text-gray-600">
              Master data structures and algorithms with a structured tracker — track your progress and stay motivated!
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Mock Interviews</h3>
            <p className="text-gray-600">
              (Coming Soon) Practice real interview scenarios with expert mock interviews and detailed feedback sessions.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Company Specific Preparation</h3>
            <p className="text-gray-600">
              (Coming Soon) Tailored preparation for companies like TCS, Infosys, Wipro, Amazon, and many more!
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Career Guidance</h3>
            <p className="text-gray-600">
              (Coming Soon) Get personalized career advice, resume reviews, and growth roadmaps from industry experts.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Service;
