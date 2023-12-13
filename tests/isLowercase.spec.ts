import { isLowercase } from "./isLowercase";

describe("check if lowercase test", () => {
  it("should return true if input is all lowercase", () => {
    const actualResult = isLowercase("hej jag heter julia");
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });
  it("should return false if input is  not all lowercase", () => {
    const actualResult = isLowercase("hej jag heter Julia");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});
