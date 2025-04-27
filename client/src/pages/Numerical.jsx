

import React, { useEffect, useState } from "react";

const questionBank = [
    { question: "What is 25% of 240?", options: ["60", "50", "70", "55"], answer: "60" },
    { question: "If 5 pens cost ₹60, what is the cost of 8 pens?", options: ["₹96", "₹48", "₹120", "₹100"], answer: "₹96" },
    { question: "What is the average of 5, 10, 15, 20, and 25?", options: ["15", "18", "20", "12"], answer: "15" },
    { question: "A man walks 20 km in 4 hours. What is his speed?", options: ["4 km/h", "5 km/h", "6 km/h", "8 km/h"], answer: "5 km/h" },
    { question: "If 12 men can do a work in 15 days, how many days will 6 men take to do the same work?", options: ["30", "25", "20", "15"], answer: "30" },
    { question: "What is the next number in the series: 2, 6, 12, 20, 30, ?", options: ["40", "42", "36", "38"], answer: "42" },
    { question: "The selling price of an article is ₹240, and the profit is 20%. What is the cost price?", options: ["₹200", "₹220", "₹250", "₹210"], answer: "₹200" },
    { question: "If A:B = 2:3 and B:C = 4:5, then A:C is:", options: ["8:15", "2:5", "3:5", "4:15"], answer: "8:15" },
    { question: "The simple interest on ₹5000 at 5% per annum for 2 years is:", options: ["₹500", "₹250", "₹600", "₹550"], answer: "₹500" },
    { question: "A train 100m long crosses a pole in 10 seconds. Its speed is:", options: ["10 m/s", "15 m/s", "12 m/s", "8 m/s"], answer: "10 m/s" },
    { question: "If 3x + 2 = 11, what is x?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "What is the square root of 625?", options: ["25", "20", "30", "15"], answer: "25" },
    { question: "The LCM of 12 and 15 is:", options: ["60", "30", "45", "90"], answer: "60" },
    { question: "A shopkeeper earns 10% profit on selling a shirt for ₹220. What is the cost price?", options: ["₹200", "₹210", "₹190", "₹250"], answer: "₹200" },
    { question: "If the perimeter of a square is 36 cm, what is its area?", options: ["81 cm²", "64 cm²", "100 cm²", "121 cm²"], answer: "81 cm²" },
    { question: "What is 15% of 300?", options: ["45", "30", "50", "60"], answer: "45" },
    { question: "A car covers 180 km in 3 hours. What is the speed?", options: ["60 km/h", "50 km/h", "70 km/h", "55 km/h"], answer: "60 km/h" },
    { question: "What is the cube of 4?", options: ["64", "16", "32", "12"], answer: "64" },
    { question: "If a number is divided by 5, the remainder is 3. What is the number if the quotient is 4?", options: ["23", "21", "19", "18"], answer: "23" },
    { question: "A person spends 80% of his income. If his income is ₹5000, what is his savings?", options: ["₹1000", "₹800", "₹1200", "₹1500"], answer: "₹1000" },
    { question: "Find the missing number: 9, 18, 36, __, 144", options: ["54", "72", "96", "108"], answer: "72" },
    { question: "What is the HCF of 36 and 48?", options: ["12", "6", "8", "4"], answer: "12" },
    { question: "If a = 5, b = 3, then the value of a² + b² is:", options: ["34", "28", "30", "36"], answer: "34" },
    { question: "A boat covers 30 km downstream in 2 hours. What is the speed?", options: ["15 km/h", "12 km/h", "18 km/h", "20 km/h"], answer: "15 km/h" },
    { question: "What is 3/4 of 64?", options: ["48", "52", "56", "60"], answer: "48" },
    { question: "What is the area of a rectangle with length 12 cm and breadth 8 cm?", options: ["96 cm²", "100 cm²", "88 cm²", "84 cm²"], answer: "96 cm²" },
    { question: "If 6x = 54, then x is:", options: ["9", "8", "6", "7"], answer: "9" },
    { question: "The difference between the square of 12 and the square of 11 is:", options: ["23", "25", "121", "143"], answer: "23" },
    { question: "If a person loses 10% on selling a product at ₹180, what is the cost price?", options: ["₹200", "₹190", "₹170", "₹160"], answer: "₹200" },
    { question: "What is the sum of first 10 natural numbers?", options: ["55", "45", "65", "50"], answer: "55" }
  ];
  


const getRandomQuestions = () => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
};

const Numerical = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const selected = getRandomQuestions();
    setQuestions(selected);
  }, []);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = 0;

    questions.forEach((q, i) => {
      const key = `q${i + 1}`;
      if (answers[key] === q.answer) result++;
    });

    setScore(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Numerical Ability Quiz</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div key={index} className="mb-6">
              <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
              {q.options.map((option, i) => (
                <label key={i} className="block mb-1">
                  <input
                    type="radio"
                    name={`q${index + 1}`}
                    value={option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        {score !== null && (
          <div className="mt-6 text-center text-xl font-bold text-green-600">
            You got {score} out of 15 correct!
          </div>
        )}
      </div>
    </div>
  );
};

export default Numerical;