import { ModalBody, ModalHeader } from "@nextui-org/react";
import { IoSparklesSharp } from "react-icons/io5";
import Countdown from "./Countdown";

export const RegisterSuccessModal = () => {
  return (
    <>
      <ModalHeader className="flex items-center gap-2 text-violet-400">
        <IoSparklesSharp />
        <span className="font-bold">Congrats!</span>
        <IoSparklesSharp />
      </ModalHeader>
      <ModalBody>
        <p className="subpixel-antialiased text-default-500 tracking-wide">
          You're one of us now. Welcome to the Cosmos!
        </p>
        <p className="subpixel-antialiased text-default-500 tracking-wide">
          Your account has been created successfully. You'll be redirected to
          the login page in a few seconds. Be patient!
        </p>
        <Countdown />
      </ModalBody>
    </>
  );
};
