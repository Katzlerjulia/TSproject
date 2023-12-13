import { roundPrice } from "./roundPrice";

describe("round price test", () => {
  it("should round up the price to 2 decimals and add SEK", () => {
    const actualResult = roundPrice(232.10542);
    const expectedResult = "232.11 SEK";
    expect(actualResult).toBe(expectedResult);
  }),
    it("should add 2 decimals and add SEK", () => {
      const actualResult = roundPrice(14);
      const expectedResult = "14.00 SEK";
      expect(actualResult).toBe(expectedResult);
    }),
    it("should round up 2 decimals and add SEK", () => {
      const actualResult = roundPrice(1024.2048);
      const expectedResult = "1024.21 SEK";
      expect(actualResult).toBe(expectedResult);
    });
  it("should round up 2 decimals and add any curency you want", () => {
    const actualResult = roundPrice(1024.2048, "NOK");
    const expectedResult = "1024.21 NOK";
    expect(actualResult).toBe(expectedResult);
  });
  it("should round up 2 decimals and add curency on the right side", () => {
    const actualResult = roundPrice(104.2048, "USD");
    const expectedResult = "USD 104.21";
    expect(actualResult).toBe(expectedResult);
  });
});
