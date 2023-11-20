import {
    BreadcrumbItem,
    Breadcrumbs,
    Image,
    ModalBody,
    ModalHeader,
} from "@nextui-org/react";
import { CiShoppingTag } from "react-icons/ci";
import { Product } from "../interfaces/interfaces";

export default function ProductCardDetails({ product }: { product: Product }) {
  return (
    <>
      <ModalHeader className="flex flex-col">
        <Breadcrumbs
          isDisabled
          className="hidden md:block"
          itemClasses={{
            item: "text-default-500 data-[current=true]:text-violet-300",
          }}
        >
          <BreadcrumbItem>Galaxy Store</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem>{product.category}</BreadcrumbItem>
          <BreadcrumbItem>{product.name}</BreadcrumbItem>
        </Breadcrumbs>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4 md:flex-row">
          <Image
            alt="picture of a planet or moon"
            className="object-cover w-2/3"
            removeWrapper
            src={product.imageURL}
          />
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-2xl font-bold uppercase text-large text-violet-400">
                {product.name}
              </h2>
              <p className="text-tiny uppercase font-bold text-violet-200">
                {product.category}
              </p>
              <small className="text-default-500">{product.subcategory}</small>
            </div>
            <p className="text-default-600 tracking-wide">
              {product.description}
            </p>
            <p className="flex items-center gap-2">
              <CiShoppingTag />
              <p className="text-violet-400 font-bold">{`$${product.price},00 USD`}</p>
            </p>
          </div>
        </div>
      </ModalBody>
    </>
  );
}
