import React, { useState } from "react";
import { Form, Field } from "react-final-form";
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
					initialValues={{ name: "", email: "", subject: "", message: "" }}
					render={({ handleSubmit }) => {
						return (
							<form onSubmit={handleSubmit} className='form-body'>
								<div className='field-group'></div>
								<div className='submit'>
									<Button type='submit'>Submit</Button>
								</div>
							</form>
						);
					}}
				></Form>
			</div>
		</>
	);
};
export default ContactForm;
