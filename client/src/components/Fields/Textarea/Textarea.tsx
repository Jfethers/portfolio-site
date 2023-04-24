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
  active?: boolean;
  locked?: boolean;
  predicted?: string;
  type: string;
  fieldName: string;
};

type TextareaState = {
  focused?: false;
  value?: string;
  error?: string;
  label?: string;
  active?: boolean;
  locked?: boolean;
  onChange?: () => "";
};

const Textarea: FunctionComponent<TextareaProps> = (props: TextareaProps) => {
  const [active, setActive] = useState(props.locked && props.active);
  const [error, setError] = useState(props.error || "");
  const [label, setLabel] = useState(props.label || "Label");
  const [focused, setFocused] = useState(
    (props.locked && props.focused) || false
  );

  const { locked, fieldName, value } = props;

  return (
    <Text
      label={label}
      locked={locked}
      active={active}
      error={error}
      type="textarea"
      fieldName={fieldName}
      value={value}
    />
  );
};

export default Textarea;
