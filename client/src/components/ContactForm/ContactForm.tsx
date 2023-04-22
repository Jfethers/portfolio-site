import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Text from "../Fields/Text/Text";
import Button from "../Button/Button";

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
      <Text id={"2"} locked={false} active={false} />
      <Form
        onSubmit={onSubmit}
        subscription={{
          errors: true,
          values: true,
          valid: true,
          pristine: true,
        }}
        render={({ handleSubmit, values, valid, form }) => {
          return (
            <form className="form-body" onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="label">Name</label>
                <Field
                  name="name"
                  className="field"
                  component="input"
                  type="text"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} type="text" placeholder="Name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
              <div className="field-group">
                <label className="label">Email</label>
                <Field
                  name="email"
                  className="field"
                  component="input"
                  type="text"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} type="text" placeholder="Email" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
              <div className="field-group">
                <label className="label">Subject</label>
                <Field
                  name="subject"
                  className="field"
                  component="input"
                  type="text"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} type="text" placeholder="Subject" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
              <div className="field-group">
                <label className="label">Message</label>
                <Field
                  name="message"
                  className="field"
                  component="textarea"
                  type="text"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} type="text" placeholder="Message" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
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
