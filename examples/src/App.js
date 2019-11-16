import React from "react";
import DynamicForm from "../../src";
import { formData } from "./data/formData";

function App() {
  const handleSubmission = val => {
    alert(JSON.stringify(val, null, 4));
  };
  return (
    <div>
      <h2>My Amazing Form</h2>
      <DynamicForm fields={formData} cbSubmit={handleSubmission} />
    </div>
  );
}

export default App;
