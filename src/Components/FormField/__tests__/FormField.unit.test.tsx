import React, { useState } from "react";
import FormField, { FormFieldProps } from "../FormField";
import { render, fireEvent } from "@testing-library/react";

const formData: FormFieldProps = {
  value: "test value",
  placeholder: "test placeholder",
  label: "my label",
  onChangeText: text => true,
  fieldId: "my-id"
};

describe("<FormField/> Component", () => {
  test("Form field renders properly", () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <FormField
        value={formData.value}
        placeholder={formData.placeholder}
        label={formData.label}
        onChangeText={formData.onChangeText}
        fieldId={formData.fieldId}
      />
    );
    const labelField = getByText(formData.label);
    const inputField = getByLabelText(formData.label);
    const inputFieldByPlaceholder = getByPlaceholderText(formData.placeholder);
    expect(labelField).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(inputFieldByPlaceholder).toBeInTheDocument();
  });

  test("Form field text can be changed", () => {
    const FormWrapper = () => {
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

    const { getByLabelText } = render(<FormWrapper />);
    const inputField = getByLabelText("First Name");
    const inputText = "New User";
    fireEvent.change(inputField, {target: { value: inputText }});
    expect(inputField.value).toBe(inputText);
  });
});
