import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <button
        onClick={() => onNavigate('register')}
        className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Register Patient
      </button>
      <button
        onClick={() => onNavigate('submit')}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Submit Form
      </button>
    </div>
  );
}