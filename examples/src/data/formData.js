export const formData = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "full name",
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
        params: [5, "name can't be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "name can't be more than 10 characters"],
      },
    ],
  },
  {
    id: "photo",
    label: "Photo",
    placeholder: "",
    type: "upload",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["photo is required"],
      },
    ],
  },
  {
    id: "email",
    label: "Email",
    placeholder: "email",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["email is required"],
      },
      {
        type: "min",
        params: [5, "email can't be less than 5 characters"],
      },
      {
        type: "max",
        params: [20, "email can't be more than 20 characters"],
      },
      {
        type: "email",
        params: ["please enter a valid email"],
      },
    ],
  },
  {
    id: "phone_number",
    label: "Phone Number",
    placeholder: "phone number",
    type: "text",
    validationType: "number",
    value: "",
    validations: [
      {
        type: "required",
        params: ["phone number is required"],
      },
    ],
  },
  {
    id: "total",
    label: "Total Family Member",
    placeholder: "total family member",
    type: "text",
    validationType: "number",
    value: "",
    validations: [
      {
        type: "required",
        params: ["total family's member is required"],
      },
      {
        type: "min",
        params: [1, "there should be atleast 1 family member"],
      },
      {
        type: "max",
        params: [5, "max family members can be 5"],
      },
    ],
  },
  {
    id: "city",
    label: "City Address",
    placeholder: "",
    type: "select",
    validationType: "string",
    value: "",
    options: ["Batam", "Jakarta", "Bandung"],
    validations: [
      {
        type: "required",
        params: ["city address is required"],
      },
    ],
  },
  {
    id: "home",
    label: "Home Address",
    placeholder: "home address",
    type: "textarea",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["home address is required"],
      },
      {
        type: "min",
        params: [10, "home address can't be less than 10 characters"],
      },
    ],
  },
  {
    id: "gender",
    label: "Gender",
    placeholder: "",
    type: "radio",
    validationType: "string",
    value: "",
    options: ["Male", "Female"],
    validations: [
      {
        type: "required",
        params: ["gender is required"],
      },
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    placeholder: "",
    type: "checkbox",
    validationType: "string",
    value: "",
    options: ["Playing Football", "Online Games", "Travelling"],
    validations: [
      {
        type: "required",
        params: ["hobbies is required"],
      },
    ],
  },
];
