function CartItem({ cartItem }) {
  const { cartID, title, price, image, amount, company, color } = cartItem;

  return (
    <article
      key={cartID}
      className="mb-12 flex lex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded sm:h-32 sm:w-32 object-cover"
      />

      <div className="sm:ml-16">
        <h3 className="capitalize font-medium">{title}</h3>

        <h4 className="mt-2 capitalize text-sm text-secondary">{company}</h4>

        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: color }}></span>
        </p>
      </div>
    </article>
  );
}

export default CartItem;
