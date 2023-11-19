import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
} from "@nextui-org/react";
import { IoSparklesSharp } from "react-icons/io5";

export const ProductCard = () => {
  return (
    <Card className="py-4 max-w-max" isFooterBlurred>
      <CardHeader className="pb-0 pt-0 px-4 flex-col items-start">
        <h4 className="font-bold uppercase text-large text-xl text-violet-400">
          The moon
        </h4>
        <p className="text-tiny uppercase font-bold text-violet-200">
          Inner Solar System
        </p>
        <small className="text-default-500">Inhabited Worlds</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="picture of a planet or moon"
          className="object-cover"
          height={200}
          width={200}
          src="https://i.ibb.co/rm42mFK/01.jpg"
        />
      </CardBody>
      <CardFooter className="pb-0 pt-0">
        <Button
          variant="flat"
          className="text-violet-300 bg-violet-500/20"
          fullWidth
          startContent={<IoSparklesSharp />}
          endContent={<IoSparklesSharp />}
        >
          I want it!
        </Button>
      </CardFooter>
    </Card>
  );
};
