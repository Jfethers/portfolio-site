export const email = (input) => {
  console.log("input", input);

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

export const required = (input) => {
  if (!input) {
    return "Field is required";
  } else return undefined;
};
