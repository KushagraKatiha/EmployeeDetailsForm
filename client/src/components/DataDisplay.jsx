import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users'); // Replace with your backend endpoint
        setEmployeeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className='text-white'>Loading...</p>; // Optional loading indicator
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 text-white flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">Employee Details</h1>
      {employeeData.length === 0 ? (
        <p>No data found!</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-white">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Employee Name</th>
              <th className="py-3 px-6 text-left">Employee Type</th>
              <th className="py-3 px-6 text-left">Related User</th>
              <th className="py-3 px-6 text-left">Registration Number</th>
              <th className="py-3 px-6 text-left">Hourly Cost</th>
              <th className="py-3 px-6 text-left">Fleet Mobility Card</th>
              <th className="py-3 px-6 text-left">Pin Code</th>
              <th className="py-3 px-6 text-left">Badge ID</th>
              <th className="py-3 px-6 text-left">Job Position</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Language</th>
              <th className="py-3 px-6 text-left">Work Distance</th>
              <th className="py-3 px-6 text-left">Private Card Plate</th>
              <th className="py-3 px-6 text-left">Certificate Level</th>
              <th className="py-3 px-6 text-left">Field of Study</th>
              <th className="py-3 px-6 text-left">School</th>
              <th className="py-3 px-6 text-left">Visa No</th>
              <th className="py-3 px-6 text-left">Work Permit No</th>
              <th className="py-3 px-6 text-left">Visa Expiry Date</th>
              <th className="py-3 px-6 text-left">Work Permit Expiry Date</th>
              <th className="py-3 px-6 text-left">Work Permit</th>
              <th className="py-3 px-6 text-left">Marital Status</th>
              <th className="py-3 px-6 text-left">No of Dependent Children</th>
              <th className="py-3 px-6 text-left">Contact Name</th>
              <th className="py-3 px-6 text-left">Contact Phone</th>
              <th className="py-3 px-6 text-left">Nationality</th>
              <th className="py-3 px-6 text-left">Identification No</th>
              <th className="py-3 px-6 text-left">Passport No</th>
              <th className="py-3 px-6 text-left">Gender</th>
              <th className="py-3 px-6 text-left">Date of Birth</th>
              <th className="py-3 px-6 text-left">Place of Birth</th>
              <th className="py-3 px-6 text-left">Country of Birth</th>
              <th className="py-3 px-6 text-left">Non Resident</th>
              <th className="py-3 px-6 text-left">Work Mobile</th>
              <th className="py-3 px-6 text-left">Work Phone</th>
              <th className="py-3 px-6 text-left">Work Email</th>
              <th className="py-3 px-6 text-left">Department</th>
              <th className="py-3 px-6 text-left">Job Position Work</th>
              <th className="py-3 px-6 text-left">Manager</th>
              <th className="py-3 px-6 text-left">Coach</th>
              <th className="py-3 px-6 text-left">Work Address</th>
              <th className="py-3 px-6 text-left">Work Location</th>
              <th className="py-3 px-6 text-left">Expense</th>
              <th className="py-3 px-6 text-left">Time Off</th>
              <th className="py-3 px-6 text-left">Working Hours</th>
              <th className="py-3 px-6 text-left">Timezone</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Default Rate</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {employeeData.map((employee) => (
              <tr key={employee.id}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{employee.employee_name}</td>
                <td className="py-3 px-6 text-left">{employee.employee_type}</td>
                <td className="py-3 px-6 text-left">{employee.related_user}</td>
                <td className="py-3 px-6 text-left">{employee.registration_number}</td>
                <td className="py-3 px-6 text-left">{employee.hourly_cost}</td>
                <td className="py-3 px-6 text-left">{employee.fleet_mobility_card}</td>
                <td className="py-3 px-6 text-left">{employee.pin_code}</td>
                <td className="py-3 px-6 text-left">{employee.badge_id}</td>
                <td className="py-3 px-6 text-left">{employee.job_position}</td>
                <td className="py-3 px-6 text-left">{employee.address}</td>
                <td className="py-3 px-6 text-left">{employee.email}</td>
                <td className="py-3 px-6 text-left">{employee.phone}</td>
                <td className="py-3 px-6 text-left">{employee.language}</td>
                <td className="py-3 px-6 text-left">{employee.work_distance}</td>
                <td className="py-3 px-6 text-left">{employee.private_card_plate}</td>
                <td className="py-3 px-6 text-left">{employee.certificate_level}</td>
                <td className="py-3 px-6 text-left">{employee.field_of_study}</td>
                <td className="py-3 px-6 text-left">{employee.school}</td>
                <td className="py-3 px-6 text-left">{employee.visa_no}</td>
                <td className="py-3 px-6 text-left">{employee.work_permit_no}</td>
                <td className="py-3 px-6 text-left">{employee.visa_expiry_date}</td>
                <td className="py-3 px-6 text-left">{employee.work_permit_expiry_date}</td>
                <td className="py-3 px-6 text-left">{employee.work_permit}</td>
                <td className="py-3 px-6 text-left">{employee.marital_status}</td>
                <td className="py-3 px-6 text-left">{employee.no_of_dependent_children}</td>
                <td className="py-3 px-6 text-left">{employee.contact_name}</td>
                <td className="py-3 px-6 text-left">{employee.contact_phone}</td>
                <td className="py-3 px-6 text-left">{employee.nationality}</td>
                <td className="py-3 px-6 text-left">{employee.identification_no}</td>
                <td className="py-3 px-6 text-left">{employee.passport_no}</td>
                <td className="py-3 px-6 text-left">{employee.gender}</td>
                <td className="py-3 px-6 text-left">{employee.date_of_birth}</td>
                <td className="py-3 px-6 text-left">{employee.place_of_birth}</td>
                <td className="py-3 px-6 text-left">{employee.country_of_birth}</td>
                <td className="py-3 px-6 text-left">{employee.non_resident}</td>
                <td className="py-3 px-6 text-left">{employee.work_mobile}</td>
                <td className="py-3 px-6 text-left">{employee.work_phone}</td>
                <td className="py-3 px-6 text-left">{employee.work_email}</td>
                <td className="py-3 px-6 text-left">{employee.department}</td>
                <td className="py-3 px-6 text-left">{employee.job_position_work}</td>
                <td className="py-3 px-6 text-left">{employee.manager}</td>
                <td className="py-3 px-6 text-left">{employee.coach}</td>
                <td className="py-3 px-6 text-left">{employee.work_address}</td>
                <td className="py-3 px-6 text-left">{employee.work_location}</td>
                <td className="py-3 px-6 text-left">{employee.expense}</td>
                <td className="py-3 px-6 text-left">{employee.time_off}</td>
                <td className="py-3 px-6 text-left">{employee.working_hours}</td>
                <td className="py-3 px-6 text-left">{employee.timezone}</td>
                <td className="py-3 px-6 text-left">{employee.role}</td>
                <td className="py-3 px-6 text-left">{employee.default_rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataDisplay;
