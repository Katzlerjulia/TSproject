export const roundPrice = (price: number, currency: string = "SEK"): string => {
  const roundedPrice = Math.ceil(price * 100) / 100;
  if (currency === "USD") {
    return `${currency} ${roundedPrice.toFixed(2)}`;
  } else {
    return `${roundedPrice.toFixed(2)} ${currency}`;
  }
};
