require('dotenv').config();
const express = require('express');
const connectToDB = require('./config/db.config');
const cors = require('cors');

// Create an Express application
const app = express();

// Use express.json() middleware to parse JSON requests
app.use(express.json());
app.use(cors(
  {
    origin: 'http://localhost:5173',
  }
));

// Placeholder for the db connection
let db;

// Connect to the database
connectToDB().then((res) => {
  db = res; // Assign the resolved database connection to db
  console.log(`Connected to DB @ ${res.config.database}`);
  
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:', err);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example route to query the database
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM EmployeeDetails'; // Replace 'users' with your table name
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    console.log(results);
    res.json(results);
  });
});

// Endpoint to accept and save employee details
app.post('/employee', (req, res) => {
  const data = req.body;

  // Basic validation to ensure required fields are present
  if (!data.resume || !data.privateInfo || !data.workInfo) {
    return res.status(400).json({ error: 'Incomplete data provided' });
  }

  const sql = `
    INSERT INTO EmployeeDetails (
      employee_name, employee_type, related_user, registration_number, hourly_cost, fleet_mobility_card, pin_code, badge_id, job_position,
      address, email, phone, language, work_distance, private_card_plate, certificate_level, field_of_study, school, visa_no,
      work_permit_no, visa_expiry_date, work_permit_expiry_date, work_permit, marital_status, no_of_dependent_children,
      contact_name, contact_phone, nationality, identification_no, passport_no, gender, date_of_birth, place_of_birth,
      country_of_birth, non_resident, work_mobile, work_phone, work_email, department, job_position_work, manager, coach,
      work_address, work_location, expense, time_off, working_hours, timezone, role, default_rate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.resume.employeeName, data.resume.employeeType, data.resume.relatedUser, data.resume.registrationNumber, data.resume.hourlyCost, 
    data.resume.fleetMobilityCard, data.resume.pinCode, data.resume.badgeId, data.resume.jobPosition, data.privateInfo.address, 
    data.privateInfo.email, data.privateInfo.phone, data.privateInfo.language, data.privateInfo.workDistance, data.privateInfo.privateCardPlate, 
    data.privateInfo.certificateLevel, data.privateInfo.fieldOfStudy, data.privateInfo.school, data.privateInfo.visaNo, data.privateInfo.workPermitNo, 
    data.privateInfo.visaExpiryDate, data.privateInfo.workPermitExpiryDate, data.privateInfo.workPermit, data.privateInfo.maritalStatus, 
    data.privateInfo.noOfDependentChildren, data.privateInfo.contactName, data.privateInfo.contactPhone, data.privateInfo.nationality, 
    data.privateInfo.identificationNo, data.privateInfo.passportNo, data.privateInfo.gender, data.privateInfo.dateOfBirth, 
    data.privateInfo.placeOfBirth, data.privateInfo.countryOfBirth, data.privateInfo.nonResident, data.workInfo.workMobile, 
    data.workInfo.workPhone, data.workInfo.workEmail, data.workInfo.department, data.workInfo.jobPosition, data.workInfo.manager, 
    data.workInfo.coach, data.workInfo.workAddress, data.workInfo.workLocation, data.workInfo.expense, data.workInfo.timeOff, 
    data.workInfo.workingHours, data.workInfo.timezone, data.workInfo.role, data.workInfo.defaultRate
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      return res.status(500).json({ error: 'Database insertion failed' });
    }
    res.status(200).json({ message: 'Employee details saved successfully', id: result.insertId });
  });
});

module.exports = app;
