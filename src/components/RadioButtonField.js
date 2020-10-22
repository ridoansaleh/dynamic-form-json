import React from "react";
import PropTypes from "prop-types";
import { FieldContainer, Label } from "./_fieldStyles";

function RadioButtonField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      {props.options.map((opt, index) => {
        return (
          <Label key={index}>
            <input
              type="radio"
              name={props.name}
              value={opt}
              checked={opt === props.value}
              onBlur={props.handleBlur}
              onChange={props.onChange}
            />
            {opt}
          </Label>
        );
      })}
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

RadioButtonField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtonField;
