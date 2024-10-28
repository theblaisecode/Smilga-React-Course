import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../../utils";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../../reduxToolkit/productColor";

export const singleProductLoader = async ({ params }) => {
  const res = await customFetch(`products/${params.id}`);
  return { product: res.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const dispatch = useDispatch();
  const productColor = useSelector((state) => state.color.color) || colors[0];

  const [amount, setAmount] = useState(1);

  return (
    <>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />

        <div className="">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>

          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>

          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>

            <div className="mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 ${
                    color === productColor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => dispatch(changeColor(color))}></button>
              ))}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}>
                {[...Array(20).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-10">
              <button className="btn btn-secondary btn-md uppercase">
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
