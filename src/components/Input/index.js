import React from "react";

const Input = ({ onChange, text }) => {
  return (
    <div>
      <input type="text" onChange={onChange} value={text} />
    </div>
  );
};

export default Input;
