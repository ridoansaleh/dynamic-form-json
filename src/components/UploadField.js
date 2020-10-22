import React from "react";
import PropTypes from "prop-types";
import { FieldContainer, Upload } from "./_fieldStyles";

function UploadField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Upload
        type="file"
        name={props.name}
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

UploadField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

UploadField.defaultValue = {};

export default UploadField;
