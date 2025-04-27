//&&% making changes
import React, { useState } from "react";
import { ChartPieIcon, FilmIcon } from "@heroicons/react/24/solid";

const DsaTracker = () => {
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [showSolved, setShowSolved] = useState(false);

  // Sample data array
  const dsaProblems = [
    {
      id: 1,
      title: "Two Sum",
      link: "https://leetcode.com/problems/two-sum/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Reverse Linked List",
      link: "https://leetcode.com/problems/reverse-linked-list/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Trapping Rain Water",
      link: "https://leetcode.com/problems/trapping-rain-water/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    // Easy Problems
    {
      id: 4,
      title: "Valid Parentheses",
      link: "https://leetcode.com/problems/valid-parentheses/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 5,
      title: "Palindrome Number",
      link: "https://leetcode.com/problems/palindrome-number/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 6,
      title: "Merge Two Sorted Lists",
      link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    // Medium Problems
    {
      id: 7,
      title: "Add Two Numbers",
      link: "https://leetcode.com/problems/add-two-numbers/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 8,
      title: "Longest Substring Without Repeating Characters",
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 9,
      title: "Container With Most Water",
      link: "https://leetcode.com/problems/container-with-most-water/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    // Hard Problems
    {
      id: 10,
      title: "Median of Two Sorted Arrays",
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 11,
      title: "Regular Expression Matching",
      link: "https://leetcode.com/problems/regular-expression-matching/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    // Continue the pattern...
    {
      id: 12,
      title: "Merge k Sorted Lists",
      link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 13,
      title: "Binary Tree Inorder Traversal",
      link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 14,
      title: "Maximum Subarray",
      link: "https://leetcode.com/problems/maximum-subarray/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 15,
      title: "LRU Cache",
      link: "https://leetcode.com/problems/lru-cache/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    
    {
      id: 16,
      title: "N-Queens",
      link: "https://leetcode.com/problems/n-queens/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 17,
      title: "Climbing Stairs",
      link: "https://leetcode.com/problems/climbing-stairs/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 18,
      title: "Best Time to Buy and Sell Stock",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 19,
      title: "Symmetric Tree",
      link: "https://leetcode.com/problems/symmetric-tree/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 20,
      title: "Minimum Depth of Binary Tree",
      link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 21,
      title: "Course Schedule",
      link: "https://leetcode.com/problems/course-schedule/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 22,
      title: "Word Break",
      link: "https://leetcode.com/problems/word-break/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 23,
      title: "Find Peak Element",
      link: "https://leetcode.com/problems/find-peak-element/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 24,
      title: "Number of Islands",
      link: "https://leetcode.com/problems/number-of-islands/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 25,
      title: "Rotting Oranges",
      link: "https://leetcode.com/problems/rotting-oranges/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 26,
      title: "Word Ladder",
      link: "https://leetcode.com/problems/word-ladder/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 27,
      title: "Minimum Window Substring",
      link: "https://leetcode.com/problems/minimum-window-substring/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 28,
      title: "Edit Distance",
      link: "https://leetcode.com/problems/edit-distance/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 29,
      title: "Longest Valid Parentheses",
      link: "https://leetcode.com/problems/longest-valid-parentheses/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 30,
      title: "Sliding Window Maximum",
      link: "https://leetcode.com/problems/sliding-window-maximum/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 31,
      title: "Lowest Common Ancestor of a Binary Tree",
      link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 32,
      title: "Kth Largest Element in an Array",
      link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 33,
      title: "Validate Binary Search Tree",
      link: "https://leetcode.com/problems/validate-binary-search-tree/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 34,
      title: "Implement Trie (Prefix Tree)",
      link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 35,
      title: "Serialize and Deserialize Binary Tree",
      link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 36,
      title: "Alien Dictionary",
      link: "https://leetcode.com/problems/alien-dictionary/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 37,
      title: "Detect Cycle in a Linked List",
      link: "https://leetcode.com/problems/linked-list-cycle/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 38,
      title: "Intersection of Two Linked Lists",
      link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 39,
      title: "Binary Search",
      link: "https://leetcode.com/problems/binary-search/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 40,
      title: "Search in Rotated Sorted Array",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 41,
      title: "Combination Sum",
      link: "https://leetcode.com/problems/combination-sum/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 42,
      title: "Subsets",
      link: "https://leetcode.com/problems/subsets/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 43,
      title: "Permutations",
      link: "https://leetcode.com/problems/permutations/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 44,
      title: "Implement Queue using Stacks",
      link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Easy"
    },
    {
      id: 45,
      title: "Evaluate Reverse Polish Notation",
      link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 46,
      title: "Largest Rectangle in Histogram",
      link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Hard"
    },
    {
      id: 47,
      title: "Course Schedule II",
      link: "https://leetcode.com/problems/course-schedule-ii/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 48,
      title: "Find the Duplicate Number",
      link: "https://leetcode.com/problems/find-the-duplicate-number/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 49,
      title: "Graph Valid Tree",
      link: "https://leetcode.com/problems/graph-valid-tree/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    },
    {
      id: 50,
      title: "Pacific Atlantic Water Flow",
      link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      solutionLink: "https://youtu.be/...",
      difficulty: "Medium"
    }
  ];
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleSolved = (problemId) => {
    setSolvedProblems(prev => 
      prev.includes(problemId)
        ? prev.filter(id => id !== problemId)
        : [...prev, problemId]
    );
  };

  // Progress calculations
  const totalProblems = dsaProblems.length;
  const solvedCount = solvedProblems.length;
  const progressPercentage = (solvedCount / totalProblems) * 100;

  // Difficulty counts
  const difficultyCounts = {
    easy: dsaProblems.filter(p => p.difficulty === 'Easy').length,
    medium: dsaProblems.filter(p => p.difficulty === 'Medium').length,
    hard: dsaProblems.filter(p => p.difficulty === 'Hard').length
  };

  const solvedByDifficulty = {
    easy: dsaProblems.filter(p => p.difficulty === 'Easy' && solvedProblems.includes(p.id)).length,
    medium: dsaProblems.filter(p => p.difficulty === 'Medium' && solvedProblems.includes(p.id)).length,
    hard: dsaProblems.filter(p => p.difficulty === 'Hard' && solvedProblems.includes(p.id)).length
  };

  const CircleProgress = ({ percentage, color, label, count }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            className={color}
            strokeWidth="10"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage)}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{count}</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium">{label}</span>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">DSA Progress Tracker</h2>
          <div className="flex items-center space-x-4">
            <ChartPieIcon className="h-6 w-6 text-blue-500" />
            <span className="text-lg">
              {solvedCount}/{totalProblems} Solved
            </span>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="flex mb-2 items-center justify-between">
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <span className="text-sm font-medium text-green-600">
              Easy: {solvedByDifficulty.easy}/{difficultyCounts.easy}
            </span>
            <span className="text-sm font-medium text-yellow-600">
              Medium: {solvedByDifficulty.medium}/{difficultyCounts.medium}
            </span>
            <span className="text-sm font-medium text-red-600">
              Hard: {solvedByDifficulty.hard}/{difficultyCounts.hard}
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-around">
          <CircleProgress
            percentage={solvedByDifficulty.easy / difficultyCounts.easy}
            color="text-green-400"
            label="Easy"
            count={solvedByDifficulty.easy}
          />
          <CircleProgress
            percentage={solvedByDifficulty.medium / difficultyCounts.medium}
            color="text-yellow-400"
            label="Medium"
            count={solvedByDifficulty.medium}
          />
          <CircleProgress
            percentage={solvedByDifficulty.hard / difficultyCounts.hard}
            color="text-red-400"
            label="Hard"
            count={solvedByDifficulty.hard}
          />
        </div>
      </div>

      {/* Problems Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-around bg-gray-100 p-4 font-semibold">
          <div className="w-1/6 text-center">Status</div>
          <div className="w-2/6 text-center">Title</div>
          <div className="w-2/6 text-center">Solution</div>
          <div className="w-1/6 text-center">Difficulty</div>
        </div>

        {dsaProblems.map((problem) => (
          <div
            key={problem.id}
            className={`flex items-center justify-around border-b py-4 transition-all ${
              solvedProblems.includes(problem.id) 
                ? 'bg-green-50 opacity-75' 
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="w-1/6 text-center">
              <input
                type="checkbox"
                checked={solvedProblems.includes(problem.id)}
                onChange={() => toggleSolved(problem.id)}
                className="h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
            </div>

            <div className="w-2/6 text-center">
              <a
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
              >
                {problem.title}
              </a>
            </div>

            <div className="w-2/6 text-center">
              <a
                href={problem.solutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 text-red-500 hover:text-red-700"
              >
                <FilmIcon className="h-6 w-6" />
                <span className="font-medium">Watch Solution</span>
              </a>
            </div>

            <div className="w-1/6 text-center">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                  problem.difficulty
                )}`}
              >
                {problem.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DsaTracker;