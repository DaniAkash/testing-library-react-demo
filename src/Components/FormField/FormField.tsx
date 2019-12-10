import React, { ChangeEvent } from "react";

export interface FormFieldProps {
  value: string;
  placeholder: string;
  label: string;
  onChangeText: (a: string) => boolean;
  fieldId: string;
}

const FormField: React.FC<FormFieldProps> = ({
  value = "",
  placeholder = "",
  label = "",
  onChangeText = (newValue: string) => true,
  fieldId = ""
}: FormFieldProps) => {
  const changeEvent = (event: ChangeEvent<HTMLInputElement>): boolean => {
    return onChangeText(event.target.value);
  };

  return (
    <div>
      <label htmlFor={fieldId}>{label}</label>
      <input
        id={fieldId}
        value={value}
        placeholder={placeholder}
        onChange={changeEvent}
      />
    </div>
  );
};

export default FormField;
