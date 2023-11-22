import { Button, Input } from "@nextui-org/react";
import { IoSparklesSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container max-w-[1024px] px-4">
      <h2 className="text-3xl font-bold tracking-tight text-violet-400">
        Welcome back!
      </h2>
      <p className="subpixel-antialiased text-default-500 tracking-wide">
        Log In to Continue Your Space Journey
      </p>
      <form noValidate className="flex flex-col gap-2 mt-2">
        <Input
          type="email"
          label="Enter the email address associated with your account"
          placeholder="Email address"
          name="email"
        />
        <Input
          type="password"
          label="Enter your password"
          placeholder="Password"
          name="password"
        />
        <Button
          className="text-violet-300 bg-violet-500/20"
          startContent={<IoSparklesSharp />}
          endContent={<IoSparklesSharp />}
          type="submit"
        >
          Log In to the Stars
        </Button>
        <span className="text-sm text-violet-200/80">
          New to Galaxy Store?{" "}
          <span className="text-violet-400 cursor-pointer">
            <Link to="/auth/login">Sing up</Link>
          </span>
        </span>
      </form>
    </div>
  );
};
