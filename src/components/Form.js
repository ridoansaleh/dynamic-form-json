import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import TextField from "./TextField";
import { createYupSchema } from "../utils/yupSchemaCreator";

class Form extends Component {
  renderFormElements = props => {
    const { fields } = this.props;
    return fields.map((item, index) => {
      const fieldMap = {
        text: TextField
      };
      const Component = fieldMap[item.type];
      let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
      if (item.type) {
        return (
          <Component
            key={index}
            label={item.label}
            name={item.id}
            placeholder={item.placeholder}
            value={props.values[item.id]}
            onChange={props.handleChange}
            error={error}
          />
        );
      }
      return "";
    });
  };

  render() {
    const { fields } = this.props;
    const initialValues = {};

    fields.forEach(item => {
      initialValues[item.id] = item.value || "";
    });

    const yepSchema = fields.reduce(createYupSchema, {});

    console.log(yepSchema);

    const validateSchema = yup.object().shape(yepSchema);

    return (
      <div className="form">
        <h1>Form here</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, actions) => {
            console.log("values", values);
            console.log("actions", actions);
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              {this.renderFormElements(props)}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Form;
