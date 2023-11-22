import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import { CiWarning } from "react-icons/ci";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoSparklesSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { FormValues } from "../interfaces/interfaces";
import { registerSchema as validationSchema } from "../schemas/schemas";
import { createUser } from "../services/UserServices";

export const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values: FormValues, { resetForm }) => {
      setIsLoading(true);
      try {
        const response = await createUser(values);
        toast.success("Account created successfully");
        resetForm();
        console.log(response);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          // FIXME: Solucionar error de typescript
          // TODO: Mostrar componente alert
          console.log("Email already exists");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Toaster richColors />
      <div className="container max-w-[1024px] px-4">
        <h2 className="text-3xl font-bold tracking-tight text-violet-400">
          Join us
        </h2>
        <p className="subpixel-antialiased text-default-500 tracking-wide">
          Create Your Gateway to the Cosmos
        </p>
        <form
          className="flex flex-col gap-2 mt-2"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Input
            type="text"
            label="Enter your full name"
            placeholder="Full name"
            errorMessage={formik.touched.fullName && formik.errors.fullName}
            isInvalid={
              formik.touched.fullName && Boolean(formik.errors.fullName)
            }
            {...formik.getFieldProps("fullName")}
          />
          <Input
            type="email"
            label="Enter your email address"
            placeholder="Email address"
            errorMessage={formik.touched.email && formik.errors.email}
            isInvalid={formik.touched.email && Boolean(formik.errors.email)}
            {...formik.getFieldProps("email")}
          />
          <Input
            label="Create a strong password"
            placeholder="Password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <IoEyeOutline className="text-xl text-default-400 pointer-events-none text-violet-500" />
                ) : (
                  <IoEyeOffOutline className="text-xl text-default-400 pointer-events-none text-violet-500" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            errorMessage={formik.touched.password && formik.errors.password}
            isInvalid={
              formik.touched.password && Boolean(formik.errors.password)
            }
            {...formik.getFieldProps("password")}
          />
          <Input
            type="password"
            label="Confirm your password"
            placeholder="Confirm password"
            errorMessage={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            isInvalid={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            {...formik.getFieldProps("confirmPassword")}
          />
          <Button
            className="text-violet-300 bg-violet-500/20"
            isLoading={isLoading}
            startContent={isLoading ? null : <IoSparklesSharp />}
            endContent={isLoading ? null : <IoSparklesSharp />}
            type="submit"
          >
            Register and explore
          </Button>
          {/* TODO: Componetizar */}
          <div className="flex gap-2 items-center p-4 bg-warning text-yellow-900 rounded">
            <CiWarning className="text-xl text-yellow-900" />
            <p className="font-semibold">
              This email already exists. Use a different one or try to{" "}
              <span className="underline cursor-pointer">
                <Link to="/auth/login">log in instead</Link>
              </span>
            </p>
          </div>
          <span className="text-sm text-violet-200/80">
            Already have an account?{" "}
            <span className="text-violet-400 cursor-pointer">
              <Link to="/auth/login">Log in</Link>
            </span>
          </span>
        </form>
      </div>
    </>
  );
};
