import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../../utils";
import { useState } from "react";

export const singleProductLoader = async ({ params }) => {
  const res = await customFetch(`products/${params.id}`);
  return { product: res.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
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
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: `${color}` }}></button>
                );
              })}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="mt-10">
              <button className="btn btn-secondary btn-md">Add to bag</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;
