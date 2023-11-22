import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Alert } from "../components/Alert";
import { LoginValues } from "../interfaces/interfaces";
import { loginSchema as validationSchema } from "../schemas/schemas";
import { login, saveUIDToLocalStorage } from "../services/UserServices";
import { isErrorWithCode } from "../utils/utils";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values: LoginValues, { resetForm }) => {
      setIsLoading(true);
      try {
        const response = await login(values);
        if (response) saveUIDToLocalStorage(response);
        setIsAlertVisible(false);
        toast.success("Welcome back!");
        resetForm();
        console.log(response);
      } catch (err) {
        console.log(err);
        if (isErrorWithCode(err)) {
          if (err.code === "auth/invalid-login-credentials") {
            console.log("User not found");
            setIsAlertVisible(true);
          } else {
            console.log("Error", err.code);
          }
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
          Welcome back!
        </h2>
        <p className="subpixel-antialiased text-default-500 tracking-wide">
          Log In to Continue Your Space Journey
        </p>
        <form
          noValidate
          className="flex flex-col gap-2 mt-2"
          onSubmit={formik.handleSubmit}
        >
          <Input
            type="email"
            label="Enter the email address associated with your account"
            placeholder="Email address"
            errorMessage={formik.touched.email && formik.errors.email}
            isInvalid={formik.touched.email && Boolean(formik.errors.email)}
            {...formik.getFieldProps("email")}
          />
          <Input
            type="password"
            label="Enter your password"
            placeholder="Password"
            errorMessage={formik.touched.password && formik.errors.password}
            isInvalid={
              formik.touched.password && Boolean(formik.errors.password)
            }
            {...formik.getFieldProps("password")}
          />
          <Button
            className="text-violet-300 bg-violet-500/20"
            startContent={isLoading ? null : <IoSparklesSharp />}
            endContent={isLoading ? null : <IoSparklesSharp />}
            type="submit"
            isLoading={isLoading}
          >
            Log In to the Stars
          </Button>
          <AnimatePresence>
            {isAlertVisible && (
              <Alert
                message="Invalid credentials. Try again or"
                recomendation="register instead"
                severity="error"
                route="/auth/register"
              />
            )}
          </AnimatePresence>
          <span className="text-sm text-violet-200/80">
            New to Galaxy Store?{" "}
            <span className="text-violet-400 cursor-pointer">
              <Link to="/auth/login">Sing up</Link>
            </span>
          </span>
        </form>
      </div>
    </>
  );
};
