import React, { useState } from 'react';

export default function Form({ onNavigate }) {
  const [patientID, setPatientID] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientID, input2, input3 }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`✔️ Form submitted! FormID: ${data.formID}`);
        setPatientID('');
        setInput2('');
        setInput3('');
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setMessage('❌ Network error');
    }
  };

  return (
    <div>
      <button onClick={() => onNavigate('home')} className="text-sm text-gray-500 hover:underline">
        ← Back
      </button>
      <h2 className="text-xl font-semibold mb-4">Register Patient</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Patient ID</label>
        <input
          type="number"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          required
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Input 2</label>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Input 3</label>
        <input
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  </div>
  )
}