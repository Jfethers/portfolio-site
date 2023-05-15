import React, { KeyboardEvent, useState } from "react";
import { Form, Field } from "react-final-form";
import Button from "../Button/Button";
import * as validate from "../../utils/validations";
import { TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

// @ts-ignore
const TextFieldAdapter = ({ input, meta, label, ...rest }) => {
	return (
		<TextField
			{...input}
			label={label}
			id='outlined-basic'
			variant='outlined'
		/>
	);
};

//@ts-ignore
const TexAreaFieldAdapter = ({ input, meta, label, ...rest }) => {
	return (
		<Textarea
			{...input}
			minRows={2}
			label={label}
			id='outlined-basic'
			variant='outlined'
		/>
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
		console.log("values", values);
		// await fetch("/api/send", {
		// 	method: "post",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		name: values.name,
		// 		email: values.email,
		// 		subject: values.subject,
		// 		message: values.message,
		// 	}),
		// })
		// 	.then((res) => res.json())
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
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
							<div className='row'>
								<div className='column'>
									<Field
										name='name'
										component={TextFieldAdapter}
										validate={required}
										hintText='Name'
										floatingLabelText='Name'
										label='Name'
										multiline={false}
									/>
								</div>
								<div className='column'>
									<Field
										name='email'
										component={TextFieldAdapter}
										validate={required}
										hintText='Email'
										floatingLabelText='Email'
										label='Email'
										multiline={false}
									/>
								</div>
							</div>
							<div className='row'>
								<div className='double-coloumn'>
									<Field
										name='subject'
										component={TextFieldAdapter}
										validate={required}
										hintText='Subject'
										floatingLabelText='Subject'
										label='Subject'
										multiline={false}
									/>
								</div>

								<div className='double-coloumn'>
									<Field
										name='Message'
										component={TexAreaFieldAdapter}
										validate={required}
										hintText='Message'
										floatingLabelText='Message'
										label='Message'
										multiline={true}
										minRows={10}
									/>
								</div>
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
