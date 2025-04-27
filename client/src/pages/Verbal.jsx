import React, { useEffect, useState } from "react";

const questionBank = [
  { question: "What is the synonym of 'Abandon'?", options: ["Retain", "Forsake", "Adopt", "Support"], answer: "Forsake" },
  { question: "Choose the antonym of 'Benevolent'.", options: ["Kind", "Cruel", "Generous", "Helpful"], answer: "Cruel" },
  { question: "Identify the correctly spelt word.", options: ["Seperate", "Separet", "Separate", "Seperete"], answer: "Separate" },
  { question: "Choose the word that best fits: He is known for his _____ behavior.", options: ["Erratic", "Stable", "Rude", "Aggressive"], answer: "Erratic" },
  { question: "What does the idiom 'Break the ice' mean?", options: ["To break something", "To begin a conversation", "To make someone angry", "To slip on ice"], answer: "To begin a conversation" },
  { question: "Fill in the blank: The cat is hiding _____ the sofa.", options: ["in", "on", "under", "above"], answer: "under" },
  { question: "Which word is opposite in meaning to 'Hostile'?", options: ["Friendly", "Aggressive", "Cruel", "Warlike"], answer: "Friendly" },
  { question: "Choose the correct word: He is good _____ mathematics.", options: ["in", "at", "on", "for"], answer: "at" },
  { question: "Find the synonym of 'Rapid'.", options: ["Slow", "Speedy", "Lazy", "Hard"], answer: "Speedy" },
  { question: "Choose the best word: She gave me a _____ look.", options: ["smile", "smiling", "smiled", "smiles"], answer: "smile" },
  { question: "What is the meaning of the idiom 'Once in a blue moon'?", options: ["Very rarely", "Very frequently", "Always", "Sometimes"], answer: "Very rarely" },
  { question: "Choose the correctly spelt word.", options: ["Accommodate", "Acommodate", "Acomodate", "Accomadate"], answer: "Accommodate" },
  { question: "Which is the plural of 'Cactus'?", options: ["Cactuses", "Cactus", "Cacti", "Cactii"], answer: "Cacti" },
  { question: "What is the opposite of 'Optimistic'?", options: ["Hopeful", "Positive", "Pessimistic", "Cheerful"], answer: "Pessimistic" },
  { question: "Choose the correct word: I _____ a movie last night.", options: ["watch", "watched", "watching", "watches"], answer: "watched" },
  { question: "Which is a synonym of 'Elated'?", options: ["Sad", "Joyful", "Angry", "Nervous"], answer: "Joyful" },
  { question: "Fill in the blank: He was accused _____ theft.", options: ["for", "with", "of", "on"], answer: "of" },
  { question: "Find the antonym of 'Expand'.", options: ["Grow", "Extend", "Shrink", "Enlarge"], answer: "Shrink" },
  { question: "What does the idiom 'Hit the sack' mean?", options: ["To fight", "To go to sleep", "To get angry", "To work hard"], answer: "To go to sleep" },
  { question: "Choose the correct sentence.", options: ["He don't like coffee.", "He doesn't likes coffee.", "He doesn't like coffee.", "He not like coffee."], answer: "He doesn't like coffee." },
  { question: "Which word is a synonym of 'Vivid'?", options: ["Dim", "Bright", "Dull", "Weak"], answer: "Bright" },
  { question: "Choose the correct preposition: She is married _____ a doctor.", options: ["to", "with", "by", "at"], answer: "to" },
  { question: "What is the antonym of 'Generous'?", options: ["Stingy", "Kind", "Helpful", "Gracious"], answer: "Stingy" },
  { question: "Find the correctly spelt word.", options: ["Mischeivous", "Mischievous", "Mischivous", "Mischievious"], answer: "Mischievous" },
  { question: "What does the idiom 'Spill the beans' mean?", options: ["Waste food", "Make a mess", "Reveal a secret", "Speak harshly"], answer: "Reveal a secret" },
  { question: "Identify the part of speech of the word 'quickly'.", options: ["Adjective", "Verb", "Adverb", "Noun"], answer: "Adverb" },
  { question: "Choose the best fit: She is _____ than her sister.", options: ["more tall", "taller", "most tall", "tallest"], answer: "taller" },
  { question: "Which is a synonym of 'Brilliant'?", options: ["Dull", "Smart", "Average", "Slow"], answer: "Smart" },
  { question: "Choose the correct word: They _____ gone already.", options: ["have", "has", "having", "had"], answer: "have" },
  { question: "Choose the antonym of 'Victory'.", options: ["Triumph", "Glory", "Defeat", "Success"], answer: "Defeat" }
];


const getRandomQuestions = () => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
};

const Verbal = () => {
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
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Verbal Quiz</h1>
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

export default Verbal;
