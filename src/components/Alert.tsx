import { motion } from "framer-motion";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AlertProps } from "../interfaces/interfaces";
import { getAlertColor } from "../utils/utils";

export const Alert = ({
  severity,
  message,
  recomendation,
  route,
}: AlertProps) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={getAlertColor(severity)}
    >
      <CiWarning
        className={`${
          severity === "error"
            ? "text-xl text-red-300"
            : "text-xl text-yellow-900"
        }`}
      />
      <p className="font-semibold">
        {message}{" "}
        <span className="underline cursor-pointer">
          <Link to={route}>{recomendation}</Link>
        </span>
      </p>
    </motion.div>
  );
};
