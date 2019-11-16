[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ridoansaleh/dynamic-form-json/blob/master/LICENSE) [![dynamic-form-json version](https://img.shields.io/badge/dynamic--form--json-v1.0.4-green)](https://www.npmjs.com/package/dynamic-form-json) [![npm version](https://img.shields.io/badge/npm-v12.6.0-green)](https://www.npmjs.com/package/dynamic-form-json)

# Dynamic Form Json

`dynamic-form-json` is a tiny library to generate form automatically based on certain Object data (passed as props). This library use regular css created from scratch, so user can customize it in the future. On top of it, i use Formik and Yup for form's skeleton and validations. Credit goes to [vijayranghar](https://github.com/vijayranghar) for the inspiration how to create dynamic validation on Yup from this [link](https://github.com/jquense/yup/issues/559).

## Installation

`npm install dynamic-form-json` or `yarn add dynamic-form-json`

## How to Use

Incase you are curious to try this library, you can implement it as source code below.

index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById("root))
```

App.js

```
import DynamicForm from 'dynamic-form-json';
import { formData } from './data/formData';

function App() {
  const handleSubmission = val => {
    console.log('Values : 'val)
  }
  return (
    <div>
      <h2>My Amazing Form</h2>
      <DynamicForm fields={formData} cbSubmit={handleSubmission} />
    </div>
  )
}

export default App;
```

formData.js

```
export const formData = [
  {
    id: "name",
    label: "Full name",
    placeholder: "Enter full name",
    type: "text",
    validationType: "string",
    value: "User name",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"]
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"]
      }
    ]
  },
]
```

## Supported Fields

Currently this library supports form input types such as:

- [x] text

- [x] select

- [x] textarea

- [x] radio

- [ ] checkbox

- [ ] upload

## Info

This package is still on development. Not ready yet to use in production.
