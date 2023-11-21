import { Button } from "@nextui-org/react";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-xl text-center gap-2 pt-4">
        <h1 className="text-3xl font-bold tracking-tight text-violet-400">
          Embark on an interstellar Journey!
        </h1>
        <p className="subpixel-antialiased text-default-500 tracking-wide">
          Discover the wonders of the solar system with our exclusive collection
          of high-quality planetary posters. From the dynamic storms of Jupiter
          to the serene beauty of Saturn's rings, each piece is a window to the
          cosmos. Perfect for astronomers and dreamers alike, our posters are
          designed to inspire and educate.
        </p>
        <Button
          className="bg-violet-500 text-background shadow-lg shadow-violet-800/60 hover:shadow-violet-800/80"
          as={Link}
          to="/products"
          startContent={<IoRocketOutline />}
          fullWidth
        >
          Explore the cosmos
        </Button>
      </div>
    </>
  );
};
