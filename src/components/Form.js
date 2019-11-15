import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import { createYupSchema } from "../utils/yupSchemaCreator";

function Form(props) {
  const renderFormElements = formikProps => {
    const { fields } = props;
    const { errors, values, handleChange } = formikProps;
    return fields.map((item, index) => {
      const fieldMap = {
        text: TextField,
        select: SelectField
      };
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
  };

  const { fields } = props;
  const initialValues = {};

  fields.forEach(item => {
    initialValues[item.id] = item.value || "";
  });

  const yupSchema = fields.reduce(createYupSchema, {});

  // console.log(yupSchema);

  const validateSchema = yup.object().shape(yupSchema);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={(values, actions) => {
        // console.log("values", values);
        // console.log("actions", actions);
      }}
    >
      {formikProps => (
        <form onSubmit={formikProps.handleSubmit}>
          {renderFormElements(formikProps)}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
