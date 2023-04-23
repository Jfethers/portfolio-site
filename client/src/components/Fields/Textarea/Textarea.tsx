/*tslint:disabled*/
import React, { FormEvent, useState, FunctionComponent } from "react";
import classNames from "classnames";
import Text from "../Text/Text";

type TextareaProps = {
  id: string;
  focused?: boolean;
  value?: string;
  error?: string;
  label?: string;
  onChange?: Function;
  active?: boolean;
  locked?: boolean;
  predicted?: string;
  type: string;
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
  const [value, setValue] = useState(props.value || "");
  const [error, setError] = useState(props.error || "");
  const [label, setLabel] = useState(props.label || "Label");
  const [focused, setFocused] = useState(
    (props.locked && props.focused) || false
  );

  const changeValue = (event: FormEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    const value = (currentTarget as HTMLInputElement).value;
    console.log("value", value);
    setValue(value);
    setError("");
  };

  const { locked, id } = props;

  return (
    <Text
      label={label}
      id={id}
      locked={locked}
      active={active}
      error={error}
      type="textarea"
    />
  );
};

export default Textarea;
