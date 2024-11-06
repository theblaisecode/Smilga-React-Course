import { useLoaderData, Form, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function ProductFilter() {
  const { meta } = useLoaderData();

  return (
    <Form
      method="GET"
      action="products"
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />

      {/* Category */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />

      {/* Company */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />

      {/* Order */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a - z", "z - a", "high - low", "low - high"]}
        size="select-sm"
      />

      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>

      <Link to="products" className="btn btn-secondary btn-sm">
        reset
      </Link>
    </Form>
  );
}
export default ProductFilter;
