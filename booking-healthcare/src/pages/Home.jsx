import React, { useState } from 'react';
import doctors from '../data/doctors';
import { Link } from 'react-router-dom';

function Home() {
  const [query, setQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(query.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Find a Doctor</h1>
      <input
        type="text"
        placeholder="Search by name or specialization"
        className="border p-2 w-full mb-6 rounded shadow-sm"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.map(doc => (
          <Link to={`/doctor/${doc.id}`} key={doc.id} className="border p-4 rounded shadow hover:shadow-lg text-center">
            <img src={doc.image} alt={doc.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
            <h2 className="text-lg font-semibold text-blue-700">{doc.name}</h2>
            <p className="text-sm text-gray-600">{doc.specialization}</p>
            <span className={`text-sm font-medium block mt-1 ${doc.status === 'Available Today' ? 'text-green-600' : doc.status === 'Fully Booked' ? 'text-red-600' : 'text-gray-600'}`}>{doc.status}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;