import { isPrimtal } from "./isPrimtal";

describe("testar ifall det är primtal", () => {
  it("should return true if it is a primtal", () => {
    const actutalResult = isPrimtal(2);
    const expectedResult = true;
    expect(actutalResult).toBe(expectedResult);
  });
  it("should return false if it is not a primtal", () => {
    const actutalResult = isPrimtal(22);
    const expectedResult = false;
    expect(actutalResult).toBe(expectedResult);
  });
});
