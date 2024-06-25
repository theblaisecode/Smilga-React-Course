
export const calcTotals = (cartItem) => {
  let numOfItem = 0;
  let allCost = 0;

  for (let { amount, price } of cartItem.values()) {
    numOfItem += amount;
    allCost += amount * price;
  }
  return { numOfItem, allCost };
};
