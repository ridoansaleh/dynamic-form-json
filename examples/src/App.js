import React, { useState } from "react";
import DynamicForm from "../../src";
import {
  Container,
  Title,
  Wrapper,
  JsonWrapper,
  FormWrapper,
  Textarea,
  ErrMessage,
  Author,
} from "./_appStyle";
import { formData } from "./data/formData";

function App() {
  const [jsonData, setJsonData] = useState(formData);
  const [validJsonData, setValidJsonData] = useState(formData);
  const [errData, setErrData] = useState(false);

  const isJSON = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    if (!isJSON(e.target.value)) {
      setJsonData(e.target.value);
      setErrData(true);
    } else {
      let value = JSON.parse(e.target.value);
      setJsonData(value);
      setValidJsonData(value);
      setErrData(false);
    }
  };

  const handleSubmission = (val) => {
    alert(JSON.stringify(val, null, 4));
  };

  return (
    <Container>
      <Title>Dynamic Form Json Demo</Title>
      <Wrapper>
        <JsonWrapper>
          <h2>JSON Data</h2>
          <Textarea
            name="json-input"
            spellcheck="false"
            value={
              isJSON(jsonData) || typeof jsonData === "object"
                ? JSON.stringify(jsonData, null, 4)
                : jsonData
            }
            onChange={handleInputChange}
          />
          {errData && (
            <ErrMessage>The data you entered is not a VALID json</ErrMessage>
          )}
        </JsonWrapper>
        <FormWrapper>
          <h2>My Amazing Form</h2>
          <DynamicForm fields={validJsonData} cbSubmit={handleSubmission} />
        </FormWrapper>
      </Wrapper>
      <Author>
        Crafted with <span>&#10084;</span> by{" "}
        <a href="https://github.com/ridoansaleh/">Ridoan</a>
      </Author>
    </Container>
  );
}

export default App;
