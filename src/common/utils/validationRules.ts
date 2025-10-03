import { IValues } from "./useForm";

const validate = (values: IValues) => {
  const errors: Partial<IValues> = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required";
  } else if (values.message.trim().split(/\s+/).length < 5) {
    errors.message = "Message must be at least 5 words";
  }

  return errors;
};

export default validate;
