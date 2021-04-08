import React from "react";

const InputField = ({ label }) => {
  return (
    <div>
      <input placeholder={`${label}...`} />
      <br />
      <style jsx>
        {`
          input {
            font-size: 18px;
            padding: 12px;
            width: 100%;
            background-color: rgba(25, 25, 25, 0.5);
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default InputField;
