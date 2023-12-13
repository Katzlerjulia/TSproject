export const isPrimtal = (numberInput: number): boolean => {
  if (numberInput <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numberInput); i++) {
    if (numberInput % i === 0) {
      return false;
    }
  }
  return true;
};
