import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
    Skeleton,
} from "@nextui-org/react";

export const ProductCardSkeleton = () => {
  return (
    <Card className="py-4 max-w-max" isFooterBlurred>
      <CardHeader className="pb-0 pt-0 px-4 flex-col items-start">
        <Skeleton className="rounded-lg mb-1 w-full">
          <h4 className="font-bold uppercase text-large text-xl text-violet-400">
            Name
          </h4>
        </Skeleton>
        <Skeleton className="rounded-lg mb-1 w-40">
          <p className="text-tiny uppercase font-bold text-violet-200">
            Category
          </p>
        </Skeleton>
        <Skeleton className="rounded-lg h-3 w-30">
          <small className="text-default-500">Subcategory</small>
        </Skeleton>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton className="rounded-lg">
          <Image
            alt="picture of a planet or moon"
            className="object-cover"
            height={200}
            width={200}
          />
        </Skeleton>
      </CardBody>
      <CardFooter className="pb-0 pt-0">
        <Skeleton className="rounded-lg w-full">
          <Button
            variant="flat"
            className="text-violet-300 bg-violet-500/20"
            fullWidth
          >
            I want it!
          </Button>
        </Skeleton>
      </CardFooter>
    </Card>
  );
};
