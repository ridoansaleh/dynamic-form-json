import React from "react";
import Form from "./components/Form";

function DynamicForm(props) {
  return <Form fields={props.fields} />;
}

export default DynamicForm;
