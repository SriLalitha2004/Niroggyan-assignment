import React from 'react';
import { useParams, Link } from 'react-router-dom';
import doctors from '../data/doctors';

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full" />
      <h2 className="text-2xl font-bold mt-2">{doctor.name}</h2>
      <p className="text-lg">{doctor.specialization}</p>
      <p className="mt-2">Availability Status: <strong>{doctor.status}</strong></p>
      <h3 className="mt-4 font-semibold">Schedule:</h3>
      <ul>
        {doctor.schedule.map((time, i) => <li key={i}>{time}</li>)}
      </ul>
      <Link to={`/book/${doctor.id}`} className="mt-4 inline-block bg-green text-black px-4 py-2 rounded">Book Appointment</Link>
    </div>
  );
}

export default DoctorProfile;