import React from "react";
import PropTypes from "prop-types";
import Form from "./components/Form";

function DynamicForm(props) {
  return <Form fields={props.fields} />;
}

DynamicForm.propTypes = {
  fields: PropTypes.array.isRequired
};

export default DynamicForm;
