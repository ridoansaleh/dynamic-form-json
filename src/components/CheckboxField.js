import React, { useState } from "react";
import PropTypes from "prop-types";
import { FieldContainer, Label } from "./_fieldStyles";

function CheckboxField(props) {
  const [checkedItems, setCheckedItems] = useState(new Map());
  const handleCheckItem = e => {
    const { name, value } = e.target;
    setCheckedItems(prevState => prevState.set(name, value));
    props.setFieldValue(
      props.name,
      Array.from(checkedItems.values()).toString()
    );
  };
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      {props.options.map((opt, index) => {
        return (
          <Label key={index}>
            <input
              type="checkbox"
              name={props.name + "-" + index}
              value={opt}
              checked={checkedItems.get(props.name + "-" + index)}
              onChange={handleCheckItem}
            />
            {opt}
          </Label>
        );
      })}
      {props.error && <div className="error">{props.error}</div>}
    </FieldContainer>
  );
}

CheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired
};

export default CheckboxField;
