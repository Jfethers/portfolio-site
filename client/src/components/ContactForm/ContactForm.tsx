import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Text from "../Fields/Text/Text";
import Textarea from "../Fields/Textarea/Textarea";
import Button from "../Button/Button";
import * as validate from "../../utils/validations";

const ContactForm = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const onSubmit = (
    values: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
    form: { reset: Function }
  ) => {
    fetch("/send", {
      method: "post",
      headers: {
        "Content - Type": "application / json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <h1>Say Hi</h1>
      <div onClick={() => setShowEasterEgg(!showEasterEgg)}>
        {showEasterEgg ? (
          <p>or maybe I am, idk.</p>
        ) : (
          <p>(I'm not doing weird things like collecting emails)</p>
        )}
      </div>
      <Form
        onSubmit={onSubmit}
        subscription={{
          errors: true,
          values: true,
          valid: true,
          pristine: true,
        }}
        render={({ handleSubmit, values, valid, form }) => {
          console.log("values", values);
          return (
            <form className="form-body" onSubmit={handleSubmit}>
              <div className="field-group">
                <Text
                  locked={false}
                  active={false}
                  label={"Name"}
                  type={"text"}
                  fieldName="name"
                  value={values.name}
                />
              </div>
              <div className="field-group">
                <Text
                  locked={false}
                  active={false}
                  label={"Email"}
                  type={"text"}
                  validate={validate.email}
                  fieldName="email"
                  value={values.email}
                />
              </div>
              <div className="field-group">
                <Text
                  locked={false}
                  active={false}
                  label={"Subject"}
                  type={"text"}
                  fieldName="subject"
                  value={values.subject}
                />
              </div>
              <div className="field-group">
                <Textarea
                  locked={false}
                  active={false}
                  label={"Message"}
                  type={"text"}
                  fieldName="message"
                  value={values.message}
                />
              </div>
              <div className="submit">
                <Button onClick={() => onSubmit(values, form)} type="submit">
                  Submit
                </Button>
              </div>
            </form>
          );
        }}
      ></Form>
    </div>
  );
};
export default ContactForm;
