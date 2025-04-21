import React, { useState } from 'react';

export default function RegisterPatient({ onNavigate }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !age || age <= 0) {
      setMessage('Please enter valid name and a positive age.');
      return;
    }
    try {
      const res = await fetch('http://localhost:3001/register-patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, age: parseInt(age, 10) }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`✔️ Registered! PatientID: ${data.patientID}`);
        setFirstName('');
        setLastName('');
        setAge('');
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch {
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
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            min="1"
            required
            className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  )
}
