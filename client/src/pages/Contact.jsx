import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Contact Us</h1>

        {/* Intro Paragraph */}
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-12">
          Need assistance, have questions, or just want to connect? We're here to help you in your placement journey.
          Explore the different ways you can reach us.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Email</h3>
            <p className="text-gray-600">support@placementprep.com</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9876543210</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Location</h3>
            <p className="text-gray-600">Remote | Online Platform</p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Business Hours */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Business Hours</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Support Information */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Support Information</h3>
            <p className="text-gray-600">
              Our dedicated support team is available to answer your queries, resolve issues, 
              and provide guidance related to resume building, quiz practice, DSA tracking, and more.
              <br /><br />
              Average response time: 24-48 business hours.
            </p>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">

            {/* FAQ 1 */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">How do I track my DSA progress?</h4>
              <p className="text-gray-600">
                You can use our DSA Tracker under your dashboard. Progress will be updated automatically as you solve problems.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Can I access quizzes for free?</h4>
              <p className="text-gray-600">
                Yes! Our aptitude and verbal quizzes are free to attempt. Premium quizzes are available under the premium plan.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Do you offer resume reviews?</h4>
              <p className="text-gray-600">
                Yes, resume review and improvement services are coming soon! Stay tuned.
              </p>
            </div>

          </div>
        </div>

        {/* Final Note */}
        <div className="text-center text-gray-600 text-sm mt-12">
          <p>Placement Preparation © {new Date().getFullYear()} | Helping You Build A Better Future</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
