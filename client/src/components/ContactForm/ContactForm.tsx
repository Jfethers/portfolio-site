import React, { KeyboardEvent, useState } from "react";
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
				label={label}
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
				label={label}
				id='outlined-basic'
				variant='outlined'
				placeholder={placeholder}
				size='lg'
			/>
		</>
	);
};

const required = (value: string) => (value ? undefined : "Required");

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
		<>
			<div className='form'>
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
					render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit} className='form-body'>
							<div className='field'>
								<Field
									name='name'
									component={TextFieldAdapter}
									validate={required}
									hintText='Name'
									floatingLabelText='Name'
									label='Name'
									multiline={false}
									className='field'
									placeholder='name'
									required={true}
								/>
							</div>
							<div className='field'>
								<Field
									name='email'
									component={TextFieldAdapter}
									validate={required}
									hintText='Email'
									floatingLabelText='Email'
									label='Email'
									multiline={false}
									className='field'
									placeholder='email'
									required={true}
								/>
							</div>
							<div className='field'>
								<Field
									name='subject'
									component={TextFieldAdapter}
									validate={required}
									hintText='Subject'
									floatingLabelText='Subject'
									label='Subject'
									multiline={false}
									className='field'
									placeholder='subject'
									required={true}
								/>
							</div>
							<div className='field'>
								<Field
									name='Message'
									component={TexAreaFieldAdapter}
									validate={required}
									hintText='Message'
									floatingLabelText='Message'
									label='Message'
									multiline={true}
									minRows={10}
									className='field'
									placeholder='message'
									required={true}
								/>
							</div>

							<div className='buttons'>
								<button type='submit' disabled={submitting}>
									Submit
								</button>
							</div>
						</form>
					)}
				/>
			</div>
		</>
	);
};
export default ContactForm;
