import { AlertProps } from "../interfaces/interfaces";

export const isErrorWithCode = (error: unknown): error is { code: string } => {
  return typeof error === "object" && error !== null && "code" in error;
};

export const getAlertColor = (severity: AlertProps["severity"]) => {
  if (severity === "error")
    return "flex gap-2 items-center p-4 rounded bg-red-600/75 text-red-300";
  if (severity === "warning")
    return "flex gap-2 items-center p-4 rounded bg-warning text-yellow-900";
};

export const menuItems = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Log in",
    href: "/auth/login",
  },
  {
    name: "Register",
    href: "/auth/register",
  },
];
