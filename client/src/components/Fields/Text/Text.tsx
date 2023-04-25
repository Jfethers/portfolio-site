/*tslint:disabled*/
import React, { FormEvent, useState, FunctionComponent } from "react";
import classNames from "classnames";
import { Field } from "react-final-form";

type TextProps = {
  focused?: boolean;
  value?: string;
  error?: string;
  label: string;
  onChange?: Function;
  active?: string;
  predicted?: string;
  type: string;
  validate?: Function;
  fieldName: string;
  required?: boolean;
  errors?: object;
  focus: Function;
  pristine: boolean;
};

type TextState = {
  focused?: false;
  value?: string;
  error?: string;
  active?: string;
  onChange?: () => "";
};

const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  const fieldKey = props.fieldName as keyof typeof props.errors;
  let fieldError = props.errors && props.errors[fieldKey];

  const [focused, setFocused] = useState(props.focused || false);

  const {
    type,
    fieldName,
    value,
    validate,
    required,
    active,
    focus,
    label,
    pristine,
  } = props;

  return (
    <div
      className={classNames({
        field: true,
        [`${type}`]: true,
        focused: active || value,
        active: focused || value,
        error: fieldError && !focused && !pristine,
      })}
    >
      {type === "text" ? (
        <input
          {...{
            value: value,
            placeholder: label,
            onBlur: () => setFocused(false),
            onFocus: () => setFocused(true),
            type: "text",
          }}
        />
      ) : (
        <textarea
          {...{
            value: value,
            placeholder: label,
            onBlur: () => setFocused(false),
            onFocus: () => setFocused(true),
            type: "textarea",
          }}
        />
      )}
      <label
        htmlFor={`${fieldName}`}
        className={classNames({
          error: fieldError && !focused && !active,
        })}
      >
        {fieldError && !focused && !active ? fieldError : label}
      </label>
    </div>
  );
};

export default Text;
