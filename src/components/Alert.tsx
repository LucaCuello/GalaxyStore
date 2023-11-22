import { motion } from "framer-motion";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Alert = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex gap-2 items-center p-4 bg-warning text-yellow-900 rounded"
    >
      <CiWarning className="text-xl text-yellow-900" />
      <p className="font-semibold">
        This email already exists. Use a different one or try to{" "}
        <span className="underline cursor-pointer">
          <Link to="/auth/login">log in instead</Link>
        </span>
      </p>
    </motion.div>
  );
};
