import React from "react";

// This is a common form field component made to be rendered in multiple cases.
const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isRandomPrompt,
  handleRandomPrompts,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isRandomPrompt && (
          <button
            type="button"
            onClick={handleRandomPrompts}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
          >
            Get Random Prompt
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
