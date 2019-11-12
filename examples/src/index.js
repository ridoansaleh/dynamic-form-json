import React from "react";
import ReactDOM from "react-dom";
import DynamicForm from "../../src";
import { formData } from "./data/formData";

const App = () => <DynamicForm fields={formData} />;

ReactDOM.render(<App />, document.getElementById("root"));
