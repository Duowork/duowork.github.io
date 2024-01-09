import toastNotify from "./toastNotify";

export default function validateForm(input: { email: string }) {
  const errors = {} as { email: string };
  let message: string;

  if (!input.email) {
    message = "Email field can not be empty 📭";

    toastNotify("error", message);
    // errors.email = message;
  } else if (input.email.length > 30) {
    message = "Email characters are too long 🤥";

    toastNotify("warning", message);
    // errors.email = message;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.email)) {
    message = "Invalid email address 👎🏿";

    // toastNotify("error", message);
    errors.email = message;
  }

  return errors;
}
