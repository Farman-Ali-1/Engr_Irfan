import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div className="pl-4 sm:pl-14">
        <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
          {type}
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-8">
          <div className="flex items-center flex-wrap">
            {genderButtons.map((item, index) => (
              <Button
                key={index}
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2 mb-2 sm:mr-4 sm:mb-0"
                onClick={() => dispatch(filterGender(item))}
              >
                {item}
              </Button>
            ))}
            <Button
              color="gray"
              size="lg"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2 mb-2 sm:mr-4 sm:mb-0"
              onClick={() => dispatch(sortByPrice())}
            >
              High Price
            </Button>
            <Menu>
              <MenuHandler>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2 mb-2 sm:mr-4 sm:mb-0"
                >
                  Select a color
                </Button>
              </MenuHandler>
              <MenuList>
                {colorButtons.map((item, index) => (
                  <MenuItem
                    style={{ color: item }}
                    key={index}
                    onClick={() => dispatch(filterByColor(item))}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button
                  disabled={type === "Bags" || type === "Shoes"}
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2 mb-2 sm:mr-4 sm:mb-0"
                >
                  Select a size
                </Button>
              </MenuHandler>
              <MenuList>
                {sizeButtons.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => dispatch(filterBySize(item))}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
          <div className="pr-4 sm:pr-14 mt-4 sm:mt-0">
            <Button
              color="gray"
              size="lg"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center py-8">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => (
              <div key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                ></ProductCard>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
