/*tslint:disabled*/
import React, { FormEvent, useState, FunctionComponent } from "react";
import classNames from "classnames";

type TextProps = {
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
  const [value, setValue] = useState(props.value || "");
  const [error, setError] = useState(props.error || "");
  const [label, setLabel] = useState(props.label || "Label");
  const [focused, setFocused] = useState(
    (props.locked && props.focused) || false
  );

  const changeValue = (event: FormEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    const value = (currentTarget as HTMLInputElement).value;
    setValue(value);
    setError("");
  };

  const changeTextarea = (event: FormEvent<HTMLTextAreaElement>) => {
    const { currentTarget } = event;
    const value = (currentTarget as HTMLTextAreaElement).value;
    setValue(value);
    setError("");
  };

  const { locked, id, type } = props;
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
        <input
          id={id}
          type={type}
          value={value}
          placeholder={label}
          onChange={(e: FormEvent<HTMLInputElement>) => changeValue(e)}
          onFocus={() => !locked && setFocused(true)}
          onBlur={() => !locked && setFocused(false)}
          // onKeyDown={this.handleKeyPress.bind(this)}
        />
      ) : (
        <textarea
          id={id}
          value={value}
          placeholder={label}
          onChange={(e: FormEvent<HTMLTextAreaElement>) => changeTextarea(e)}
          onFocus={() => !locked && setFocused(true)}
          onBlur={() => !locked && setFocused(false)}
          // onKeyDown={this.handleKeyPress.bind(this)}
        />
      )}
      <label htmlFor={"1"} className={error && "error"}>
        {error || label}
      </label>
    </div>
  );
};

export default Text;
