import { useState } from "react";
import { formatPrice } from "../../utils";

function FormRange({ label, name, size }) {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>

      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range range-primary ${size}`}
      />
    </div>
  );
}
export default FormRange;
