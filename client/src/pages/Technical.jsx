
import React, { useEffect, useState } from "react";

const questionBank = [
    { question: "What is the concept of wrapping data and code together called?", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], answer: "Encapsulation" },
    { question: "Which OOP concept allows using the same function name with different arguments?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: "Polymorphism" },
    { question: "Which of the following is not a feature of OOP?", options: ["Modularity", "Security", "Top-down approach", "Reusability"], answer: "Top-down approach" },
    { question: "In OOP, a class is:", options: ["A function", "An object", "A blueprint for objects", "A loop"], answer: "A blueprint for objects" },
    { question: "Which access specifier allows access only within the same class?", options: ["Public", "Private", "Protected", "Global"], answer: "Private" },
    { question: "What is function overloading?", options: ["Defining multiple functions with same name and different parameters", "Using multiple classes", "Using different functions", "None of these"], answer: "Defining multiple functions with same name and different parameters" },
    { question: "Which of the following is used to achieve runtime polymorphism?", options: ["Function overloading", "Constructor", "Virtual functions", "Inline functions"], answer: "Virtual functions" },
    { question: "What is inheritance in OOP?", options: ["A function inside a class", "A loop", "Acquiring properties of one class into another", "None"], answer: "Acquiring properties of one class into another" },
  
    // OS
    { question: "Which of the following is not an operating system?", options: ["Windows", "Linux", "Oracle", "Mac OS"], answer: "Oracle" },
    { question: "Which scheduling algorithm gives the minimum average waiting time?", options: ["FCFS", "Round Robin", "SJF", "Priority"], answer: "SJF" },
    { question: "In a time-sharing system, CPU scheduling is done using:", options: ["SJF", "Round Robin", "FCFS", "Priority"], answer: "Round Robin" },
    { question: "What is a deadlock?", options: ["Infinite loop", "Two processes waiting for each other to release resources", "Low memory", "Process terminated"], answer: "Two processes waiting for each other to release resources" },
    { question: "Which memory is non-volatile?", options: ["RAM", "ROM", "Cache", "Register"], answer: "ROM" },
    { question: "A process is a:", options: ["Program in high-level language", "Instance of a program in execution", "Compiler", "None of these"], answer: "Instance of a program in execution" },
    { question: "What is a system call?", options: ["Hardware call", "User call", "Request to the OS for a service", "Request to the user"], answer: "Request to the OS for a service" },
  
    // DBMS
    { question: "Which SQL keyword is used to retrieve data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], answer: "SELECT" },
    { question: "Which of the following is a primary key property?", options: ["Duplicate values", "Null values", "Uniqueness", "All of these"], answer: "Uniqueness" },
    { question: "Which normal form eliminates partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: "2NF" },
    { question: "Which command is used to remove a table from a database?", options: ["DELETE", "REMOVE", "DROP", "CLEAR"], answer: "DROP" },
    { question: "Which join returns rows with matching values in both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "OUTER JOIN"], answer: "INNER JOIN" },
    { question: "Which language is used to define database schema?", options: ["DML", "DDL", "TCL", "DCL"], answer: "DDL" },
    { question: "A foreign key is used to:", options: ["Insert data", "Delete data", "Enforce referential integrity", "None"], answer: "Enforce referential integrity" },
    { question: "Which of the following is not a type of database model?", options: ["Hierarchical", "Relational", "Network", "Iterative"], answer: "Iterative" },
  
    // CN
    { question: "What does IP stand for?", options: ["Internet Provider", "Internet Protocol", "Internal Process", "Input Processor"], answer: "Internet Protocol" },
    { question: "What is the default port number for HTTP?", options: ["20", "21", "80", "443"], answer: "80" },
    { question: "Which layer of OSI model is responsible for end-to-end delivery?", options: ["Network", "Transport", "Data Link", "Application"], answer: "Transport" },
    { question: "Which protocol is used to send emails?", options: ["SMTP", "FTP", "HTTP", "SNMP"], answer: "SMTP" },
    { question: "Which of the following uses packet switching?", options: ["Telephone network", "Internet", "Television", "None"], answer: "Internet" },
    { question: "What is the full form of DNS?", options: ["Domain Name Server", "Digital Network System", "Domain Network Service", "Data Name Service"], answer: "Domain Name Server" },
    { question: "Which device connects two different networks?", options: ["Switch", "Router", "Hub", "Repeater"], answer: "Router" }
  ];
  

const getRandomQuestions = () => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
};

const Technical = () => {
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
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Technical Quiz</h1>
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

export default Technical;