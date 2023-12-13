import { validateEmail } from "./validateEmail";

describe("Validate email test", () => {
  it("should return true if email includes @ and .", () => {
    const actualResult = validateEmail("julia@gmail.com");
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });
  it("should return false if email is missing @", () => {
    const actualResult = validateEmail("julia.gmail.com");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  it("should return false if email is missing .", () => {
    const actualResult = validateEmail("julia@gmail");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});
