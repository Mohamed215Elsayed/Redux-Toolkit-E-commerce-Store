import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  filterProducts,
  filterGender,
  filterByColor,
  sortByPrice,
  filterBySize,
} from "../../features/slices/productsSlice";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  // Button,
} from "@material-tailwind/react";
import Error from "../Error/Error";
const FiltredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  // console.log("products",products);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  // console.log("params",type);
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();
  return (
    <>
      <div className="">
        <div className="pt-16">
          <div className="pl-14">
            <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
              {type}
            </h1>
            <div className="flex items-center justify-between py-8 ">
              <div className="flex items-center">
                {genderButtons.map((gender, index) => {
                  return (
                    <div key={index} className="mr-4">
                      <Button
                        color="gray"
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        className="text-black hover:bg-gray-300 duration-300 ease-in-out"
                        onClick={() => dispatch(filterGender(gender))}
                      >
                        {gender}
                      </Button>
                    </div>
                  );
                })}
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  onClick={() => dispatch(sortByPrice())}
                >
                  High Price
                </Button>
                <Menu
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <MenuHandler>
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                    >
                      Select a color
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {colorButtons.map((color, index) => {
                      return (
                        <MenuItem
                          key={index}
                          style={{ color: color }}
                          onClick={() => dispatch(filterByColor(color))}
                        >
                          {color}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
                <Menu
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <MenuHandler>
                    <Button
                      disabled={type === "Bags" || type === "Shoes"}
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                    >
                      Select a size
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {sizeButtons.map((size, index) => {
                      return (
                        <MenuItem
                          key={index}
                          style={{ size: size }}
                          onClick={() => dispatch(filterBySize(size))}
                        >
                          {size}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </div>
              <div className="pr-14">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  onClick={() => dispatch(filterProducts(type))}
                >
                  Clear Filter
                </Button>
              </div>
            </div>
          </div>
          {error ? (
            <Error></Error>
          ) : (
            <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
              {products
                .filter((product) => product.type === type)
                .map((product, index) => {
                  return (
                    <div key={index} className="">
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        text={product.text}
                        img={product.img}
                        price={product.price}
                        colors={product.color}
                      ></ProductCard>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FiltredProducts;
