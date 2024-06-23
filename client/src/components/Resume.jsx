import React from 'react';
import InputField from './InputField';

function Resume({ formData, onChange, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className='bg-white mt-5 flex flex-col items-center w-fit p-5 rounded-md'>
      <h1 className="font-semibold text-2xl">Resume</h1>
      <InputField label="Employee Name" name="employeeName" value={formData.employeeName} onChange={handleChange} />
      <InputField label="Employee Type" name="employeeType" value={formData.employeeType} onChange={handleChange} />
      <InputField label="Related User" name="relatedUser" value={formData.relatedUser} onChange={handleChange} />
      <InputField label="Registration Number" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
      <InputField label="Hourly Cost" name="hourlyCost" value={formData.hourlyCost} onChange={handleChange} />
      <InputField label="Fleet Mobility Card" name="fleetMobilityCard" value={formData.fleetMobilityCard} onChange={handleChange} />
      <InputField label="Pin Code" name="pinCode" value={formData.pinCode} onChange={handleChange} />
      <InputField label="Badge ID" name="badgeId" value={formData.badgeId} onChange={handleChange} />
      <InputField label="Job Position" name="jobPosition" value={formData.jobPosition} onChange={handleChange} />
      <button onClick={onNext} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Next</button>
    </div>
  );
}

export default Resume;
