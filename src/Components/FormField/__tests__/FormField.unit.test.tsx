import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import FormField from "../FormField";

const FormFieldWrapper = () => {
  const [inputValue, setInputValue] = useState("");

  const onChangeText = (newInputValue: string) => {
    setInputValue(newInputValue);
    return true;
  };

  return (
    <FormField
      value={inputValue}
      placeholder={"First Name"}
      label={"First Name"}
      onChangeText={onChangeText}
      fieldId={"first-name"}
    />
  );
};

const setUp = () => {
  const utils = render(<FormFieldWrapper/>);
  const inputField = utils.getByLabelText("First Name");
  return {
    inputField,
    ...utils
  };
};

describe("Form Field working Properly", () => {
  test("Form is being rendered properly", () => {
    const {inputField} = setUp();
    expect(inputField).toBeInTheDocument();
  });

  test("Form field can be edited properly", () => {
    const {inputField} = setUp();
    const inputText = "Dani";
    fireEvent.change(inputField, { target: { value: inputText } });
    expect(inputField.value).toBe(inputText);
  });
});
