import { useState } from "react";
import { notification } from "antd";

export interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (
  validate: (values: IValues) => Partial<IValues>,
  apiUrl: string
) => {
  const [values, setValues] = useState<IValues>({ ...initialValues });
  const [errors, setErrors] = useState<Partial<IValues>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.values(validationErrors).every((err) => !err)) {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          notification.error({
            message: "Error",
            description: "There was an error sending your message. Please try again later.",
          });
        } else {
          setValues({ ...initialValues });
          setErrors({});

          notification.success({
            message: "Success",
            description: "Your message has been sent!",
          });
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Failed to submit form. Please try again later.",
        });
        console.error(error);
      }
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
