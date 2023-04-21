import React, { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '../Button/Button';

interface IContactFormProps {
}

const ContactForm: FunctionComponent<IContactFormProps> = (props: IContactFormProps) => {
    const { } = props;
    const [ showEasterEgg, setShowEasterEgg ] = useState(false);

    const onSubmit = (values: object) => {
    }

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
                subscription={{errors: true, values: true, valid: true, pristine: true }}
                render={({ handleSubmit, values, valid }) => {
                    return (
                    <form className="form-body" onSubmit={handleSubmit}>
                        <div className="field-group">
                            <label className="label">Name</label>
                            <Field name="name" className="field" component="input" type="text">
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
                            <Field name="email" className="field" component="input" type="text">
                                {({ input, meta }) => (
                                <>
                                    <input {...input} type="text" placeholder="Email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                                )}
                            </Field> 
                        </div>
                        <div className="field-group">
                            <label className="label">Message</label>
                            <Field name="color" className="field" component="textarea" type="text">
                                {({ input, meta }) => (
                                <>
                                    <input {...input} type="text" placeholder="Message" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                                )}
                            </Field>
                        </div>
                        <div className="submit">
                            <Button onClick={() => onSubmit(values)} type="submit">Submit</Button>
                        </div>
                    </form>
                )
                }}
            >
            </Form>
        </div>
    )
}

export default ContactForm;