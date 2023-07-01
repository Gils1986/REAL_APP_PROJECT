import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const SignIn = ({ redirect = "/" }) => {
  const [error, setError] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string()
        .min(8)
        .max(1024)
        .required()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_])(?=(.*\d){4,})[a-zA-Z!@%$#^&*\-_\d]{8,}$/
        )
        .label("Password")
        .messages({
          "string.pattern.base": `The password must contain at least one uppercase letter, one lowercase
        letter, 4 numbers, 1 special character (!@%$#^&*) and a minimum of 8
        characters`,
        }),
    }),
    async onSubmit(values) {
      try {
        await login(values);
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader
        title="Sign In with app"
        description="If you are a registered user you can sign in now! "
      />
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
        />

        <div className="my-2">
          <button
            disabled={!form.isValid}
            type="submit"
            className="btn btn-primary"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
