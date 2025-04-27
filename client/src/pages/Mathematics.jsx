import React, { useEffect, useState } from "react";

const questionBank = [
 { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: "cos(x)" },
  { question: "If A = 3x³, what is dA/dx?", options: ["9x²", "3x²", "6x", "9x"], answer: "9x²" },
  { question: "What is the value of log(1)?", options: ["0", "1", "Undefined", "Infinity"], answer: "0" },
  { question: "Solve for x: 2x + 5 = 15", options: ["5", "10", "15", "20"], answer: "5" },
  { question: "What is the area of a circle with radius r?", options: ["πr²", "2πr", "πr", "πr³"], answer: "πr²" },
  { question: "The integral of x² dx is?", options: ["x³/3", "x²/2", "2x", "3x²"], answer: "x³/3" },
  { question: "What is the probability of getting a 3 when a die is rolled once?", options: ["1/6", "1/3", "1/2", "1/4"], answer: "1/6" },
  { question: "If det(A) = 0 for a matrix A, then A is?", options: ["Singular", "Non-Singular", "Identity", "Orthogonal"], answer: "Singular" },
  { question: "What is the value of cos(90°)?", options: ["0", "1", "-1", "Undefined"], answer: "0" },
  { question: "In statistics, mean is also called?", options: ["Average", "Mode", "Median", "Range"], answer: "Average" },
  { question: "The Laplace transform of 1 is?", options: ["1/s", "s", "0", "1"], answer: "1/s" },
  { question: "Which of the following is a prime number?", options: ["19", "21", "27", "35"], answer: "19" },
  { question: "What is the sum of first 10 natural numbers?", options: ["55", "50", "60", "45"], answer: "55" },
  { question: "If two events are independent, P(A ∩ B) = ?", options: ["P(A)P(B)", "P(A)+P(B)", "P(A)-P(B)", "P(A)/P(B)"], answer: "P(A)P(B)" },
  { question: "What is the modulus of -7?", options: ["7", "-7", "0", "1"], answer: "7" },
  { question: "The limit of (sin x)/x as x approaches 0 is?", options: ["1", "0", "∞", "Undefined"], answer: "1" },
  { question: "In a quadratic equation ax² + bx + c = 0, the sum of roots is?", options: ["-b/a", "-c/a", "c/a", "b/a"], answer: "-b/a" },
  { question: "Matrix multiplication is?", options: ["Not Commutative", "Commutative", "Always Inverse", "Always Zero"], answer: "Not Commutative" },
  { question: "What is the value of i² where i is imaginary unit?", options: ["-1", "1", "0", "i"], answer: "-1" },
  { question: "Which function is periodic?", options: ["sin(x)", "x²", "e^x", "x³"], answer: "sin(x)" },
  { question: "What is the formula for the perimeter of a rectangle?", options: ["2(l + b)", "l × b", "l + b", "l² + b²"], answer: "2(l + b)" },
  { question: "If vectors a and b are perpendicular, then a·b is?", options: ["0", "1", "a+b", "a-b"], answer: "0" },
  { question: "The matrix A is said to be symmetric if?", options: ["A = Aᵀ", "A = -Aᵀ", "A² = A", "AAᵀ = I"], answer: "A = Aᵀ" },
  { question: "Solve: √(49)", options: ["7", "14", "24.5", "6"], answer: "7" },
  { question: "What is the standard deviation of a constant number set?", options: ["0", "1", "Infinity", "Undefined"], answer: "0" },
  { question: "The inverse of an invertible matrix A is denoted as?", options: ["A⁻¹", "Aᵀ", "A*", "A⁺"], answer: "A⁻¹" },
  { question: "What is the binomial expansion of (a+b)²?", options: ["a²+2ab+b²", "a²+b²", "2a+2b", "a²-ab+b²"], answer: "a²+2ab+b²" },
  { question: "What is the sum of interior angles of a triangle?", options: ["180°", "360°", "90°", "270°"], answer: "180°" },
  { question: "In polar coordinates, x = ?", options: ["r cosθ", "r sinθ", "r", "θ"], answer: "r cosθ" },
  { question: "What is e^(ln x)?", options: ["x", "e", "ln(x)", "1"], answer: "x" }

];

const getRandomQuestions = () => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
};

const Mathematics = () => {
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
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Mathematics Quiz</h1>
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

export default Mathematics;
