import React from 'react';

function AccessBar({ currentSection, setCurrentSection, setShowDataDisplay }) {
  return (
    <div className="bg-gray-200 p-4 flex justify-center">
      <button 
        onClick={() => setCurrentSection('resume')} 
        className={`mx-2 px-4 py-2 rounded ${currentSection === 'resume' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
      >
        Resume
      </button>
      <button 
        onClick={() => setCurrentSection('privateInfo')} 
        className={`mx-2 px-4 py-2 rounded ${currentSection === 'privateInfo' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
      >
        Private Info
      </button>
      <button 
        onClick={() => setCurrentSection('workInfo')} 
        className={`mx-2 px-4 py-2 rounded ${currentSection === 'workInfo' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
      >
        Work Info
      </button>
      <button 
        onClick={() => setCurrentSection('dataDisplay')}
        className={`mx-2 px-4 py-2 rounded ${currentSection === 'dataDisplay' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
      >
        Data Display
      </button>
    </div>
  );
}

export default AccessBar;
