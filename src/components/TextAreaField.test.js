import React from "react";
import { mount } from "enzyme";
import TextAreaField from "./TextAreaField";

const testProps = {
  label: "Message",
  name: "message",
  placeholder: "Type your message",
  value: "",
  error: "Message must be a more than 10 characters"
};

describe("<TextAreaField />", () => {
  const wrapper = mount(<TextAreaField {...testProps} />);

  it("Display the input's label correctly", () => {
    const _label = wrapper.find(".label").text();
    expect(_label).toEqual(testProps.label);
  });

  it("Attribute 'name' has the correct value", () => {
    const _name = wrapper.find("textarea").prop("name");
    expect(_name).toEqual(testProps.name);
  });

  it("Attribute 'placeholder' has the correct value", () => {
    const _placeholder = wrapper.find("textarea").prop("placeholder");
    expect(_placeholder).toEqual(testProps.placeholder);
  });

  it("Attribute 'value' has the correct value", () => {
    const _value = wrapper.find("textarea").prop("value");
    expect(_value).toEqual(testProps.value);
  });

  it("Div 'error' has the correct text as a child", () => {
    const _error = wrapper.find(".error").text();
    expect(_error).toEqual(testProps.error);
  });
});
