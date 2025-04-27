

import React, { useEffect, useState } from "react";

const questionBank = [
    { question: "What comes next in the series: 2, 4, 8, 16, ?", options: ["20", "24", "32", "30"], answer: "32" },
    { question: "If in a code language, CAT is written as DBU, how is DOG written?", options: ["EPH", "DPI", "EOG", "ENH"], answer: "EPH" },
    { question: "Ravi is the brother of Sonali. Sonali is the daughter of Meena. How is Meena related to Ravi?", options: ["Sister", "Mother", "Aunt", "Cousin"], answer: "Mother" },
    { question: "If A = 1, B = 2, ..., Z = 26, then what is the value of the word ‘BAD’?", options: ["7", "9", "12", "11"], answer: "7" },
    { question: "Which number is missing: 5, 11, 23, 47, ?", options: ["95", "93", "91", "90"], answer: "95" },
    { question: "Find the odd one out: 3, 5, 7, 9, 11", options: ["3", "5", "7", "9"], answer: "9" },
    { question: "If SOUTH is coded as 41596, and NORTH is coded as 23964, then SAND is coded as?", options: ["4213", "4123", "4312", "4321"], answer: "4213" },
    { question: "A is to the East of B, B is to the North of C. In which direction is A with respect to C?", options: ["North-East", "South-West", "North-West", "South-East"], answer: "North-East" },
    { question: "If in a certain code, ROPE is written as 6821 and CHAIR is written as 73456, then POACH is written as?", options: ["82173", "28473", "81473", "81436"], answer: "81473" },
    { question: "Choose the word which is different from the rest: Apple, Mango, Banana, Carrot", options: ["Apple", "Mango", "Banana", "Carrot"], answer: "Carrot" },
    { question: "Which number replaces the question mark: 2, 6, 12, 20, ?", options: ["30", "28", "24", "32"], answer: "30" },
    { question: "If 'book' is called 'pen', 'pen' is called 'pencil', 'pencil' is called 'paper', what do you write with?", options: ["Pen", "Pencil", "Paper", "Book"], answer: "Pencil" },
    { question: "Introducing a man, a woman said, ‘He is the only son of my mother’s mother.’ Who is the man to the woman?", options: ["Brother", "Cousin", "Uncle", "Father"], answer: "Uncle" },
    { question: "Which comes next in the pattern: A, C, F, J, O, ?", options: ["S", "T", "U", "V"], answer: "U" },
    { question: "If 'MANGO' is written as 'NZOHQ', how is 'APPLE' written?", options: ["BQQMF", "ZQQMF", "BQQNE", "COOMF"], answer: "BQQMF" },
    { question: "Find the next number in the series: 1, 4, 9, 16, 25, ?", options: ["36", "49", "30", "45"], answer: "36" },
    { question: "If 1 = 5, 2 = 25, 3 = 325, 4 = 4325, then 5 = ?", options: ["54325", "5325", "532", "432"], answer: "54325" },
    { question: "In a certain code, ‘MOTHER’ is written as ‘NPUIGS’. How is ‘FATHER’ written in that code?", options: ["GBUIFS", "GBVIFS", "GBWJFS", "GAUIFS"], answer: "GBUIFS" },
    { question: "Pointing to a girl, Raj said, 'She is the daughter of the only son of my father'. How is the girl related to Raj?", options: ["Daughter", "Niece", "Cousin", "Sister"], answer: "Daughter" },
    { question: "Which number should come next: 3, 6, 11, 18, 27, ?", options: ["36", "38", "40", "37"], answer: "38" },
    { question: "Which is the odd one out: Square, Circle, Triangle, Cube", options: ["Square", "Circle", "Triangle", "Cube"], answer: "Cube" },
    { question: "If RED is coded as 672, and BLUE is 5381, what is the code for ‘BED’?", options: ["681", "682", "673", "672"], answer: "681" },
    { question: "A man starts walking East, then turns left, then again turns left. In which direction is he walking now?", options: ["West", "North", "East", "South"], answer: "West" },
    { question: "If ‘TABLE’ is coded as 21345 and ‘CHAIR’ is coded as 67589, how is ‘REACH’ coded?", options: ["98567", "95876", "95867", "98576"], answer: "98567" },
    { question: "If 2 + 3 = 13, 3 + 4 = 25, 4 + 5 = 41, then 5 + 6 = ?", options: ["61", "65", "63", "71"], answer: "61" },
    { question: "Which letter is two to the right of the letter which is fourth to the left of H?", options: ["E", "F", "G", "D"], answer: "F" },
    { question: "How many triangles are there in a triangle divided into 4 smaller equal triangles?", options: ["4", "6", "8", "5"], answer: "6" },
    { question: "If A = 1, B = 2, C = 3, what is the value of Z?", options: ["26", "24", "25", "23"], answer: "26" },
    { question: "Which word cannot be made from the letters of the word ‘EXAMINATION’?", options: ["MOTION", "NATION", "TAXI", "NOMINEE"], answer: "NOMINEE" },
    { question: "Find the odd one: 121, 144, 169, 225, 256, 289, 324, 350", options: ["144", "289", "350", "256"], answer: "350" }
  ];
  

const getRandomQuestions = () => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
};

const Resouning = () => {
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
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Logical Reasoning Quiz</h1>
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

export default Resouning;