import React from "react";
import PropTypes from "prop-types";
import { FieldContainer, RadioLabel } from "./_fieldStyles";

function RadioButtonField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      {props.options.map((opt, index) => {
        return (
          <RadioLabel key={index}>
            <input
              type="radio"
              name={props.name}
              value={opt}
              checked={opt === props.value}
              onChange={props.onChange}
            />
            {opt}
          </RadioLabel>
        );
      })}
      {props.error && <div className="error">{props.error}</div>}
    </FieldContainer>
  );
}

RadioButtonField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default RadioButtonField;
