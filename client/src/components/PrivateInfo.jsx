import React from 'react';
import InputField from './InputField';

function PrivateInfo({ formData, onChange, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className='bg-white mt-5 flex flex-col items-center w-fit p-5 rounded-md'>
      <h1 className="font-semibold text-2xl">Private Information</h1>
      <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
      <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
      <InputField label="Language" name="language" value={formData.language} onChange={handleChange} />
      <InputField label="Work Distance" name="workDistance" value={formData.workDistance} onChange={handleChange} />
      <InputField label="Private Car Plate" name="privateCardPlate" value={formData.privateCardPlate} onChange={handleChange} />
      <InputField label="Certificate Level" name="certificateLevel" value={formData.certificateLevel} onChange={handleChange} />
      <InputField label="Field of Study" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} />
      <InputField label="School" name="school" value={formData.school} onChange={handleChange} />
      <InputField label="Visa No" name="visaNo" value={formData.visaNo} onChange={handleChange} />
      <InputField label="Work Permit No" name="workPermitNo" value={formData.workPermitNo} onChange={handleChange} />
      <InputField label="Visa Expiry Date" name="visaExpiryDate" type="date" value={formData.visaExpiryDate} onChange={handleChange} />
      <InputField label="Work Permit Expiry Date" name="workPermitExpiryDate" type="date" value={formData.workPermitExpiryDate} onChange={handleChange} />
      <InputField label="Work Permit" name="workPermit" value={formData.workPermit} onChange={handleChange} />
      <InputField label="Marital Status" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
      <InputField label="No Of Dependent Children" name="noOfDependentChildren" value={formData.noOfDependentChildren} onChange={handleChange} />
      <InputField label="Contact Name" name="contactName" value={formData.contactName} onChange={handleChange} />
      <InputField label="Contact Phone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
      <InputField label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
      <InputField label="Identification No" name="identificationNo" value={formData.identificationNo} onChange={handleChange} />
      <InputField label="Passport No" name="passportNo" value={formData.passportNo} onChange={handleChange} />
      <InputField label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
      <InputField label="Date Of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
      <InputField label="Place Of Birth" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} />
      <InputField label="Country Of Birth" name="countryOfBirth" value={formData.countryOfBirth} onChange={handleChange} />
      <InputField label="Non Resident" name="nonResident" value={formData.nonResident} onChange={handleChange} />
      <button onClick={onNext} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Next</button>
    </div>
  );
}

export default PrivateInfo;
