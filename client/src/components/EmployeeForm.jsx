import React, { useState } from 'react';
import axios from 'axios';
import Resume from './Resume';
import PrivateInfo from './PrivateInfo';
import WorkInfo from './WorkInfo';
import AccessBar from './AccessBar';
import DataDisplay from './DataDisplay';

function EmployeeForm() {
  const [currentSection, setCurrentSection] = useState('resume');
  const [formData, setFormData] = useState({
    resume: {
      employeeName: '',
      employeeType: '',
      relatedUser: '',
      registrationNumber: '',
      hourlyCost: '',
      fleetMobilityCard: '',
      pinCode: '',
      badgeId: '',
      jobPosition: '',
    },
    privateInfo: {
      address: '',
      email: '',
      phone: '',
      language: '',
      workDistance: '',
      privateCardPlate: '',
      certificateLevel: '',
      fieldOfStudy: '',
      school: '',
      visaNo: '',
      workPermitNo: '',
      visaExpiryDate: '',
      workPermitExpiryDate: '',
      workPermit: '',
      maritalStatus: '',
      noOfDependentChildren: '',
      contactName: '',
      contactPhone: '',
      nationality: '',
      identificationNo: '',
      passportNo: '',
      gender: '',
      dateOfBirth: '',
      placeOfBirth: '',
      countryOfBirth: '',
      nonResident: '',
    },
    workInfo: {
      workMobile: '',
      workPhone: '',
      workEmail: '',
      department: '',
      jobPosition: '',
      manager: '',
      coach: '',
      workAddress: '',
      workLocation: '',
      expense: '',
      timeOff: '',
      workingHours: '',
      timezone: '',
      role: '',
      defaultRate: '',
    },
  });

  const handleSectionChange = (section, data) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        ...data,
      },
    }));
  };

  const handleNext = (nextSection) => {
    setCurrentSection(nextSection);
  };

  const handleSubmit = async () => {
    // Check if any section has empty fields
    const { resume, privateInfo, workInfo } = formData;
    const isResumeEmpty = Object.values(resume).some(value => value === '');
    const isPrivateInfoEmpty = Object.values(privateInfo).some(value => value === '');
    const isWorkInfoEmpty = Object.values(workInfo).some(value => value === '');

    if (isResumeEmpty || isPrivateInfoEmpty || isWorkInfoEmpty) {
      alert('Please complete all fields before submitting the form.');
      return;
    }

    try {
      // Replace with your API endpoint
      const url = 'http://localhost:3000/employee';
      const response = await axios.post(url, formData);
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 flex flex-col items-center">
      <AccessBar currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <div className="form-section">
        {currentSection === 'resume' && (
          <Resume formData={formData.resume} onChange={(data) => handleSectionChange('resume', data)} onNext={() => handleNext('privateInfo')} />
        )}
        {currentSection === 'privateInfo' && (
          <PrivateInfo formData={formData.privateInfo} onChange={(data) => handleSectionChange('privateInfo', data)} onNext={() => handleNext('workInfo')} />
        )}
        {currentSection === 'workInfo' && (
          <WorkInfo formData={formData.workInfo} onChange={(data) => handleSectionChange('workInfo', data)} onNext={handleSubmit} />
        )}
        {currentSection === 'dataDisplay' && (
          <DataDisplay />
        )}
      </div>
    </div>
  );
}

export default EmployeeForm;
