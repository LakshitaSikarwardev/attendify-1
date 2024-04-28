import React from 'react';
import "./Record.css";

export default function () {
  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500 dark:text-gray-400">Student</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Subjects</h2>
          </div>
          <div className="space-y-3">
            <Subject name="English" percentage={90} />
            <Subject name="Hindi" percentage={85} />
            <Subject name="Maths" percentage={45} />
            <Subject name="Physics" percentage={80} />
            <Subject name="Biology" percentage={65} />
          </div>
        </div>
      </div>
    </main>
  );
}

function Subject({ name, percentage }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 dark:text-gray-400">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="mt-1 h-3 rounded-full bg-gray-200 dark:bg-gray-700">
        <div className={`h-full w-[${percentage}%] ${getProgressBarColor(percentage)}`} />
      </div>
    </div>
  );
}

function getProgressBarColor(percentage) {
  if (percentage >= 80) return " bg-green-500";
  if (percentage >= 60) return " bg-yellow-500";
  return " bg-red-500";
}
