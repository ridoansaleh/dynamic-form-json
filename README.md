[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ridoansaleh/dynamic-form-json/blob/master/LICENSE) [![dynamic-form-json version](https://img.shields.io/badge/dynamic--form--json-v1.0.9-green)](https://www.npmjs.com/package/dynamic-form-json) [![npm version](https://img.shields.io/badge/npm-v6.14.8-green)](https://www.npmjs.com/package/dynamic-form-json)

# Dynamic Form Json

`dynamic-form-json` is a tiny library to generate a Form in React automatically based on certain array of object that passed as a props. This library use regular css created from scratch, so user can customize it in the future. On top of it, i use [Formik](https://github.com/jaredpalmer/formik) and [Yup](https://github.com/jquense/yup) for form's skeleton and validations. Credit goes to [vijayranghar](https://github.com/vijayranghar) for the inspiration how to create dynamic validation on Yup from this [link](https://github.com/jquense/yup/issues/559).

## Installation

`npm install dynamic-form-json` or `yarn add dynamic-form-json`

## Peer Dependencies

Remember you also need to install the [peer dependencies](https://yarnpkg.com/lang/en/docs/dependency-types/#toc-peerdependencies) of this package. They are `formik`, `yup`, and `styled-components`.

## How to Use

Incase you are curious to try this library, you can implement it as the source code below.

index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

App.js

```js
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

```js
export const formData = [
  {
    id: "name",
    label: "Full name",
    placeholder: "Enter full name",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["name is required"],
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"],
      },
    ],
  },
];
```

## Supported Fields

Currently this library supports form input types such as:

- [x] text

- [x] select

- [x] textarea

- [x] radio

- [x] checkbox

- [x] upload

## API

### DynamicFormJSON - `DynamicForm(fields: Array[Object], cbSubmit: Func)`

This library could be imported by any name you like because we export it by `default` approach. It also accepts two parameters which are named fields and cbSubmit. All params are required.

```
import DynamicForm from "dynamic-form-json";
```

`fields` is a property that accepts array of object to create the inputs element inside a Form. The last one is `cbSumbit`, which will handle the submission for you. It accepts a callback function.

### TextField

These are the properties you can pass to an Object in formData array to create TextField component. Not all of them are required. The properties required are id, and type.

| Name           | Description                                                                                                                                                                          | PropType                                              | Required | Default Props                                                                       |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- | :------- | :---------------------------------------------------------------------------------- |
| id             | This id will be put as the name of the field / input element                                                                                                                         | string                                                | true     | `""` / empty string                                                                 |
| label          | The label of the field                                                                                                                                                               | string                                                | false    | Id (uppercase the first letter of id props). Example: `id="email" => label="Email"` |
| placeholder    | The placeholder of the field                                                                                                                                                         | string                                                | false    | `""`                                                                                |
| type           | The type of the field                                                                                                                                                                | string <= enum["text", "password", "number", "email"] | true     | `""`                                                                                |
| value          | The default value of the field                                                                                                                                                       | string                                                | false    | `""`                                                                                |
| validationType | The validation type of the field. This is related to the type of data you'll enter in your field. If the data you will input to the field is number, you should make this as number. | string                                                | false    | `"string"`                                                                          |
| validations    | Validation rule for this field. This is similar to yup API because we used yup under the hood.                                                                                       | array                                                 | false    | `"[]"`                                                                              |

### SelectField

These are the properties you can pass to an Object in formData array to create SelectField component.

| Name           | Description                                                                                                                                                                          | PropType           | Required | Default Props                                                                     |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- | :------- | :-------------------------------------------------------------------------------- |
| id             | This id will be put as the name of the field / input element                                                                                                                         | string             | true     | `""` / empty string                                                               |
| label          | The label of the field                                                                                                                                                               | string             | false    | Id (uppercase the first letter of id props). Example: `id="city" => label="City"` |
| placeholder    | The placeholder of the field                                                                                                                                                         | string             | false    | `"Please select"`                                                                 |
| type           | The type of the field                                                                                                                                                                | string <= "select" | true     | `""`                                                                              |
| value          | The default value of the field                                                                                                                                                       | string             | false    | `""`                                                                              |
| options        | The option list of the field / dropdown                                                                                                                                              | array              | false    | `[]`                                                                              |
| validationType | The validation type of the field. This is related to the type of data you'll enter in your field. If the data you will input to the field is number, you should make this as number. | string             | false    | `"string"`                                                                        |
| validations    | Validation rule for this field. This is similar to yup API because we used yup under the hood.                                                                                       | array              | false    | `"[]"`                                                                            |

### TextArea

These are the properties you can pass to an Object in formData array to create TextArea component.

| Name           | Description                                                                                                                                                                          | PropType | Required           | Default Props                                                                           |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :----------------- | :-------------------------------------------------------------------------------------- |
| id             | This id will be put as the name of the field / input element                                                                                                                         | string   | true               | `""` / empty string                                                                     |
| label          | The label of the field                                                                                                                                                               | string   | false              | Id (uppercase the first letter of id props). Example: `id="address" => label="Address"` |
| placeholder    | The placeholder of the field                                                                                                                                                         | string   | false              | `""`                                                                                    |
| type           | The type of the field                                                                                                                                                                | string   | true <= "textarea" | `""`                                                                                    |
| value          | The default value of the field                                                                                                                                                       | string   | false              | `""`                                                                                    |
| validationType | The validation type of the field. This is related to the type of data you'll enter in your field. If the data you will input to the field is number, you should make this as number. | string   | false              | `"string"`                                                                              |
| validations    | Validation rule for this field. This is similar to yup API because we used yup under the hood.                                                                                       | array    | false              | `"[]"`                                                                                  |

### Radio

These are the properties you can pass to an Object in formData array to create Radio component.

| Name           | Description                                                                                                                                                                          | PropType | Required        | Default Props                                                                         |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :-------------- | :------------------------------------------------------------------------------------ |
| id             | This id will be put as the name of the field / input element                                                                                                                         | string   | true            | `""` / empty string                                                                   |
| label          | The label of the field                                                                                                                                                               | string   | false           | Id (uppercase the first letter of id props). Example: `id="gender" => label="Gender"` |
| placeholder    | The placeholder of the field                                                                                                                                                         | string   | false           | `""`                                                                                  |
| type           | The type of the field                                                                                                                                                                | string   | true <= "radio" | `""`                                                                                  |
| value          | The default value of the field                                                                                                                                                       | string   | false           | `""`                                                                                  |
| options        | The option list of the radio field                                                                                                                                                   | array    | false           | `[]`                                                                                  |
| validationType | The validation type of the field. This is related to the type of data you'll enter in your field. If the data you will input to the field is number, you should make this as number. | string   | false           | `"string"`                                                                            |
| validations    | Validation rule for this field. This is similar to yup API because we used yup under the hood.                                                                                       | array    | false           | `"[]"`                                                                                |

### Checkbox

These are the properties you can pass to an Object in formData array to create Checkbox component.

| Name           | Description                                                                                                                                                                          | PropType | Required           | Default Props                                                                           |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :----------------- | :-------------------------------------------------------------------------------------- |
| id             | This id will be put as the name of the field / input element                                                                                                                         | string   | true               | `""` / empty string                                                                     |
| label          | The label of the field                                                                                                                                                               | string   | false              | Id (uppercase the first letter of id props). Example: `id="hobbies" => label="Hobbies"` |
| placeholder    | The placeholder of the field                                                                                                                                                         | string   | false              | `""`                                                                                    |
| type           | The type of the field                                                                                                                                                                | string   | true <= "checkbox" | `""`                                                                                    |
| value          | The default value of the field                                                                                                                                                       | string   | false              | `""`                                                                                    |
| options        | The option list of the checkbox field                                                                                                                                                | array    | false              | `[]`                                                                                    |
| validationType | The validation type of the field. This is related to the type of data you'll enter in your field. If the data you will input to the field is number, you should make this as number. | string   | false              | `"string"`                                                                              |
| validations    | Validation rule for this field. This is similar to yup API because we used yup under the hood.                                                                                       | array    | false              | `"[]"`                                                                                  |

### UploadField

These are the properties you can pass to an Object in formData array to create UploadField component.

| Name           | Description                                                                                                                                                                          | PropType           | Required | Default Props                                                                       |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- | :------- | :---------------------------------------------------------------------------------- |
| id             | This id will be put as the name of the field / input element                                                                                                                         | string             | true     | `""` / empty string                                                                 |
| label          | The label of the field                                                                                                                                                               | string             | false    | Id (uppercase the first letter of id props). Example: `id="photo" => label="Photo"` |
| placeholder    | The placeholder of the field                                                                                                                                                         | string             | false    | `""`                                                                                |
| type           | The type of the field                                                                                                                                                                | string <= "upload" | true     | `""`                                                                                |
| value          | The default value of the field                                                                                                                                                       | string             | false    | `""`                                                                                |
| validationType | The validation type of the field. This is related to the type of data you'll enter in your field. If the data you will input to the field is number, you should make this as number. | string             | false    | `"string"`                                                                          |
| validations    | Validation rule for this field. This is similar to yup API because we used yup under the hood.                                                                                       | array              | false    | `"[]"`                                                                              |

## Info

This package is still on development. Not ready yet to use in production.
