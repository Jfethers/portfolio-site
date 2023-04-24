/*tslint:disabled*/
import React, { FormEvent, useState, FunctionComponent } from "react";
import classNames from "classnames";
import Text from "../Text/Text";

type TextareaProps = {
  focused?: boolean;
  value?: string;
  error?: string;
  label?: string;
  onChange?: Function;
  active?: string;
  locked?: boolean;
  predicted?: string;
  type: string;
  fieldName: string;
  errors?: object;
  focus: Function;
};

type TextareaState = {
  focused?: false;
  value?: string;
  error?: string;
  label?: string;
  active?: string;
  locked?: boolean;
  onChange?: () => "";
};

const Textarea: FunctionComponent<TextareaProps> = (props: TextareaProps) => {
  const [error, setError] = useState(props.error || "");
  const [label, setLabel] = useState(props.label || "Label");

  const { locked, fieldName, value, errors, active, focus } = props;

  return (
    <Text
      label={label}
      locked={locked}
      active={active}
      error={error}
      type="textarea"
      fieldName={fieldName}
      value={value}
      errors={errors}
      focus={focus}
    />
  );
};

export default Textarea;
