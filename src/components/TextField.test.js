import React from "react";
import { mount } from "enzyme";
import TextField from "./TextField";

const testProps = {
  label: "Address",
  name: "address",
  placeholder: "Please insert address",
  value: "Batam",
  error: "Address must be a string",
  onChange: e => {
    // console.log(testProps);
    // console.log(e.target);
  }
};

describe("<TextField />", () => {
  const wrapper = mount(<TextField {...testProps} />);

  it("Display the input's label correctly", () => {
    const title = wrapper.find(".label").text();
    expect(title).toEqual(testProps.label);
  });

  it("Attribute 'name' has the correct value", () => {
    const nameValue = wrapper.find("input").prop("name");
    expect(nameValue).toEqual(testProps.name);
  });

  it("Attribute 'placeholder' has the correct value", () => {
    const placeholderValue = wrapper.find("input").prop("placeholder");
    expect(placeholderValue).toEqual(testProps.placeholder);
  });

  it("Attribute 'value' has the correct value", () => {
    const valValue = wrapper.find("input").prop("value");
    expect(valValue).toEqual(testProps.value);
  });

  it("Attribute 'onChange' has the correct value", () => {
    const onChangeValue = wrapper.find("input").prop("onChange");
    expect(onChangeValue).toEqual(testProps.onChange);
  });

  // it("Simulate onChange event in input element", () => {
  //   const MyWrapper = mount(<TextField {...testProps} />);
  //   MyWrapper.find("input").simulate("change", {
  //     target: { name: "address", value: "Jakarta" }
  //   });
  //   const valValue = MyWrapper.find("input").prop("value");
  //   expect(valValue).toEqual("Jakarta");
  // });

  it("Div 'error' has the correct text as a child", () => {
    const errorValue = wrapper.find(".error").text();
    expect(errorValue).toEqual(testProps.error);
  });
});
