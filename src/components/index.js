import React from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import RadioButtonField from "./RadioButtonField";
import CheckboxField from "./CheckboxField";

const fieldMap = {
  text: TextField,
  select: SelectField,
  textarea: TextAreaField,
  radio: RadioButtonField,
  checkbox: CheckboxField,
};

function Field({ fields, formikProps }) {
  const { errors, values, handleChange, setFieldValue } = formikProps;
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
        error={error}
        onChange={handleChange}
        setFieldValue={setFieldValue}
      />
    );
  });
}

Field.propTypes = {
  fields: PropTypes.array.isRequired,
  formikProps: PropTypes.object.isRequired,
};

export default Field;
