import React, { useState } from 'react';
import Home from './components/Home';
import RegisterPatient from './components/RegisterPatient';
import SubmitForm from './components/SubmitForm';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'register' && <RegisterPatient onNavigate={setPage} />}
        {page === 'submit' && <SubmitForm onNavigate={setPage} />}
      </div>
    </div>
  );
}