import React from "react";

function TextField(props) {
  const renderError = props.error ? <strong>{props.error}</strong> : null;
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {renderError}
    </div>
  );
}

export default TextField;
