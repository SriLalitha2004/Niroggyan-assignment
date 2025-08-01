const doctors = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Dr. ${['Aisha Khan', 'Rahul Mehta', 'Priya Verma', 'Kunal Joshi', 'Simran Kaur', 'Vikram Desai', 'Anjali Sharma', 'Ravi Gupta', 'Neha Reddy', 'Aman Patel', 'Meera Das', 'Siddharth Roy', 'Pooja Menon', 'Nikhil Singh', 'Sneha Iyer', 'Arjun Nair', 'Divya Rao', 'Manish Kapoor', 'Kriti Jain', 'Rajeev Bansal'][i]}`,
  specialization: ['Cardiologist', 'Dermatologist', 'Neurologist', 'Pediatrician', 'Orthopedic', 'General Physician', 'Psychiatrist', 'Gynecologist', 'Dentist', 'ENT Specialist'][i % 10],
  image: `/images/doctor${i + 1}.jpg`,
  status: ['Available Today', 'Fully Booked', 'On Leave'][i % 3],
  schedule: [`2025-08-${(i % 28) + 1} 10:00`, `2025-08-${(i % 28) + 1} 15:00`]
}));

export default doctors;
