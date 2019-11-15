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
  {
    id: "email",
    label: "Email",
    placeholder: "Email",
    type: "text",
    validationType: "string",
    value: "email",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "min",
        params: [5, "email cannot be less than 5 characters"]
      },
      {
        type: "max",
        params: [10, "email cannot be more than 10 characters"]
      },
      {
        type: "email",
        params: ["please enter a valid email"]
      }
    ]
  },
  {
    id: "phoneNumber",
    label: "phone number",
    type: "text",
    validationType: "number",
    value: "7878787878",
    validations: [
      {
        type: "min",
        params: [10, "phone number cannot be less than 10 characters"]
      },
      {
        type: "max",
        params: [10, "phone number cannot be more than 10 characters"]
      },
      {
        type: "required",
        params: ["phone number is required"]
      }
    ]
  },
  {
    id: "total",
    label: "Total People in Family",
    placeholder: "family members count",
    type: "text",
    validationType: "number",
    required: false,
    value: "1",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "min",
        params: [1, "there should be atleast 1 family member"]
      },
      {
        type: "max",
        params: [5, "max family members can be 5"]
      }
    ]
  },
  {
    id: "city",
    label: "City Address",
    placeholder: "City Address",
    type: "select",
    validationType: "string",
    required: false,
    value: "",
    options: ["Batam", "Jakarta", "Bandung"],
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      }
    ]
  }
];
