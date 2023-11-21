import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoSparklesSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export const Register = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="container max-w-[1024px] px-4">
      <h2 className="text-3xl font-bold tracking-tight text-violet-400">
        Join us
      </h2>
      <p className="subpixel-antialiased text-default-500 tracking-wide">
        Create Your Gateway to the Cosmos
      </p>
      <form className="flex flex-col gap-2 mt-2">
        <Input
          type="text"
          label="Enter your full name"
          placeholder="Full name"
        />
        <Input
          type="email"
          label="Enter your email address"
          placeholder="Email address"
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
        />
        <Input
          type="password"
          label="Confirm your password"
          placeholder="Confirm password"
        />
        <Button
          className="text-violet-300 bg-violet-500/20"
          startContent={<IoSparklesSharp />}
          endContent={<IoSparklesSharp />}
          type="submit"
        >
          Register and explore
        </Button>
        <span className="text-sm text-violet-200/80">
          Already have an account?{" "}
          <span className="text-violet-400 cursor-pointer">
            <Link to="/auth/login">Log in</Link>
          </span>
        </span>
      </form>
    </div>
  );
};
