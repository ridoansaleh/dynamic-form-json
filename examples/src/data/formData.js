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
        params: ["name is required"]
      },
      {
        type: "min",
        params: [5, "name can't be less than 5 characters"]
      },
      {
        type: "max",
        params: [10, "name can't be more than 10 characters"]
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
        params: ["email is required"]
      },
      {
        type: "min",
        params: [5, "email can't be less than 5 characters"]
      },
      {
        type: "max",
        params: [20, "email can't be more than 20 characters"]
      },
      {
        type: "email",
        params: ["please enter a valid email"]
      }
    ]
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    type: "text",
    validationType: "number",
    value: "6287821187594",
    validations: [
      {
        type: "required",
        params: ["phone number is required"]
      }
    ]
  },
  {
    id: "total",
    label: "Total Family Member",
    placeholder: "family members count",
    type: "text",
    validationType: "number",
    required: false,
    value: "1",
    validations: [
      {
        type: "required",
        params: ["total family's member is required"]
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
        params: ["city address is required"]
      }
    ]
  },
  {
    id: "home",
    label: "Home Address",
    placeholder: "Home Address",
    type: "textarea",
    validationType: "string",
    required: false,
    value: "",
    validations: [
      {
        type: "required",
        params: ["home address is required"]
      },
      {
        type: "min",
        params: [10, "home address can't be less than 10 characters"]
      }
    ]
  }
];
