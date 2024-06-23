import React from 'react';

function InputField({ label, type = 'text', name, value, onChange, placeholder, style, outerStyle}) {
  return (
    <div className={`flex justify-between w-full mb-2 border-b-2 border-black pb-1 ${outerStyle}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-1  border-2 border-black rounded ${style}`}
      />
    </div>
  );
}

export default InputField;
