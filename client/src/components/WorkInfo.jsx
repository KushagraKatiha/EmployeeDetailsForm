import React from 'react';
import InputField from './InputField';

function WorkInfo({ formData, onChange, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className='bg-white mt-5 flex flex-col items-center w-fit p-5 rounded-md'>
      <h1 className="font-semibold text-2xl">Work Information</h1>
      <InputField label="Work Mobile" name="workMobile" value={formData.workMobile} onChange={handleChange} />
      <InputField label="Work Phone" name="workPhone" value={formData.workPhone} onChange={handleChange} />
      <InputField label="Work Email" name="workEmail" type="email" value={formData.workEmail} onChange={handleChange} />
      <InputField label="Department" name="department" value={formData.department} onChange={handleChange} />
      <InputField label="Job Position" name="jobPosition" value={formData.jobPosition} onChange={handleChange} />
      <InputField label="Manager" name="manager" value={formData.manager} onChange={handleChange} />
      <InputField label="Coach" name="coach" value={formData.coach} onChange={handleChange} />
      <InputField label="Work Address" name="workAddress" value={formData.workAddress} onChange={handleChange} />
      <InputField label="Work Location" name="workLocation" value={formData.workLocation} onChange={handleChange} />
      <InputField label="Expense" name="expense" value={formData.expense} onChange={handleChange} />
      <InputField label="Time Off" name="timeOff" value={formData.timeOff} onChange={handleChange} />
      <InputField label="Working Hours" name="workingHours" value={formData.workingHours} onChange={handleChange} />
      <InputField label="Timezone" name="timezone" value={formData.timezone} onChange={handleChange} />
      <InputField label="Role" name="role" value={formData.role} onChange={handleChange} />
      <InputField label="Default Rate" name="defaultRate" value={formData.defaultRate} onChange={handleChange} />
      <button onClick={onNext} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </div>
  );
}

export default WorkInfo;
