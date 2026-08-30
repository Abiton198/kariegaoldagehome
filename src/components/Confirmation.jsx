// src/pages/Confirmation.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Message Sent!</h2>
        <p className="text-gray-700 mb-2">
          An email has been sent to <span className="font-semibold">Info@vonzet.co.za</span>.
        </p>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in Vonzet Old Age Care Home. We’ll get back to you shortly!
        </p>
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
