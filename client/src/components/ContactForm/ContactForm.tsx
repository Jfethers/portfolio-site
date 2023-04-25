import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Text from "../Fields/Text/Text";
import Textarea from "../Fields/Textarea/Textarea";
import Button from "../Button/Button";
import * as validate from "../../utils/validations";

const ContactForm = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const onSubmit = async (
    values: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
    form: { reset: Function }
  ) => {
    await fetch("/api/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }),
    })
      .then((res) => res.json())
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
          active: true,
        }}
        render={({ handleSubmit, values, valid, form, errors, pristine }) => {
          console.log("form", form);
          return (
            <form className="form-body" onSubmit={handleSubmit}>
              <div className="field-group">
                <Field name="name">
                  {(props) => {
                    return (
                      <div>
                        <Text
                          onChange={props.input.onChange}
                          label={"Name"}
                          type={"text"}
                          fieldName="name"
                          value={values.name}
                          required={true}
                          validate={validate.required}
                          errors={errors}
                          focus={form.focus}
                          pristine={pristine}
                        />
                      </div>
                    );
                  }}
                </Field>
              </div>
              <div className="field-group">
                {/* <Text
                  label={"Email"}
                  type={"text"}
                  validate={validate.email}
                  fieldName="email"
                  value={values.email}
                  errors={errors}
                  active={active}
                  focus={form.focus}
                  pristine={pristine}
                /> */}
              </div>
              <div className="field-group">
                {/* <Text
                  label={"Subject"}
                  type={"text"}
                  fieldName="subject"
                  value={values.subject}
                  errors={errors}
                  active={active}
                  focus={form.focus}
                  pristine={pristine}
                /> */}
              </div>
              <div className="field-group">
                {/* <Textarea
                  label={"Message"}
                  type={"text"}
                  fieldName="message"
                  value={values.message}
                  errors={errors}
                  active={active}
                  focus={form.focus}
                  pristine={pristine}
                /> */}
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
