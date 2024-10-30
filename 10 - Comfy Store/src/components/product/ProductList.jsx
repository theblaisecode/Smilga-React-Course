import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../../utils";

function ProductList() {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((singleProduct) => {
        const { image, title, price } = singleProduct.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={singleProduct.id}
            to={`/products/${singleProduct.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group">
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              />
            </figure>

            <div className="ml-0 sm:ml-16">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>

              <span className="text-secondary">{dollarsAmount}</span>
            </div>

            <p className="font-medium ml-0 sm:ml-auto text-lg">$179.99</p>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductList;
