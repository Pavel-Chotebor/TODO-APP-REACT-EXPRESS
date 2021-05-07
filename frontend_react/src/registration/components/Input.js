import React, { useState } from 'react';

const Input = ({
  name,
  type,
  isSubmited,
  onChange,
  errorMessage,
  validator,
  isDisabled,
}) => {
  const [value, setValue] = useState('');

  validator = validator ? validator : () => true;

  const handleChange = e => {
    setValue(e.target.value);
    onChange(name, e.target.value, validator(e.target.value));
  };

  return (
    <div className="form-input">
      <input
        type={type}
        className={
          !isSubmited
            ? ''
            : isSubmited && !validator(value)
            ? 'inputError'
            : 'inputSuccess'
        }
        placeholder={name}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <p className="message">
        {isSubmited && !validator(value) ? errorMessage : ''}
      </p>
    </div>
  );
};

export default Input;
