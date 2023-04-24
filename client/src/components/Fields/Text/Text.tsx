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
  active?: boolean;
  locked?: boolean;
  predicted?: string;
  type: string;
  validate?: Function;
  fieldName: string;
};

type TextState = {
  focused?: false;
  value?: string;
  error?: string;
  label?: string;
  active?: boolean;
  locked?: boolean;
  onChange?: () => "";
};

const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  // const { predicted, value, error, label, active } = props;

  const [active, setActive] = useState(props.locked && props.active);
  // const [value, setValue] = useState(props.value || "");
  const [error, setError] = useState(props.error || "");
  const [label, setLabel] = useState(props.label || "Label");
  const [focused, setFocused] = useState(
    (props.locked && props.focused) || false
  );

  const { locked, type, fieldName, value } = props;
  return (
    <div
      className={classNames({
        field: true,
        [`${type}`]: true,
        active: locked ? active : active || value,
        locked: locked && !active,
        focused: locked ? focused : focused || value,
      })}
    >
      {type === "text" ? (
        <Field
          name={fieldName}
          type={type}
          placeholder={label}
          component="input"
          onFocus={() => !locked && setFocused(true)}
          onBlur={() => !locked && setFocused(false)}
        />
      ) : (
        <Field
          name={fieldName}
          type={type}
          placeholder={label}
          component="textarea"
          onFocus={() => !locked && setFocused(true)}
          onBlur={() => !locked && setFocused(false)}
        />
      )}
      <label className={error && "error"}>{error || label}</label>
    </div>
  );
};

export default Text;
