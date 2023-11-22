import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
  confirmPassword: Yup.string()
    .required("This field is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
