export const email = (input) => {
	const validEmail = String(input)
		.toLocaleLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	if (validEmail) {
		return undefined;
	} else {
		return "Please enter a valid email";
	}
};

export const required = (value) => (value ? undefined : "Required");

export const composeValidators =
	(...validators) =>
	(value) =>
		validators.reduce(
			(error, validator) => error || validator(value),
			undefined
		);
