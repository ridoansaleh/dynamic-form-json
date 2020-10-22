import React from "react";
import PropTypes from "prop-types";
import { FieldContainer, Input } from "./_fieldStyles";

function TextField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.handleBlur}
        onChange={props.onChange}
      />
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
