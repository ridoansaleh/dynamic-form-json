 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ridoansaleh/dynamic-form-json/blob/master/LICENSE) [![dynamic-form-json version](https://img.shields.io/badge/dynamic--form--json-v1.0.3-green)](https://www.npmjs.com/package/dynamic-form-json) [![npm version](https://img.shields.io/badge/npm-v12.6.0-green)](https://www.npmjs.com/package/dynamic-form-json) 

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
import DynamicForm from 'dynamic-form-json';
import { formData } from './data/formData'

ReactDOM.render(<DynamicForm fields={formData} />, document.getElementById("root))
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

## Fields Support

Currently this library supports form input types such as:

- [x] text

- [x] select

- [ ] textarea

- [ ] radio

- [ ] checkbox

- [ ] upload

## Info

This package is still on development. Not ready yet to use in production.
