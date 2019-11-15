import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";
import Fields from "./fields";
import { createYupSchema } from "../utils/yupSchemaCreator";
import { FIELD_TYPES, VALIDATION_TYPES } from "../constants";

function Form(props) {
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
          <Fields fields={fields} formikProps={formikProps} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.oneOf(FIELD_TYPES).isRequired,
      validationType: PropTypes.oneOf(VALIDATION_TYPES).isRequired,
      value: PropTypes.any,
      options: PropTypes.array,
      validations: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          params: PropTypes.array.isRequired
        })
      )
    })
  ).isRequired
};

export default Form;
