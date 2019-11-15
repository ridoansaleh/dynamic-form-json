import React from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";
import SelectField from "./SelectField";

const fieldMap = {
  text: TextField,
  select: SelectField
};

function Field(fields, formikProps) {
  const { errors, values, handleChange } = formikProps;
  return fields.map((item, index) => {
    const Component = fieldMap[item.type];
    let error = errors.hasOwnProperty(item.id) && errors[item.id];
    if (!item.type) {
      return null;
    }
    return (
      <Component
        key={index}
        label={item.label}
        name={item.id}
        placeholder={item.placeholder}
        value={values[item.id]}
        options={item.options}
        onChange={handleChange}
        error={error}
      />
    );
  });
}

Field.propTypes = {
  fields: PropTypes.array.isRequired,
  formikProps: PropTypes.object.isRequired
};

export default Field;
