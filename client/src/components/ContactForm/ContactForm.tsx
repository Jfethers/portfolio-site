import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Button from "../Button/Button";
import * as validate from "../../utils/validations";
import Textarea from "@mui/joy/Textarea";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

// @ts-ignore
const TextFieldAdapter = ({ input, meta, label, placeholder, ...rest }) => {
	return (
		<>
			<FormLabel>{label}</FormLabel>
			<Input
				{...input}
				placeholder={placeholder}
				id='outlined-basic'
				variant='outlined'
				size='lg'
			/>
		</>
	);
};

//@ts-ignore
const TexAreaFieldAdapter = ({ input, meta, label, placeholder, ...rest }) => {
	return (
		<>
			<FormLabel>{label}</FormLabel>
			<Textarea
				{...input}
				minRows={2}
				id='outlined-basic'
				variant='outlined'
				placeholder={placeholder}
				size='lg'
			/>
		</>
	);
};

const ContactForm = ({ close }: { close: Function }) => {
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
			.then((res) => {
				res.json();
				form.reset();
				close();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className='form'>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit, submitting, pristine, valid }) => (
					<form onSubmit={handleSubmit} className='form-body'>
						<div className='field'>
							<Field name='name' validate={validate.required}>
								{({ input, meta }) => (
									<div>
										<TextFieldAdapter
											input={input}
											meta={meta}
											label='Name'
											placeholder='name'
										/>
										{meta.error && meta.touched && (
											<span className='error'>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
						</div>
						<div className='field'>
							<Field
								name='email'
								validate={validate.composeValidators(
									validate.required,
									validate.email
								)}
							>
								{({ input, meta }) => (
									<div>
										<TextFieldAdapter
											input={input}
											meta={meta}
											label='Email'
											placeholder='email'
										/>
										{meta.error && meta.touched && (
											<span className='error'>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
						</div>
						<div className='field'>
							<Field name='subject' validate={validate.required}>
								{({ input, meta }) => (
									<div>
										<TextFieldAdapter
											input={input}
											meta={meta}
											label='Subject'
											placeholder='subject'
										/>
										{meta.error && meta.touched && (
											<span className='error'>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
						</div>
						<div className='field'>
							<Field name='message' validate={validate.required}>
								{({ input, meta }) => (
									<div>
										<TexAreaFieldAdapter
											input={input}
											meta={meta}
											label='Message'
											placeholder='message'
										/>
										{meta.error && meta.touched && (
											<span className='error'>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
						</div>
						<div className='buttons'>
							<Button type='submit' disabled={pristine || !valid || submitting}>
								Submit
							</Button>
						</div>
					</form>
				)}
			/>
		</div>
	);
};
export default ContactForm;
