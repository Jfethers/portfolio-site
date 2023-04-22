/*tslint:disabled*/
import React, { FormEvent, useState, FunctionComponent } from "react";

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

  const changeValue = (event: FormEvent<HTMLInputElement>) => {
    console.log("change value", event);
    const { currentTarget } = event;
    const value = (currentTarget as HTMLInputElement).value;
    console.log("value", value);
    setValue(value);
    setError("");
  };

  const { locked } = props;

  const fieldClassName = `field ${
    (locked ? active : active || value) && "active"
  } ${locked && !active && "locked"}`;

  return (
    <div className="field">
      <input
        id={"1"}
        type="text"
        value={value}
        placeholder={label}
        onChange={(e: FormEvent<HTMLInputElement>) => changeValue(e)}
        // onKeyDown={this.handleKeyPress.bind(this)}
      />
      <label htmlFor={"1"} className={error && "error"}>
        {error || label}
      </label>
    </div>
  );
};

export default Text;
