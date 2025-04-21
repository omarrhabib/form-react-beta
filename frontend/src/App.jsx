import React from 'react';
import Form from './components/Form';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Patient Form</h1>
        <Form />
      </div>
    </div>
  );
}