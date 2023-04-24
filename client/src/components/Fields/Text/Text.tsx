/*tslint:disabled*/
import React, { FormEvent, useState, FunctionComponent } from "react";
import classNames from "classnames";
import { Field } from "react-final-form";

type TextProps = {
  focused?: boolean;
  value?: string;
  error?: string;
  label?: string;
  onChange?: Function;
  active?: string;
  locked?: boolean;
  predicted?: string;
  type: string;
  validate?: Function;
  fieldName: string;
  required?: boolean;
  errors?: object;
  focus: Function;
};

type TextState = {
  focused?: false;
  value?: string;
  error?: string;
  label?: string;
  active?: string;
  locked?: boolean;
  onChange?: () => "";
};

const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  const fieldKey = props.fieldName as keyof typeof props.errors;
  let fieldError = props.errors && props.errors[fieldKey];

  // const [active, setActive] = useState(props.locked && props.active);

  const [label, setLabel] = useState(props.label || "Label");
  const [focused, setFocused] = useState(
    (props.locked && props.focused) || false
  );

  const { locked, type, fieldName, value, validate, required, active, focus } =
    props;

  console.log("fieldError", fieldError);
  return (
    <div
      className={classNames({
        field: true,
        [`${type}`]: true,
        active: locked ? active : active || value,
        locked: locked && !active,
        focused: locked ? active : active || value,
      })}
    >
      {type === "text" ? (
        <Field
          name={fieldName}
          type={type}
          placeholder={label}
          component="input"
          onFocus={() => {
            if (!locked) {
              setFocused(true);
            }
          }}
          onBlur={() => {
            if (!locked) {
              setFocused(false);
            }
          }}
          validate={(value) => (validate ? validate(value) : null)}
          required={required}
        />
      ) : (
        <Field
          name={fieldName}
          type={type}
          placeholder={label}
          component="textarea"
          onFocus={() => {
            if (!locked) {
              setFocused(true);
            }
          }}
          onBlur={() => {
            if (!locked) {
              setFocused(false);
            }
          }}
        />
      )}
      <label
        className={classNames({
          error: fieldError && !focused,
        })}
        htmlFor={`${fieldName}`}
      >
        {fieldError && !focused ? fieldError : label}
      </label>
    </div>
  );
};

export default Text;
