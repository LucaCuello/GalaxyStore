import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { IoSparklesSharp } from "react-icons/io5";
import { Product } from "../interfaces/interfaces";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="py-4 max-w-max" isFooterBlurred>
      <CardHeader className="pb-0 pt-0 px-4 flex-col items-start">
        <h4 className="font-bold uppercase text-large text-xl text-violet-400">
          {product.name}
        </h4>
        <p className="text-tiny uppercase font-bold text-violet-200">
          {product.category}
        </p>
        <small className="text-default-500">{product.subcategory}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="picture of a planet or moon"
          className="object-cover"
          height={200}
          width={200}
          src={product.imageURL}
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
