import React from "react";
import PropTypes from "prop-types";
import { FieldContainer, Input } from "./_fieldStyles";

function TextField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div className="error">{props.error}</div>}
    </FieldContainer>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default TextField;
