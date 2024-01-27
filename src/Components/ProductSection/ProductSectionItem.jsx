import React, { useState } from "react";
import {
  Card,CardHeader,CardBody,CardFooter,Typography,Tooltip,Rating} from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";
function ProductSectionItem({id,img,name,text,size,price,color,totalPrice}) {
  const dispatch = useDispatch();
  const [rated, setRated] = useState(4);
  const defaultSize = size[0];
  const defaultColor = color[0];
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  return (
    <>
    <Card className="w-96 relative">
    <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
        >
          SALE%
        </Typography>
      <CardHeader floated={false}  className="h-96">
        <img src={img} alt={name} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {name}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          {text}
        </Typography>
        <div className="flex justify-around items-center pt-4">
        <Typography color="red" className="font-medium" textGradient>
              Size left:{" "}
              <span className="text-gray-400 text-base font-extralight">
                {defaultSize}
              </span>
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
        </div>
        <div className="flex items-center gap-1 font-base text-blue-gray-400">
      {rated}.7
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        Based on 134 Reviews
      </Typography>
    </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2" >
        <Tooltip content="Add to Cart" placement="bottom">
          <Button
            onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  }))
            }
            size="lg"
            color="gray"
            variant="outlined"
            ripple={true}
            className="text-black hover:bg-gray-300 duration-300 ease-in-out"
            >Add to Cart
          </Button>    
        </Tooltip>
        <Tooltip content="Add to wishlist" placement="bottom">
          <Button
            size="lg"
            color="gray"
            variant="outlined"
            ripple={true}
            className=" hover:bg-red-300 duration-300 ease-in-out"
            onClick={() => console.log("add to wishlist")}
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
    </>
  );
}
export default ProductSectionItem;
