import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../data/doctors';

function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));
  const [form, setForm] = useState({ name: '', email: '', datetime: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="p-4 text-center">Appointment booked with <strong>{doctor.name}</strong> on <strong>{form.datetime}</strong>.</div>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Book Appointment with {doctor.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" className="border p-2 w-full" required onChange={handleChange} />
        <input type="datetime-local" name="datetime" className="border p-2 w-full" required onChange={handleChange} />
        <button type="submit" className="bg-green-600 text-black px-4 py-2 rounded">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookAppointment;
